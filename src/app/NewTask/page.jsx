"use client"

import ModalNewTask from "@/components/ModalNewTask"
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500']
})


export default function NewTask() {
    return (
        <>
        <div className={inter.className}>
            <ModalNewTask/>
        </div>
        </>
    )
}