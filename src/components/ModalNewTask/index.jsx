"use client"

import "@/styles/modal-create-new-task.css"
import "@/styles/modal.css"
import { useRouter } from 'next/navigation'
import { useState } from "react"


export default function ModalNewTask(){

    const router = useRouter()

   const [titleTask, setTilteTask] = useState("")

    function onSubmit(){
        let listData = localStorage.getItem("to-do-list")?.split(",")
        if(!listData || (listData.length == 1 && listData[0].split("@")[1] == "") ){
            listData = []
        }
        listData.push(`${titleTask}@false`)
        localStorage.setItem("to-do-list", listData)
    }


    return(
        <div className="modal">
            <form method="POST" action="/" onSubmit={onSubmit}>
            <main className="content-new-task">
                
                    <h1 className="title">Nova tarefa</h1>
                    <section className="section-title-input">
                        <h3 className="subtitle">Título</h3>
                        <input className="input-title-task" type="text" placeholder="Digite" onChange={(e) => setTilteTask(e.target.value)}/>
                    </section>
                    <section className="section-buttons">
                        <button className="cancel-button" onClick={() => {router.back()}}>Cancelar</button>
                        <button className="add-button" type="submit">Adicionar</button>
                    </section>
                
            </main> 
            </form>
        </div>
    )
}