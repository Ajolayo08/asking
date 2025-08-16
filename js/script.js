const whole = document.getElementById("whole")
const question = document.getElementById("question")
const yes = document.getElementById("yes")
const no = document.getElementById("no")

const whole2 = document.getElementById("whole2")
const yes2 = document.getElementById("yes2")
const no2 = document.getElementById("no2")

const whole3 = document.getElementById("whole3")
const yes3 = document.getElementById("yes3")
const no3 = document.getElementById("no3")

const whole4 = document.getElementById("whole4")
const yes4 = document.getElementById("yes4")
const no4 = document.getElementById("no4")

const whole5 = document.getElementById("whole5")
const yes5 = document.getElementById("yes5")
const no5 = document.getElementById("no5")


no.addEventListener("click", function () {
    whole.style.display = "none"
    whole2.style.display = "block"
})

yes.addEventListener("click", function () {
    whole.style.display = "none"
    whole6.style.display = "block"
})

no2.addEventListener("click", function () {
    whole2.style.display = "none"
    whole3.style.display = "block"
})

yes2.addEventListener("click", function () {
    whole2.style.display = "none"
    whole6.style.display = "block"
})

no3.addEventListener("click", function () {
    whole3.style.display = "none"
    whole4.style.display = "block"
})

yes3.addEventListener("click", function () {
    whole3.style.display = "none"
    whole6.style.display = "block"
})

no4.addEventListener("click", function () {
    whole4.style.display = "none"
    whole5.style.display = "block"
})

yes4.addEventListener("click", function () {
    whole4.style.display = "none"
    whole6.style.display = "block"
})

yes5.addEventListener("click", function () {
    whole5.style.display = "none"
    whole6.style.display = "block"
})

