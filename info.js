function fighter(){
  var fighter = "The fighter is the strongest melee character of all the land. If you select this class, you won't have to spend that much and you will be built like a tank later on. No Magic, No Brain, ALL BRAWN!!!"
  var fighterText = document.getElementById("fighterText");
  fighterText.innerText = fighter;
}

function blackMage(){
  var blackMage = "You don't have a lot of HP, you aren't a physical fighter. But your magic is unheard of. You cast fire, ice, and lightning. And when all else fails, you have...a knife. You hail from the badlands";
  var bMageText = document.getElementById("bMageText");
  bMageText.innerText = blackMage;
}

function whiteMage(){
  var whiteMage = "The greatest healer to ever grace the lands, you have healing magic that can heal either yourself, or your allies. You can also harm the undead with light magic. Physical attack is not too shabby.";
  var wMageText = document.getElementById("wMageText");
  wMageText.innerText = whiteMage;
}

function monk(){
  var monk = "A monk from a peak monastery who was tasked to spread peace and prosperity. He has a strong physical, arguably the best in the game, but not as physically strong as the fighter. He isn't as consistent as the fighter but he does have better evasion and is the cheapest character to play as.";
  var monkText = document.getElementById("monkText");
  monkText.innerText = monk;
}

function thief(){
  var thief = "High Evasion, High Starting gold for the whole party, but not really good at anything else. He, from the developers point of view is the worst class at the start but ends out being consistent and average from the group.";
  var theifText = document.getElementById("thiefText");
  theifText.innerText = thief;
}

function redMage(){
  var redMage = "A jack of all trades, but the master of none. He is the one trick pony of the series. He can learn both White and Black magic, however doesn't get the damage output as a dedicated mage could. Can use most swords, but no axes, no heavy armor, no shields.";
  var rMageText = document.getElementById("rMageText");
  rMageText.innerText = redMage;
}