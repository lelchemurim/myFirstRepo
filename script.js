let title, screenPrice, screens, rollback, fullPrice, adaptive;
title = "Название проекта";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 1;
rollback = 99;
fullPrice = 1000000;
adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " доллар\(ов\)");
console.log("Стоимость разработки сайта " + fullPrice + " доллар\(ов\)");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));