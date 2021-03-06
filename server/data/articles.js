const articles = [
  {
    id: 1,
    name: 'League of Legends',
    description: 'Dans League of Legends, le joueur contrôle un champion aux compétences uniques dont la puissance augmente au fil de la partie se battant contre une équipe de joueurs en temps réel la plupart du temps. L objectif d une partie est, dans la quasi-totalité des modes de jeu, de détruire le « Nexus » ennemi, bâtiment situé au cœur de la base adverse protégé par des tourelles et inhibiteurs les plus profonds, avec ses 64Mo de mémoire.',
    image: 'https://thumbor.sd-cdn.fr/N5F2__XFoXlS2b4xQe8pyek2SAI=/1200x630/cdn.sd-cdn.fr/wp-content/uploads/2019/07/league-of-legends-mobile.jpg',
    style: 'MOBA'
  },
  {
    id: 2,
    name: 'Call of Duty: Warzone',
    description: 'C est un jeu de tir à la première personne ou le joueur va devoir se battre à l aide d arme à feu, la particularité de ce Call of Duty est qu il y a une map ou 100 joueurs sont lachées pour pouvoir survivre et le dernier survivant gagne',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/71/COD_Warzone_cover_art.jpg',
    style : 'FPS'
  },
  {
    id: 3,
    name: 'Apex Legend',
    description: 'C est un jeu de tir à la première personne ou le joueur va devoir se battre à l aide d arme à feu, la particularité de ce Call of Duty est qu il y a une map ou 100 joueurs sont lachées pour pouvoir survivre et le dernier survivant gagne',
    image: 'https://www.jvfrance.com/wp-content/uploads/2020/11/apex-legends-1080.jpg',
    style: 'FPS'
  },
  {
    id: 4,
    name: 'Rainbow 6 Siege',
    description: 'Un jeu de guerre ou vous jouez à la première personne, soit en défendant une zone contre d autre joueur ou en attaquant une zone défendue par une team enemie',
    image: 'https://ubistatic19-a.akamaihd.net/resource/en-us/game/rainbow6/siege-v3/r6-siege-meta_image-home-sledge.jpg',
    style: 'FPS'
  },
  {
    id: 5,
    name: 'Fortnite',
    description: 'C est un jeu de tir à la première personne ou le joueur va devoir se battre à l aide d arme à feu, la particularité de ce Call of Duty est qu il y a une map ou 100 joueurs sont lachées pour pouvoir survivre et le dernier survivant gagne',
    image: 'https://cdn2.unrealengine.com/15br-social-lineup-social-1920x1080-685054651.jpg',
    style: 'FPS'
  },
  {
    id: 6,
    name: 'Among us',
    description: 'Le loup garou sur ordinateur',
    image: 'https://www.journaldugeek.com/content/uploads/2020/10/amongus-logo.jpg',
    style: 'Stratégie'
  },
  {
    id: 7,
    name: 'Rocket League',
    description: 'Le crossover entre le foot et la voiture',
    image: 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_RocketLeague_image1600w.jpg',
    style: 'Jeux de sport'
  },
  {
    id: 8,
    name: 'World of Warcraft',
    description: 'Un jeu ou vous créer votre propre aventure en combattant des monstres au coter d alliers que vous aller vous faire',
    image: 'https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/09/wow-classic1.jpg',
    style:'MMORPG'
  },
  {
    id: 9,
    name: 'Dofus',
    description: 'Un jeu français ou vous créer un personnage et créer votre propre aventure dans le monde des douzes',
    image: 'https://www.gratuit.be/wp-content/uploads/2019/01/Dofus.jpg',
    style: 'MMORPG'
  },
  {
    id: 10,
    name: 'Animal Crossing : New Horizon',
    description: "Créer ta propre vie virtuelle",
    image: 'https://clubarthurdent.com/wp-content/uploads/2020/04/H2x1_NSwitch_AnimalCrossingNewHorizons_image1600w.jpg',
    style: 'Simulation'
  },
  {
    id: 11,
    name: 'Minecraft',
    description: "Créer ta propre vie virtuelle",
    image: 'https://images-eu.ssl-images-amazon.com/images/I/510KWdgceEL.jpg',
    style: 'Simulation'
  },
  {
    id: 12,
    name: 'CS GO',
    description: "Jeu de tirs stratégique",
    image: 'https://www.legal-esport.com/imactus/csgo.jpg',
    style: 'Jeu de tirs'
  },
  {
    id: 13,
    name: 'For Honor',
    description: "Combat médiéval",
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/304390/capsule_616x353.jpg?t=1607622851',
    style: 'Combat'
  },
  {
    id: 14,
    name: 'Mario Kart',
    description: "Jeux de voiture",
    image: 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg',
    style: 'Simulation'
  },
  {
    id: 15,
    name: 'Battle front',
    description: "Jeux de tirs dans le monde de Star Wars",
    image: 'https://www.fredzone.org/wp-content/uploads/2017/09/star_wars_battlefront.jpg',
    style: 'Jeu de Tirs'
  },
  {
    id:16,
    name: 'Destiny',
    description:"Jeux de Tirs futuriste",
    image:'https://www.consollection.com/image/actualite/destiny-2-le-test-sur-pc-8881.jpg',
    style:'FPS',
    },
    {
    id:17,
    name: 'Hearthstone',
    description:"Construit ton deck de carte et combat d'autre joueurs",
    image:'https://reshape.sport1.de/c/t/919AA215-5250-4E18-B67E-43D9F0F17C7C/1200x675',
    style:'carte',
    },
    {
    id:18,
    name: 'Overwatch',
    description:"Jeu de tirs futuriste",
    image:'https://www.hotspawn.com/app/uploads/2018/08/overwatch_terms-1024x682.jpg',
    style:'FPS',
    }
]

module.exports = articles
