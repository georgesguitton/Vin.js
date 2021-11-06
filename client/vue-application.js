const Home = window.httpVueLoader('./components/Home.vue')
const Panier = window.httpVueLoader('./components/Panier.vue')
const HistoireVins = window.httpVueLoader('./components/HistoireVins.vue')
const ListeVins = window.httpVueLoader('./components/ListeVins.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')

const routes = [
  	{ path: '/', component: Home },
  	{ path: '/panier', component: Panier },
	{ path: '/histoireVins', component: HistoireVins },
	{ path: '/listeVins', component: ListeVins },
	{ path: '/contact', component: Contact }
]

const router = new VueRouter({
  	routes
})

var app = new Vue({
  	router,
  	el: '#app',
  	data: {
    	vins: [],
    	panier: {
      		vins: []
    	}
  	},
  	async mounted () {
    	const res = await axios.get('/api/vins')
    	this.vins = res.data
    	const res2 = await axios.get('/api/panier')
    	this.panier = res2.data
  	},
  	methods: {
    	async addToPanier(vinId) {
    		if (this.panier.vins.find(a => a.id === vinId) === undefined) {
        		const res = await axios.post('/api/panier', 'id=' + vinId + '&quantity=1')
        		this.panier.vins.push(res.data)
      		}
    	},
    	async updatePanier(newVin) {
      		await axios.put('/api/panier/' + newVin.id, newVin)
      		const vin = this.panier.vins.find(a => a.id === newVin.id)
      		vin.quantity = newVin.quantity
    	},   
    	async removeFromPanier(vinId) {
        	await axios.delete('/api/panier/' + vinId)
        	const index = this.panier.vins.findIndex(a => a.id === vinId)
        	this.panier.vins.splice(index, 1)
    	}
  	}
})
