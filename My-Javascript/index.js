
   // first dice1 Image

var randomNumber1=Math.floor(Math.random()*6)+1;//1-6

var randomDiceImage="dice"+randomNumber1+".png";//Player-1 to dice6

var randomImageSource="images/"+randomDiceImage;//images/Player-1 to  images/Player-6

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//second dice2 image
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//second dice2 image
//short coding for second dice2 image
// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomImageSource2="images/dice"+randomNumber2+".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player-1 is (The Winner) ☺️☺️☺️";
}else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player-2 is (The Winner) ☺️☺️☺️";
}else {
  document.querySelector("h1").innerHTML="Draw(Please-TryAgain) ";

}
