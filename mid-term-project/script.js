const storyStages = {
    page1: {
        text: "You wake up on a mysterious island. What will you do?",
        choices: [
            { text: "Explore the beach", consequence: "page2A" },
            { text: "Enter the jungle", consequence: "page2B" }
        ],
        image: "Images/page1.jpg"
    },
    page2A: {
        text: "You find a small boat on the shore. What do you do?",
        choices: [
            { text: "Take the boat", consequence: "page3A" },
            { text: "Look for food", consequence: "page3B" }
        ],
        image: "Images/page2.jpg"
    },
    page2B: {
        text: "You hear strange noises in the jungle. How do you react?",
        choices: [
            { text: "Investigate the noise", consequence: "page3C" },
            { text: "Climb a tree for safety", consequence: "page3D" }
        ],
        image: "images/page3.jpg"
    },
    page3A: {
        text: "The boat leads to another island. You see a cave.",
        choices: [
            { text: "Enter the cave", consequence: "page4A" },
            { text: "Stay on the shore", consequence: "page4B" }
        ],
        image: "images/page4.jpg"
    },
    page3B: {
        text: "You find some berries but hear rustling behind you.",
        choices: [
            { text: "Run away", consequence: "page4C" },
            { text: "Turn around slowly", consequence: "page4D" }
        ],
        image: "images/page5.jpg"
    },
    page3C: {
        text: "You find an ancient temple in the jungle!",
        choices: [
            { text: "Enter the temple", consequence: "page4E" },
            { text: "Walk around it", consequence: "page4F" }
        ],
        image: "images/page3C.jpg"
    },
    page3D: {
        text: "You climb a tree and spot smoke in the distance.",
        choices: [
            { text: "Go towards the smoke", consequence: "page4G" },
            { text: "Stay hidden in the tree", consequence: "page4H" }
        ],
        image: "images/page8.jpg"
    },
    page4A: {
        text: "The cave is dark and eerie. Do you proceed?",
        choices: [
            { text: "Go deeper", consequence: "page5" },
            { text: "Turn back", consequence: "page5" }
        ],
        image: "images/page7.jpg"
    },
    page4B: {
        text: "You wait but nothing happens.",
        choices: [
            { text: "Explore further", consequence: "page5" },
            { text: "Stay put", consequence: "page5" }
        ],
        image: "images/page4B.jpg"
    },
    page4C: {
        text: "You run into another explorer!",
        choices: [
            { text: "Talk to them", consequence: "page5" },
            { text: "Avoid them", consequence: "page5" }
        ],
        image: "images/page4C.jpg"
    },
    page4D: {
        text: "It's just a harmless animal.",
        choices: [
            { text: "Follow it", consequence: "page5" },
            { text: "Ignore it", consequence: "page5" }
        ],
        image: "images/page4D.jpg"
    },
    page4E: {
        text: "Inside the temple, you see ancient artifacts.",
        choices: [
            { text: "Examine them", consequence: "page5" },
            { text: "Leave quickly", consequence: "page5" }
        ],
        image: "images/page4E.jpg"
    },
    page4F: {
        text: "You walk around the temple and find an inscription.",
        choices: [
            { text: "Try to read it", consequence: "page5" },
            { text: "Ignore it", consequence: "page5" }
        ],
        image: "images/page6.jpg"
    },
    page5: {
        text: "The adventure ends here. Game over!",
        choices: [],
        image: "images/game_over.jpg"
    }
};

let currentStage = "page1";

function updatePage() {
    const stage = storyStages[currentStage];
    document.getElementById('story-text').textContent = stage.text;
    document.getElementById('story-image').src = stage.image;
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    
    if (currentStage === "page5") {
        setTimeout(() => {
            alert("Game Over! Start a new game?");
            startGame();
        }, 500);
    } else {
        stage.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => choosePath(choice.consequence);
            choicesContainer.appendChild(button);
        });
    }
}

function choosePath(path) {
    currentStage = path;
    updatePage();
}

function startGame() {
    currentStage = "page1";
    updatePage();
}

window.onload = startGame;
