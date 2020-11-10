<template>
	<div id="app">
		<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg">
		<h1>Teste API Pokemon</h1>
		<div class="conteudo">
			<div class="painel">
				<div class="cabecalho">Dados POkemon</div>
				<Abc nome="">
					<Abc v-for="(item,i) in info" :key="i">
						<p>Abilidade: {{ item.name }}</p>
					</Abc>
				</Abc>
			</div>			
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Abc from './components/Abc.vue'
import axios from 'axios'

export default {
	name: 'app',
	components: { Rotulo, Abc },
	methods: {
		
	},
	data() {
		return {
			info: null
		}
	},
	mounted () {
		axios
		.get('https://pokeapi.co/api/v2/ability/')
		.then(response => (this.info = response.data.results))
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
