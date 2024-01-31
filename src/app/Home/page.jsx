'use client'

import "../../styles/home.css"
import Image from 'next/image'
import LogoMark from '../../assets/logo-mark.svg'
import LogoType from '../../assets/logo-type.svg'
import TrashLogo from '../../assets/trash.svg'
import ModalNewTask from "@/components/ModalNewTask";
import ModalDeleteTask from "@/components/ModalDeleteTask";


export default function Home() {
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
                            <a href="#delete-modal">
                                <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                            </a>
                        </section>
                        <section className="div-task">
                            <input type="checkbox" className="input-task" />
                            <p className="task-name">Fazer um bolo</p>
                            <a href="#delete-modal">
                                <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                            </a>
                        </section>
                        <section className="div-task">
                            <input type="checkbox" className="input-task" />
                            <p className="task-name">Lavar a louça</p>
                            <a href="#delete-modal">
                                <Image src={TrashLogo} alt="trash-logo" width={24} height={24} />
                            </a>
                        </section>


                        <h3 className="date">Tarefas finalizadas</h3>

                        <section className="div-task">
                            <input type="checkbox" className="input-task" />
                            <p className="task-name">Levar o lixo para fora</p>
                            <a href="#delete-modal">
                                <Image src={TrashLogo} alt="trash-logo" width={24} height={24} /></a>
                        </section>

                    </section>
                </article>
            </main>
                <a href="#create-modal">
                    <button className="add-new-task" >Adicionar nova tarefa</button>
                </a>

                <div id="create-modal" className="modal">
                    <ModalNewTask />
                </div>
                <div id="delete-modal" className="modal">
                    <ModalDeleteTask />
                </div>
        </>
    )
}