let slowBtn = document.getElementById("slowButton")
let goBtn = document.getElementById("goButton")
let stopBtn = document.getElementById("stopButton")


let slow = document.getElementById("slowLight")
let go = document.getElementById("goLight")
let stopp = document.getElementById("stopLight")


goBtn.addEventListener("click", () => {
    go.style.background = "green"
    if (go.style.background == "green") {
        slow.style.background = ""
        stopp.style.background = ""
    }
})

slowBtn.addEventListener("click", () => {
    slow.style.background = "orange"
    if (slow.style.background == "orange") {
        go.style.background = ""
        stopp.style.background = ""
    }

})

stopBtn.addEventListener("click", () => {
    stopp.style.background = "red"
    if (stopp.style.background == "red") {
        slow.style.background = ""
        go.style.background = ""
    }

})