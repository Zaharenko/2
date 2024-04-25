var yourName = prompt('Ваше имя');
var yourSurname = prompt('Вашу Фамилию');
var yourFathername = prompt('Ваше отчество');
var age = prompt('Ваш возраст')
var numAge = parseInt(age);
var sex = confirm('do u man?');

if(sex === true){
    sexName = 'мужской';
} else {
    sexName = 'женский';
}

if(sex === true && age >= 65 || sex !== true && age >= 63){
    pension = 'да';
} else {
    pension = 'нет';
}

var days = numAge * 365
var age5 = numAge + 5

alert("Ваше ФИО: " + yourName + ' ' + yourSurname + ' ' + yourFathername + '\n' + "Ваш возраст в годах: " + age + '\n' + "Ваш возраст в днях: " + days + '\n' + "Через 5 лет вам будет: " + age5 + '\n' + "Ваш пол: " + sexName + '\n' + "Вы на пенсии: " + pension);