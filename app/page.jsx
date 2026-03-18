"use client"
import Formulario from "@/components/Formulario";
import Tarea from "@/components/Tarea";
import listaTareas from "@/data/tareas";
import { useState } from "react";

export default function Home() {
  const [formulario, setFormulario] = useState({
    titulo: "",
    texto: ""
  })

  return (
    <main className="min-h-screen bg-emerald-800">
      <h1 className="text-center text-2xl text-bold uppercase py-4">Lista de tareas</h1>
      <div className="grid grid-cols-2">
        <Formulario setFormulario={setFormulario} />
        <section>
          {/* {
            listaTareas.map(tareaContenido => <Tarea key={tareaContenido.id} tarea={tareaContenido} />)
          } */}
          <Tarea tarea={formulario} />
        </section>
      </div>
    </main>
  );
}
