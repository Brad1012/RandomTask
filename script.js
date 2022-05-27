
function GetValue()
{
    var myarray= new Array(
    "You can only walk side to side for 30 seconds, like a crab!",
    "Put a piece of loot onto another players ship.",
    "Take a nap on your/someones boat for 10 seconds. You've earn't it.",
    "Double gun time! Use a Pistol and Eye of Reach until next you die.",
    "Dam Spaniards are piping up again! Go clear a Sea Fort.",
    "You've had a long day, reward yourself and down a nice grog!",
    "Poseidon is getting annoyed, calm him down by throwing 1 piece of loot into the sea.",
    "Sword Lord! You can only move by using sword hops for 30 seconds.",
    "Frag montage time, kill a pirate with a 360 EoR shot!",
    "You can only move by using sword hops for 30 seconds.",
    );
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("task-text").innerHTML=random;
}
