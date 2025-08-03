// viewer.js

// Sample static data (replace with backend integration if needed)
const liveHighlights = [
  "Goal by #9 - Team Alpha",
  "Yellow Card - Team Omega #4",
  "Substitution - Team Alpha: #11 out, #17 in"
];

const topPlayers = {
  goals: ["Player A - 5", "Player B - 4", "Player C - 3"],
  assists: ["Player D - 4", "Player E - 3", "Player F - 2"],
  saves: ["Goalkeeper X - 7", "Goalkeeper Y - 6"],
  appearances: ["Player Z - 10", "Player A - 9"]
};

const svgPitch = `
  <svg width="100%" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#4CAF50" />
    <line x1="300" y1="0" x2="300" y2="400" stroke="#fff" stroke-width="2" />
    <circle cx="300" cy="200" r="50" stroke="#fff" stroke-width="2" fill="none" />
    <circle cx="300" cy="200" r="3" fill="#fff" />
    <!-- Sample players -->
    <circle cx="100" cy="200" r="8" fill="yellow" />
    <circle cx="150" cy="100" r="8" fill="yellow" />
    <circle cx="150" cy="300" r="8" fill="yellow" />
    <circle cx="450" cy="200" r="8" fill="cyan" />
    <circle cx="500" cy="100" r="8" fill="cyan" />
    <circle cx="500" cy="300" r="8" fill="cyan" />
  </svg>
`;

// Populate highlights
const highlightList = document.getElementById("highlightList");
liveHighlights.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  highlightList.appendChild(li);
});

// Populate stats
const fillList = (id, list) => {
  const container = document.getElementById(id);
  list.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player;
    container.appendChild(li);
  });
};

fillList("goalsList", topPlayers.goals);
fillList("assistsList", topPlayers.assists);
fillList("savesList", topPlayers.saves);
fillList("appearanceList", topPlayers.appearances);

// Inject SVG Pitch
const formationContainer = document.getElementById("formationSVG");
formationContainer.innerHTML = svgPitch;

// Timer
let matchTime = 0;
const timerDisplay = document.getElementById("liveTimer");

function updateTimer() {
  const minutes = Math.floor(matchTime / 60).toString().padStart(2, '0');
  const seconds = (matchTime % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
  matchTime++;
  if (matchTime <= 5400) setTimeout(updateTimer, 1000); // 90 minutes
}

updateTimer();
