/* ECMAScript 6 */

//Объявление переменных с помощью let и const:ES6 ввел ключевые слова let и const для объявления переменных с блочной областью видимости.
// ES5
// var x = 10;
// // ES6
// let x = 10;
// const PI = 3.14;

//Стрелочные функции:Стрелочные функции позволяют сократить синтаксис функций и изменить контекст this.

// // ES5
// var multiply = function(a, b) {
//     return a * b;
// };
// // ES6
// const multiply = (a, b) => a * b;


// Параметры по умолчанию:ES6 позволяет указывать значения параметров по умолчанию.

// ES5
// function greet(name) {
//     name = name || 'Guest';
//     console.log('Hello, ' + name + '!');
// }
// // ES6
// const greet = (name = 'Guest') => {
//     console.log(`Hello, ${name}!`);
// };

//Шаблонные строки:Шаблонные строки позволяют встраивать переменные и выражения в строки.

// ES5
// var name = 'John';
// console.log('Hello, ' + name + '!');
// // ES6
// const name = 'John';
// console.log(`Hello, ${name}!`);


//Деструктуризация:Деструктуризация позволяет извлекать значения из объектов или массивов и присваивать их переменным.

// ES5
// var person = { name: 'John', age: 30 };
// var name = person.name;
// var age = person.age;

// ES5
// var numbers = [1, 2, 3];
// var a = numbers[0];
// var b = numbers[1];
// var c = numbers[2];

// console.log(a, b, c);

// // ES6
// const person = { name: 'John', age: 30 };
// const { name, age } = person;
// console.log(name, age);

// ES6
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;

// console.log(a, b, c);


//Классы:ES6 ввел поддержку классов, что облегчает написание объектно-ориентированного кода.

// ES5
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// // ES6
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

//Модули:ES6 добавил поддержку модулей, позволяя разделять код на отдельные файлы и импортировать экспортируемые объекты.

// ES5 (CommonJS)
// math.js
// module.exports = {
//     sum: function(a, b) {
//         return a + b;
//     }
// };
// // app.js
// var math = require('./math');
// console.log(math.sum(1, 2));

// ES6
// math.js
// export const sum = (a, b) => a + b;
// // app.js
// import { sum } from './math';
// console.log(sum(1, 2));


//Spread-оператор в JavaScript используется для расширения выражения в местах, где ожидается несколько аргументов (для вызова функций) или несколько элементов (для массивов или объектов). Это удобный способ объединить несколько элементов в массив или объект. Давайте посмотрим на примеры использования spread-оператора в ES5 и ES6: Spread-оператор позволяет более элегантно объединять и копировать массивы, делая код более читаемым и компактным.

//Примеры spread-оператора в ES5: Конкатенация массивов

// ES5
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var combined = arr1.concat(arr2);

// console.log(combined); // [1, 2, 3, 4, 5, 6]

// //Копирование массива:
// // ES5
// var originalArray = [1, 2, 3];
// var copyArray = originalArray.slice();

// console.log(copyArray); // [1, 2, 3]

// //Примеры spread-оператора в ES6: Конкатенация массивов

// // ES6
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];

// console.log(combined); // [1, 2, 3, 4, 5, 6]

// //Копирование массива:
// // ES6
// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];

// console.log(copyArray); // [1, 2, 3]

//Цикл for...of в JavaScript предоставляет удобный способ перебора значений массива или другого итерируемого объекта. Давайте рассмотрим примеры его использования в ES5 и ES6: Цикл for...of в ES6 позволяет напрямую перебирать значения массива без необходимости использования индексов или вызова метода arr[i]. Это делает код более читаемым и удобным для использования. Кроме того, цикл for...of может использоваться для перебора значений любого итерируемого объекта, такого как строки, Map, Set и других.

//Примеры цикла for...of в ES5: Перебор значений массива:

// ES5
// var arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// //Примеры цикла for...of в ES6: Перебор значений массива:

