// Challenger scripts
let punchEl = document.getElementById("punch-el")
let saveEL = document.getElementById("save-el")
let punch = 0

function add() {
    punch += 1
    punchEl.textContent = punch
}

function previous() {
    let countStr = punch + " - "
    saveEL.textContent += countStr
    punch = 0
}

// Contender scripts
let punchEl2 = document.getElementById("punch-el2")
let saveEL2 = document.getElementById("save-el2")
let punch2 = 0

function add2() {
    punch2 += 1
    punchEl2.textContent = punch2
}

function previous2() {
    let countStr2 = punch2 + " - "
    saveEL2.textContent += countStr2
    punch2 = 0
}


