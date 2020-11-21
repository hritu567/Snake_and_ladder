//uc4
// Repeat till player reaches the wining position 100
var playerPosition=0;
var result;
function snake(result)
{
   playerPosition=playerPosition-result;
    return playerPosition;
}
function ladder(result)
{
    playerPosition=playerPosition+result;
    return playerPosition;
}
var currentPosition=0;
var previourPosition=0;
var noplay=0;
var snakePosition=1;
var ladderPosition=2;
while(playerPosition != 100)
{   
    previourPosition = playerPosition;
    console.log("Dice is rolling.....");
    result = Math.floor(Math.random()*10)%6+1;
    console.log("Dice rolling result is " + result);
    var check = Math.floor(Math.random()*10)%3;
    // checking snake ladder or noplay;
    switch(check)
    {
      case noplay:
          currentPosition = playerPosition;
          console.log("No play and player position is : " + currentPosition );
          break;
       case snakePosition:
           currentPosition = snake(result);
           console.log("Found Snake");
           console.log("updated player position : " + currentPosition);
           break;
       case ladderPosition:
           currentPosition = ladder(result);
           console.log("Found ladder");
           console.log("updated player position "+ currentPosition);
           break;
           default:
    }
    if(playerPosition < 0)
    {
        playerPosition = 0;
    }
    if(playerPosition > 100)
    {
        playerPosition = previourPosition;
    }
}
module.exports = { snake, ladder };
