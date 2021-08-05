class Form{
    constructor () {}
    
    //to display the input box and the play button

    display() {
        var title = createElement('h2')
        title.html("CAR RACING GAME")
        title.position(500,30)
    
var input = createInput("Name")
var button = createButton('PLAY')


var greeting=createElement('h3')
input.position(550, 160);
button.position(550, 200);

button.mousePressed(function(){
    input.hide();
    button.hide();

    var name=input.value();

    playerCount+=1;
    player.update(name)
    player.updateCount(playerCount)


    greeting.html("Hello "+name)
    greeting.position(130,160)


})

    }
}

