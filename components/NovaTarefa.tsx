'use client';

import { useState, type FormEvent } from 'react';

type NovaTarefaProps = {
  onAdicionar: (titulo: string) => void;
};

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
      setErro('Digite um título para a tarefa.');
      return;
    }

    onAdicionar(tituloLimpo);
    setTitulo('');
    setErro('');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitulo(event.target.value);
    if (erro) setErro('');
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="nova-tarefa">Nova tarefa</label>
      <input
        id="nova-tarefa"
        type="text"
        value={titulo}
        onChange={handleChange}
      />
      <button type="submit">Adicionar</button>
      {erro && <p role="alert">{erro}</p>}
    </form>
  );
}
