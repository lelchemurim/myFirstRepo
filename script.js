'use strict';

//let title, screenPrice, screens, rollback, fullPrice, adaptive;
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать? \(Простые, Сложные, Интерактивные\)');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = 10;
let adaptive = !!prompt('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let percent = fullPrice * (rollback / 100);
let servicePercentPrice = Math.round(fullPrice - percent);
console.log(`Итоговая стоимость работ составляет ${servicePercentPrice} доллар(а\/ов)`);

if (fullPrice > 300 && fullPrice == 300) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 150 && fullPrice < 300) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 150 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
};


console.log(`тип данных значений переменной title: ${typeof title}`);
console.log(`тип данных значений переменной fullPrice: ${typeof fullPrice}`);
console.log(`тип данных значений переменной adaptive: ${typeof adaptive}`);
console.log(`длинна строки screens: ${screens.length}`);
console.log(`Стоимость верстки экранов: ${screenPrice} доллар\(ов\)`);
console.log(`Стоимость разработки сайта: ${fullPrice} доллар\(ов\)`);
console.log(screens.toLowerCase().split(", "));
console.log(`процент отката посреднику за работу: ${fullPrice * (rollback / 100)}`);
