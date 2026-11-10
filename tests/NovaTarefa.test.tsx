import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '@/components/NovaTarefa';

describe('NovaTarefa', () => {
  it('renderiza o input e o botão', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(screen.getByLabelText('Nova tarefa')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument();
  });

  it('mostra erro e não chama onAdicionar quando o campo está vazio', () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(screen.getByRole('alert')).toHaveTextContent('Digite um título para a tarefa.');
    expect(onAdicionar).not.toHaveBeenCalled();
  });

  it('não aceita título composto apenas por espaços', () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.change(screen.getByLabelText('Nova tarefa'), { target: { value: '   ' } });
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(onAdicionar).not.toHaveBeenCalled();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('chama onAdicionar com o título sem espaços extras e limpa o campo', () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);
    const input = screen.getByLabelText('Nova tarefa') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '  Comprar café  ' } });
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(onAdicionar).toHaveBeenCalledWith('Comprar café');
    expect(onAdicionar).toHaveBeenCalledTimes(1);
    expect(input.value).toBe('');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('remove a mensagem de erro ao digitar', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));
    expect(screen.getByRole('alert')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Nova tarefa'), { target: { value: 'a' } });
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
