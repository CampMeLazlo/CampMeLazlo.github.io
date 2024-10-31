// Passive Generation System

// Define tier list with costs and passive cake generation amounts for each level
const tierLevels = [
    { name: "Standard", cost: 100, cakesPerSecond: 1 },
    { name: "Stone", cost: 500, cakesPerSecond: 5 },
    { name: "Iron", cost: 2000, cakesPerSecond: 20 },
    { name: "Gold", cost: 10000, cakesPerSecond: 50 },
    { name: "Diamond", cost: 50000, cakesPerSecond: 100 }
];

// Equipment with upgrade levels, costs, and passive cakes generation
let equipment = {
    furnace: { level: 0, passiveCakes: 0 },
    waterBucket: { level: 0, passiveCakes: 0 },
    milkBottle: { level: 0, passiveCakes: 0 },
    hoe: { level: 0, passiveCakes: 0 }
};

// Player state
let player = {
    cakes: 0,
    cakesPerClick: 1,
    passiveCakesPerSecond: 0
};

// Function to purchase an upgrade for equipment
function purchaseUpgrade(equipmentName) {
    let equipmentItem = equipment[equipmentName];
    let nextLevel = equipmentItem.level + 1;

    if (nextLevel >= tierLevels.length) {
        alert(`${equipmentName} is already at the maximum tier.`);
        return;
    }

    let upgradeCost = tierLevels[nextLevel].cost;

    if (player.cakes >= upgradeCost) {
        player.cakes -= upgradeCost;
        equipmentItem.level = nextLevel;
        equipmentItem.passiveCakes = tierLevels[nextLevel].cakesPerSecond;
        updatePassiveCakesPerSecond();
        alert(`${equipmentName} upgraded to ${tierLevels[nextLevel].name} level!`);
    } else {
        alert(`Not enough cakes! You need ${upgradeCost} cakes to upgrade ${equipmentName}.`);
    }

    updateStats();
}

// Function to calculate total passive cakes per second from all equipment
function updatePassiveCakesPerSecond() {
    player.passiveCakesPerSecond = 0;
    for (let item in equipment) {
        player.passiveCakesPerSecond += equipment[item].passiveCakes;
    }
}

// Function to handle passive cake generation every second
function generatePassiveCakes() {
    player.cakes += player.passiveCakesPerSecond;
    updateStats();
}

// Function to display current stats (for console or UI)
function updateStats() {
    console.log(`Total cakes: ${player.cakes}`);
    console.log(`Cakes per click: ${player.cakesPerClick}`);
    console.log(`Passive cakes per second: ${player.passiveCakesPerSecond}`);
    for (let item in equipment) {
        console.log(`${item}: ${tierLevels[equipment[item].level].name} (Generates ${equipment[item].passiveCakes} cakes/second)`);
    }
}

// Call generatePassiveCakes every second
setInterval(generatePassiveCakes, 1000);

// Example upgrade buttons for each equipment
let upgradeButtons = {
    furnace: document.getElementById("furnaceUpgradeButton"),
    waterBucket: document.getElementById("waterBucketUpgradeButton"),
    milkBottle: document.getElementById("milkBottleUpgradeButton"),
    hoe: document.getElementById("hoeUpgradeButton")
};

// Add event listeners to each button for purchasing upgrades
for (let item in upgradeButtons) {
    upgradeButtons[item].addEventListener("click", function () {
        purchaseUpgrade(item);
    });
}
