new Vue({
	el: '#desafio',
	data: {
		alternar: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		familia: [
			{ nome: 'Allan', idade: 39, peso: '85' },
			{ nome: 'Lucca', idade: 10, peso: '45' },
			{ nome: 'Hero', idade: 69, peso: '48' },
			{ nome: 'Gera', idade: 45, peso: '82' }
		],
		frutas: ['Mamão', 'Abacate', 'Laranja', 'Uva', 'Pera', 'Abacaxi']
	}
});
