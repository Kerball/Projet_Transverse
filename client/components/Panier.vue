<template>
  <div>
    <h2>Mon Panier</h2>
    <div v-for= "objet in panier.articles" :key= "objet.id">
      <div class="cbo" :style="{backgroundImage: 'url('+imagi(objet.id)+')'}"></div>
      <div class="item" >
       {{nomArticle(objet.id)}} {{ objet.quantity }}
       <button @click= "incremQuant(objet.id)">+</button>
       <button v-if= "objet.quantity > 1" @click= "decremQuant(objet.id)">-</button>
       <button @click= "deleteArticlePanier(objet.id)">Retirer</button>
     </div>
    </div>
    <div>
      Le prix du panier est de : {{ totalPrice }} euros
    </div>
    <button @click="pay()"> Payer </button>
  </div>
</template>

<script>
module.exports = {
  name:"Panier",
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object }
  },
  computed: {
    totalPrice: function () {
      let price = 0
      for (i=0; i < this.panier.articles.length; i++) {
        let article = this.articles.find((article) => article.id === this.panier.articles[i].id)
        price += article.price * this.panier.articles[i].quantity
      }
      return price
    }
  },
  methods: {
    nomArticle(articleId)
    {
      let article = this.articles.find((article) => article.id === articleId)
      return article ? article.name : "";
    },
    deleteArticlePanier(articleId)
    {
      this.$emit("delete-article-panier", articleId);
    },
    incremQuant(articleId){
      const artPanier = this.panier.articles.find(article => article.id === articleId)
      this.$emit('up-quant', { id: articleId, quantity: artPanier.quantity+1 })
    },
    decremQuant(articleId){
      const artPanier = this.panier.articles.find(article => article.id === articleId)
      this.$emit('up-quant', {id:articleId, quantity: artPanier.quantity - 1})
    },
    imagi(articleId){
      for (var i = 0; i<this.articles.length;i++){
        if ( this.articles[i].id === parseInt(articleId)){
          return this.articles[i].image;
        }
      }
      return null
    },
    pay() {
      this.$emit('pay')
    }
  }
}



</script>




<style scoped>
h2{
text-align: center;
margin-top:2%;

}
.item{
  text-align: center;
  
  margin: 10px;
  padding: 1%;
}

.article-img {
  flex: 1;
}

.img {
  width: 100px;
  height: 100px;
  background-size: cover;
}
.cbo{
  background-size: cover;
width:100px; 
height:100px;
margin-right: auto;
margin-left:auto ;
}


</style>
