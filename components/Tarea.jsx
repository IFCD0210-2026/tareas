"use client"
import { useState } from "react"

export default function Tarea({ tarea, setTareas, tareas, eliminarTarea }) {

    const [tareaCompletada, setTareaCompletada] = useState(false)
    const [editando, setEditando] = useState(false)
    const [tituloEditado, setTituloEditado] = useState("")
    const [textoEditado, setTextoEditado] = useState("")

    const guardarTarea = (id) => {
        if (tituloEditado && textoEditado) {
            const tareaEditada = {
                id: id,
                titulo: tituloEditado,
                texto: textoEditado
            }
            const tareasEditadas = tareas.map(tarea => tarea.id == id ? tareaEditada : tarea)
            setTareas(tareasEditadas)
        }else{
            alert("No has editado la tarea")
        }
        setEditando(!editando)
    }

    if (editando) {
        return (
            <article className="w-full max-w-md mx-auto my-6 p-6 rounded-2xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition duration-300">
                <h2 className="text-xl uppercase text-center py-2">Editar tarea</h2>
                {/* Título */}
                <input
                    placeholder={tarea.titulo}
                    type="text" className="rounded-md w-full p-2 my-2 border border-gray-400 text-xl"
                    onChange={(e) => setTituloEditado(e.target.value)}
                />


                {/* Contenido */}
                <input
                    placeholder={tarea.texto}
                    type="text"
                    className="rounded-md w-full p-2 my-2 border border-gray-400"
                    onChange={(e) => setTextoEditado(e.target.value)}
                />

                {/* Botón */}
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => setEditando(!editando)}
                        className="bg-gray-500 hover:bg-gray-600 active:scale-95 transition transform text-white font-semibold px-5 py-2 rounded-lg shadow-md"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => guardarTarea(tarea.id)}
                        className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition transform text-white font-semibold px-5 py-2 rounded-lg shadow-md"
                    >
                        Guardar
                    </button>
                </div>
            </article>
        )
    } else {
        return (
            <article className="w-full max-w-md mx-auto my-6 p-6 rounded-2xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition duration-300">

                <input type="checkbox" name="tareaCompletada" onChange={() => setTareaCompletada(!tareaCompletada)} />
                {/* Título */}
                <h2 className={("text-2xl font-bold text-gray-800 mb-2 text-center ") + (tareaCompletada && ("line-through"))}>
                    {tarea.titulo}
                </h2>

                {/* Contenido */}
                <p className={("text-gray-600 text-center mb-6 ") + (tareaCompletada && ("line-through"))}>
                    {tarea.texto}
                </p>

                {/* Botón */}
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => eliminarTarea(tarea.id)}
                        className="bg-red-500 hover:bg-red-600 active:scale-95 transition transform text-white font-semibold px-5 py-2 rounded-lg shadow-md"
                    >
                        Eliminar
                    </button>
                    <button
                        onClick={() => setEditando(!editando)}
                        className="bg-amber-500 hover:bg-amber-600 active:scale-95 transition transform text-white font-semibold px-5 py-2 rounded-lg shadow-md"
                    >
                        Editar
                    </button>
                </div>
            </article>
        )
    }


}