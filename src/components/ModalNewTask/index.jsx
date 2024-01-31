"use client"
import "../../styles/modal-create-new-task.css"


export default function CreateNewTask(){
    return(
        <>
        <main class="content-new-task">
                <h1 className="title">Nova tarefa</h1>
                <section className="section-title-input">
                    <h3 className="subtitle">Título</h3>
                    <input className="input-title-task" type="text" placeholder="Digite"/>
                </section>
                <section className="section-buttons">
                    <button className="cancel-button">Cancelar</button>
                    <button className="add-button">Adicionar</button>
                </section>
        </main>
        </>
    )
}