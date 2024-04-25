const lastName = prompt("Ваша фамилия?");
const firstName = prompt("Ваше имя?");
const surName = prompt("Ваше отчество?");
const age = prompt("Сколько вам лет?");

if (lastName === "" || firstName === "" || surName === "" || age === "") {
  alert("Введите данные еще раз!!!");
} 

let ageInDays = age * 365;
let ageAfterFive = (age += 5);

var gender = confirm("Ваш пол - мужской?");

if (gender) {
  gender = "мужской";
} else gender = "женский";

const pension = "";
if ((gender = "мужской" && age >= 64)) {
  pension = "да";
} else if ((gender = "женский" && age >= 58)) {
  pension = "да";
} else {
  pension = "нет";
}

alert(
    `Ваше ФИО: ${lastName} ${lastName} ${surName} \n Ваш возраст в годах: ${age} \n Ваш возраст в днях: ${ageInDays} \n Через пять лет Вам будет: ${ageAfterFive} \n Ваш пол: ${gender} \n Вы на пенсии: ${pension} `
  );