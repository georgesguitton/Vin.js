<template>
	<div>
		<div class="vin" v-for="vin in vins" :key="vin.id">
		<div class="vin-img">
			<div :style="{ backgroundImage: 'url(' + vin.image + ')' }"></div>
		</div>
		<div class="vin-content" v-if="editingVin.id !== vin.id">
		<div class="vin-title">
			<h2>{{ vin.name }} - {{ vin.prix }}€</h2>
			<div>
				<button v-if="panier.vins.find(a => a.id === vin.id) === undefined" @click="addToPanier(vin.id)">Ajouter au panier</button>
				<button v-else @click="removeFromPanier(vin.id)">Retirer du panier</button>
			</div>
		</div>
		<p>{{ vin.description }}</p>
	</div>
</template>

<script>
module.exports = {
  	props: {
    	vins: { type: Array, default: [] },
    	panier: { type: Object }
  	},
  	data () {
    	return {
			editingVin: {
				id: -1,
				name: '',
				description: '',
				image: '',
				prix: 0
			},
      	showForm: false
    	}
  	},
  	methods: {
    	addToPanier (vinId) {
      		this.$emit('add-to-panier', vinId)
    	},
    	removeFromPanier (vinId) {
      		this.$emit('remove-from-panier', vinId)
      		this.changerShow(vinId);
    	}
  	}
}
</script>

<style scoped>
.vin {
  	display: flex;
}
.vin-img {
  	flex: 1;
}
.vin-img div {
  	width: 100px;
  	height: 100px;
  	background-size: cover;
}
.vin-content {
  	flex: 3;
}
.vin-title {
  	display: flex;
  	justify-content: space-between;
}
textarea {
  	width: 100%;
}
</style>