//Player 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1); //To pick a random number
document.querySelector ("dice, .img1").setAttribute("src",`./images/dice${randomNumber1}.png`)  //Random Player 1 Dice

//Player2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector ("dice, .img2").setAttribute("src",`./images/dice${randomNumber2}.png`) //Random Player 2 Dice

//Display Winner
var h1 = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    h1.textContent = "Player 1 Wins! 🚩";

} else if (randomNumber1 < randomNumber2){
    h1.textContent = "Player 2 Wins!🚩";

}else{
    h1.textContent = "Its a Draw!"
}
