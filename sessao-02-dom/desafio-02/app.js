new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        clicarBla() {
            alert('Exibindo alert')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    },
})