new Vue({
  el: '#desafio',
  data: {
    nome: 'Allan Gadelha',
    idade: 39,
    linkImagem: 'https://images-americanas.b2w.io/produtos/01/00/oferta/46390/6/46390613_1SZ.jpg'
  },
  methods: {
    idadeVezesTres() {
      return this.idade * 3
    },
    numeroQualquer: Math.random,
    nomeInput(event) {
      this.nome = event.target.value
    }
  },
})