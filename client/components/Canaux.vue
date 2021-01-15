
<template>

  <div>
    <div>  


      <div>
       
        
        <a href="https://discord.gg/QQ94yt8n" target="_blank"><img src="/img/discord.png" alt="discord"><button type="button" class="test"></button></a>
         
      </div>

      <div class ="flex">
        
         
               <div>
                <img  class ="img1" src="/img/exemple.png" >
                </div>
                <div>
                  <p style="color:red">To find a partner you can send a message on the different channel
                <br><em>found-players</em> in the game channel you want to play</p>
                <br><br><br>
                <p style="color:rgb(78, 167, 202);">After talking to someone in the channel, 
                  <br>don’t hesitate to get started and try to talk to him/them in the <em>chat room</em></p>
                </div> 
              
                  <div class ="flex1">
                    <br>
                  <p style="color:whitesmoke; margin:5%">Then if you find out that your game is not on the list,
                   <br>you can add a new game if you are connected</p>
                <img  class ="img2" src="/img/general.png" >
                <p style="color:whitesmoke; margin:5%">You can inform the team about the game you added</p>
                <img  class ="img3" src="/img/add.png" >

             </div>
            
                

      </div>



       

       
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

   
       
       /* $("form").submit(function (e){

            e.preventDefault();
            socket.emit("chat message" , $("#msg").val());
            $("#msg").val();
            return false ;
        });
        socket.on('chat message', function(msg)
        {
            $("message").append($("<p>").text(msg));
        });
      */
    
  },
  methods: {
    

     

  }
}


</script>



<style scoped>

p{

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 10%;
  
}


.flex{

 
  display:inline-flex;
  flex-wrap: wrap;
  align-content: space-between;
  flex-direction: row;
  
  
}
.flex1{
  
  margin-left: 400px;
  display:inline-flex;
  flex-wrap: wrap;
  align-content: space-between;
  flex-direction: column;
  
  
}
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 50%;
     }
.img1{
  width: 250px;
  height: 700px;
  margin: 15%;
  
}
.img2{
height: 100px;
  width: 220px;
  margin: 5%;
}
.img3{
height: 100px;
  width: 550px;
  margin: 5%;
}
.text{

text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 20pt;
color: rgb(78, 167, 202);
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



