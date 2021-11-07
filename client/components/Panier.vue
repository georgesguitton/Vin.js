<template>
	<div>
		<h2>Votre Panier :</h2>
		<div class="vin" v-for="vin in panier.vins" :key="vin.id">
			<div class="vin-img">
				<img v-bind:src="vins.find(a => a.id === vin.id).image" style="height:15em;width:auto;">
			</div>
			<div class="vin-content" v-if="editingVin.id !== vin.id">
				<h3>{{ vins.find(a => a.id === vin.id).nom }}</h3>
				<h4>Quantité : {{ vin.quantity }}</h4>
				<button class="btn" @click="editVin(vin)">Modifier</button>
				<div class="vin-title">
					<h3>Total : {{ vins.find(a => a.id === vin.id).prix*vin.quantity }}€</h3>
				</div>
				<p>{{ vins.find(a => a.id === vin.id).description }}</p>
				<p>Type : {{ vins.find(a => a.id === vin.id).type }}</p>
				<p>Année : {{ vins.find(a => a.id === vin.id).annee }}</p>
			</div>
			<div class="vin-content" v-else>
				<div class="vin-title">
					<h2><input type="number" min="1" v-model="editingVin.quantity"></h2>
					<div>
						<button class="btn" @click="sendEditVin()">Valider</button>
						<button class="btn" @click="abortEditVin()">Annuler</button>
					</div>
				</div>
			</div>
		</div>
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
			}
		};
	},
	methods: {
		editVin (vin) {
			this.editingVin.id = vin.id
			this.editingVin.quantity = vin.quantity
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
		}
	}
};
</script>

<style scoped>
.vin {
  	display: flex;
	margin-bottom: 20px;
	border: solid #a0032a;
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
.btn {
	background-color: #a0032a;
	color:white;
}
</style>
