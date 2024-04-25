// // Запрос на получение данных от пользователя

// var yourSurname = prompt ("Введите Вашу фамилию:");
// console.log (yourSurname);

// var yourName = prompt ("Введите Ваше имя:");

// var yourPatronymic = prompt ("Введите Ваше отчество:");

// var yourAge = parseInt (prompt ("Введите Ваш возраст:"));
// console.log (yourAge);

// var yourGender = confirm ("Ваш пол мужской?\n нажмите ОК, если мужской\n ОТМЕНА, если женский");

// // Запись результата пола (мужской или женский) в зависимости от выбранной пользователем кнопки "ОК" или "ОТМЕНА"

// if(yourGender===true){
//     yourGender="мужской"
// } else{
//     yourGender="женский"
// }

// // Расчет возраста в днях и сколько будет пользователю через 5 лет

// var ageInDays = yourAge*365;

// var fiveYears = yourAge+5;

// // Получение результата на пенсии ли пользователь с использованием возраста и пола

// var pensia = ('');
// if ((yourAge>=63) && (yourGender==="мужской")){
//     pensia="да";
// } else if ((yourAge>=58) && (yourGender==="женский")){
//     pensia="да";
// } else {
//     pensia="нет";
// }

// // Вывод результата анкеты и проверка введенных данных

// if (!yourSurname || !yourName || !yourPatronymic || isNaN(yourAge) || (yourAge<=0 || yourAge>=110)) {
//     alert ('Неверно введены данные. Повторите, пожалуйста, снова.')
// } else{
//     alert ('ваше ФИО: ' +yourSurname + ' ' +yourName  + ' ' +yourPatronymic + '\nваш возраст в годах: ' +yourAge + '\nваш возраст в днях: ' +ageInDays +'\nчерез 5 лет вам будет: '
//     +fiveYears + '\nваш пол: ' +yourGender + '\nвы на пенсии: ' +pensia);
// }






// ДЗ 2

// Запрос на получение данных ФИО от пользователя и проверка на ввод значений

var fullName = " ";

enter_fullName ();

function enter_fullName(){
    function enter_fullName(question){
        var nameSurnamePatr= prompt(question);
        if (!nameSurnamePatr){
            enter_fullName(question);
        } else{
           fullName+=nameSurnamePatr+" "; 
        }
    }
    enter_fullName ("Введите Вашу фамилию: ");
    enter_fullName ("Введите Ваше имя: ");
}

var yourPatronymic = prompt ("Введите Ваше отчество:");

// Запрос на получение данных о возрасте и поле

var yourAge = parseInt (prompt ("Введите Ваш возраст:"));
console.log (yourAge);

var yourGenderIs;
var yourGender = confirm ("Ваш пол мужской?\n нажмите ОК, если мужской\n ОТМЕНА, если женский");

// Запись результата пола (мужской или женский) в зависимости от выбранной пользователем кнопки "ОК" или "ОТМЕНА"

var yourGenderIs=(yourGender===true) ? "мужской" : "женский";

// Расчет возраста в днях и сколько будет пользователю через 5 лет

var ageInDays = yourAge*365;

var fiveYears = yourAge+5;

// Получение результата на пенсии ли пользователь с использованием возраста и пола

var pensia = ('');
switch (yourAge){
    case yourAge>=63 && yourGender==="мужской":
    pensia="да";
    break;
    case yourAge>=58 && yourGender==="женский":
    pensia="да";   
    break;
    default:
    pensia="нет";    
}

// Вывод результата анкеты и проверка введенного возраста

if (isNaN(yourAge) || (yourAge<=0 || yourAge>=110)){
    alert ('Неверно введены данные. Повторите, пожалуйста, снова.')
} else{
    alert ('ваше ФИО: ' +fullName + '\nваш возраст в годах: ' +yourAge + '\nваш возраст в днях: ' +ageInDays +'\nчерез 5 лет вам будет: '
    +fiveYears + '\nваш пол: ' +yourGenderIs + '\nвы на пенсии: ' +pensia);
}
