"use client"

import ModalDeleteTask from "@/components/ModalDeleteTask"
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500']
})


export default function DeleteTask() {
    return (
        <>
        <div className={inter.className}>
            <ModalDeleteTask/>
        </div>
        </>
    )
}