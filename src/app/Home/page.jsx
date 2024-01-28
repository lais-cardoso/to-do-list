'use client'

import "../../styles/home.css"
import Image from 'next/image'
import LogoMark from '../../assets/logo-mark.svg'
import LogoType from '../../assets/logo-type.svg'
import TrashLogo from '../../assets/trash.svg'


export default function Home() {
    return (
        <>
            <header>
                <figure className="images">
                    <Image src={LogoMark} alt="logo-mark" width={33} height={33} />
                    <Image className="logo-type" src={LogoType} alt="logo-type" width={106} height={15} />
                </figure>
                <h1 className="title">Bem-vindo de volta, Marcus</h1>
                <h3 className="date">Segunda, 22 de dezembro de 2024</h3>
            </header>

            <main className="main">
                <article className="task">
                    <section className="content">
                        <h3 className="date">Suas tarefas de hoje</h3>

                        <section className="div-task">
                            <input type="checkbox" className="input-task"/>
                            <p className="task-name">Lavar as mãos</p>
                            <Image src={TrashLogo} alt="trash-logo" width={24} height={24}/>
                        </section>
                    
                    
                        <h3 className="date">Tarefas finalizadas</h3>

                        <section className="div-task">
                            <input type="checkbox" className="input-task"/>
                            <p className="task-name">Levar o lixo para fora</p>
                            <Image src={TrashLogo} alt="trash-logo" width={24} height={24}/>
                        </section>

                    </section>
                </article>
                <button className="add-new-task">Adicionar nova tarefa</button>
            </main>
        </>
    )
}