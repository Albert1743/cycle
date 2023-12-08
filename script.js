// let password = 2609
// let user; 

// do {
//     user = +prompt('Введи пароль')
//     if (user !== password) {
//         alert('Вы ввели НЕ правильный пароль!')
//     }
// } while (user !== password);
// alert('Вы ввели правильный пароль!')



let corrPass = 1231
let attempts = 5

do {
    let ask = prompt('Введите пароль')
    if (ask === corrPass) {
        alert("Пароль верный. Доступ разрешен!")
    } else {
        alert(`Неверный пароль, осталось попыток: ${attempts}`)
    } while (attempts > 0)
    if (attempts === 0) {
        alert('У вас закончились попытки. Доступ запрещен.')
    }
}


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