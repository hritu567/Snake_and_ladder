//uc2
// using random function to get the numbers between 1 to 6
function rollDice()
{
    var ran=Math.floor((Math.random() * 6) + 1);
    console.log( "The random number we get after rolling the dice : " + ran);
}
module.exports = { rollDice };