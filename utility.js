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
var currentposition=0;
var noplay=0;
var snakePosition=1;
var ladderPosition=2;
while(playerPosition<=100)
{
    result=Math.floor(Math.random()*10)%6+1;
    console.log("Dice rolling result is " + result);
    var check=Math.floor(Math.random()*10)%3;
    // checking snake ladder or noplay;
    switch(check)
    {
      case noplay:
          currentposition=playerPosition;
          console.log("No play and player position is : " + currentposition );
          break;
       case snakePosition:
           currentposition=snake(result);
           console.log("Found Snake");
           console.log("updated player position : " + currentposition);
           break;
       case ladderPosition:
           currentposition=ladder(result);
           console.log("Found ladder");
           console.log("updated player position "+currentposition);
           break;
           default:
    }
    if(playerPosition<0)
    {
        playerPosition=0;
    }
}
module.exports = { snake, ladder };
