import { useMemo } from 'react';
import type { Tarefa } from '@/lib/tarefas';

export function useContadorDeTarefas(tarefas: Tarefa[]): number {
  return useMemo(() => tarefas.length, [tarefas]);
}
