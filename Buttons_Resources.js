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

// Helper function to create and attach a button to the page
function createButton(buttonObj, containerId) {
    let button = document.createElement("button");
    button.innerText = buttonObj.name;
    button.title = buttonObj.description;
    button.addEventListener("click", buttonObj.onClick);
    document.getElementById(containerId).appendChild(button);
}

// Global resources
let cake = new Resource("Cake", "These are the cakes you clicked!");
let farmer = new Resource("Farmer", "These are the farmers hired to grow more crops.");
let chicken = new Resource("Chicken", "These are the chickens that create eggs for your cake.");
let cow = new Resource("Cow", "These are the cows that produce the milk for your cake.");
let baker = new Resource("Baker", "These are the bakers who prepare your cake.");
let sugarMaster = new Resource("Sugar Master", "These are the sugar experts who will elevate your cake.");

// Tiers for items
let tiers = ["Standard", "Stone", "Iron", "Gold", "Diamond"];

let equipment = {
    furnace: { level: 0, description: "Furnace for baking", name: "Furnace" },
    waterBucket: { level: 0, description: "Water bucket for baking", name: "Water Bucket" },
    milkBottle: { level: 0, description: "Milk bottle for baking", name: "Milk Bottle" },
    hoe: { level: 0, description: "Hoe for soil preparation", name: "Hoe" }
};

// Function to upgrade equipment tier
function upgradeEquipment(equipmentItem) {
    if (equipment[equipmentItem].level < tiers.length - 1) {
        equipment[equipmentItem].level += 1;
        alert(`${equipment[equipmentItem].name} upgraded to ${tiers[equipment[equipmentItem].level]} level!`);
        updateStats();
    } else {
        alert(`${equipment[equipmentItem].name} is already at the highest level.`);
    }
}

// Player and cakes
let player = {
    cakesPerClick: 1,
    cakes: 0
};

// Cake clicking function (standalone, so it can be called directly in HTML)
function clickCake() {
    player.cakes += player.cakesPerClick;
    cake.increment(player.cakesPerClick);
    updateStats();
}

// Upgrade buttons with functionality
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

// Equipment upgrade buttons
let furnaceButton = new Button("Upgrade Furnace", "Upgrade your furnace for better baking.", function () {
    upgradeEquipment("furnace");
});

let waterBucketButton = new Button("Upgrade Water Bucket", "Upgrade your water bucket for better cake quality.", function () {
    upgradeEquipment("waterBucket");
});

let milkBottleButton = new Button("Upgrade Milk Bottle", "Upgrade your milk bottle for richer cakes.", function () {
    upgradeEquipment("milkBottle");
});

let hoeButton = new Button("Upgrade Hoe", "Upgrade your hoe for better soil preparation.", function () {
    upgradeEquipment("hoe");
});

// Option and settings buttons
let optionsButton = new Button("Options", "Open game options.", function () {
    alert("Options menu opened.");
});
let saveButton = new Button("Save", "Save your game progress.", function () {
    alert("Game progress saved.");
});
let wipeSaveButton = new Button("Wipe Save", "Erase all game data.", function () {
    alert("Game data erased.");
});
let settingsButton = new Button("Settings", "Game settings.", function () {
    alert("Settings menu opened.");
});
let volumeButton = new Button("Volume", "Adjust game volume.", function () {
    alert("Volume settings opened.");
});
let otherSettingsButton = new Button("Other Settings", "View other settings.", function () {
    alert("Other settings menu opened.");
});

// Display stats in the console or UI
function displayStats() {
    console.log(`Cakes: ${cake.earned}`);
    console.log(`Farmers: ${farmer.earned}`);
    console.log(`Chickens: ${chicken.earned}`);
    console.log(`Cows: ${cow.earned}`);
    console.log(`Bakers: ${baker.earned}`);
    console.log(`Sugar Masters: ${sugarMaster.earned}`);
    console.log(`Furnace: ${tiers[equipment.furnace.level]}`);
    console.log(`Water Bucket: ${tiers[equipment.waterBucket.level]}`);
    console.log(`Milk Bottle: ${tiers[equipment.milkBottle.level]}`);
    console.log(`Hoe: ${tiers[equipment.hoe.level]}`);
    console.log(`Total cakes per click: ${player.cakesPerClick}`);
    console.log(`Total cakes: ${player.cakes}`);
}

// Update function for the UI
function updateStats() {
    displayStats();
}

// Attach buttons to HTML on page load
window.onload = function () {
    createButton(farmersButton, "upgradesContainer");
    createButton(chickensButton, "upgradesContainer");
    createButton(cowsButton, "upgradesContainer");
    createButton(bakersButton, "upgradesContainer");
    createButton(sugarMastersButton, "upgradesContainer");
    
    // Equipment upgrade buttons
    createButton(furnaceButton, "equipmentContainer");
    createButton(waterBucketButton, "equipmentContainer");
    createButton(milkBottleButton, "equipmentContainer");
    createButton(hoeButton, "equipmentContainer");

    // Options and settings buttons
    createButton(optionsButton, "optionsContainer");
    createButton(saveButton, "optionsContainer");
    createButton(wipeSaveButton, "optionsContainer");
    createButton(settingsButton, "optionsContainer");
    createButton(volumeButton, "optionsContainer");
    createButton(otherSettingsButton, "optionsContainer");
};
