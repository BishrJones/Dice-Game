const cube = document.querySelectorAll('.cube')
const diceOne = document.getElementById('diceOne')
const diceTwo = document.getElementById('diceTwo')
const displayRandomNum1 = document.getElementById('displayRandomNum1')
const displayRandomNum2 = document.getElementById('displayRandomNum2')
const resetButton = document.getElementById('reset')
const rollButton = document.getElementById('roll')
const betButton = document.getElementById('amountSubmission')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')




const getRandomNum1 = (min, max) => {
    // generate TWO random numbers between 1-6
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomNum2 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// randomNum1 = getRandomNum1(1, 6)
// console.log('this is the random number:', randomNum1)
// randomNum2 = getRandomNum2(1, 6)


// console.log('total of num1 and num2: \n', totalOfRandomNums)
// determne winning and losing conditions
// const WinningConditions = () => {
//     
// }

rollButton.addEventListener('click', function() {
    randomNum1 = getRandomNum1(1, 6)
    console.log('this is the random number:', randomNum1)
    randomNum2 = getRandomNum2(1, 6)
    displayRandomNum1.innerHTML = randomNum1
    displayRandomNum2.innerHTML = randomNum2
        // console.log('clicked')

    // create if else statement to detereming wining conditions
    if (randomNum1 + randomNum2 === 7 || randomNum1 + randomNum2 === 11) {
        message.innerHTML = 'Nice! Keep on rolling.'
    } else if (randomNum1 + randomNum2 === 2 || randomNum1 + randomNum2 === 3 || randomNum1 + randomNum2 === 12) {
        message.innerHTML = 'Yikes! Pass the Dice.'
            // make conditional that all
    } else if (randomNum1 + randomNum2 === 4 || randomNum1 + randomNum2 === 5 || randomNum1 + randomNum2 === 6 || randomNum1 + randomNum2 === 8 || randomNum1 + randomNum2 === 9 || randomNum1 + randomNum2 === 10) {
        message.innerHTML = 'roll your point again to win!'
    }

})

resetButton.addEventListener('click', function() {
    displayRandomNum1.innerHTML.remove()
})


// alternate turns based on the conditions of win or lose