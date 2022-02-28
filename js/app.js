const cube = document.querySelectorAll('.cube')
const diceOne = document.getElementById('diceOne')
const diceTwo = document.getElementById('diceTwo')
const displayRandomNum1 = document.getElementById('displayRandomNum1')
const displayRandomNum2 = document.getElementById('displayRandomNum2')
const resetButton = document.getElementById('reset')
const rollButton = document.getElementById('roll')
    // const betButton = document.getElementById('amountSubmission')

const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const chipButtons = document.getElementById('chipButtons')
const fiveChips = document.getElementById('fiveChips')
const tenChips = document.getElementById('tenChips')
const fifteenChips = document.getElementById('fifteenChips')
const twentyChips = document.getElementById('twentyChips')
const chipBalance = document.getElementById('balance')
const form = document.getElementById('form')

// const fiveChips = '125'
// const tenChips = '250'
// const fifteenChips = '375'
// const twentyChips = '500'


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


// make a roll check function that takes two numbers
// const rollCheck = (num1,num2) => {...}
const rollCheck = (randomNum1, randomNum2) => {
        if (randomNum1 + randomNum2 === 2 || randomNum1 + randomNum2 === 3 || randomNum1 + randomNum2 === 12) {
            // const addbalance = chipBalance +

            message.innerText = 'Yikes, Pass the dice.'
        } else {

            let totalNums = randomNum1 + randomNum2
            console.log(totalNums)
            message.innerText = 'Roll your point again to win!'
        }
    }
    // if the sum of nums is 7 or 11 on first roll, print 'Nice! Keep on rolling.'
    // if the sum of nums is 2, 3, 12 on first role, print 'Yikes! You crapped out.
    // if the sum of nums is anything else, print 'roll your point again to win!' (this should only print once and print a 'you win message when the sum is the same)

// make function that calcs the balance  
// const balanceTotal = () => {
//     return 100
// }
// console.log(chipBalance)

// let balanceNum = 0
// console.log(balanceNum)

// example of call = rollCheck(randomNum1, randomNum2)

rollButton.addEventListener('click', function() {
    randomNum1 = getRandomNum1(1, 6)
        // console.log('this is the random number:', randomNum1)
    randomNum2 = getRandomNum2(1, 6)
    displayRandomNum1.innerText = randomNum1
    displayRandomNum2.innerText = randomNum2
        // console.log('clicked')

    // create callback function for the rollCheck
    rollConditions = rollCheck(randomNum1, randomNum2)

})

resetButton.addEventListener('click', function() {
    displayRandomNum1.innerText = ''
    displayRandomNum2.innerText = ''
    message.innerText = ''
        // chipBalance.innerText = 0
})

// const pickChips = (chipButtons) => {
//     if (fiveChips) {
//         message.innerText = '$125 has been deposited'
//         chipBalance.innerText = 125
//     } else if (tenChips) {
//         message.innerText = '$250 has been deposited.'
//         chipBalance.innerText = 250
//     }
//     console.log(tenChips)

// }

// create function that when clicked gives the player x amount of dollars
const pickChips = (fiveChips) => {
    if (fiveChips) {
        message.innerText = '$125 has been deposited'
        const balanceNum = 125
        chipBalance.innerText = balanceNum
        console.log(balanceNum)
            // const balanceNum = parseInt(chipBalance, 10)
        form.addEventListener('submit', function(event) {
            event.preventDefault() //this prevents the form from auto submitting 
            console.log('form has been submitted')

            const amountWagered = document.getElementById('amountWagered').value
            console.log('this is the value of the num input in the form \n', amountWagered)

            const numAmount = parseInt(amountWagered, 10)
            console.log(numAmount)
            const newChipBalance = numAmount + balanceNum
            console.log(newChipBalance)
            chipBalance.innerText = newChipBalance


        })

    }
}


fiveChips.addEventListener('click', function() {
    buttonInput = pickChips(chipButtons)

})

tenChips.addEventListener('click', function() {

    if (tenChips) {
        message.innerText = '$250 has been deposited.'
        const balanceNum = 250
        chipBalance.innerText = balanceNum
        console.log(balanceNum)
        form.addEventListener('submit', function(event) {
            event.preventDefault() //this prevents the form from auto submitting 
            console.log('form has been submitted')

            const amountWagered = document.getElementById('amountWagered').value
            console.log('this is the value of the num input in the form \n', amountWagered)

            const numAmount = parseInt(amountWagered, 10)
            console.log(numAmount)
            const newChipBalance = numAmount + balanceNum
            console.log(newChipBalance)
            chipBalance.innerText = newChipBalance


        })
    }
})


fifteenChips.addEventListener('click', function() {
    if (fifteenChips) {
        message.innerText = '$375 has been deposited.'
        const balanceNum = 375
        chipBalance.innerText = balanceNum
        console.log(balanceNum)
        form.addEventListener('submit', function(event) {
            event.preventDefault() //this prevents the form from auto submitting 
            console.log('form has been submitted')

            const amountWagered = document.getElementById('amountWagered').value
            console.log('this is the value of the num input in the form \n', amountWagered)

            const numAmount = parseInt(amountWagered, 10)
            console.log(numAmount)
            const newChipBalance = numAmount + balanceNum
            console.log(newChipBalance)
            chipBalance.innerText = newChipBalance


        })
    }
})


twentyChips.addEventListener('click', function() {
    if (twentyChips) {
        message.innerText = '$500 has been deposited.'
        const balanceNum = 500
        chipBalance.innerText = balanceNum
        console.log(balanceNum)
        form.addEventListener('submit', function(event) {
            event.preventDefault() //this prevents the form from auto submitting 
            console.log('form has been submitted')

            const amountWagered = document.getElementById('amountWagered').value
            console.log('this is the value of the num input in the form \n', amountWagered)

            const numAmount = parseInt(amountWagered, 10)
            console.log(numAmount)
            const newChipBalance = numAmount + balanceNum
            console.log(newChipBalance)
            chipBalance.innerText = newChipBalance


        })
    }

})

// const calcAmount = () => {
//     const totalNum = randomNum1 + randomNum2
//     if (totalNum = 7) {
//         chipBalance.innerText =
//     }
// }

// bet button/form needs to be responsive with balance

// const getFormData = () => {

// }


// form.addEventListener('submit', function(event) {
//     event.preventDefault() //this prevents the form from auto submitting 
//     console.log('form has been submitted')

//     const amountWagered = document.getElementById('amountWagered').value
//     console.log('this is the value of the num input in the form \n', amountWagered)
//     const newChipBalance = amountWagered + balanceNum
//     console.log(newChipBalance)


// })




// use a loop to run through and when it detects the number it prints,
// //  it substracts that number from the balance and prints the resut as an updated balance
// for (let i = 1; i <= 501; i++) {
//     // create an if else statment that changes the balance 
//     if (randomNum1 + randomNum2 === 7 || randomNum1 + randomNum2 === 11) {

//     }
//     // change balance based on the win/lose conditions 
//     // if user loses subtract from balance and if there is a win add to the balance
//     // 
// }