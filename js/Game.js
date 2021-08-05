class Game{
    constructor() {}  
    
//It will read the gameState from the database
    getState(){
        
var gameStateRef = database.ref('gameState');
gameStateRef.on("value", function(data){
    //fetching the value from database
gameState = data.val()
})
    }

  

//It will update the gameState on to the database
update(state){
    database.ref('/').update({
    gameState:state
    })
    }

    //It will start the game
    start(){
        
        if(gameState===0){

            player=new Player();
            player.getCount();
            
            form=new Form();
            form.display();
        }

    }

}