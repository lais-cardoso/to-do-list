"use client"

import Home from "@/components/Home"
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500']
})


export default function HomePage() {
    return (
        <>
        <div className={inter.className}>
            <Home/>
        </div>
        </>
    )
}