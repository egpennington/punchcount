// Challenger scripts
let punchEl = document.getElementById("punch-el")
let saveEL = document.getElementById("save-el")        
let sumEl = document.getElementById("sum-el")
let punch = 0
let total = 0
// Contender scripts
let punchEl2 = document.getElementById("punch-el2")
let saveEL2 = document.getElementById("save-el2")
let sumEl2 = document.getElementById("sum-el2")
let punch2 = 0
let total2 = 0

function add() {
    punch += 1
    punchEl.textContent = punch
}

function add2() {
    punch2 += 1
    punchEl2.textContent = punch2
}

function previous() {
    let countStr = punch + " - "
    total += punch
    saveEL.textContent += countStr       
    punch = 0
    punchEl.textContent = 0
    sumEl.textContent = total
    
    let countStr2 = punch2 + " - "
    total2 += punch2
    saveEL2.textContent += countStr2       
    punch2 = 0
    punchEl2.textContent = 0
    sumEl2.textContent = total2
}
