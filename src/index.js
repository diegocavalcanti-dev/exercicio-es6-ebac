const listaDeNotasEAlunos = [
    { nota: 7, nome: 'Jefferson' },
    { nota: 5, nome: 'Edson' },
    { nota: 8, nome: 'Edna' },
    { nota: 4, nome: 'Bruna' },
    { nota: 6, nome: 'Diego' }
    { nota: 8, nome: 'Davi' }
];

const filtrarAlunosAprovados = alunos => alunos.filter(aluno => aluno.nota >= 6);

const resultadoAprovados = filtrarAlunosAprovados(listaDeNotasEAlunos);
console.log('Notas e Alunos aprovados:', resultadoAprovados);
