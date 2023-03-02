var no_of_buttons=document.querySelectorAll(".drum").length;
//for click
for(var i=0;i<no_of_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttInnerhtml=this.innerHTML;
        makesound(buttInnerhtml);
        buttonAnimation(buttInnerhtml);
    });

}
//for keyboard


document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})


//for sound
function makesound(key){
    switch(key){
        case "w":
            new Audio("sounds/tom-1.mp3").play();
        break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
        break;

        case "s":
            new Audio("sounds/tom-3.mp3").play();
        break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
        break;

        case "j":
            new Audio("sounds/crash.mp3").play();
        break;
        case "k":
            new Audio("sounds/kick-bass.mp3").play();
        break;
        case "l":
            new Audio("sounds/snare.mp3").play();
        break;


        default: console.log(buttInnerhtml)
    };

}

//for animation

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }