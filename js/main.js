// Challenger scripts
let punchEl = document.getElementById("punch-el")
let saveEL = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let punch = 0

function add() {
    punch += 1
    punchEl.textContent = punch
}

function previous() {
    let countStr = punch + " - "
    saveEL.textContent += countStr
    // let totalNum = punch
    // totalEl.textContent += parseInt(totalNum)
    punch = 0
    punchEl.textContent = 0

    let countStr2 = punch2 + " - "
    saveEL2.textContent += countStr2
    punch2 = 0
    punchEl2.textContent = 0    
}

// Contender scripts
let punchEl2 = document.getElementById("punch-el2")
let saveEL2 = document.getElementById("save-el2")
let punch2 = 0

function add2() {
    punch2 += 1
    punchEl2.textContent = punch2
}
