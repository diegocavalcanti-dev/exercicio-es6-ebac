const listDeNotasEAlunos = [
    { nota: 7, nome: 'Jefferson' },
    { nota: 5, nome: 'Edson' },
    { nota: 8, nome: 'Edna' },
    { nota: 4, nome: 'Bruna' },
    { nota: 6, nome: 'Diego' }
];

const estaAprovado = aluno => aluno.nota >= 6;

function filtrarAlunosAprovados(alunos) {
    const alunosAprovados = [];
    for (const aluno of alunos) {
        if (estaAprovado(aluno)) {
            alunosAprovados.push(aluno);
        }
    }
    return alunosAprovados;
}

const resultadoAprovados = filtrarAlunosAprovados(listDeNotasEAlunos);
console.log('Notas e Alunos aprovados:', resultadoAprovados);
