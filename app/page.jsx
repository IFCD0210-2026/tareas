"use client"
import InputTareas from "@/components/InputTareas";
import Tarea from "@/components/Tarea";
import listaTareas from "@/data/tareas"; // no lo estamos utilizando
import { useState } from "react";

export default function Home() {
  // Definir el estado de tareas
  const [tareas, setTareas] = useState([]); // Tareas ahora están vacías

  // Añadir tarea
  const añadirTareas = (tituloInput, textoInput) => {
    // Crear la nueva tarea
    const nuevaTarea = {
      id: Date.now(),
      titulo: tituloInput,
      texto: textoInput
    }
    // Esto es el equivalente a tareas.push(nuevaTarea)
    setTareas([...tareas, nuevaTarea]);
  };

  // Eliminar tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  return (
    <main className="min-h-screen bg-emerald-800">
      <h1 className="text-center text-2xl text-bold uppercase py-4">Lista de tareas</h1>
      <div className="grid grid-cols-2">
        <InputTareas añadirTareas={añadirTareas} />
        <section >
          {
            tareas.map(t => <Tarea key={t.id} tarea={t} eliminarTarea={eliminarTarea} />)
          }
          {/* {
            tareas.length ?
              (
                tareas.map(t => <Tarea key={t.id} tarea={t} eliminarTarea={eliminarTarea} />)
              )
              :
              (
                <h2 className="text-center">No hay tareas</h2>
              )
          } */}
        </section>
      </div>
    </main>
  );
}
