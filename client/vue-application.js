const Home = window.httpVueLoader('./components/Home.vue')
const Panier = window.httpVueLoader('./components/Canaux.vue')
const Inscription = window.httpVueLoader('./components/Inscription.vue')
const Connexion = window.httpVueLoader('./components/Connexion.vue')
const Administration = window.httpVueLoader('./components/Administration.vue')
const Equipe = window.httpVueLoader('./components/Equipe.vue')

const routes = [
  { path: '/', component: Inscription },
  { path: '/connexion', component: Connexion },
  { path: '/Catalogue', component: Home },
  { path: '/Canaux', component: Panier },
  { path: '/administration', component: Administration },
  { path: '/equipe', component: Equipe },
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    articles: [],
    panier: {
      createdAt: null,
      updatedAt: null,
      articles: []
    },
    connected: false
  },
  async mounted () {
    const res = await axios.get('/api/articles')
    this.articles = res.data
    this.panier = await this.getPanier()
    this.getConnexion()
  },
  methods: {
    async ajouPanier(articleId){
      const response = await axios.post('/api/panier',{
        id: articleId,
        quantity: 1
      })
      this.panier = response.data
    },
    async getPanier() {
      const response = await axios.get('/api/panier')
      return response.data
    },
    async deleteArticlePanier(articleId){
      await axios.delete('/api/panier/'+ articleId)
      this.panier = await this.getPanier()
    },
    async upQuant({id: articleId, quantity}){
      await axios.put('api/panier/' + articleId, {
        quantity: quantity
      })
      this.panier = await this.getPanier()
    },
    async addArticle (article) {
      const res = await axios.post('/api/article', article)
      this.articles.push(res.data)
    },
    async updateArticle (newArticle) {
      await axios.put('/api/article/' + newArticle.id, newArticle)
      const article = this.articles.find(a => a.id === newArticle.id)
      article.name = newArticle.name
      article.image = newArticle.image
    },
    async deleteArticle (articleId) {
      await axios.delete('/api/article/' + articleId)
      const index = this.articles.findIndex(a => a.id === articleId)
      this.articles.splice(index, 1)
      this.panier = await this.getPanier()
    },
    async sendInscription(user){
      await axios.post('/api/register', user)
  },
  async sendConnexion(user){
       response = await axios.post('/api/login', user)
       if (response.data) {
        console.log(response)
        this.connected = true
      }
  },
  async getConnexion(){
    response = await axios.get('/api/me')
    if (response.data) {
      console.log(response)
      this.connected = true
    }
    return
  },
  async pay() {
    response = await axios.get('/api/panier/pay')
    this.panier = response.data
  }
}
})
