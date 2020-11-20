//uc3
// using random function to get the numbers between 1 to 6
var currentPosition = 0;
var snake=1;
var ladder=2;
var noPlay=0;
console.log("Current position of player : " + currentPosition);
function checkForOption()
{
    var ran=Math.floor((Math.random() * 6) + 1);
    console.log("the value appeared after rolling the dice is : " + ran );
    var check=Math.floor((Math.random() * 10) % 3);
    console.log("the option is : " + check);
    switch(check)
    {
        case noPlay:
            currentPosition = 0;
            console.log("player's current position is : " + currentPosition);
            break;
        case snake:
            currentPosition -= ran;
            console.log("player's current position is : " + currentPosition);
            break;
        case ladder:
            currentPosition += ran; 
            console.log("player's current position is : " + currentPosition); 
            break;
        default:
            console.log("nothing has changed");
            break;
    }
}
module.exports = { checkForOption };