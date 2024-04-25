const lastName = prompt("Ваша фамилия?");
const firstName = prompt("Ваше имя?");
const surName = prompt("Ваше отчество?");
const age = parseInt(prompt("Сколько вам лет?"));

while (age <= 18) {
  alert(`${firstName} Вы еще не совершеннолетний! Обновите старницу!`);
}

if (lastName === "" || firstName === "" || surName === "" || isNaN(age)) {
  alert("Введите данные еще раз!!!");
  location.reload();
} else var gender = confirm("Если Ваш пол - мужской нажмите ОК");

switch (gender) {
  case true:
    gender = "мужской";
    break;
  default:
    gender = "женский";
    break;
}

var ageInDays = age * 365;
var ageAfterFive = age + 5;

let pension = "";
if (gender === "мужской" && age >= 64) {
  pension = "да";
} else if (gender === "женский" && age >= 58) {
  pension = "да";
} else {
  pension = "нет";
}

alert(
  `Ваше ФИО: ${lastName} ${firstName} ${surName} \nВаш возраст в годах: ${age} \nВаш возраст в днях: ${ageInDays} \nЧерез пять лет Вам будет: ${ageAfterFive} \nВаш пол: ${gender} \nВы на пенсии: ${pension}`
);
