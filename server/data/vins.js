const vins = [
	{
		id: 1,
		nom: "Château Les Landes de Cach Pauillac",
		type: "Rouge",
		annee: 2016,
		description: "Un vin très agréable, rond en bouche, des tannins qui commencent à s'assouplir, longue finale. Il a un beau potentiel de garde, mais il peut se boire maintenant.",
		image: "https://images.vivino.com/thumbs/SjdP2RVVT9mjweH-aMToXw_pb_x600.png",
		prix: 25
	},
	{
		id: 2,
		nom: "Sancerre La Côte Des Monts Damnés",
		type: "Blanc",
		annee: 2017,
		description: "Nez puissant sur la pomme, le citron, le pamplemousse, la pêche, floral, léger miel. En bouche c’est ample et incisif à la fois, acidité parfaite, belle matière et superbe longueur. Peut se garder mais déjà très bon aujourd’hui",
		image: "https://images.vivino.com/thumbs/jRa14lQPTbWcp4m12TlJlw_pb_x600.png",
		prix: 24
	},
	{
		id: 3,
		nom: "Château de l'Ou, Infiniment Rouge 2018",
		type: "Rouge",
		annee: 2018,
		description: "Présente surtout des arômes musqués, cuir avec des fruits fondus. Toujours belle bouche charnue et longue. Deuxième dégustation complexe avec du fruit noir et rouge, épices, cuir et sous-bois léger. Tabac blond et musqué. Vraiment une belle bouteille plaisir pour un prix très mesuré.",
		image: "https://images.vivino.com/thumbs/6kkGp4T-Smu22ZQsyntZLQ_pb_x600.png",
		prix: 19.50
	},
	{
		id: 4,
		nom: "Château La Fleur de Boüard, Lalande-de-Pomerol 2018",
		type: "Rouge",
		annee: 2018,
		description: "Futur très grand vin, il a déjà tous les atouts, belle rondeur en bouche assez longue fruits des bois et chocolat noir robe rubis accentué avec des retours poivrés encore très jeune mais prometteur gagne à être gardé encore au moins 5 ans et plus et il va ravir les papilles les plus exigeantes.",
		image: "https://images.vivino.com/thumbs/s_RjfSJDT_iv9KJKkthL-g_pb_x600.png",
		prix: 29.58
	},
	{
		id: 5,
		nom: "Château de l'Ou, Secret de Schistes 2018",
		type: "Rouge",
		annee: 2018,
		description: "Nez prenant sur des arômes empyreumatique et de compotée de fruits noirs (cassis, mûre). S'ouvre agréablement sur des arômes de fruits rouges, de garrigue et de poivre. Un nez qui annonce une belle Syrah. L'attaque est souple, ample et dévoile un jus puissant, soyeux et gourmand. Un bel équilibre entre la matière tannique bien travaillée et une fraîcheur modérée. On retrouve la trame olfactive en bouche ainsi que des fruits cuits. Bonne longueur, très belle découverte",
		image: "https://images.vivino.com/thumbs/rx3WSFjxQsuRsU7ZlM5THQ_pb_x600.png",
		prix: 30
	},
	{
		id: 6,
		nom: "Château Margaux, Premier Grand Cru Classé",
		type: "Rouge",
		annee: 2018,
		description: "Le nez est élégant, des notes de poivre blanc, de cacao, l'attaque est souple, mais très vite la puissance arrive, c'est ample en bouche, nous retrouvons des notes de cacao, de fruits noirs, d'épices. Très longue finale. Les tannins sont bien présents mais sont agréables, pas encore soyeux mais à la fin de l'élevage, ce sera sûrement le cas. Ce vin est un mélange de douceur et de puissance, ce sera un très bon millésime.",
		image: "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x600.png",
		prix: 750
	},
	{
		id: 7,
		nom: "Château Trotanoy, Pomerol 1961",
		type: "Rouge",
		annee: 1961,
		description: "Nez explosif de fruits noirs. Très belle matière en bouche, que de puissance et une finale très subtile. Excellente bouteille.",
		image: "https://images.vivino.com/thumbs/xbwven-3Szu2xNSxD6N9lQ_pb_x600.png",
		prix: 6970.83
	},
	{
		id: 8,
		nom: "Clos Rougeard, Le Bourg Saumur Champigny 2013",
		type: "Rouge",
		annee: 2013,
		description: "Un jus racé, profond mais sans perdre en élégance. Un végétal mûr avec de jolies notes de violette, de cassis. Un jus enrobant légèrement salin en finale. C’est précis et structuré avec des tannins superbes et des notes grillées.",
		image: "https://images.vivino.com/thumbs/f8CxpGTGRqCrwfp_jdmedA_pb_x600.png",
		prix: 532
	},
	{
		id: 9,
		nom: "Château Latour, Grand Vin Pauillac Premier Grand Cru Classé",
		type: "Rouge",
		annee: 1990,
		description: "Nez magnifique de mentol, de camphre, de résine, de pin... Pas si explosif que ça, mais net et enthousiasmant. La bouche est souple. Sur des arômes de graphite, de sous bois... Assez intense. Une finale longue... C’est un très beau vin très enveloppant",
		image: "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x600.png",
		prix: 1360
	},
	{
		id: 10,
		nom: "Château Haut-Brion, Pessac-Léognan Premier Grand Cru Classé",
		type: "Rouge",
		annee: 1989,
		description: "Un vin de grande classe. Robe rouge pourpre et brillante. Nez très fin, fruité (cerise) et légèrement boisé. Attaque franche en bouche. Beaucoup de souplesse et d’amplitude. Les tanins sont fondus et soyeux. De la fraîcheur et des notes fruités. En conclusion, c'est un vin très élégant.",
		image: "https://images.vivino.com/thumbs/ntGyei3vSEGl5Bz5-wI-TQ_pb_x600.png",
		prix: 4171.67,
	},
	{
		id: 11,
		nom: "Domaine Coche-Dury, Corton-Charlemagne Grand Cru",
		type: "Blanc",
		annee: 2007,
		description: "Bouteille d'anthologie qui est à la hauteur de son immense réputation avec un nez superbe et une bouche d'une rare finesse.",
		image: "https://images.vivino.com/thumbs/EvtJOugzTx-HZXZfdZvTsA_pb_x600.png",
		prix: 1192.42,
	},
	{
		id: 12,
		nom: "Bénédicte et Stéphane Tissot, Les Graviers",
		type: "Blanc",
		annee: 2018,
		description: "Chardonnay élevé 16 mois en fût de chêne neuf. Terroir d’éboulis calcaire et caillouteux, belle matière et superbe tension, grande mineralité, des fleurs, du citron et de la pêche jaune très mûrs, vanille.",
		image: "https://images.vivino.com/thumbs/bruXMWDVTZqHPq91xFS6Rw_pb_x600.png",
		prix: 38.90,
	},
	{
		id: 13,
		nom: "Comte Lafond, Sancerre Grande Cuvée Blanc",
		type: "Blanc",
		annee: 2018,
		description: "Flacon atypique, superbe nez citronné et très vert, en bouche c’est droit, ciselé, précis, pur. À goûter absolument!",
		image: "https://images.vivino.com/thumbs/bcOnoluxQeynxf9vOiusnQ_pb_x600.png",
		prix: 33,
	},
	{
		id: 14,
		nom: "Veuve Clicquot Brut",
		type: "Pétillant",
		annee: 2018,
		description: "Une robe jaune claire et avec des bulles fines. Bouche minérale avec des notes citronnées-fumées et très bel équilibre.",
		image: "https://images.vivino.com/thumbs/s2PDIn8CQm-hAVb8u00QQw_pb_x600.png",
		prix: 39.83,
	},
	{
		id: 15,
		nom: "Château Maillet, Pomerol",
		type: "Rouge",
		annee: 2018,
		description: "Si vous voulez un Pomerol de qualité qui a de belles années devant lui... on a là un vin droit avec une très belle structure, riche mais tout en gardant une certaine fraîcheur un peu mentholée avec de beaux tanins persistant sur la fin de bouche.",
		image: "https://images.vivino.com/thumbs/cUhGmYIUSia-1xIATA1NAg_pb_x600.png",
		prix: 51.33,
	},
	{
		id: 16,
		nom: "Alain Edouard EPC Blanc de Blancs Brut",
		type: "Pétillant",
		annee: 2018,
		description: "Un Champagne concentré, équilibré avec des bulles fines et des arômes francs de pêche et fruits mûrs qui apportent de la vivacité super expressif!",
		image: "https://images.vivino.com/thumbs/da6lyWsHTkappvfVnVuMCg_pb_x600.png",
		prix: 29.80,
	}
]
module.exports = vins 