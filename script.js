// let carYear = 2015
// let personYear = 1990

// function calculate(year) { 
// 	const currentYear = 2024
// 	// let result = currentYear - year
// 	return currentYear - year
// }

// function checkAge(year, name, compare) {
// 	if (calculate(year) < compare) {
// 		console.log(name + ' меньше ' + compare)
// 	} else {
// 		console.log(nam e + ' больше '+ compare)
// 	}
// }

// checkAge(carYear, 'машина', 5)
// checkAge(personYear, 'человек', 15)

// var carColor = 'green'

// if (carColor === 'green') {
//   console.log('Цвет машины зеленый')
// } else if (carColor === 'yellow') {
//   console.log('Цвет машины желтый')
// } else if (carColor === 'red') {
//   console.log('Цвет машины красный')
// } else {
//   console.log('Цвет машины не определен')
// }

// switch (carColor) {
// 	case 'green': console.log('Цвет машины зеленый')
// 	break
// 	case 'yellow': console.log('Цвета машины желтый')
// 	break
// 	case 'red': console.log('Цвет машины красный')
// 	break
// 	default: console.log('Цвет машины не определен')
// }

// switch (carColor) {
//   case 'green': 
//     console.log('Цвет машины зеленый')
//     break
//   case 'yellow':
//     console.log('Цвет машины желтый')
//     break
//   case 'red':
//     console.log('Цвет машины красный')
//     break
//   default:
//     console.log('Цвет машины не определен')
// }

// sayHello('Tayuya')

// function sayHello(name) {
// 	console.log('Привет, ' + name)
// }

// sayHello('Tayuya')

// let message = 'Hola estas'

// console.log(message.length)
// console.log(message.toUpperCase())
// console.log(message.toLowerCase())
// console.log(message.charAt(1)) //символ по индексу
// console.log(message.indexOf('s')) //индекс символа/
// // если значение не найдено, выдаст -1
// console.log(message.substr(3, 2)) //слайс (индекс, количество символов)
// //если не известен индекс, можно скомбинировать:
// console.log(message.substr((message.indexOf('s')), 2))

// let num = 10 / 3
// console.log(num.toFixed(2)) //округлит число и превратит его в строку
// console.log(+num.toFixed(2)) //округлит число и вернет его в число

// let a = document.querySelector('a')
// let oldhref = a.getAttribute('href')
// //изменяем путь ссылки
// a.setAttribute('href', 'https://ya.ru')
// a.setAttribute('title', 'kiss me')
// a.textContent = 'Yan<br>dex' // Yan<br>dex
// a.innerHTML = 'Yan<br>dex' // Yan dex
// console.log()

// let divs = document.querySelectorAll('div')
// let link = document.querySelector('a')

// for (let i = 0; i < divs.length; i++) {
// 	divs[i].addEventListener('click', function(event) {
// 		event.stopPropagation()
// 		console.log(this.getAttribute('id'))
// 	}, )
// }

// link.addEventListener('click', handleLinkClick)

// function handleLinkClick(event) {
// 	event.preventDefault()
// }

// let p = document.querySelectorAll('p')
// for (let i = 0; i < p.length; i++) {
// 	p[i].addEventListener('click', function(event) {
// 		event.target.style.color = 'blue'
// 	})
// }

// let wrap = document.getElementById('wrap')
// wrap.addEventListener('click', function(event) {
// 	let tagName = event.target.tagName.toLowerCase()

// 	if (tagName === 'p') {
// 		event.target.style.color = 'blue'
// 	}
// })

// //простой алерт с одной кнопкой ок
// document.querySelector('#alert').addEventListener('click', function() {
// 	alert('кликнули')
// })

// //алерт с выбором ок или отмена
// document.querySelector('#confirm').addEventListener('click', function() {
// 	let decision = confirm('вы уверены?')

// 	if (decision) {
// 		alert('кликнули')
// 	}
// })

// //алерт с инпутом (полем ввода)
// document.querySelector('#prompt').addEventListener('click', function() {
// 	let age = prompt('введите возраст', "дефолтное значение")

// 	if (age >= 18) {
// 		alert('старше 18')
// 	} else alert('запрещено')
// })

// console.info('info')

//методы для массивов 
// var str = '1,2,3,4,5,6,7,8'

// var array = str.split(',')

// // console.log(array.join(';'))
// // console.log(array.reverse())

// array.splice(1, 0, '11', '22')

// var newArray = array.concat()

// // console.log(newArray)

// var objArr = [
//   {name: 'Max', age: 27},
//   {name: 'Elena', age: 18},
//   {name: 'Victor', age: 20}
// ]

// var foundPerson = objArr.find(function(person) {
//   return person.age === 20
// })

// var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
//   return i % 2 === 0
// })

// var numArray = array.map(function(i) {
//   return i * 2
// })
// console.log(numArray)