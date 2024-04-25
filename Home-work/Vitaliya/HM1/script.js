var yoursurname = prompt ("Введите Вашу фамилию:");
console.log (yoursurname);

var yourname = prompt ("Введите Ваше имя:");

var yourpatronymic = prompt ("Введите Ваше отчество:");

var yourage = prompt ("Введите Ваш возраст:");
console.log (yourage);

var yourgender = confirm ("Ваш пол мужской?\n нажмите ОК, если мужской\n ОТМЕНА, если женский");

if(yourgender===true){
    yourgender="мужской"
} else{
    yourgender="женский"
}

var ageindays = yourage*365;

var fiveyears = yourage+5;

var pensia = ('');
if ((yourage>=63) && (yourgender==="мужской")){
    pensia="да";
} else if ((yourage>=58) && (yourgender==="женский")){
    pensia="да";
} else {
    pensia="нет";
}

if ((yoursurname!=0) && (yourname!=0) && (yourpatronymic!=0) && (yourage!=0) && (yourage.replace(/[^0-9,\s]/g,""))){
    alert ('ваше ФИО: ' +yoursurname + ' ' +yourname  + ' ' +yourpatronymic + '\nваш возраст в годах: ' +yourage + '\nваш возраст в днях: ' +ageindays +'\nчерез 5 лет вам будет: '
    +fiveyears + '\nваш пол: ' +yourgender + '\nвы на пенсии: ' +pensia);
} else{
    alert ('Неверно введены данные. Повторите, пожалуйста, снова.')
}

