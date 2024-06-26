//Step 5
// console.log("Hello World"); 

let xp = 0; //Step 6, 7
let health = 100; //Step 8
let gold = 50; //Step 8
let currentWeapon = 0; //Step 9
let fighting; //Step 10
let monsterHealth; //Step 11
//let inventory = ["stick", "dagger", "sword"]; //Step 11, 12, 13
let inventory = ["stick"]; //Step 14
//let button1 = document.querySelector("#button1"); //Step 19
const button1 = document.querySelector("#button1"); //Step 21
const button2 = document.querySelector("#button2"); //Step 22
const button3 = document.querySelector("#button3"); //Step 22
const text = document.querySelector("#text"); //Step 33
const xpText = document.querySelector("#xpText"); //Step 33
const healthText = document.querySelector("#healthText"); //Step 33
const goldText = document.querySelector("#goldText"); //Step 33
const monsterStats = document.querySelector("#monsterStats"); //Step 33
const monsterName = document.querySelector("#monsterName"); //Step 33
const monsterHealthText = document.querySelector("#monsterHealth"); //Step 34


//Step 79, 80
const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
];


//step 107
const monsters = [
    {
      name: "slime",
      level: 2,
      health: 15
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60
    },
    {
      name: "dragon",
      level: 20,
      health: 300
    }
  
  ]


//Step 51, 52, 53, 54, 55, 56, 57, 58, 70, 112, 131, 136, 140, 159, 174
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        // "button functions": [goTown, goTown, goTown],
        "button functions": [goTown, goTown, easterEgg],
        //text: "The monster screams Arg! as it dies. You gain experience points and find gold."
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;"
    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    },
]; //Step 51, 52, 53, 54, 55, 56, 57, 58, 70, 112, 131, 136, 140, 159, 174


// initialize buttons //Step 39, 40, 41

button1.onclick = goStore;
button2.onclick = goCave; 
button3.onclick = fightDragon; 


//Step 50, 59, 63, 64, 65, 66, 67, 133, 138
function update(location) {
    monsterStats.style.display = "none";
    //button1.innerText = "Go to store";
    button1.innerText = location["button text"][0];
    //button2.innerText = "Go to cave";
    button2.innerText = location["button text"][1];
    //button3.innerText = "Fight dragon";
    button3.innerText = location["button text"][2];
    //button1.onclick = goStore;
    button1.onclick = location["button functions"][0];
    //button2.onclick = goCave;
    button2.onclick = location["button functions"][1];
    //button3.onclick = fightDragon;
    button3.onclick = location["button functions"][2];
    //text.innerText = "You are in the town square. You see a sign that says \"Store\".";
    //text.innerText = location.text;
    text.innerHTML = location.text;
}

//Step 47, 48, 49, 59(remove all code from func), 60, 61, 62
function goTown() {
    update(locations[0]);
    // button1.innerText = "Go to store";
    // button2.innerText = "Go to cave";
    // button3.innerText = "Fight dragon";
    // button1.onclick = goStore;
    // button2.onclick = goCave;
    // button3.onclick = fightDragon;
    // text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}


//Step 35, 36, 42, 44, 45, 59(remove all code from func), 68
function goStore() {
    update(locations[1]);
// console.log("Going to store.");
//   button1.innerText = "Buy 10 health (10 gold)";
//   button1.onclick = buyHealth;
//   button2.innerText = "Buy weapon (30 gold)";
//   button2.onclick = buyWeapon;
//   button3.innerText = "Go to town square";
//   button3.onclick = goTown;
//   text.innerText = "You enter the store.";
}

//Step 37, 71
function goCave() {
    //console.log("Going to cave.");
    update(locations[2]);
}


//Step 46, 72, 73, 74, 75, 76, 77, 78
function buyHealth() {
    // gold: gold = gold - 10;
    // health: health = health + 10;
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

//Step 46, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98
function buyWeapon() {
    // if (currentWeapon < 3) {
    // if (currentWeapon < weapons.length) {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            // currentWeapon += 1;
            currentWeapon++;
            goldText.innerText =  gold;
            // let newWeapon = weapons;
            // let newWeapon = weapons[currentWeapon];
            let newWeapon = weapons[currentWeapon].name;
            // text.innerText = "You now have a new weapon.";
            text.innerText = "You now have a " + newWeapon + ".";   
            inventory.push(newWeapon);
            //text.innerText += " In your inventory you have: ";
            text.innerText += " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

//Step 46
//function goTown() {
//}

//Step 99, 100, 101, 102, 103, 104, 105, 106
function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        //let currentWeapon;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}


//Step 69, 109
function fightSlime() {
    fighting = 0;
    goFight();
}

//Step 69, 110
function fightBeast() {
    fighting = 1;
    goFight();
}

//Step 38, 110
function fightDragon() {
    fighting = 2;
    goFight();
}


//Step 108, 113, 114, 115, 116
function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

//Step 111, 117[10 minutes to realize that I forgot the "." at the end :)], 118, 119, 120, 121, 122, 123, 124, 137, 141, 147, 148, 149, 152, 153, 154, 155
function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    // health -= monsters[fighting].level;
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()) {
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += " You miss.";
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        if (fighting === 2) {
            winGame();
          } else {
            defeatMonster();
          }
    }
    if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeapon--;
    }
}


//Step 142, 143, 144, 146
function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    // return hit;
    return hit > 0 ? hit : 0;
}


//Step 111, 126
function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}


//Step 125, 126, 127, 128, 129, 130
function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}


//Step 125, 134
function lose() {
    update(locations[5]);
}


//Step 135
function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ['stick'];
    xpText.innerText = xp;
    goldText.innerText = gold;
    healthText.innerText = health;
    goTown();
}

//Step 139
function winGame() {
    update(locations[6]);
}


//Step 150, 151
function isMonsterHit() {
    return Math.random() > .2 || health < 20;
}


//Step 156
function easterEgg() {
    update(locations[7]);
}


//Step 157, 160, 161, 162, 163, 164, 165, 166, 167, 168(change x in for loop to i), 169, 170, 171, 172, 173
function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
//   text.innerText = "You picked " + guess + ". Here are the random numbers:";
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

//   for (let x = 1; x < 5; x++) {}
  for (let i = 1; i < 5; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
  }
  if (health <= 0) {
    lose();
  }
}


//Step 158
function pickTwo() {
    pick(2);
}

//Step 158
function pickEight() {
    pick(8);
}