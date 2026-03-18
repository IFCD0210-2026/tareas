import Formulario from "@/components/Formulario";
import Tarea from "@/components/Tarea";
import listaTareas from "@/data/tareas";

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-800">
      <h1 className="text-center text-2xl text-bold uppercase py-4">Lista de tareas</h1>
      <div className="grid grid-cols-2">
        <Formulario />
        <section>
          {
            listaTareas.map(tareaContenido => <Tarea key={tareaContenido.id} tarea={tareaContenido} />)
          }
        </section>
      </div>
    </main>
  );
}
