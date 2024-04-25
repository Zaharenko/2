const lastName = prompt ('Введите Вашу фамилию?');
const firstName = prompt ('Введите Ваше имя?');
const surname = prompt ('Введите Ваше отчество?');
let age = parseInt (prompt ('Введите Ваш возраст?'));
let getAgeDay = age * 365;
let getAgeSum = age + 5;

var gender = confirm ('Какой Ваш пол?\nМужской (ОК)\nЖенский (Отмена)');
if (gender === true) {
  gender = 'мужской';
} else {
  gender = 'женский';
}
if ((gender === 'мужской' && age >= 65) || (gender === 'женский' && age >= 60)) {
  age = 'да';
} else {
  age = 'нет';
}

alert (`Ваше ФИО: ${lastName} ${firstName} ${surname}\nВаш возраст в днях: ${getAgeDay}\nЧерез пять лет Вам будет: ${getAgeSum}\nВаш пол: ${gender}\nВы на пенсии: ${age}`);
