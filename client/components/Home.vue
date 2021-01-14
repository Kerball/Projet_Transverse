<template >
  <div>
    <article class="aticle" v-for="article in articles" :key="article.id">
      <div class="article-img" >
        <div :style="{ backgroundImage: 'url(' + article.image + ')' }">
         
            <a href="#/Canaux"><button type="button" class="test"></button></a>
            
          

        </div>
      </div>
      
            
    </article>
    <form @submit.prevent="addArticle">
      <h2 style="color:whitesmoke">New Game</h2>
      <input type="text" v-model="newArticle.name" placeholder="Name" required>
      <input type="number" v-model="newArticle.price" placeholder="Style" required>
      <textarea type="text" v-model="newArticle.description" placeholder="Description" required></textarea>
      <input type="text" v-model="newArticle.image" placeholder="Link">
      <button type="submit">Add</button>
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
        style:''
      },
      editingArticle: {
        id: -1,
        name: '',
        description: '',
        image: '',
        style:''
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
      this.editingArticle.image = article.image
     
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
  padding-right: 0;
  margin-left:5.5%;
  margin-top:2% ;
  margin-right:10%;
  display: inline-flex;
  

}
.test{
  height: 100%;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  border: transparent;
}
.test:hover{
  background: rgba(96, 100, 112, 0.212);
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
  width: 465px;
  height: 240px;
  background-size: cover;
  margin:auto;
  
}

.article-content {
  flex: 3;
  
}

.article-title {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

textarea {
  width: 100%;
}
</style>