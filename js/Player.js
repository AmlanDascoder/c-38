class Player{
    constructor() {}

    
    getCount(){
        
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            //fetching the value from database
        playerCount = data.val()
        })
            }

            updateCount(count){
                database.ref('/').update({
                playerCount:count
                })
                }

                update(name){
                    var playerIndex = "player"+ playerCount;

                           database.ref(playerIndex).set({
                        name:name
                    })
                
                }


}