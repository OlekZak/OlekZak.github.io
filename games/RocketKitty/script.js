//vairables
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var characterSprite = document.getElementById("characterSprite");
var jumping = 0;
var counter = 0;



//hole placement logic
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*400)+200);
    hole.style.top = random + "px";
    counter++;
});


//physics logic
setInterval(function(){
    //down physics
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping===0) {
        character.style.top = (characterTop+5)+"px";
    }

    //hit detection
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(600-characterTop);
    if((characterTop>560) || ((blockLeft<40) && (blockLeft>-50) && ((cTop<holeTop) || (cTop>holeTop+160)))){
        //game over logic
        alert("Game Over - Score: "+counter);
        character.style.top = 100 + "px";
        counter = 0;
    };
},10);



//jump physics
function jump(){
    junmping = 1;
    let jumpCount = 0;
    var jumpInveral = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6) && (jumpCount<15)){
            character.style.top = (characterTop-7)+"px";
        };
        if(jumpCount>20) {
            clearInterval(jumpInveral);
            jumping = 0;
            jumpCount = 0;
        };
        jumpCount++;
    });
};

//spacebar detection
window.addEventListener("keypress", ({keyCode}) => {
    switch (keyCode) {
        case 32:
            console.log('You Pressed space');
            jump();
    };
});