new Vue({
  el: '#app',
  data: {
    monsterLife: 100,
    running: false,
    playerLife: 100,

  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0
    }
  },
  methods: {
    startGame() {
      this.running = true
      this.monsterLife = 100
      this.playerLife = 100
    }
  },
  watch: {

  },
})