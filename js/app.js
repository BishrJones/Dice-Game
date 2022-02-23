const cube = document.querySelectorAll('.cube')
const diceOne = document.getElementById('diceOne')
const diceTwo = document.getElementById('diceTwo')
const displayRandomNum1 = document.getElementById('displayRandomNum1')
const displayRandomNum2 = document.getElementById('displayRandomNum2')
const rollButton = document.getElementById('roll')




const getRandomNum1 = (min, max) => {
    // generate TWO random numbers between 1-6
    return Math.floor(Math.random() * (max - min + 1) + min)
        // append the numbers to the the body 

}

const getRandomNum2 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// randomNum1 = getRandomNum1(1, 6)
// console.log('this is the random number:', randomNum1)
// randomNum2 = getRandomNum2(1, 6)

rollButton.addEventListener('click', function() {
    randomNum1 = getRandomNum1(1, 6)
    console.log('this is the random number:', randomNum1)
    randomNum2 = getRandomNum2(1, 6)
    displayRandomNum1.innerHTML = randomNum1
    displayRandomNum2.innerHTML = randomNum2
    console.log('clicked')
})
console.log('this should display the random number\n', displayRandomNum1)