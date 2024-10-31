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
let farmer = new Resource("Farmer", "These are the farmers hired to grow more crops.");
let chicken = new Resource("Chicken", "These are the chickens that create eggs for your cake.");
let cow = new Resource("Cow", "These are the cows that produce the milk for your cake.");
let baker = new Resource("Baker", "These are the bakers who prepare your cake.");
let sugarMaster = new Resource("Sugar Master", "These are the sugar experts who will elevate your cake.");
let cursor = new Resource("Cursor", "These cursors generate 1 cake per second.");

let hoe = new Resource("Hoe", "These are the tools to tend to your soil more effectively.");
let furnace = new Resource("Furnace", "These are the ovens you bake your cake in.");
let water = new Resource("Water", "This is the quality of water used in cake preparation.");
let milk = new Resource("Milk", "This is the milk quality for your cake.");

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
        // Only add passive cakes if player has earned cursors or other sources of passive cakes
        player.cakes += player.cakesPerSecond;
        updateStats();
    }, 1000);
}

// Upgrade buttons for resources
let farmersButton = new Button("Farmers", "Click this to promote a new farmer.", function () {
    farmer.increment(1);
    updateStats();
});

let chickensButton = new Button("Chicken", "Click this to birth a new chicken.", function () {
    chicken.increment(1);
    updateStats();
});

let cowsButton = new Button("Cow", "Click this to create a new cow.", function () {
    cow.increment(1);
    updateStats();
});

let bakersButton = new Button("Baker", "Click this to promote a new baker.", function () {
    baker.increment(1);
    updateStats();
});

let sugarMastersButton = new Button("Sugar Master", "Click this to promote a new sugar master.", function () {
    sugarMaster.increment(1);
    updateStats();
});

let cursorButton = new Button("Cursor", "Click this to buy a cursor. Each cursor generates 1 cake per second.", function () {
    cursor.increment(1);
    player.cakesPerSecond += 1; // Increase passive cakes per second by 1 for each cursor
    updateStats();
});

// Equipment upgrade buttons for each level and type
let stoneHoeButton = new Button("Stone Hoe", "Upgrade to a stone hoe for improved soil preparation.", function () {
    upgradeResource(hoe, 10, 2);
});
let ironHoeButton = new Button("Iron Hoe", "Upgrade to an iron hoe for better soil preparation.", function () {
    upgradeResource(hoe, 20, 4);
});
let goldHoeButton = new Button("Gold Hoe", "Upgrade to a gold hoe for premium soil preparation.", function () {
    upgradeResource(hoe, 50, 8);
});
let diamondHoeButton = new Button("Diamond Hoe", "Upgrade to a diamond hoe for elite soil preparation.", function () {
    upgradeResource(hoe, 100, 16);
});

let stoneWaterButton = new Button("Stone Water Bucket", "Upgrade to a stone water bucket for better water quality.", function () {
    upgradeResource(water, 10, 2);
});
let ironWaterButton = new Button("Iron Water Bucket", "Upgrade to an iron water bucket for superior water quality.", function () {
    upgradeResource(water, 20, 4);
});
let goldWaterButton = new Button("Gold Water Bucket", "Upgrade to a gold water bucket for premium water quality.", function () {
    upgradeResource(water, 50, 8);
});
let diamondWaterButton = new Button("Diamond Water Bucket", "Upgrade to a diamond water bucket for elite water quality.", function () {
    upgradeResource(water, 100, 16);
});

let stoneMilkButton = new Button("Stone Milk Bottle", "Upgrade to a stone milk bottle for richer milk quality.", function () {
    upgradeResource(milk, 10, 2);
});
let ironMilkButton = new Button("Iron Milk Bottle", "Upgrade to an iron milk bottle for superior milk quality.", function () {
    upgradeResource(milk, 20, 4);
});
let goldMilkButton = new Button("Gold Milk Bottle", "Upgrade to a gold milk bottle for premium milk quality.", function () {
    upgradeResource(milk, 50, 8);
});
let diamondMilkButton = new Button("Diamond Milk Bottle", "Upgrade to a diamond milk bottle for elite milk quality.", function () {
    upgradeResource(milk, 100, 16);
});

let stoneFurnaceButton = new Button("Stone Furnace", "Upgrade to a stone furnace for faster baking.", function () {
    upgradeResource(furnace, 10, 2);
});
let ironFurnaceButton = new Button("Iron Furnace", "Upgrade to an iron furnace for better baking speed.", function () {
    upgradeResource(furnace, 20, 4);
});
let goldFurnaceButton = new Button("Gold Furnace", "Upgrade to a gold furnace for premium baking speed.", function () {
    upgradeResource(furnace, 50, 8);
});
let diamondFurnaceButton = new Button("Diamond Furnace", "Upgrade to a diamond furnace for elite baking speed.", function () {
    upgradeResource(furnace, 100, 16);
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
    console.log(`Farmers: ${farmer.earned}`);
    console.log(`Chickens: ${chicken.earned}`);
    console.log(`Cows: ${cow.earned}`);
    console.log(`Bakers: ${baker.earned}`);
    console.log(`Sugar Masters: ${sugarMaster.earned}`);
    console.log(`Cursors: ${cursor.earned}`);
    console.log(`Hoes: ${hoe.earned}`);
    console.log(`Furnaces: ${furnace.earned}`);
    console.log(`Water: ${water.earned}`);
    console.log(`Milk: ${milk.earned}`);
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
