export type Tarefa = {
  id: number;
  titulo: string;
};

// Dados simulados, no lugar de uma API real.
export const tarefasMock: Tarefa[] = [
  { id: 1, titulo: 'Estudar testes unitários com Jest' },
  { id: 2, titulo: 'Revisar hooks do React' },
  { id: 3, titulo: 'Escrever o README do projeto' },
];

// Simula um fetch usando Promise.resolve().
export function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefasMock.map((tarefa) => ({ ...tarefa })));
}
