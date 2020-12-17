<template >
  <div>
    <article class="aticle" v-for="article in articles" :key="article.id">
      <div class="article-img" >
        <div :style="{ backgroundImage: 'url(' + article.image + ')' }">
        </div>
      </div>
      <div class="article-content" v-if="editingArticle.id !== article.id">
        <div class="article-title">
          <h2>{{ article.name }} </h2>
        </div>
        </div>
            
    </article>
    <form @submit.prevent="addArticle">
      <h2>Nouveau produit à ajouter</h2>
      <input type="text" v-model="newArticle.name" placeholder="Nom du produit" required>
      <input type="number" v-model="newArticle.price" placeholder="Prix" required>
      <textarea type="text" v-model="newArticle.description" required></textarea>
      <input type="text" v-model="newArticle.image" placeholder="Lien vers l'image">
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
module.exports = {
  name : "Home",
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object }
  },
  async mounted () {
  },
  data () {
    return {
      newArticle: {
        name: '',
        description: '',
        image: '',
        price: 0
      },
      editingArticle: {
        id: -1,
        name: '',
        description: '',
        image: '',
        price: 0
      }
    }
  },
  methods: {
    addPanier (articleId) {
      this.$emit('ajou-panier', articleId)
    },
    deleteArticlePanier(articleId) {
      this.$emit('delete-article-panier', articleId)
    },
    addArticle () {
      this.$emit('add-article', this.newArticle)
    },
    deleteArticle (articleId) {
      this.$emit('delete-article', articleId)
    },
    editArticle (article) {
      this.editingArticle.id = article.id
      this.editingArticle.name = article.name
      this.editingArticle.description = article.description
      this.editingArticle.image = article.image
      this.editingArticle.price = article.price
    },
    sendEditArticle () {
      this.$emit('update-article', this.editingArticle)
      this.abortEditArticle()
    },
    abortEditArticle () {
      this.editingArticle = {
        id: -1,
        name: '',
        description: '',
        image: '',
        price: 0
      }
    }
  }
}
</script>

<style scoped>
.aticle{
  border:2px solid black;
  margin-top:10%;
  
}
article {
  display: flex;
  height: auto;
}

.article-img {

    flex: 1;
    max-width: 300px;
    height: auto;
    
}

.article-img div {
  width: 100%;
  height: 100%;
  background-size: cover;
  margin:auto;
 
}

.article-content {
  flex: 3;
}

.article-title {
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 100%;
}
</style>
