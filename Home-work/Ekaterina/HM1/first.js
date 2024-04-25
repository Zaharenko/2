let message;

// Ввод фамилии и проверка
let lastName = prompt('Введите Вашу фамилию');
if(!/^[а-яА-ЯёЁ -]{3,30}$/.test(lastName) || !lastName){
    message = "Вы не корректно указали фамилию. Допускается ввод только кириллицы от 3 до 30 символов";
    }
    else{

// Ввод имени и проверка
let firstName = prompt('Введите Ваше имя');
if(!/^[а-яА-ЯёЁ -]{3,30}$/.test(firstName) || !firstName){
    message = "Вы не корректно указали имя. Допускается ввод только кириллицы  от 3 до 30 символов";
    }
    else{

// Ввод отчества и проверка
let patronymic = prompt('Введите Ваше отчество');
if(!/^[а-яА-ЯёЁ -]{3,30}$/.test(patronymic) || !patronymic){
    message = "Вы не корректно указали отчество. Допускается ввод только кириллицы  от 3 до 30 символов";
    }
    else{

// Ввод возраста и проверка       
let age = prompt('Сколько Вам лет?');
    age = Number(age);  //Number(age); почему может не работать

if( !( age > 1 && age<120 ) ){
        message = "Возраст должен быть указан между цифрами 1 и 120";
        }
        else{ 

// возраст в днях
let ageInDays = age * 365;

// возраст через 5 лет
let ageIn5Years = 5+age;

//определяем пол и пенсионный возраст
let gender = confirm("Ваш пол - мужской?");
let sGender = "Женский";
let pensionAge = 58;
if (gender){sGender="Мужской";
pensionAge = 63;}

// пенсия   
let pension = "Вы на пенсии: "+(age<pensionAge?"нет":"да"); 



message='Ваше ФИО: ' + lastName +' ' + firstName +' ' + patronymic +'\n'+ 'Ваш возраст в годах: ' + age +'\n'+ 'Ваш возраст в днях: ' + ageInDays +'\n'+ 'Через 5 лет Вам будет: ' + ageIn5Years +'\n'+ 'Ваш пол: ' + sGender+ '\n'+pension;


    }}}}
alert(message);