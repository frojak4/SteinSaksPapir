let app = document.getElementById("app")   
let myTimeout;
let state = true;
let playerScore = 0;
let computerScore = 0;
let speler;
let data;


function startScreen() {
    state = true;
    app.innerHTML = /*HTML*/ `
    <div class="overskrift">Stein, saks, papir!</div>
    <div class="spelerValg">
     <div onclick="spelerInput('stein')" class="stein">
     <img src="rock.png">
     </div>
     <div onclick="spelerInput('saks')" class="saks">
     <img src="scissors.png">
     </div>
     <div onclick="spelerInput('papir')" class="papir">
     <img src="paper.png">
     </div>
    </div>
    
    <div class="computerValg"></div>
    
    <div class="score">
    <h1>PlayerScore: ${playerScore}</h1> <br/>
    <h1>ComputerScore: ${computerScore}</h1>
    </div>`
}

function updateScore() {
    document.querySelector(".score").innerHTML = /*HTML*/ `
    <h1>PlayerScore: ${playerScore}</h1> <br/>
    <h1>ComputerScore: ${computerScore}</h1>`
}

startScreen();

function spelerInput(valgt) {
    if (valgt == 'stein' && state) {
        state = false;
        speler = "stein";
        document.querySelector(".spelerValg").innerHTML = /*HTML*/ `
        <div class="spelerValg">
            <div onclick="spelerInput('stein')" class="stein">
            <img src="rock.png">
        </div>
        `
        computerTimeout();
    } else if (valgt == 'saks' && state){
        state = false;
        speler = "saks";
        document.querySelector(".spelerValg").innerHTML = /*HTML*/ `
        <div class="spelerValg">
            <div onclick="spelerInput('saks')" class="saks">
            <img src="scissors.png">
        </div>
        `
        computerTimeout();
    } else if (valgt == 'papir' && state){
        state = false;
        speler = "papir";
        document.querySelector(".spelerValg").innerHTML = /*HTML*/ `
        <div class="spelerValg">
            <div onclick="spelerInput('papir')" class="papir">
            <img src="paper.png">
        </div>
        `
        computerTimeout();
    }
}

function computer() {

    let computerValg = Math.floor(Math.random() * 3);
    if (computerValg == 0) {
        data = "stein";
        document.querySelector(".computerValg").innerHTML = /*HTML*/ `
        <div class="computerValg">
            <div onclick="spelerInput('stein')" class="stein">
            <img src="rock.png">
        </div>
        `
    } else if (computerValg == 1) {
        data = "saks";
        document.querySelector(".computerValg").innerHTML = /*HTML*/ `
        <div class="computerValg">
            <div onclick="spelerInput('saks')" class="saks">
            <img src="scissors.png">
        </div>
        `
    } else if (computerValg == 2) {
        data = "papir";
        document.querySelector(".computerValg").innerHTML = /*HTML*/ `
        <div class="computerValg">
            <div onclick="spelerInput('papir')" class="papir">
            <img src="paper.png">
        </div>
        `
    } 
    calculateResult()
}

function computerTimeout() {
    document.querySelector(".score").innerHTML = /*HTML*/ ``
    document.querySelector(".computerValg").innerHTML = /*HTML*/ `
        <h1 class="skrift">...</h1>
    `

    setTimeout(computer, 1000)
}

function calculateResult() {
    if (speler == "stein" && data == "saks" ||
        speler == "saks" && data == "papir" ||
        speler == "papir" && data == "stein"
    ) {
        playerScore ++;
    } else if (data == "stein" && speler == "saks" ||
    data == "saks" && speler == "papir" ||
    data == "papir" && speler == "stein"
) {
    computerScore ++;
}

app.innerHTML += /*HTML*/ `
<div class="buttondiv">
<button onclick="startScreen()">Ny runde</button>
<button onclick="reset()">Reset</button>
</div>
`
updateScore();
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    startScreen();
}