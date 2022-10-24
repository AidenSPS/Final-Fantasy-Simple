var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var option5 = document.getElementById("option5");
var text = document.getElementById("storyText");
var continueButton = document.getElementById("progressStory");

function progressStory(){
  storyIntroduce();
  outsideCorneilia();
  
}


//Story Functions
function storyIntroduce(){ //INTRO
  text.innerHTML = "The world veils in darkness. The wind stops, the ocean roars wild, the earth lies in decay, fire blazes across the land. There was a prophecy which states 'When the world lies in darkness, four Warriors of Light will come and bring light to the darkend world'. After a long time, four brave souls arrive holding mysterious orbs.";
  option1.innerHTML = "Continue";
  if(option1 == "Continue"){
    continueButton.onClick = outsideCorneilia();
  }
}
function outsideCorneilia(){ //ST
  text.innerHTML = "You and your party are outside of Corneilia. What do you want to do?";
  option1.innerHTML = "Enter the City";
  option2.innerHTML = "Walk Around";
  if(option1 == "Enter the City"){
    continueButton.onClick = enterCorneilia();
  }
  if(option2 == "Walk Around"){
    continueButton.onClick = walkAround();
  }
}

function walkAround(){ //RC
    text.innerHTML = "TESTING RANDOM ENCOUNTERS"
}
function enterCorneilia(){ //ST
  text.innerHTML = "TEST"
}
function shop(){ //SH 
  text.innerHTML = ""
}
function toKing(){ //ST
  text.innerHTML = ""
}

function toTOF(){ //ST
  text.innerHTML = ""
}
function fightGarland(){ //ST + BF
  text.innerHTML = ""
}
function savePrincess(){ //ST
  text.innerHTML = ""
}
function buildBridge(){ //ST
  text.innerHTML = ""
}
function outsidePravoka(){ //ST
  text.innerHTML = ""
}
function enterProvoka(){ //ST
  text.innerHTML = ""
}
function pirateAmbush(){ //ST + BF
  text.innerHTML = ""
}
function pirateWin(){
  text.innerHTML = ""
}
function enterElfland(){
  text.innerHTML = ""
}
function enterElvenPalace(){
  text.innerHTML = ""
}
function exploreRuinedCastle(){
  text.innerHTML = ""
}
function toMarsh(){
  text.innerHTML = ""
}
function toCastle(){
  text.innerHTML = ""
}
function fightEvilKing(){
  text.innerHTML = ""
}
function toWitchCave(){
  text.innerHTML = ""
}
function toPalace(){
  text.innerHTML = ""
}
function enterMelmond(){
  text.innerHTML = ""
}
function toEarthOne(){
  text.innerHTML = ""
}
function toVampire(){
  text.innerHTML = ""
}
function fightVampire(){
  text.innerHTML = ""
}
function exitEarthOne(){
  text.innerHTML = ""
}
function toSarda(){
  text.innerHTML = ""
}
function obtainRod(){
  text.innerHTML = ""
}
function toEarthTwo(){
  text.innerHTML = ""
}
function useRod(){
  text.innerHTML = ""
}
function fightLich(){
  text.innerHTML = ""
}
function exitEarthTwo(){
  text.innerHTML = ""
}
function enterLake(){
  text.innerHTML = ""
}
function obtainCanoe(){
  text.innerHTML = ""
}
function toGulg(){
  text.innerHTML = ""
}
function fightKary(){
  text.innerHTML = ""
}
function exitGulg(){
  text.innerHTML = ""
}
function toIceCave(){
  text.innerHTML = ""
}
function getRosettaStone(){
  text.innerHTML = ""
}
function getAirship(){
  text.innerHTML = ""
}
function enterOnrac(){
  text.innerHTML = ""
}
function getBottle(){
  text.innerHTML = ""
}
function toGaia(){
  text.innerHTML = ""
}
function getOxyale(){
  text.innerHTML = ""
}
function enterWaterShrine(){
  text.innerHTML = ""
}
function fightKraken(){
  text.innerHTML = ""
}
function exitShrine(){
  text.innerHTML = ""
}
function translateSlab(){
  text.innerHTML = ""
}
function obtainChime(){
  text.innerHTML = ""
}
function obtainCube(){
  text.innerHTML = ""
}
function toMirageTower(){
  text.innerHTML = ""
}
function fightTiamat(){
  text.innerHTML = ""
}
function exitMirageTower(){
  text.innerHTML = ""
}
function toTOFR(){
  text.innerHTML = ""
}
function lichTOFR(){
  text.innerHTML = ""
}
function karyTOFR(){
  text.innerHTML = ""
}
function krakenTOFR(){
  text.innerHTML = ""
}
function tiamatTOFR(){
  text.innerHTML = ""
}
function finalBoss(){
  text.innerHTML = ""
}
function fightChaos(){
  text.innerHTML = ""
}
function gameOver(){
  text.innerHTML = ""
}