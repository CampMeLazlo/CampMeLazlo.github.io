// Resource object constructor
function Resource(name, description) {
    this.name = name;
    this.description = description;
    this.earned = 0;
    this.increment = function (amount) {
        this.earned += amount;
    };
}

// Button object constructor
function Button(name, description, onClickFunction) {
    this.name = name;
    this.description = description;
    this.onClick = onClickFunction;
}

// Global resources
let cake = new Resource("Cake", "These are the cakes you clicked!");
let farmer = new Resource("Farmer", "Farmers generate crops.");
let chicken = new Resource("Chicken", "Chickens lay eggs for cakes.");
let cow = new Resource("Cow", "Cows provide milk for cakes.");
let baker = new Resource("Baker", "Bakers make cakes.");
let sugarMaster = new Resource("Sugar Master", "Sugar Masters improve cake quality.");

// Player object
let player = {
    cakesPerClick: 1,
    cakes: 0,
    cakesPerSecond: 0 // Starts at 0, so no passive generation initially
};

// Building object constructor
function Building(name, baseCost, cakeRate) {
    this.name = name;
    this.level = 0;
    this.baseCost = baseCost;
    this.currentCost = baseCost;
    this.cakeRate = cakeRate; // Cakes generated per second by this building

    // Purchase the building
    this.purchase = function () {
        if (player.cakes >= this.currentCost) {
            player.cakes -= this.currentCost;
            this.level++;
            player.cakesPerSecond += this.cakeRate; // Increase cakes per second
            this.currentCost = Math.floor(this.baseCost * Math.pow(1.15, this.level)); // Scale cost
            updateStats();
            saveGame();
            alert(`${this.name} purchased! Cakes per second increased by ${this.cakeRate}.`);
        } else {
            alert(`You need ${this.currentCost} cakes to purchase a ${this.name}.`);
        }
    };
}

// Instantiate buildings with costs and rates
let chickenCoop = new Building("Chicken Coop", 50, 1); // 1 cake/sec
let cowPen = new Building("Cow Pen", 100, 3);          // 3 cakes/sec
let farm = new Building("Farm", 250, 5);               // 5 cakes/sec
let bakery = new Building("Bakery", 500, 10);          // 10 cakes/sec
let sugarLab = new Building("Sugar Lab", 1000, 20);    // 20 cakes/sec

// Cake Clicker button
let cakeClicker = new Button(
    "Cake Clicker",
    "Click this to claim your cake.",
    function () {
        player.cakes += player.cakesPerClick;
        cake.increment(player.cakesPerClick);
        updateStats();
    }
);

// Upgrade buttons for each building
let chickenButton = new Button("Buy Chicken Coop", "Purchase a chicken coop.", function () {
    chickenCoop.purchase();
});
let cowButton = new Button("Buy Cow Pen", "Purchase a cow pen.", function () {
    cowPen.purchase();
});
let farmerButton = new Button("Buy Farm", "Purchase a farm.", function () {
    farm.purchase();
});
let bakerButton = new Button("Buy Bakery", "Purchase a bakery.", function () {
    bakery.purchase();
});
let sugarMasterButton = new Button("Buy Sugar Lab", "Purchase a sugar lab.", function () {
    sugarLab.purchase();
});

// Display the resources and player stats in the console (or update UI)
function displayStats() {
    console.log(`Cakes: ${cake.earned}`);
    console.log(`Farmers: ${farmer.earned}`);
    console.log(`Chickens: ${chicken.earned}`);
    console.log(`Cows: ${cow.earned}`);
    console.log(`Bakers: ${baker.earned}`);
    console.log(`Sugar Masters: ${sugarMaster.earned}`);
    console.log(`Cakes per click: ${player.cakesPerClick}`);
    console.log(`Cakes per second: ${player.cakesPerSecond}`);
    console.log(`Total cakes: ${player.cakes}`);
}

// Function to update stats on the screen
function updateStats() {
    displayStats();
}

// Passive cake generation function
function generatePassiveCakes() {
    if (player.cakesPerSecond > 0) { // Only generate cakes if cakesPerSecond is greater than 0
        player.cakes += player.cakesPerSecond;
        cake.increment(player.cakesPerSecond);
        updateStats();
    }
}

// Set interval to generate cakes per second (passive income)
setInterval(generatePassiveCakes, 1000);

// Save and load functions to preserve game state
function saveGame() {
    const gameState = {
        cakes: player.cakes,
        cakesPerClick: player.cakesPerClick,
        cakesPerSecond: player.cakesPerSecond,
        cakeEarned: cake.earned,
        chickenCoopLevel: chickenCoop.level,
        cowPenLevel: cowPen.level,
        farmLevel: farm.level,
        bakeryLevel: bakery.level,
        sugarLabLevel: sugarLab.level
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
    console.log("Game saved!");
}

function loadGame() {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
        player.cakes = savedState.cakes || 0;
        player.cakesPerClick = savedState.cakesPerClick || 1;
        player.cakesPerSecond = savedState.cakesPerSecond || 0;
        cake.earned = savedState.cakeEarned || 0;

        chickenCoop.level = savedState.chickenCoopLevel || 0;
        cowPen.level = savedState.cowPenLevel || 0;
        farm.level = savedState.farmLevel || 0;
        bakery.level = savedState.bakeryLevel || 0;
        sugarLab.level = savedState.sugarLabLevel || 0;

        // Recalculate costs after loading
        chickenCoop.currentCost = Math.floor(chickenCoop.baseCost * Math.pow(1.15, chickenCoop.level));
        cowPen.currentCost = Math.floor(cowPen.baseCost * Math.pow(1.15, cowPen.level));
        farm.currentCost = Math.floor(farm.baseCost * Math.pow(1.15, farm.level));
        bakery.currentCost = Math.floor(bakery.baseCost * Math.pow(1.15, bakery.level));
        sugarLab.currentCost = Math.floor(sugarLab.baseCost * Math.pow(1.15, sugarLab.level));

        updateStats();
        console.log("Game loaded!");
    }
}

// Auto-save every 30 seconds
setInterval(saveGame, 30000);

// Load game on page load
window.onload = function () {
    loadGame();
};
