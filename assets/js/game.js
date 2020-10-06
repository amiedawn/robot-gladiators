// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot-s health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; //3 possible enemies
var enemyHealth = 50;
var enemyAttack = 12;

 
var fight = function (enemyName) {
  // repeat and execute as long as the enemy robot is alive
  while(enemyHealth > 0 && playerHealth > 0) { //enemy and player can't be dead and still fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if user picks "skip" confirm and then stops the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes, (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        //exit loop when skip has been chosen
        break;
      }
    }  
        
      // Remove enemy's health by subracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;

      // Log a resulting message to the console so we know that it worked.
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
   
      // Check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        
        //award player money for winning
        playerMoney = playerMoney + 20;

        //exit while loop if enemyHealth goes below 0
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
      }

      // Remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;

      // Log a resulting message to the console so we know that it worked.
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //exit while loop if playerHealth goes below 0
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  }    
   
//call the function with a for loop
for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  //call fight function with enemy robot
  fight(pickedEnemyName);
}
