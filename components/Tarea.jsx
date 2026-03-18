// "use client"
// import { useState } from "react"

export default function Tarea({ tarea, eliminarTarea }) {
    // const [existe, setExiste] = useState(true)

    // if (!existe) return null

    return (
        <article className="w-full max-w-md mx-auto my-6 p-6 rounded-2xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition duration-300">

            {/* Título */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {tarea.titulo}
            </h2>

            {/* Contenido */}
            <p className="text-gray-600 text-center mb-6">
                {tarea.texto}
            </p>

            {/* Botón */}
            <div className="flex justify-center">
                <button
                onClick={() => eliminarTarea(tarea.id)}
                    // onClick={() => setExiste(false)}
                    className="bg-red-500 hover:bg-red-600 active:scale-95 transition transform text-white font-semibold px-5 py-2 rounded-lg shadow-md"
                >
                    Eliminar
                </button>
            </div>
        </article>
    )
}