const gameText = document.getElementById("game");
const choicesDiv = document.getElementById("choices");

let currentScene = "start";

const scenes = {
  start: {
    text: "You are Shawn the Alpaca, standing at the edge of the Enchanted Forest.\nDo you go in or turn back?",
    choices: [
      { text: "Enter the forest", next: "forest" },
      { text: "Turn back", next: "village" }
    ]
  },
  forest: {
    text: "You hear rustling leaves... a wild Fred the Cactus appears!\nDo you talk to him or run?",
    choices: [
      { text: "Talk to Fred", next: "talkFred" },
      { text: "Run away!", next: "runAway" }
    ]
  },
  village: {
    text: "You return to the village. The villagers call you a coward...\nThe end.",
    choices: []
  },
  talkFred: {
    text: "Fred says, 'Beware the Goblin King.' He gives you a glowing nutella jar.\nYou continue your journey.",
    choices: [
      { text: "Go deeper into the forest", next: "deepForest" }
    ]
  },
  runAway: {
    text: "You trip on a root and fall. Game over, brave alpaca.",
    choices: []
  },
  deepForest: {
    text: "You reach a fork in the road. Left is dark and spooky. Right is glittery and sparkly.\nWhich way?",
    choices: [
      { text: "Go left", next: "goblinKing" },
      { text: "Go right", next: "rainbowFalls" }
    ]
  },
  goblinKing: {
    text: "The Goblin King appears! He demands the glowing Nutella.\nDo you give it or fight him?",
    choices: [
      { text: "Give it to him", next: "giveNutella" },
      { text: "Fight him!", next: "fightGoblin" }
    ]
  },
  rainbowFalls: {
    text: "You found Rainbow Falls! You dip your hooves in the water and level up to Ultra Alpaca.\nYou win!",
    choices: []
  },
  giveNutella: {
    text: "He eats it, transforms into a llama, and disappears. You’re safe... for now.",
    choices: []
  },
  fightGoblin: {
    text: "The Goblin King is strong. He blasts you with spicy salsa. You’re toast. Game over.",
    choices: []
  }
};

function showScene(sceneKey) {
  const scene = scenes[sceneKey];
  currentScene = sceneKey;
  gameText.textContent = scene.text;
  choicesDiv.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showScene(choice.next);
    choicesDiv.appendChild(btn);
  });

  if (scene.choices.length === 0) {
    const restart = document.createElement("button");
    restart.textContent = "Restart";
    restart.onclick = () => showScene("start");
    choicesDiv.appendChild(restart);
  }
}

showScene(currentScene);
