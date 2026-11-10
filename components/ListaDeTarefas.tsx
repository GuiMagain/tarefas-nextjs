'use client';

import { useState } from 'react';
import NovaTarefa from '@/components/NovaTarefa';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import type { Tarefa } from '@/lib/tarefas';

type ListaDeTarefasProps = {
  tarefasIniciais: Tarefa[];
};

export default function ListaDeTarefas({ tarefasIniciais }: ListaDeTarefasProps) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const total = useContadorDeTarefas(tarefas);

  function adicionarTarefa(titulo: string) {
    setTarefas((atuais) => {
      const proximoId = Math.max(0, ...atuais.map((t) => t.id)) + 1;
      return [...atuais, { id: proximoId, titulo }];
    });
  }

  return (
    <section>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <p>Total de tarefas: {total}</p>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
