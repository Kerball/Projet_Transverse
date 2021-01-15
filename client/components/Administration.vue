<template>
    <div>
      <h1>Your account </h1>
      <div v-if="connected">
        <img class="img1" src="/img/connected.png" alt="connected">
        <p class ="text">Congratulation you are connected you can now acces to all our features, 
          <br>if you are tired of playing solo go check our catalog, 
          <br>choose a game and start the discussion </p>
      </div>
      <div v-else>
       
        <img src="/img/register.png" alt="register">
         <p class ="text">Hello new customer,
           <br>if you want to access to your account pls register first.</p>
      </div>
    </div>
</template>
<script>
module.exports = {
  props: {
    connected: { type: Boolean },
    
  },
  async mounted () {},
  methods: {}
}
</script>



<style  scoped>



img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 50%;
     }
.text{

text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 20pt;
color: whitesmoke;
}
h1{
  color: whitesmoke;
}
.img1 {
  display: block;
    margin-left: auto;
    margin-right: auto;
    height: 13%;
    width: 40%;

}


 </style>