// // ES6
// const arr = [1, 2, 3];
// for (const value of arr) {
//     console.log(value);
// }

//Новые методы массивов:ES6 представил новые методы массивов, такие как Array.prototype.find(), Array.prototype.findIndex(), Array.prototype.includes(), которые упрощают работу с массивами.

// const arr = [1, 2, 3, 4, 5];
// //Этот метод возвращает первый элемент массива, который удовлетворяет условию, заданному в переданной функции обратного вызова
// console.log(arr.find(element => element > 3));
// //Этот метод возвращает индекс первого элемента массива, который удовлетворяет условию, заданному в переданной функции обратного вызова
// console.log(arr.findIndex(element => element === 3));
// //Этот метод возвращает булево значение, указывающее, содержит ли массив заданное значение
// console.log(arr.includes(5));



/* Работа с DOM (Document Object Model) в JavaScript представляет собой основной способ взаимодействия с веб-страницей в браузере. DOM представляет структуру HTML-документа в виде дерева объектов, что позволяет JavaScript изменять содержимое, стили и поведение страницы. Вот некоторые основные методы и свойства для работы с DOM */

//document.getElementById(id):Этот метод находит элемент по его идентификатору (атрибут id). Он возвращает ссылку на найденный элемент или null, если элемент с указанным идентификатором не найден

// const element = document.getElementById('myElement');

// //document.getElementsByClassName(className):Этот метод находит все элементы с указанным именем класса. Он возвращает псевдо-массив, содержащий ссылки на найденные элементы

// const elements = document.getElementsByClassName('myClass');

// //document.getElementsByTagName(tagName):Этот метод находит все элементы с указанным именем тега. Он также возвращает псевдо-массив, содержащий ссылки на найденные элементы

// const elements = document.getElementsByTagName('div');

// //document.querySelectorAll(selector):Этот метод находит все элементы, соответствующие указанному CSS-селектору. Он также возвращает псевдо-массив, содержащий ссылки на найденные элементы

// const elements = document.querySelectorAll('.myClass');

// //document.querySelector(selector):Этот метод находит первый элемент, соответствующий указанному CSS-селектору. Он возвращает ссылку на найденный элемент или null, если элемент с указанным селектором не найден

// const element = document.querySelector('.myClass');

// //Эти методы позволяют программно находить и взаимодействовать с элементами на веб-странице, что чрезвычайно полезно для создания динамических и интерактивных приложений. Кроме того, псевдо-массивы, возвращаемые некоторыми из этих методов, являются итерируемыми, что позволяет использовать циклы for...of для перебора их элементов.

// const elements = document.querySelectorAll('.myClass');

// for (const element of elements) {
//     // выполнить действие с каждым найденным элементом
//     console.log(element.textContent);
// }


// /* Установка и чтение стилевых свойств элемента в JavaScript позволяет программно изменять внешний вид элементов на веб-странице. Вот некоторые основные методы и свойства для работы со стилями элементов */

// const elem = document.getElementById('EEE');
// elem.style.color = 'red'; // Установка цвета текста в красный

// //Установка пустого значения для стилевого свойства:
// const elem = document.getElementById('EEE');
// elem.style.color = ''; // Установка цвета текста в значение, определенное в CSS

// //Множественные установки стилей:
// const elems = document.getElementsByTagName('img');
// for (let i = 0; i < elems.length; i++) {
//     const elem = elems[i];
//     elem.style.borderStyle = 'solid';
//     elem.style.borderColor = 'blue';
//     elem.style.borderWidth = '1px';
// }

// //Установка нескольких стилевых свойств с помощью cssText:

// const elem = document.getElementById('EEE');
// elem.style.cssText = 'border: solid red 1px; background-color: blue;';

// //Этот метод позволяет установить несколько стилевых свойств одновременно, используя CSS-синтаксис. Использование className для установки или чтения CSS-класса элемента:
// const elem = document.getElementById('EEE');
// elem.className = 'SLeft SGood'; // Установка CSS-классов


