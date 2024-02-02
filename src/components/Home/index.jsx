"use client"

import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

//local
import "@/styles/home.css"
import LogoMark from '@/assets/logo-mark.svg'
import LogoType from '@/assets/logo-type.svg'
import TrashLogo from '@/assets/trash.svg'


export default function Home() {
    const router = useRouter()

    const [listData, setListData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const storage = localStorage.getItem("to-do-list")?.split(",")
        if(storage){
            setListData(storage)

        }
        setLoading(true)
    }, [])

    useEffect(() => {
        if(loading){
            localStorage.setItem("to-do-list", listData)

        }
        
    },[listData])

    return (
        <>
            <header>
                <figure className="images box">
                    <Image src={LogoMark} alt="logo-mark" width={33} height={33} />
                    <Image className="logo-type" src={LogoType} alt="logo-type" width={106} height={15} />
                </figure>
                <h1 className="title box">Bem-vindo de volta, Marcus</h1>
                <h3 className="date box">Segunda, 22 de dezembro de 2024</h3>
            </header>

            <main className="main">
                <article className="task">
                    <section className="content">
                        <h3 className="date">Suas tarefas de hoje</h3>
                        {listData.map((element, i) =>{
                            const val = element.split("@")
                            return (
                                <>
                                {val[1]=="false" && (
                                    
                                    <section className="div-task">
                                        <input value={val[1]} id={element} type="checkbox" className="input-task" 
                                        
                                        onChange={(e) => {
                                            val[1] = document.getElementById(element).checked? "true" : "false"
                                            console.log(val[1])
                                            const aux = listData
                                            aux[i] = val.toString().replace(",", "@")
                                            console.log(aux[i])
                                            setListData(aux)

                                        }}/>
                                        <p className="task-name">{val[0]}</p>
                                        <Link href={`/DeleteTask?pos=${i}`}>
                                            <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                                        </Link>
                                    </section>
                                )}
                                </>
                            )
                        })}
                        


                        <h3 className="date">Tarefas finalizadas</h3>

                        {listData.map((element,i) =>{
                             const val = element.split("@")
                            return (
                                <>
                                {val[1]=="true" && (
                                    
                                    <section className="div-task">
                                        <input value={val[1]} id={element} type="checkbox" className="input-task" 
                                        
                                        onChange={(e) => {
                                            val[1] = document.getElementById(element).checked? "true" : "false"
                                            
                                            const aux = listData
                                            aux[i] = val.toString().replace(",", "@")
                                            
                                            setListData(aux)

                                        }}/>
                                        <p className="task-name">{val[0]}</p>
                                        <Link href={`/DeleteTask?pos=${i}`}>
                                            <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                                        </Link>
                                    </section>
                                )}
                                </>
                            )
                        })}

                    </section>
                </article>
                <button className="add-new-task" onClick={() => router.push('/NewTask')}>Adicionar nova tarefa</button>
            </main>
        </>
    )
}