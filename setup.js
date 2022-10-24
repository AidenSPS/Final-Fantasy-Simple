var party = [];
function partySetup(){
  for(i = 0; i < 4; i++){
    var characterName = prompt("What would you like to name your character?");
    var className = prompt("Who do you want in your party? (Fighter, Red Mage, Monk, Thief, White Mage, Black Mage) Note: Can have more than one of each class.");
    party.push(characterName);
    party.push(className);
  }
  var confirmParty = confirm("Your party consists of: \n"+party+"\n\nDo you want to change anything? Once you click OK, you will not be able to change this going forward. CHOOSE WISELY!");
  if(confirmParty == true){
    expMult();
    setupInventory();
    document.location = 'story.html';
  }
  else{
    partySetup();
  }
  
}

function expMult(){
  var skillLevel = prompt("What skill level would you like to play at?\n\n Easy: For Newer players that are getting into RPG games (Enter 0)\n\n Medium: For experienced players that know how an RPG works and want a bit of a challenge. (Enter 1)\n\n Hard: For players that want the ultimate, brutal experience possible. You will struggle if you choose this skill level. (Enter 2)\n\n Impossible: Experience gain is halved, enemies do double damage, gold gain is halved. You will not survive! (Enter 3)");
  
  switch(skillLevel){
    case "0":
      multiplier = 5;
      localStorage.setItem('multiplier', multiplier)
      break;
    case "1":
      multiplier = 2.5;
      localStorage.setItem('multiplier', multiplier);
      break;
    case "2":
      multiplier = 1.25;
      localStorage.setItem('multiplier', multiplier);
      break;
    case "3":
      multiplier = 0.5;
      localStorage.setItem('multiplier', multiplier);
      break;
      
    default:
      expMult();
  }
}

function setupInventory(){
  var gold = 400;
  var orbLight = 0;
  var inventory = [//characterName, className, weapons, armor, spells
    orbLight, 
    gold, 
    [party[0],party[1], 0, 0, []], 
    [party[2],party[3], 0, 0, []],
    [party[4],party[5], 0, 0, []],
    [party[6],party[7], 0, 0, []] 
  ]
  localStorage.setItem("inventory",inventory);
}