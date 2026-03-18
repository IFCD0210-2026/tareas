"use client"
import { useState } from "react"

export default function Tarea({ tarea }) {
    const [existe, setExiste] = useState(true)
    if (existe) {
        return (
            <article className="flex flex-col justify-around border rounded w-xl m-6 p-6 items-center bg-emerald-400">
                <h2>{tarea.titulo}</h2>
                <p>{tarea.texto}</p>
                <button onClick={() => setExiste(false)} className="bg-red-800 hover:bg-red-600 text-white p-4 rounded">Eliminar</button>
            </article>
        )
    } else {
        return ""
    }
}