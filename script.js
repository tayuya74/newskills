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

//Объекты и прототипы
// let car = {
// 	name: 'Tesla',
// 	year: '2020'
// }

// console.log(car)

//как работают прототипы
// function Car(name, year) {
// 	this.name = name
// 	this.year = year
// }

// //создаем функции для материнского Car и потом можем применять его ко всем объектам через ford.Age()
// Car.prototype.Age = function() {
// 	return new Date().getFullYear() - this.year
// }

// //создаем дочерние элементы по типу Car
// let ford = new Car('Ford', 2015)
// let bmw = new Car('BMW', 2017)
// console.log(ford)
// console.log(bmw)

//создание и настройка объекта 
// let ford = Object.create({
// 	calculateDistancePerYear: function() {
// 		Object.defineProperty(this, 'distancePerYear', {
// 			value: Math.ceil(this.distance / this.age),
// 			enumerable: true,
// 			writable: false,
// 			configurable: false 
// 		})
// 	}
// }, {
// 	name: {
// 		value: 'Ford',
// 		enumerable: true,
// 		writable: false,
// 		configurable: false
// 	},
// 	model: {
// 		value: 'Focus',
// 		enumerable: true,
// 		writable: false,
// 		configurable: false
// 	},
// 	year: {
// 		value: 2015,
// 		enumerable: true,
// 		writable: false,
// 		configurable: false
// 	}, 
// 	distance: {
// 		value: 120500,
// 		enumerable: true,
// 		writable: true,
// 		configurable: false
// 	}, 
// 	age: {
// 		enumerable: true,
// 		get: function() {
// 			console.log('получаем возраст')
// 			return new Date().getFullYear() - this.year
// 		},
// 		set: function() {
// 			console.log('устанавливаем значение')
// 		}
// 	}
// })

// console.log(ford)

//посмотреть все ключи объекта (смотрит даже вглубь прототипа)
// for (let key in ford) {
// 	console.log(key)
// }

// //если нужны все ключи только первого уровня, то добавляем if
// for (let key in ford) {
// 	if (ford.hasOwnProperty(key)) {
// 		console.log(key, ford[key])
// 	}
// }

// //Задача по удвоению массива без изменения текущего, а с возвратом нового
// let a = [1, 2, 3]
// let b = [5, "hello", 6]

// Array.prototype.double = function() {
// 	let newArray = this.map(function(item) {
// 		if (typeof item === 'number') {
// 			return Math.pow(item, 2)
// 		}
// 		if (typeof item === 'string') {
// 			 return item += item
// 		}
// 	})

// 	return newArray
// }

// let newA = a.double()
// let newB = b.double()

// console.log('A', newA.double())
// console.log('B', newB)

// //spread and rest 
// const form = document.querySelector('form')

// form.addEventListener('submit', event => {

//   event.preventDefault()

//   const title = form.title.value
//   const text = form.text.value
//   const description = form.description.value

//   saveForm(title, text, description)

// })

// // Spread
// // function saveForm(data) {
// //   const formData = {
// //     date: new Date().toLocaleDateString(),
// //     ...data
// //   }

// //   console.log('Ford data:', formData)
// // }

// // Rest
// function saveForm(...args) {
  
//   const [title, text, description] = args

//   const formData = {
//     date: new Date().toLocaleDateString(),
//     title, text, description
//   }

//   console.log('Ford data:', formData)

// ES6 строки
// const createLink = ({path, name}) => {
// 	return `<a target="_blank" href="${path}">${name}</a>`
// }

// const ul = document.querySelector('ul')
// const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`
// const yandex = `<li>${createLink({path: 'https://ya.ru', name: 'Yandex'})}</li>`

// ul.insertAdjacentHTML('afterbegin', google)
// ul.insertAdjacentHTML('afterbegin', yandex)

//dropdown меню
class Dropdown {
	 constructor(selector, options) {
		this.$el = document.querySelector(selector)
		this.items = options.items

		this.$el.querySelector('.dropdown_label').textContent = this.items[0].label

		this.$el.addEventListener('click', event => {
			if (event.target.classList.contains('dropdown_label')) {
				if (this.$el.classList.contains('open')) {
					this.close()
				} else {
					this.open()
				}
			} else if (event.target.tagName.toLowerCase() === 'li') {
				this.select(event.target.dataset.id)

			}
		})

		const itemsHTML = this.items.map(i => {
			return `<li data-id="${i.id}">${i.label}</li>`
		}).join('')

		this.$el.querySelector('.dropdown_menu').insertAdjacentHTML('afterbegin', itemsHTML)
	}

	select(id) {
		const item = this.items.find(i => i.id === id)
		this.$el.querySelector('.dropdown_label').textContent = item.label
		this.close()
	}

	open() {
		this.$el.classList.add('open')
	}

	close() {
		this.$el.classList.remove('open')
	}

}

const dropdown = new Dropdown('#dropdown', {
	items: [
		{label: 'Москва', id: 'msk'},
		{label: 'Санкт-Петербург', id: 'spb'},
		{label: 'Челябинск', id: 'chel'},
		{label: 'Пятигорск', id: 'pt'}
	]
})