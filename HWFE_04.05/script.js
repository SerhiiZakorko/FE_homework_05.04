/*
function getArray(number1, number2) {
    const numbers = []
    if (number1 > number2) {
        for (let i = number1; i >= number2; i--) {
            if (i % 2 == 0)
                numbers.push(i)
        }
    } else for (let i = number2; i >= number1; i--) {
        if (i % 2 == 0)
            numbers.push(i)
    }
    console.log(numbers)
    return numbers
}
getArray(+prompt("input number 1"), +prompt("input number 2"))
*/

/*
function power(number1, number2) {
    const answer = Math.pow(number1, number2)
    console.log(answer)
    return answer
}
power(+prompt("Введите число"), +prompt("Введите степень"))
*/

/*
function getSum(number) {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum = sum + i
    }
    console.log(sum)
    return sum
}
getSum(+prompt("Введите число"))
*/


/*function getSum(number1, number2) {
    const honests = []
    const odds = []
    if (number1 < number2) {
        for (let i = number1; i <= number2; i++) {
            if (i % 2 == 0)
                honests.push(i)
            else odds.push(i)
        }
    } else for (let i = number2; i <= number1; i++) {
        if (i % 2 == 0)
            honests.push(i)
        else odds.push(i)
    }
    let sumHonest = 0
    for (let i = 0; i < honests.length; i++) {
        sumHonest = sumHonest + honests[i]
    }
    let sumOdd = 0
    for (let i = 0; i < odds.length; i++) {
        sumOdd = sumOdd + odds[i]
    }
    console.log(`Сумма четных чисел = ${sumHonest}`)
    console.log(`Сумма нечетных чисел = ${sumOdd}`)
    return sumHonest, sumOdd
}
getSum(+prompt("input number n"), +prompt("input number m"))
*/


/*
function longestWord(words) {
    if (words.length == 0) {
        console.log("null")
    }
    let longestWord = words[0]
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    console.log(longestWord)
    return longestWord
}

longestWord(["Киев", "Харьков", "Донецк", "Винница", "Ялта"])
*/