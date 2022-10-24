var xpMultipier = localStorage.getItem("multiplier"); //based off difficulty
var inventory = localStorage.getItem("inventory");

var rngEnemies = [//WILL COME BACK AND PUT IN SPELLS AND STATUSES LATER WHEN CODED AND DECIDED WHO HAS WHAT?
  ["Imp", 8], //L1
  ["Wolf", 10], //L1
  ["Evil Horse", 64], //L1
  ["Bandit", 30], //L2 
  ["Ogre", 100], //L2
  ["Ghoul",30], //L2
  ["Wizard", 300], //L2
  ["Earth Elemental", 288], //L3
  ["Giant", 240], //L3
  ["GrOgre", 150], //L3
  ["WzOgre", 250], //L4
  ["Hellhound", 300], //L4
  ["Worm", 330], //L4
  ["Lobster", 330], //L5
  ["Sea Snake", 275], //L5
  ["Ghost", 375], //L5
  ["Blue Dragon", 525], //L6
  ["Death Knight", 500], //L6
  ["Gas Dragon", 480], //FL
  ["Black Knight", 440], //FL
  ["Wyvern", 450] //FL
]
//enemyName, enemyHP, spells

//NOTE: is initially a 2d array with having each random enemy in the game, but turns into a 3d array by listing skills.
//NOTE: Spells are automatically scripted to one hit and has a 100% hitrate, but the damage can be mitigated with resistences. 


var bosses = [
  ["Garland the Traitor", 80], //L1
  ["Pirates", 6], //L2
  ["Astos", 170], //L2
  ["Lich", 400],
  ["Cerberus", 500],
  ["The Kraken", 600],
  ["Tiamat", 800],
  ["Chaos", 2000]
]; //bossName, bossHP

var whiteSpells = []; //spellName, spellLevel, spellUsers(ie. who can use the spell)

var blackSpells = []; //spellName, spellLevel, spellUsers(ie. who can use the spell)