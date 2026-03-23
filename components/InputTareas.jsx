"use client"
import { useState } from "react"

export default function InputTareas({ tareas, setTareas }) {

    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")

    // Añadir tareas
    const añadirTareas = (tituloInput, textoInput) => {
        // Crear la nueva tarea
        const nuevaTarea = {
            id: Date.now(), // DNI
            titulo: tituloInput,
            texto: textoInput
        }
        // Esto es el equivalente a tareas.push(nuevaTarea)
        setTareas([...tareas, nuevaTarea]);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        // if (!titulo.trim() || !texto.trim()) return

        // onAgregar({ titulo, texto })
        añadirTareas(titulo, texto)
        setTitulo("")
        setTexto("")
    }

    return (
        <form
            className="w-full max-w-md mx-auto my-6 p-6 rounded-2xl shadow-lg bg-white border border-gray-200"
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Nueva tarea
            </h2>

            {/* Input título */}
            <div className="mb-4">
                <input
                    value={titulo}
                    type="text"
                    placeholder="Título"
                    onChange={(event) => setTitulo(event.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                />
            </div>

            {/* Textarea */}
            <div className="mb-6">
                <textarea
                    placeholder="Descripción"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
                />
            </div>

            {/* Botón */}
            <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition transform text-white font-semibold py-3 rounded-lg shadow-md"
                onClick={handleSubmit}
            >
                Añadir tarea
            </button>
        </form>
    )
}