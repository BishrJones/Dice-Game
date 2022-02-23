const cube = document.querySelectorAll('.cube')
let randomNum
    // generate TWO random numbers between 1-6
getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

randomNum = getRandomNum(1, 6)
console.log(randomNum)
randomNum = getRandomNum(1, 6)
console.log(randomNum)