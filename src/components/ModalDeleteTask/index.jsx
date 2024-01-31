"use client"
import "../../styles/modal-delete-task.css"

export default function DeleteTask(){
    return(
        <>
        <main className="content-delete-task">
                <h1 className="title-delete-task">Deletar tarefa</h1>
                <p className="paragraph-delete-task">Tem certeza que você deseja deletar essa tarefa?</p>
                <section className="buttons-section">
                    <button className="cancel-button">Cancelar</button>
                    <button className="delete-button">Deletar</button>
                </section>
        </main>
        </>
    )
}