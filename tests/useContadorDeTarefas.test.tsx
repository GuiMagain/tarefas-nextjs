import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import type { Tarefa } from '@/lib/tarefas';

const tarefasBase: Tarefa[] = [
  { id: 1, titulo: 'Tarefa A' },
  { id: 2, titulo: 'Tarefa B' },
];

describe('useContadorDeTarefas', () => {
  it('retorna a quantidade inicial de tarefas', () => {
    const { result } = renderHook(() => useContadorDeTarefas(tarefasBase));

    expect(result.current).toBe(2);
  });

  it('retorna zero para uma lista vazia', () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));

    expect(result.current).toBe(0);
  });

  it('atualiza o valor quando a lista muda', () => {
    const { result, rerender } = renderHook(
      ({ lista }: { lista: Tarefa[] }) => useContadorDeTarefas(lista),
      { initialProps: { lista: tarefasBase } }
    );

    rerender({ lista: [...tarefasBase, { id: 3, titulo: 'Tarefa C' }] });
    expect(result.current).toBe(3);

    rerender({ lista: [] });
    expect(result.current).toBe(0);
  });
});
