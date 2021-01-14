<template>
    <div> 
        <div style="color:white;font-family:'Apple Chancery',cursive;" >
          <h1 style="text-align:center;margin-top:50px">Problem: How to connect several people who do not speak the same language using video games?</h1><br>
          <h2 style="margin-left:60px"> Taking into account the current period and our survey, we realized that more and more people are playing video games (all platforms combined). <br>
          In addition, a number of people want to improve in English but do not necessarily know how. This is why we think there is a real interest in creating a site. <br><br>
          What will bring them: <br>
          <h2 style="margin-left:120px">-a new network of friends<br>
          -fluency in a new language<br>
          -human contact during confinement<br>
          </h2>
          </h2>
          <h1 style="font-family:'Apple Chancery',cursive;text-decoration:underline;text-underline-position:under;">TEAM </h1>
        </div>
      <div style="color:white" class ="flex">
          <div >
            <h2>Cédric CALPOTURA</h2>
              <img src="/img/cedric.png" >
          </div>
          <div>
             <h2>Arthur LE NEGARET</h2>
               <img src="/img/arthur.png" >
          </div>
          <div>
              <h2>Adrien KEREZOVIC</h2>
                <img src="/img/adrien.png" >
          </div>
        </div>
      </div>
</template>
<script>
module.exports = {
  props: {
    connected: { type: Boolean }
  },
  async mounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
 <<style l scoped>

.flex{

display:inline-flex;
}

img{
 margin-right: 100px;
 height: 300px;
 width:260px;

}

 </style>