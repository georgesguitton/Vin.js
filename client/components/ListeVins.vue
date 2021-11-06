<template>
    <div>
        <div class="vin" v-for="vin in vins" :key="vin.id">
            <div class="card" style="width: 18rem;">
                 <img class="card-img-top" v-bind:src="vin.image">
                  <div class="card-body">
                <h5 class="card-title">{{ vin.nom }}</h5>
                <h6>{{ vin.prix }}€</h6>
                <div id="infos">
                    <button class="btn" v-if="panier.vins.find(a => a.id === vin.id) === undefined" @click="addToPanier(vin.id)">Ajouter au panier</button>
                    <button class="btn" v-else @click="removeFromPanier(vin.id)">Retirer du panier</button>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
module.exports = {
      props: {
        vins: { type: Array, default: [] },
        panier: { type: Object },
      },
      data () {
        return {
            editingVin: {
                id: -1,
                nom: '',
                description: '',
                image: '',
                prix: 0
            },
          showForm: false,
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
      display: inline-block;
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
.card-img-top{
    height: 10em;
    width:auto;
}
.card {
    margin: 8px;
    border-radius: 10%;
    padding:50px;
}
.btn {
    background-color: #a0032a;
    color:white;
    margin-bottom: 5px;
}
#infos {
    text-align: center;
	color: white;
	text-decoration: none;
}
</style>