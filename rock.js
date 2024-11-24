let yourscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const yourscorepara = document.querySelector("#your");
const compscorepara = document.querySelector("#comp");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
    msg.style.Color = "white";

};

const showWinner = (yourwin, yourChoice, CompChoice) => {
    if (yourwin) {
        yourscore++;
        yourscorepara.innerText = yourscore;
        msg.innerText = `You win! Your ${yourChoice} beats ${CompChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${CompChoice} beats your ${yourChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (yourChoice) => {
    const CompChoice = genCompChoice();
    if (yourChoice === CompChoice) {
        drawGame();
    } else {
        let yourwin = true;
        if (yourChoice === "rock") {
            yourwin = CompChoice !== "paper"; // Rock beats scissors, loses to paper
        } else if (yourChoice === "paper") {
            yourwin = CompChoice !== "scissors"; // Paper beats rock, loses to scissors
        } else {
            yourwin = CompChoice !== "rock"; // Scissors beat paper, lose to rock
        }
        showWinner(yourwin, yourChoice, CompChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const yourChoice = choice.getAttribute("id");
        playgame(yourChoice);
    });
});
