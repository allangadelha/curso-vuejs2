<template>
	<div id="frutas">
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
export default {
	data() {
		return {
			frutas: ['banana', 'maçã', 'laranja']
		}
    },
    
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}
</script>

<style>

</style>
