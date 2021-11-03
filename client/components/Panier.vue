<template>
	<div>
		<h2>Mon Panier :</h2>
		<div class="vin" v-for="vin in panier.vins" :key="vin.id">
			<div class="vin-img">
				<div :style="{ backgroundImage: 'url(' + vins.find(a => a.id === vin.id).image + ')' }">
        		</div>
			</div>
			<div class="vin-content" v-if="editingVin.id !== vin.id">
				<p>{{ vin.quantity }}</p>
				<button @click="editVin(vin)">Modifier</button>
				<div class="vin-title">
					<h2>total {{ vins.find(a => a.id === vin.id).name }} : {{ vins.find(a => a.id === vin.id).prix*vin.quantity }}€</h2>
				</div>
				<p>{{ vins.find(a => a.id === vin.id).description }}</p>
			</div>
			<div class="vin-content" v-else>
				<div class="vin-title">
					<h2><input type="number" min="1" v-model="editingVin.quantity"></h2>
					<div>
						<button @click="sendEditVin()">Valider</button>
						<button @click="abortEditVin()">Annuler</button>
					</div>
				</div>
			</div>
		</div>
		<button @click="updatePrix()">calculer le total</button>
		<p>Le total est : {{ total }}<p>
	</div>
</template>

<script>
module.exports = {
	props: {
		vins: { type: Array, default: [] },
		panier: { type: Object }
	},
	data() {
		return {
			editingVin: {
				id: -1,
				quantity: 0,
				name: '',
				description: '',
				image: '',
				prix: 0
			},
			total: 0
		};
	},
	methods: {
		editVin (vin) {
			this.editingVin.id = vin.id
			this.editingVin.quantity = vin.quantity
			//this.editingVin.prix = vin.prix
    	},
		sendEditVin () {
			this.$emit('update-panier', this.editingVin)
			this.abortEditVin()
		},
		abortEditVin () {
			this.editingVin = {
				id: -1,
				quantity: 0,
				name: '',
				description: '',
				image: '',
				prix: 0
			}
		},
		updatePrix(){
			console.log("test")
			total = 0
			this.panier.vins.forEach(vin => {
				console.log(vin.id)
				console.log(vin.quantity)
				console.log(vin.name)
				console.log(vin.description)
				console.log(vin.image)
				console.log(vin.prix)
				for(i=0;i<vin.quantity;i++){
					total += vin.prix
				}
			})
		}
	}
};
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
