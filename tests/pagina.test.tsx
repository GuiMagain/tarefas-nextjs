import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { tarefasMock } from '@/lib/tarefas';

describe('Página inicial', () => {
  it('renderiza o título e todas as tarefas carregadas', async () => {
    render(await Home());

    expect(screen.getByRole('heading', { name: 'Minhas tarefas' })).toBeInTheDocument();

    tarefasMock.forEach((tarefa) => {
      expect(screen.getByText(tarefa.titulo)).toBeInTheDocument();
    });

    expect(
      screen.getByText(`Total de tarefas: ${tarefasMock.length}`)
    ).toBeInTheDocument();
  });
});
