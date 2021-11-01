const Home = window.httpVueLoader('./components/Home.vue')
const Panier = window.httpVueLoader('./components/Panier.vue')
const DetailVins = window.httpVueLoader('./components/DetailVins.vue')
const HistoireVins = window.httpVueLoader('./components/HistoireVins.vue')
const ListeVins = window.httpVueLoader('./components/ListeVins.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')

const routes = [
  	{ path: '/', component: Home },
  	{ path: '/panier', component: Panier },
	{ path: '/detailVins', component: DetailVins },
	{ path: '/histoireVins', component: HistoireVins },
	{ path: '/listeVins', component: ListeVins },
	{ path: '/contact', component: Contact }
]

const router = new VueRouter({
  	routes
})

