// let password = 2609
// let user; 

// do {
//     user = +prompt('Введи пароль')
//     if (user !== password) {
//         alert('Вы ввели НЕ правильный пароль!')
//     }
// } while (user !== password);
// alert('Вы ввели правильный пароль!')



// let corrPass = "1231"
// let attempts = 5
// let enterPass;

// do {
//     enterPass = prompt('Введите пароль')
//     if (enterPass === corrPass) {
//         alert("Пароль верный. Доступ разрешен!")
//         break
//     } else {
//         attempts--
//         alert(`Неверный пароль, осталось попыток: ${attempts}`)
//     }
// } while (attempts > 0);
// if (attempts === 0) {
//     alert('У вас закончились попытки. Доступ запрещен.')
// }



// let arr = ['alibek', 'hasan', 'daler', 'bexruz', 'jaxongir']
// let na = ""

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > na.length) {
//         na = arr[i]
//     }
// }
// console.log('the longest name is: ' + na);

// for (let item of arr) {
//     if (item.length > na.length) {
//         na = item
//     }
// }
// console.log('the longest name is: ' + na);



// let evens = []
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         evens.push(i)
//     }
// }
// console.log(evens);



let students = [
    {
        name: "Alsafir",
        age: 15,
        gender: 'm'
    },
    {
        name: "Hasan",
        age: 15,
        gender: 'm'
    },
    {
        name: "Allayor",
        age: 18,
        gender: 'w'
    },
    {
        name: "Radmir",
        age: 11,
        gender: 'w'
    },
    {
        name: "Jaxongir",
        age: 17,
        gender: 'm'
    },
    {
        name: "Bexruz",
        age: 16,
        gender: 'w'
    },
    {
        name: "Alibek",
        age: 17,
        gender: 'm'
    },
    {
        name: "Daler",
        age: 19,
        gender: 'w'
    },
    {
        name: "Aziz",
        age: 22,
        gender: 'w'
    }
]

let m = 0
let w = 0

for (let i = 0; i < students.length; i++) {
    switch (students[i].gender) {
        case 'm':
            m++;
            break;
        case 'w':
            w++;
            break;
        default:
            break;
    }
}
console.log('Number of male:', m);
console.log('Number of female:', w);


let average_age = 0

for (let i = 0; i < students.length; i++) {
    average_age = students.reduce((a, b) => {
        return a + b.age
    }, 0)
}
average_age = average_age / students.length 
console.log('Average age:',average_age);

