'use strict';

let title = prompt('Как называется ваш проект?', 'Проект'),
    screens = prompt('Какие типы экранов нужно разработать? \(Простые, Сложные, Интерактивные\)', 'Простые'),
    screenPrice = +prompt('Сколько будет стоить данная работа?', '10'),
    rollback = 10,
    adaptive = confirm('Нужен ли адаптив на сайте?', 'Конечно'),
    service1 = prompt('Какой дополнительный тип услуги нужен?', 'Дополнительный'),
    servicePrice1 = +prompt('Сколько это будет стоить?', '10'),
    service2 = prompt('Какой дополнительный тип услуги нужен?', 'Дополнительный'),
    servicePrice2 = +prompt('Сколько это будет стоить?', '10'),
    fullPrice = screenPrice + servicePrice1 + servicePrice2,
    percent = fullPrice * (rollback / 100),
    servicePercentPrice = Math.round(fullPrice - percent);
console.log(`Итоговая стоимость работ составляет ${servicePercentPrice} доллар(а\/ов)`);

if (fullPrice > 300 && fullPrice == 300) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 150 && fullPrice < 300) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 150 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}

console.log(`тип данных значений переменной title: ${typeof title}`);
console.log(`тип данных значений переменной fullPrice: ${typeof fullPrice}`);
console.log(`тип данных значений переменной adaptive: ${typeof adaptive}`);
console.log(`длинна строки screens: ${screens.length}`);
console.log(`Стоимость верстки экранов: ${screenPrice} доллар\(ов\)`);
console.log(`Стоимость разработки сайта: ${fullPrice} доллар\(ов\)`);
console.log(screens.toLowerCase().split(", "));
console.log(`процент отката посреднику за работу: ${fullPrice * (rollback / 100)}`);
