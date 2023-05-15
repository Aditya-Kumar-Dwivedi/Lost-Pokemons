
// Global variables for the width and height of the images
var IMAGE_WIDTH = 64;
var IMAGE_HEIGHT = 64;
var BOARD_SIZE = 400;


const hints = new Map();

hints.set("dragonite",["It circles the globe in just 16 hours","It can fly in spite of its big and bulky physique","It is said that somewhere in the ocean lies an island where these gather"]);
hints.set("abra",["This Pokémon uses its psychic powers while it sleeps","Its Abality is inner focus and synchronize","Its yellow and brown color"]);
hints.set("charmander",["From the time it is born, a flame burns at the tip of its tail","It has a preference for hot things","When it rains, steam is said to spout from the tip of its tail"]);
hints.set("zubat",[" live in caves, down where the sun's light won't reach","It emits ultrasonic waves from its mouth to check its surroundings"," flies around with skill"]);
hints.set("ponyat",["If you've been accepted by it, its burning mane is mysteriously no longer hot to the touch","It can’t run properly when it’s newly born","Its a fire type pokemon"]);
hints.set("weezing",["This Pokémon uses its psychic powers while it sleeps","Its Abality is inner focus and synchronize","Its yellow and brown color"]);
hints.set("chikorita",["This Pokémon uses its psychic powers while it sleeps","Its Abality is inner focus and synchronize","Its yellow and brown color"]);
hints.set("spearow",["This Pokémon uses its psychic powers while it sleeps","Its Abality is inner focus and synchronize","Its yellow and brown color"]);
hints.set("azumarill",["This Pokémon uses its psychic powers while it sleeps","Its Abality is inner focus and synchronize","Its yellow and brown color"]);
hints.set("shroomish",["This Pokémon uses its psychic powers while it sleeps","Its Abality is inner focus and synchronize","Its yellow and brown color"]);
hints.set("vaporeon",["This Pokémon uses its psychic powers while it sleeps","Its Abality is inner focus and synchronize","Its yellow and brown color"]);
hints.set("golem",["This Pokémon uses its psychic powers while it sleeps","Its Abality is inner focus and synchronize","Its yellow and brown color"])




var pokemon = [
  "abra", "azumarill", "charmander", "chikorita", "dragonite",
  "golem", "ponyta", "shroomish", "spearow", "vaporeon",
  "weezing", "zubat"
];



// The initial number of pinned images
var numberOfPins = 5;
// To keep track of the game level
var username=document.getElementById("userdetail").textContent
var level = localStorage.getItem(username) === null?1:localStorage.getItem(username);
// console.log(level)
// console.log(localStorage.getItem(username))

// To reference the #leftSide and #rightSide divs
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

// For the <body> tag
var boardContainer = document.getElementById("board-container");

// Attach event handler to the board container
boardContainer.onclick = function gameOver() {
  alert("You clicked the wrong spot!\n\n" +
        "GAME OVER\n\nBetter luck next time!\n" +
        "(Refresh for a New Game)\n");
  // Make sure everything gets disabled
  location.reload()
  boardContainer.onclick = null;
  theLeftSide.lastChild.onclick = null;
};


let s=0;
var lastimage;

function generatePins() {
  document.getElementById("level").innerHTML = "Level " + level; 
  
  for (var i = 1; i <= numberOfPins; i++) {
    var anImg = document.createElement("img");

    // We have to subtract the image height to make sure it fits
    var randTop = Math.floor(Math.random() * (BOARD_SIZE - IMAGE_HEIGHT));
    // We have to subtract the image width to make sure it fits
    var randLeft = Math.floor(Math.random() * (BOARD_SIZE - IMAGE_WIDTH));

    var randPoke = Math.floor(Math.random() * 12);

    anImg.src = "images/" +pokemon[randPoke] + ".png";
    anImg.style.top = randTop + "px"; // don't forget to append "px"
    anImg.style.left = randLeft + "px";
    anImg.style.height="40px"
    // Adds the img to the DOM, under the #leftSide div
    theLeftSide.appendChild(anImg);
    var span=document.getElementById("userdetail")
    // console.log(span.textContent)
  }

  // Clone the #leftSide div branch
  var leftSideImages = theLeftSide.cloneNode(true);
  // Remove the last child of the cloned div branch
  console.log(leftSideImages.lastChild);

  var n1=leftSideImages.lastChild.src.lastIndexOf('/');
  var n2=leftSideImages.lastChild.src.lastIndexOf('.');

  s=leftSideImages.lastChild.src.substring(n1+1,n2);
  const keyarray=hints.get(s);
  // console.log(keyarray[0]);
  // console.log(keyarray[1]);
  // console.log(keyarray[2]);
  // generate_hints();
  // console.log(hints.get(s));
  console.log()

 
  lastimage=leftSideImages.lastChild
  leftSideImages.removeChild(leftSideImages.lastChild);
  // Add the cloned div branch to the the DOM's #rightSide div
  theRightSide.appendChild(leftSideImages);
  // * note a div will be under the #rightSide div

  


  // Adds event handler to the last child of #leftSide
  theLeftSide.lastChild.onclick = function nextLevel(event) {
    // ensure the event doesn't also get applied to other
    // elements in the page, such as other pinned images
    // (that would trigger the function multiple times)
    event.stopPropagation();
    // if you did not have this, then the "Game Over!"
    // message that is attached to the onclick of the board container
    // would also be triggered.

    // Wipe down the game boards
    removeChildren(theLeftSide);
    removeChildren(theRightSide);

    // Increases the number of pins
    // and generates the next level
    var span=document.getElementById("userdetail");

    level++;
    

    // console.log(sec);
    localStorage.setItem(span.textContent, level);

    if (level % 3 == 0)
      numberOfPins += 3;
    else if (level % 7 == 0)
      numberOfPins += 7;
    else {
      numberOfPins += 4;
    }
    
    generatePins();

  };
  
}
generatePins();
var c=0;
function generate_hints()
{
  var temp=hints.get(s);
  console.log(temp);
   console.log(s);
   console.log(c);
   if(c===0)
   { document.getElementById("hint").innerHTML =  temp[0];c++;}
   else if(c===1)
   {document.getElementById("hint").innerHTML =  temp[1];c++;}
   else
   {document.getElementById("hint").innerHTML =  temp[2];c++;}

   
}

function i_surrender()
{
  theRightSide.appendChild(lastimage)
  document.getElementById("answer").innerHTML = s;
  setTimeout(()=>{
  alert("Answer Reveled game restarts 3...2...1  !")
  location.reload();
  },4000);
}
function removeChildren(parentNode) {
  // as long as there is a child, keep removing
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
  // console.log(parentNode);
}
