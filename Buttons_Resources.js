// Resource object constructor
function Resource(name, description, baseCost, cps) {
    this.name = name;
    this.description = description;
    this.earned = 0;
    this.baseCost = baseCost; // Starting cost
    this.currentCost = baseCost; // Current cost, increases with purchases
    this.cakesPerSecond = cps; // Cakes generated per second
    this.increment = function (amount) {
        this.earned += amount;
    };
    this.increaseCost = function () {
        this.currentCost = Math.ceil(this.currentCost * 1.5); // Increase cost by 1.5%
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
let cursor = new Resource("Cursor", "These cursors generate 1 cake per second.", 10, 1);
let farmer = new Resource("Farmer", "These are the farmers hired to grow more crops.", 100, 2);
let cow = new Resource("Cow", "These are the cows that produce the milk for your cake.", 500, 5);
let chicken = new Resource("Chicken", "These are the chickens that create eggs for your cake.", 1000, 10);
let sugarMaster = new Resource("Sugar Master", "These are the sugar experts who will elevate your cake.", 3000, 20);
let baker = new Resource("Baker", "These are the bakers who prepare your cake.", 5000, 50);

// Player object with initial settings
let player = {
    cakesPerClick: 1, // Starts at 1 cake per click
    cakes: 0,
    cakesPerSecond: 0 // Starts with 0 passive cakes per second
};

// Function to handle cake click (make sure this is global for HTML access)
function clickCake() {
    player.cakes += player.cakesPerClick;
    cake.increment(player.cakesPerClick);
    updateStats();
}

// Passive cake generation function
function startPassiveCakeGeneration() {
    setInterval(() => {
        player.cakes += player.cakesPerSecond;
        updateStats();
    }, 1000);
}

// Purchase function for store items
function purchaseItem(item) {
    if (player.cakes >= item.currentCost) {
        player.cakes -= item.currentCost;
        item.increment(1);
        player.cakesPerSecond += item.cakesPerSecond;
        item.increaseCost();
        updateStats();
    } else {
        alert(`You need ${item.currentCost} cakes to purchase a ${item.name}.`);
    }
}

// Buttons for purchasing resources
let cursorButton = new Button("Cursor", `Costs ${cursor.baseCost} cakes, generates ${cursor.cakesPerSecond} cake per second.`, function () {
    purchaseItem(cursor);
});

let farmersButton = new Button("Farmer", `Costs ${farmer.baseCost} cakes, generates ${farmer.cakesPerSecond} cakes per second.`, function () {
    purchaseItem(farmer);
});

let cowsButton = new Button("Cow", `Costs ${cow.baseCost} cakes, generates ${cow.cakesPerSecond} cakes per second.`, function () {
    purchaseItem(cow);
});

let chickensButton = new Button("Chicken", `Costs ${chicken.baseCost} cakes, generates ${chicken.cakesPerSecond} cakes per second.`, function () {
    purchaseItem(chicken);
});

let sugarMastersButton = new Button("Sugar Master", `Costs ${sugarMaster.baseCost} cakes, generates ${sugarMaster.cakesPerSecond} cakes per second.`, function () {
    purchaseItem(sugarMaster);
});

let bakersButton = new Button("Baker", `Costs ${baker.baseCost} cakes, generates ${baker.cakesPerSecond} cakes per second.`, function () {
    purchaseItem(baker);
});

// Upgrade logic for specific resources
function upgradeResource(resource, cakesCost, cakesPerClickIncrease) {
    if (player.cakes >= cakesCost) {
        player.cakes -= cakesCost;
        player.cakesPerClick += cakesPerClickIncrease;
        resource.increment(1);
        alert(`${resource.name} upgraded! Cakes per click increased by ${cakesPerClickIncrease}. Total cakes per click: ${player.cakesPerClick}`);
        updateStats();
    } else {
        alert(`You need ${cakesCost} cakes to upgrade ${resource.name}.`);
    }
}

// Statistics Button for viewing stats in console
let statsButton = new Button("Statistics", "View CakeClicker stats", function () {
    console.log("Statistics button clicked");
    displayStats();
});

// Display resources and stats in the console
function displayStats() {
    console.log(`Cakes: ${cake.earned}`);
    console.log(`Cursors: ${cursor.earned} (Cost: ${cursor.currentCost}, CPS: ${cursor.cakesPerSecond})`);
    console.log(`Farmers: ${farmer.earned} (Cost: ${farmer.currentCost}, CPS: ${farmer.cakesPerSecond})`);
    console.log(`Cows: ${cow.earned} (Cost: ${cow.currentCost}, CPS: ${cow.cakesPerSecond})`);
    console.log(`Chickens: ${chicken.earned} (Cost: ${chicken.currentCost}, CPS: ${chicken.cakesPerSecond})`);
    console.log(`Sugar Masters: ${sugarMaster.earned} (Cost: ${sugarMaster.currentCost}, CPS: ${sugarMaster.cakesPerSecond})`);
    console.log(`Bakers: ${baker.earned} (Cost: ${baker.currentCost}, CPS: ${baker.cakesPerSecond})`);
    console.log(`Total cakes per click: ${player.cakesPerClick}`);
    console.log(`Total cakes per second: ${player.cakesPerSecond}`);
    console.log(`Total cakes: ${player.cakes}`);
}

// Function to update stats on the screen
function updateStats() {
    document.getElementById("cake").innerText = `${player.cakes} cakes`;
    displayStats();
}

// Placeholder functions for Options and Stats toggling (add implementation as needed)
function OptionToggle() {
    console.log("Options toggled.");
}

function StatsToggle() {
    console.log("Stats toggled.");
}

// Initialize the game and start passive generation
updateStats();
startPassiveCakeGeneration();
