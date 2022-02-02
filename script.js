
let title = prompt('Как называется ваш проект?', 'Проект'),
    screens = prompt('Какие типы экранов нужно разработать? \(Простые, Сложные, Интерактивные\)', 'Простые'),
    screenPrice = +prompt('Сколько будет стоить данная работа?', '10'),
    rollback = 10,
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?', 'Дополнительный'),
    servicePrice1 = +prompt('Сколько это будет стоить?', '10'),
    service2 = prompt('Какой дополнительный тип услуги нужен?', 'Дополнительный'),
    servicePrice2 = +prompt('Сколько это будет стоить?', '10'),
    allServicePrices,
    fullPrice;

const getAllServicePrices = function (price, price1) {
    return price + price1;
};
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(price2, price3) {
    return price2 + price3;
}
fullPrice = getFullPrice(screenPrice, allServicePrices);
let percent = fullPrice * (rollback / 100);

function getTitle(a) {
    a = a.trim();
    return a[0].toUpperCase() + a.slice(1).toLowerCase();
}
function getServicePercentPrices(price4, price5) {
    return Math.ceil(price4 - price5);
};

let servicePercentPrice = getServicePercentPrices(fullPrice, percent);

const getRollbackMessage = function () {
    if (fullPrice >= 300) {
        return 'Даем скидку в 10%';
    } else if (fullPrice >= 150 && fullPrice < 300) {
        return 'Даем скидку в 5%';
    } else if (fullPrice < 150 && fullPrice >= 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

showTypeOf(`Значение и тип переменной title: ${getTitle(title)}`);
showTypeOf(`Значение и тип переменной adaptive: ${adaptive}`);
showTypeOf(`Значение и тип переменной rollback: ${rollback}`);

console.log(`Вывод строки с типами экранов для разработки: ${Array.from([screens])}`);
console.log(`Cообщение о скидке пользователю: ${getRollbackMessage()}`);
console.log(`Cтоимость за вычетом процента отката посреднику: ${servicePercentPrice}`);

