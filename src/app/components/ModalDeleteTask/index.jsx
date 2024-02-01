"use client"

import "@/styles/modal-delete-task.css"
import "@/styles/modal.css"
import { useRouter } from 'next/navigation'

export default function ModalDeleteTask(){
    const router = useRouter()
    return(
        <div className="modal">
            <main className="content-delete-task">
                    <h1 className="title-delete-task">Deletar tarefa</h1>
                    <p className="paragraph-delete-task">Tem certeza que você deseja deletar essa tarefa?</p>
                    <section className="buttons-section">
                        <button className="cancel-button" onClick={() => {router.back()}}>Cancelar</button>
                        <button className="delete-button">Deletar</button>
                    </section>
            </main>
        </div>
    )
}