//Также, можно добавлять и удалять CSS-классы с использованием методов classList.add, classList.remove, и classList.toggle. Получение фактически примененных к элементу стилевых свойств с помощью getComputedStyle Этот метод возвращает объект, содержащий все примененные к элементу стилевые свойства и их значения, унифицированные по способу задания и единицам измерения.Метод getComputedStyle также может принимать вторым аргументом имя псевдокласса CSS, например ':hover', для получения стилевых свойств, которые будут применены к элементу при наличии указанного псевдокласса.
// const elem = document.getElementById('EEE');
// const styles = window.getComputedStyle(elem);
// console.log(styles.color); // Возвращает цвет текста


//Различия в названиях стилевых свойств: Важно отметить, что названия стилевых свойств в CSS и в DOM не всегда совпадают. Например, background-color в CSS соответствует backgroundColor в DOM. Ниже приведены некоторые из различий:

/* 
background-color соответствует backgroundColor
font-size соответствует fontSize
border-bottom-width соответствует borderBottomWidth
 */

//Отключение и включение стилевых таблиц:

// Отключение стилевой таблицы
// const styleSheet = document.getElementById('myStyleSheet');
// styleSheet.disabled = true;

// Включение стилевой таблицы
// document.styleSheets[0].disabled = false;

//медиа-запросы в JavaScript позволяют программно определять, соответствует ли текущий размер экрана заданному медиа-запросу или orientation. Это полезно для создания адаптивных веб-страниц, которые могут изменять свой внешний вид в зависимости от размера экрана устройства. Вот пример использования медиа-запросов в JavaScript: Объект window.matchMedia создает медиаусловие, которое можно использовать для проверки текущего состояния устройства (например, ориентации). Метод matches возвращает булево значение, указывающее, соответствует ли текущее состояние медиаусловию. Событие change срабатывает при изменении состояния медиаусловия, что позволяет реагировать на изменения ориентации устройства.

// Создание медиаусловия
// const mq = window.matchMedia('(orientation: portrait)');

// // Проверка медиаусловия в данный момент
// if (mq.matches) {
//     // Ориентация устройства - портретная
//     handleOrientationChange('portrait');
// } else {
//     // Ориентация устройства - ландшафтная
//     handleOrientationChange('landscape');
// }

// // Функция для обработки изменения ориентации
// function handleOrientationChange(orientation) {
//     if (orientation === 'portrait') {
//         console.log('Портретная ориентация');
//     } else {
//         console.log('Ландшафтная ориентация');
//     }
// }

// // Подписка на событие изменения медиаусловия
// mq.addEventListener("change", orientationChangeHandler);

// // Функция-обработчик события изменения ориентации
// function orientationChangeHandler(event) {
//     if (event.matches) {
//         // Ориентация устройства - портретная
//         handleOrientationChange('portrait');
//     } else {
//         // Ориентация устройства - ландшафтная
//         handleOrientationChange('landscape');
//     }
// }


// Работа с положением элементов на веб-странице в JavaScript позволяет программно управлять расположением и размерами элементов. Вот некоторые основные методы и свойства для работы с положением элементов:
//Свойства offsetWidth и offsetHeight:
//element.offsetWidth: Возвращает ширину элемента на экране, в пикселях.
//element.offsetHeight: Возвращает высоту элемента на экране, в пикселях.
// const element = document.getElementById('myElement');
// console.log(element.offsetWidth);
// console.log(element.offsetHeight);

// //Свойства offsetLeft и offsetTop:
// //element.offsetLeft: Возвращает расстояние на экране от левого края элемента до левого края его ближайшего позиционированного предка (или окна браузера), в пикселях.
// //element.offsetTop: Возвращает расстояние на экране от верхнего края элемента до верхнего края его ближайшего позиционированного предка (или окна браузера), в пикселях.
// const element = document.getElementById('myElement');
// console.log(element.offsetLeft);
// console.log(element.offsetTop);