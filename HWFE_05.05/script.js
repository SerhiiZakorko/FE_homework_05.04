//  1
let numbersArray = []
for (let i = 100; i >= 50; i = i - 10) {
    numbersArray.push(i)
}
const numbers = document.querySelector(".numbers")
for (let i = 0; i < numbersArray.length; i++) {
    numbers.innerHTML += `
                            <p>
                                ${numbersArray[i]}
                            </p>
                         `
}

//  2
const stringsArray = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
const string = document.querySelector(".strings_container")
for (let i = 0; i < stringsArray.length; i++) {
    string.innerHTML += `
                            <p>
                                ${stringsArray[i]}
                            </p>
                         `
}

//  3
const usersArray = [
    {
        first_name: "Сергей",
        last_name: "Закорко",
        age: 34
    },
    {
        first_name: "Федор",
        last_name: "Шаповалов",
        age: 15
    },
    {
        first_name: "Ирина",
        last_name: "Степаненко",
        age: 54
    },
    {
        first_name: "Мария",
        last_name: "Шостак",
        age: 18
    },
    {
        first_name: "Анна",
        last_name: "Ветух",
        age: 25
    },

]
const userCard = document.querySelector(".users_container")
for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].age >= 18) {
        userCard.innerHTML += `
                            <p>
                                Имя: ${usersArray[i].first_name}
                            </p>
                            <p>
                                Фамилия: ${usersArray[i].last_name}
                            </p>
                            <p>
                                Возраст: ${usersArray[i].age}
                            </p>
                                `
    }
}