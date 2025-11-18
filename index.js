let team1score = 0
let team2score = 0
let t1Score = document.getElementById("t1-score")
let t2Score = document.getElementById("t2-score")


function add1t1() {
    team1score = Number(team1score) + 1
    t1Score.textContent = team1score
}

function add2t1() {
    team1score = Number(team1score) + 2
    t1Score.textContent = team1score
}

function add3t1() {
    team1score = Number(team1score) + 3
    t1Score.textContent = team1score
}

function add1t2() {
    team2score = Number(team2score) + 1
    t2Score.textContent = team2score
}

function add2t2() {
    team2score = Number(team2score) + 2
    t2Score.textContent = team2score
}

function add3t2() {
    team2score = Number(team2score) + 3
    t2Score.textContent = team2score
}