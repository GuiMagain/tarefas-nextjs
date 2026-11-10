# Tarefas — Next.js 15 (App Router) com testes unitários

Aplicação simples de listagem e adição de tarefas, feita com Next.js 15, App Router e TypeScript, com testes unitários usando Jest e Testing Library.

## Funcionalidades

- Listagem de tarefas carregadas por um Server Component (`app/page.tsx`), a partir de dados simulados (`lib/tarefas.ts`, com `Promise.resolve()`).
- Adição de novas tarefas por meio do Client Component `<NovaTarefa />`, com formulário controlado e validação.
- Contador de tarefas por meio do hook personalizado `useContadorDeTarefas`.

## Estrutura

```
app/          páginas e layout (App Router)
components/   componentes reutilizáveis (NovaTarefa, ListaDeTarefas)
hooks/        hooks personalizados (useContadorDeTarefas)
lib/          dados simulados e função de busca
tests/        testes unitários (Jest + Testing Library)
```

## Como instalar

Requisitos: Node.js 18.18 ou superior.

```bash
npm install
```

## Como executar

```bash
npm run dev
```

Acesse http://localhost:3000.

## Como rodar os testes

```bash
npm test                # executa todos os testes
npm run test:coverage   # executa com relatório de cobertura
```

## Build de produção

```bash
npm run build
npm start
```
