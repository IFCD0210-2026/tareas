import Tarea from "@/components/Tarea";
import listaTareas from "@/data/tareas";

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-800">
      <h1>Lista de tareas</h1>
      {
        listaTareas.map(tareaContenido => <Tarea key={tareaContenido.id} tarea={tareaContenido}/>)
      }
    </main>
  );
}
