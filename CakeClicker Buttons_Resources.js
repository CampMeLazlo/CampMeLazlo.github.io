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
let hoe = new Resource("Hoe", "These are the tools to tend to your soil more effectively.");
let furnace = new Resource("Furnace", "These are the ovens you bake your cake in.");
let water = new Resource("Water", "This is the quality of water used in cake preparation.");
let seed = new Resource("Seed", "This is the quality of seed used to grow ingredients for your cake.");

function updateCakeCount() {
    document.getElementById("cake").innerHTML = `${cake.earned} cakes`;
}

function clickCake() {
    cake.increment(1);
    updateStats();
    updateCakeCount();
}

const originalLeftContent = document.getElementById("left").innerHTML;

   let isOptionsOpen = false;
   let isStatsOpen = false;

   function OptionToggle() {
      if (isOptionsOpen) {
         document.getElementById("left").innerHTML = originalLeftContent;
         isOptionsOpen = false;
      } else {
         document.getElementById("left").innerHTML = `
            <div>
               <h2>Options</h2>
               <h2>Save</h2>
               <h2>Wipe save</h2>
            </div>
            <div>
               <h2>Settings</h2>
               <h2>Volume</h2>
               <h2>Other settings</h2>
            </div>`;
         isOptionsOpen = true;
         isStatsOpen = false;
      }
   }

   function StatsToggle() {
      if (isStatsOpen) {
         document.getElementById("left").innerHTML = originalLeftContent;
         isStatsOpen = false;
      } else {
         document.getElementById("left").innerHTML = `
            <div>
               <h2>Statistics</h2>
               <h2>Basic game stats</h2>
               <h2>Leaderboard</h2>
            </div>
            <div>
               <h2>Upgrades</h2>
               <h3>List of upgrades/types of cakes</h3>
            </div>
            <div>
               <h2>List of achievements</h2>
            </div>`;
         isStatsOpen = true;
         isOptionsOpen = false;
      }
   }

// Upgrade buttons
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

let hoeButton = new Button("Hoe", "Click this to purchase an additional hoe.", function () {
    hoe.increment(1);
    updateStats();
});

let furnaceButton = new Button("Furnace", "Click this to purchase an additional furnace.", function () {
    furnace.increment(1);
    updateStats();
});

let waterButton = new Button("Water", "Click this to improve water quality.", function () {
    water.increment(1);
    updateStats();
});

let seedButton = new Button("Seed", "Click this to improve seed quality.", function () {
    seed.increment(1);
    updateStats();
});

// Statistics Button
let statsButton = new Button("Statistics", "View CakeClicker stats", function () {
    console.log("Statistics button clicked");
    displayStats();
});

// Display the resources in the console (or update UI)
function displayStats() {
    console.log(`Cakes: ${cake.earned}`);
    console.log(`Farmers: ${farmer.earned}`);
    console.log(`Chickens: ${chicken.earned}`);
    console.log(`Cows: ${cow.earned}`);
    console.log(`Bakers: ${baker.earned}`);
    console.log(`Sugar Masters: ${sugarMaster.earned}`);
    console.log(`Hoes: ${hoe.earned}`);
    console.log(`Furnaces: ${furnace.earned}`);
    console.log(`Water: ${water.earned}`);
    console.log(`Seed: ${seed.earned}`);
}

// Function to update stats on the screen
function updateStats() {
    displayStats();
}

// Simulating some button clicks
cakeClicker.onClick();
farmersButton.onClick();
chickensButton.onClick();
cowsButton.onClick();
bakersButton.onClick();
sugarMastersButton.onClick();
hoeButton.onClick();
furnaceButton.onClick();
waterButton.onClick();
seedButton.onClick();

// Show the updated stats
statsButton.onClick();
