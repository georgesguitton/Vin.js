const express = require('express')
const router = express.Router()
const vins = require('../data/vins.js')

class Panier {
  	constructor () {
    	this.vins = []
  	}
}

// Si l'utilisateur n'est pas reconnu, on lui attribue un nouveau panier.
router.use((req, res, next) => {
  	if (typeof req.session.panier === 'undefined') {req.session.panier = new Panier()}
  	next()
})

//Cette route envoie l'intégralité des vins du site
router.get('/vins', (req, res) => {
  	res.json(vins)
})

//Cette route ajoute un vin au panier.
router.post('/panier', (req, res) => {
  	const vinId = parseInt(req.body.id)
  	const quantity = parseInt(req.body.quantity)
  	const vin = vins.find(a => a.id === vinId)
  	const vinIsInPanier = req.session.panier.vins.find(a => a.id === vinId)
  	if (isNaN(vinId) || isNaN(quantity) || quantity <= 0) {res.status(501).json({ message: 'Requête incorrecte' })}
  	else if (!vin) {res.status(501).json({ message: 'Vin introuvable' })}
  	else if (vinIsInPanier) {res.status(400).json({ message: "Le vin est déjà dans le panier" })}
  	else {
    	newVin = {
      		id: vinId,
      		quantity: quantity,
    	}
    	req.session.panier.vins.push(newVin)
  	}
  res.json(newVin)
})

//Cette route permet de changer la quantité d'un vin dans le panier.
router.put('/panier/:vinId', (req, res) => {
  	const vinId = parseInt(req.params.vinId)
  	const quantity = parseInt(req.body.quantity)
  	const vinIndex = req.session.panier.vins.findIndex(a => a.id === vinId)
  	if (isNaN(vinId) || isNaN(quantity) || quantity <= 0) {res.status(400).json({ message: 'Requête incorrecte'})}
  	else if (vinIndex === -1) {res.status(501).json({message: "Le vin n'est pas dans le panier"})}
  	else {
    	req.session.panier.vins[vinIndex] = {
      		id: vinId,
      		quantity: quantity,
   		}
  		res.json(req.session.panier)
  	}
})

// Cette route supprime un vin dans le panier.
router.delete('/panier/:vinId', (req, res) => {
  	const vinId = parseInt(req.params.vinId)
  	const vinIndex = req.session.panier.vins.findIndex(a => a.id === vinId)
  	if (isNaN(vinId)) {res.status(400).json({message: 'Requête incorrecte'})}
  	else if (vinIndex === -1) {res.status(501).json({message: "Le vin n'est pas dans le panier"})}
  	else {
    	req.session.panier.vins.splice(vinIndex, 1)
    	res.json(req.session.panier)
  	}
})

module.exports = router
