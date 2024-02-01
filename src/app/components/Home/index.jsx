"use client"

import React from "react";
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

                        <section className="div-task">
                            <input type="checkbox" className="input-task" />
                            <p className="task-name">Lavar as mãos</p>
                            <Link href="/DeleteTask">
                                <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                            </Link>
                        </section>
                        <section className="div-task">
                            <input type="checkbox" className="input-task" />
                            <p className="task-name">Fazer um bolo</p>
                            <Link href="/DeleteTask">
                                <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                            </Link>
                        </section>
                        <section className="div-task">
                            <input type="checkbox" className="input-task" />
                            <p className="task-name">Lavar a louça</p>
                            <Link href="/DeleteTask">
                                <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                            </Link>
                        </section>


                        <h3 className="date">Tarefas finalizadas</h3>

                        <section className="div-task">
                            <input type="checkbox" className="input-task" />
                            <p className="task-name">Levar o lixo para fora</p>
                            <Link href="/DeleteTask">
                                <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                            </Link>
                        </section>

                    </section>
                </article>
                <button className="add-new-task" onClick={() => router.push('/NewTask')}>Adicionar nova tarefa</button>
            </main>
        </>
    )
}