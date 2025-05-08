let slowBtn = document.getElementById("slowButton")
let goBtn = document.getElementById("goButton")
let stopBtn = document.getElementById("stopButton")


let slow = document.getElementById("slowLight")
let go = document.getElementById("goLight")
let stop = document.getElementById("stopLight")


goBtn.addEventListener("click", () => {
    go.style.background = "green"
})

slowBtn.addEventListener("click", () => {
    slow.style.background = "orange"
})

stopBtn.addEventListener("click", () => {
    stop.style.background = "red"
})