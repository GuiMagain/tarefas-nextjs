// Server Component: carrega a lista de tarefas no servidor.
import ListaDeTarefas from '@/components/ListaDeTarefas';
import { buscarTarefas } from '@/lib/tarefas';

export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <main>
      <h1>Minhas tarefas</h1>
      <ListaDeTarefas tarefasIniciais={tarefas} />
    </main>
  );
}
