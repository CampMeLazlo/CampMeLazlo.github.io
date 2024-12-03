// Function to save the game state to localStorage
function saveGameState() {
    const gameState = {
        cakes: player.cakes,
        cakesPerSecond: player.cakesPerSecond,
        cakesPerClick: player.cakesPerClick,
        resources: {
            cursor: cursor.earned,
            farmer: farmer.earned,
            cow: cow.earned,
            chicken: chicken.earned,
            sugarMaster: sugarMaster.earned,
            baker: baker.earned,
        },
    };
    localStorage.setItem("cakeClickerSave", JSON.stringify(gameState));
    console.log("Game saved!");
}

// Function to load the game state from localStorage
function loadGameState() {
    const savedState = localStorage.getItem("cakeClickerSave");
    if (savedState) {
        const gameState = JSON.parse(savedState);
        player.cakes = gameState.cakes || 0;
        player.cakesPerSecond = gameState.cakesPerSecond || 0;
        player.cakesPerClick = gameState.cakesPerClick || 1;

        // Load resources
        cursor.earned = gameState.resources.cursor || 0;
        farmer.earned = gameState.resources.farmer || 0;
        cow.earned = gameState.resources.cow || 0;
        chicken.earned = gameState.resources.chicken || 0;
        sugarMaster.earned = gameState.resources.sugarMaster || 0;
        baker.earned = gameState.resources.baker || 0;

        console.log("Game loaded!");
    } else {
        console.log("No save data found. Starting a new game.");
    }
}

// Function to periodically save the game state
function startAutoSave() {
    setInterval(saveGameState, 5000); // Save every 5 seconds
}

// Call loadGameState when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadGameState();
    updateStats(); // Ensure stats are updated to reflect loaded data
    updateCakeCount(); // Update the cake count display
    startAutoSave(); // Start auto-save
});

// Function to wipe the save data
function wipeSave() {
    if (confirm("Are you sure you want to delete your save? This action cannot be undone.")) {
        localStorage.removeItem("cakeClickerSave");
        location.reload(); // Reload the page to reset the game
    }
}
