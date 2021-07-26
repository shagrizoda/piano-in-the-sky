// For  clicks
var numberOfButtons=document.querySelectorAll("button").length;
for(var i=0;i<numberOfButtons;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function()
  {
    var buttons=this.innerHTML;
    makeNoise(buttons);
    buttonAnimation(buttons);
  });
}

// For Keyboard pressing
document.addEventListener("keypress",function(trigger)
{
makeNoise(trigger.key);
buttonAnimation(trigger.key);
});

//Connecting sound to buttons
function makeNoise(key)
{
  switch(key)
  {
    //left side, white keys 
    case "a":
      var a4=new Audio("sounds/a4.mp3");
      a4.play();
      break;

    case "s":
      var b4=new Audio("sounds/b4.mp3");
      b4.play();
      break;

    case "d":
          var a5=new Audio("sounds/a-5.mp3");
          a5.play();
          break;
    case "f":
        var d4=new Audio("sounds/d4.mp3");
        d4.play();
        break;
    
    //right side,white keys
    case "h":
        var c4=new Audio("sounds/c-4.mp3");
        c4.play();
        break;

    case "j":
      var b3=new Audio("sounds/b3.mp3");
      b3.play();
      break;

    case "k":
        var e3=new Audio("sounds/e3.mp3");
        e3.play();
        break;
    case "l":
        var f4=new Audio("sounds/f-4.mp3");
        f4.play();
        break;
     // left side, black keys
     case "w":
        var f5=new Audio("sounds/f-5.mp3");
        f5.play();
        break;

     case "e":
        var b5=new Audio("sounds/b5.mp3");
        b5.play();
        break;

     case "r":
        var c6=new Audio("sounds/c6.mp3");
        c6.play();
        break;

    //right side,black keys 
    case "u":
        var g5=new Audio("sounds/g-5.mp3");
        g5.play();
        break;

     case "i":
        var d5=new Audio("sounds/d5.mp3");
        d5.play();
        break;

     case "o":
        var c5=new Audio("sounds/c5.mp3");
        c5.play();
        break;

     case "p":
        var e5=new Audio("sounds/e5.mp3");
        e5.play();
        break;
   }
 }

//Adding animation to buttons
function buttonAnimation(currentKey)
{
  var activeButton=document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function()
{
  activeButton.classList.remove("pressed");
  },200);
 }
