
<template>

  <div>
    <div>  


      <div>
       
        
        <a href="https://discord.gg/QQ94yt8n" target="_blank"><img src="/img/discord.png" alt="discord"><button type="button" class="test"></button></a>
         
      </div>


       <div id ="messages"></div>  
        <form action="">
            <input id ="msg" autocomplete="off"/><button>Send</button>      
        </form> 

       
      </div>
  </div>
</template>


<script src ="/socket.io/socket.io.js"></script>

<script>

module.exports = {
  name : 'Canaux',
  
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object }
    
  },
  async mounted () {

   
       
        $("form").submit(function (e){

            e.preventDefault();
            socket.emit("chat message" , $("#msg").val());
            $("#msg").val();
            return false ;
        });
        socket.on('chat message', function(msg)
        {
            $("message").append($("<p>").text(msg));
        });
      
    
  },
  methods: {
    

     

  }
}


</script>



<style scoped>

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

.test{
  background-color: transparent;
  cursor: pointer;
  border: transparent;
}
.test:hover{
  background: rgba(96, 100, 112, 0.212);
  }




 </style>



