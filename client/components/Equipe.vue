<template>
    <div>
      <h1>Equipe</h1>
      <div class ="flex">
          <div>
            <div>Cédric CALPOTURA</div>
              <img src="/img/cedric.png" alt="Cédric">
          </div>
          <div>
             <div>Arthur LE NEGARET</div>
               <img class ="img1" src="/img/arthur.png" alt="Arthur">
          </div>
          <div>
              <div>Adrien KEREZOVIC</div>
                <img src="/img/adrien.png" alt="Adrien">
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

display: inline-flex
}

img{
 margin-right: 100px;
 height: 300px;
 width:260px

}

.img1{
 margin-right: 100px;
 height: 300px;
 width:220px

}
 </style>