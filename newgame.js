var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android","Robo Trumble"];
enemyNames [0];
enemyNames[1];
enemyNames[2];
console.log(enemyNames.length,enemyNames);
for (var i = 0; i< enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyName[i] + "is at"+i+ "index");
}

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to fight or skip this battle? ENTER 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + "has died!");
        }
        else {
            window.alert(enemyNames + "still has" + enemyHealth + "health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyNames + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames = "has died!");
        }
        else {
            window.alert(enemyNames + "still has" + enemyHealth + "health left.");
        }
        //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip.
        var confirmSkip = window.confirm("are you sure you want to SKIP?");

        //if yes true, leave fight
        if (confirmSkip){
            window.alert(playerName + "has decided to skip this fight Goodbye!");
            //subtract money
            playerMoney = playerMoney - 2;
        }
        //if false, ask question again
        else {
            fight();
        }
        window.alert("playerName has chosen to skip the fight");
    }
    else {
        window.alert("You need to pick a valid option. Try again!");
    }
}



//fight();
