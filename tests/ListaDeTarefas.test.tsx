import { render, screen, fireEvent, act } from '@testing-library/react';
import ListaDeTarefas from '@/components/ListaDeTarefas';
import type { Tarefa } from '@/lib/tarefas';

const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: 'Primeira tarefa' },
  { id: 2, titulo: 'Segunda tarefa' },
];

describe('ListaDeTarefas', () => {
  it('renderiza as tarefas iniciais e o contador', () => {
    render(<ListaDeTarefas tarefasIniciais={tarefasIniciais} />);

    expect(screen.getByText('Primeira tarefa')).toBeInTheDocument();
    expect(screen.getByText('Segunda tarefa')).toBeInTheDocument();
    expect(screen.getByText('Total de tarefas: 2')).toBeInTheDocument();
  });

  it('adiciona uma nova tarefa à lista e atualiza o contador', () => {
    render(<ListaDeTarefas tarefasIniciais={tarefasIniciais} />);

    act(() => {
      fireEvent.change(screen.getByLabelText('Nova tarefa'), {
        target: { value: 'Terceira tarefa' },
      });
    });
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));
    });

    expect(screen.getByText('Terceira tarefa')).toBeInTheDocument();
    expect(screen.getByText('Total de tarefas: 3')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
