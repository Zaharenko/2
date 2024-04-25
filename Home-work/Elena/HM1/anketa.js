const firstName = prompt("Как Вас зовут? (Имя)");
const middleName = prompt("Какое у Вас отчество?");
const lastName = prompt("Какая у Вас фамилия?"); 
const yearAge = prompt("Сколько Вам лет?");

let result;
if(firstName === "" || firstName === null || middleName === "" || middleName === null || lastName === "" || lastName === null || yearAge === "" || yearAge === null || isNaN(yearAge)) {
    result = "Данные введены некорректно или Вы нажали кнопку \"Отмена\" при вводе данных."
} else {
    const dayAge = yearAge * 365;
    const futureAge = Number(yearAge) + 5;
    const isMale = confirm("Ваш пол - мужской?");
    
    let gender;
    if (isMale) {
        gender = "мужской";
    } else {
        gender = "женский";
    }
                    
    let isPensioner;
    if ((gender === "мужской" && yearAge >= 63) || (gender === "женский" && yearAge >= 58)) {
        isPensioner = "да";
    } else {
        isPensioner = "нет";
    }

    result = `Ваше ФИО: ${firstName} ${middleName} ${lastName}\nВаш возраст в годах: ${yearAge}\nВаш возраст в днях: ${dayAge}\nЧерез 5 лет Вам будет: ${futureAge}\nВаш пол: ${gender}\nВы на пенсии: ${isPensioner}`;
}

alert(result);
