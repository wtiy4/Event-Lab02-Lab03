// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement!

let firstSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg"
let secondSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg"
let thirdSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg"
let fourthSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg"
let fifthSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg"
let sixthSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg"
let seventhSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg"
let eightSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg"
let lastSrc = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg"

let theShow = document.getElementById("theShow")

let firstShow = document.getElementById("one")
let secondShow = document.getElementById("two")
let thirdShow = document.getElementById("three")
let fourthShow = document.getElementById("four")
let fifthShow = document.getElementById("five")
let sixthShow = document.getElementById("six")
let seventhShow = document.getElementById("seven")
let eigthShow = document.getElementById("eight")
let ninthShow = document.getElementById("nine")



firstShow.addEventListener("click", function () {
    theShow.src = firstSrc;
})

secondShow.addEventListener("click", function () {
    theShow.src = secondSrc;
})

thirdShow.addEventListener("click", function () {
    theShow.src = thirdSrc;
})

fourthShow.addEventListener("click", function () {
    theShow.src = fourthSrc;
})

fifthShow.addEventListener("click", function () {
    theShow.src = fifthSrc;
})

sixthShow.addEventListener("click", function () {
    theShow.src = sixthSrc;
})

seventhShow.addEventListener("click", function () {
    theShow.src = seventhSrc;
})

eigthShow.addEventListener("click", function () {
    theShow.src = eightSrc;
})

ninthShow.addEventListener("click", function () {
    theShow.src = lastSrc;
})