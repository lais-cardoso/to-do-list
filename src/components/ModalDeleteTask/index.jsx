"use client"

import "@/styles/modal-delete-task.css"
import "@/styles/modal.css"
import { useParams, useRouter } from 'next/navigation'

export default function ModalDeleteTask(){
    const router = useRouter()
    const params = useParams()
    const deleteTask = () =>{
        const i = params.pos
        const storage = localStorage.getItem("to-do-list")?.split(",")
        const newStorage = storage.splice(i,1)
        localStorage.setItem("to-do-list", newStorage)
        router.push("/")
    }


    return(
        <div className="modal">
            <main className="content-delete-task">
                    <h1 className="title-delete-task">Deletar tarefa</h1>
                    <p className="paragraph-delete-task">Tem certeza que você deseja deletar essa tarefa?</p>
                    <section className="buttons-section">
                        <button className="cancel-button" onClick={() => {router.back()}}>Cancelar</button>
                        <button className="delete-button" onClick={deleteTask}>Deletar</button>
                    </section>
            </main>
        </div>
    )
}