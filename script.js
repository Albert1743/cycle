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



//           HOMEWORK
// let students = [
//     {
//         name: "Alsafir",
//         age: 15,
//         gender: 'm'
//     },
//     {
//         name: "Hasan",
//         age: 15,
//         gender: 'm'
//     },
//     {
//         name: "Allayor",
//         age: 18,
//         gender: 'w'
//     },
//     {
//         name: "Radmir",
//         age: 11,
//         gender: 'w'
//     },
//     {
//         name: "Jaxongir",
//         age: 17,
//         gender: 'm'
//     },
//     {
//         name: "Bexruz",
//         age: 16,
//         gender: 'w'
//     },
//     {
//         name: "Alibek",
//         age: 17,
//         gender: 'm'
//     },
//     {
//         name: "Daler",
//         age: 19,
//         gender: 'w'
//     },
//     {
//         name: "Aziz",
//         age: 22,
//         gender: 'w'
//     }
// ]

// let m = 0
// let w = 0

// for (let i = 0; i < students.length; i++) {
//     switch (students[i].gender) {
//         case 'm':
//             m++;
//             break;
//         case 'w':
//             w++;
//             break;
//         default:
//             break;
//     }
// }
// console.log('Number of male:', m);
// console.log('Number of female:', w);

// //     average age
// let average_age = 0

// for (let i = 0; i < students.length; i++) {
//     average_age = students.reduce((a, b) => {
//         return a + b.age
//     }, 0)
// }
// average_age = average_age / students.length
// console.log('Average age:', average_age);



// let users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]
// let emails = {
//     org: [],
//     net: [],
//     info: []
// }
// let other = []


// for (let user of users) {
//     let m = user.email.split('.')[-1];

//     switch (m) {
//         case 'org':
//             emails.org.push(users);
//             break;
//         case 'net':
//             emails.net.push(users);
//             break;
//         case 'info':
//             emails.info.push(users);
//             break;
//         default:
//             emails.other.push(user);
//             break;
//     }
// }

// console.log('Email with org: ', org);
// console.log('Email with net: ', net);
// console.log('Email with info: ', info);
// console.log('other emails: ', other);



// let students = [
//     {
//         name: "Hasan",
//         age: "2008-07-28",
//         gender: 'm'
//     },
//     {
//         name: "Alsafir",
//         age: "2008-10-13",
//         gender: 'm'
//     },
//     {
//         name: "Allayor",
//         age: "2008-06-24",
//         gender: 'w'
//     },
//     {
//         name: "Radmir",
//         age: "2007-04-28",
//         gender: 'w'
//     },
//     {
//         name: "Jaxongir",
//         age: "2006-09-03",
//         gender: 'm'
//     },
//     {
//         name: "Bexruz",
//         age: "2007-11-27",
//         gender: 'w'
//     },
//     {
//         name: "Alibek",
//         age: "2006-04-12",
//         gender: 'm'
//     },
//     {
//         name: "Bexruz",
//         age: "2009-11-27",
//         gender: 'w'
//     },
//     {
//         name: "Alibek",
//         age: "2012-04-12",
//         gender: 'm'
//     },
// ]



//            HOMEWORK
// let arr = [
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },

//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         },
//     },
// ]

// let categories = [
//     {
//         course: ' SMM',
//         count: 0
//     },
//     {
//         course: 'PROGRAMMING',
//         count: 0
//     },
//     {
//         course: '     3DSMAX',
//         count: 0
//     },
//     {
//         course: ' DIZAYN',
//         count: 0
//     },
//     {
//         course: '   BACKEND',
//         count: 0
//     },
// ]


// for (let student of arr) {
//     let fac = student.info.faculity.toUpperCase().trim()

//     for(let course of categories) {
//         let course_name = course.course.toUpperCase().trim()
//         if (fac === course_name) {
//             course.count++
//             course.arr.push(student.name)

//         }
//     }
// }

// console.table(categories)





// let products = [
//     {
//         name: "tvorog",
//         type: "milk",
//         price: 10000
//     },
//     {
//         name: "apple",
//         type: "fruit",
//         price: 5000
//     },
//     {
//         name: "govyadina",
//         type: "meat",
//         price: 100000
//     },
//     {
//         name: "yogurt",
//         type: "milk",
//         price: 8000
//     },
//     {
//         name: "banan",
//         type: "fruit",
//         price: 20000
//     },
//     {
//         name: "kuryatina",
//         type: "meat",
//         price: 45000
//     },
//     {
//         name: "sir",
//         type: "milk",
//         price: 16000
//     },
// ]

// let categories = [
//     {
//         name: "meat",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
//     {
//         name: "milk",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
//     {
//         name: "fruit",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
// ]

// let expensive = { price: 0 }
// let cheap = products[0]

// for (let product of products) {

//     if (product.price > expensive.price) {
//         expensive = product
//     }

//     if(product.price < cheap.price){
//         cheap = product
//     }
// }

// console.log(expensive);
// console.log(cheap);


// for (let product of products) {
//     let count = product
//     for (let category of categories) {
//         if (product.type === category.name) {
//             category.amount++
//             category.arr.push(product.name)
//             category.total += count.price
//         }
//     }
// }
// console.table(categories);



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let max = 0
// let min = numbers[0]

// for (let number of numbers) {
//     if (number > max) {
//         max = number
//     }
//     if (number < min) {
//         min = number
//     }
// }

// console.log(max);
// console.log(min);



let students = [
    {
        name: "Albert",
        age: "2008-07-28",
        gender: 'm'
    },
    {
        name: "Shakha",
        age: "2012-10-13",
        gender: 'm'
    },
    {
        name: "Amal",
        age: "2008-06-24",
        gender: 'w'
    },
    {
        name: "Umar",
        age: "2007-04-28",
        gender: 'w'
    },
    {
        name: "Aziz",
        age: "2006-09-03",
        gender: 'm'
    },
    {
        name: "Daler",
        age: "2007-11-27",
        gender: 'w'
    },
    {
        name: "Alibek",
        age: "2006-04-12",
        gender: 'm'
    },
    {
        name: "Bexruz",
        age: "2009-11-27",
        gender: 'w'
    },
    {
        name: "Alfredo",
        age: "2011-04-12",
        gender: 'm'
    },
]

let lg_name = ''
let sh_name = students[0].name

for (let name of students) {
    if (name.name.length > lg_name.length) {
        lg_name = name.name
    }
}

for (let student of students) {
    if (student.name.length < sh_name.length) {
        sh_name = student.name
    }
}

console.log('The longest name is:', lg_name);
console.log('The short name is:', sh_name);


let oldStudent = students[0]

for (let i = 0; i < students.length; i++) {
    let currAge = new Date(students[i].age);
    let oldAge = new Date(oldStudent.age);

    if (currAge > oldAge) {
        oldStudent = students[i];
    }
}

console.log('The oldest student is:', oldStudent);