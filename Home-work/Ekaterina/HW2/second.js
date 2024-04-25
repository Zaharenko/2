// Переменная для хранения данных анкеты
let message;

// переменная для фамилии
let lastName;
//функция для ввода фамилии
function enterLastName() {
    // Ввод фамилии
    var enterLastName = prompt("Введите Вашу фамилию");
  
    // Проверка пустое поле или нет
    if (enterLastName === null || enterLastName.trim() === "") {
    // Если пустое то сообщение
        alert("Вы не ввели фамилию");
    } else {
    // если не пустое то введенная фамилия записывается в переменную
        lastName=enterLastName;
    }
}
//вызов функции ввода фамилии
enterLastName();

// переменная для имени
let firstName;
//функция для ввода имени
function enterFirstName() {
    // Ввод имени
    var enterFirstName = prompt("Введите Ваше имя");
  
    // Проверка пустое поле или нет
    if (enterFirstName === null || enterFirstName.trim() === "") {
    // Если пустое то сообщение
        alert("Вы не ввели имя");
    } else {
    // если не пустое то введенное имя записывается в переменную
        firstName=enterFirstName;
    }
}
//вызов функции ввода имени
enterFirstName();


// переменная для отчества
let patronymic;
//функция для ввода отчества
function enterPatronymic() {
    // Ввод отчества
    var enterPatronymic = prompt("Введите Ваше отчество");
  
    // Проверка пустое поле или нет
    if (enterPatronymic === null || enterPatronymic.trim() === "") {
    // Если пустое то сообщение
        alert("Вы не ввели отчество");
    } else {
    // если не пустое то введенное имя записывается в переменную
    patronymic=enterPatronymic;
    }
}
//вызов функции ввода отчества
enterPatronymic();

// запрос о возрасте и проверка на корректность
let age = prompt('Сколько Вам лет?');
let nAge = Number(age);  
let rep = /[^0-9]/;
switch (true)
{
    case nAge == " ":
        alert("Поле не должено быть пустым");
        break;
    case nAge<=17:
        alert("Возраст должен быть указан от 18 лет");
        break;
    case nAge>=121:
        alert("Возраст должен быть указан до 121 года");
        break;
    case rep.test(nAge):
        alert('Вы ввели недопустимые символы');
        break;
}

// объявляем функцию для определения возраста через 5 лет и получаем результат
function ageIn5Years(a, nAge) {
    return a + nAge;
  }
let resultInYears = ageIn5Years(5, nAge);

// объявляем функцию для определения возраста в днях и получаем результат
function ageInDays(a, nAge) {
    return a * nAge;
  }
let resultInDays = ageInDays(365, nAge);

// переменные для пола, пенсионного возраста и определения пенсии
let gender;
let pensionAge;
let pension;

//функция для вычисления пола и пенсионного возраста
function enterGender() {
    gender=confirm("Ваш пол - мужской?");
    gender?pensionAge=63:pensionAge=58;       
    if(pensionAge==63 && nAge>=pensionAge || pensionAge==58 && nAge>=pensionAge) {
        pension="да";
  } else{
    pension="нет"
   }
   if(gender){
    gender="мужской";
   } else{
    gender="женский";
   }
 }
 enterGender();

// Формирование данных анкеты
message=
         "Ваше ФИО: " + lastName + " " + firstName + " " + patronymic + "\n" +
         "Ваш возраст в годах: " + nAge + "\n" +
         "Ваш возраст в днях: " + resultInDays + "\n" +
         "Через 5 лет вам будет: " + resultInYears + "\n" +
         "Ваш пол: " + gender + "\n" +
         "Вы на пенсии: " + pension;

// Вывод данных с информацией о пользователе
alert(message);