//Реализовать решение задачи в JS: 
//- У нас есть 100 (создать константу)
//- Цена помидоров на рынке - 10 (создать константу)
//- Цена огурцов на рынке - 5 (создать константу)
//- Цена яблок на рынке - 15 (создать константу)
//- Оставшиеся деньги потратим на орехи (создать переменную)

//- Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
//- оставшиеся деньги потратили на орехи (присвоить значение переменной)

//- сколько денег мы потратили на орехи? (вывести переменную в консоль)
//- на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)

//- в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
//выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'

const ALL_MONEY = 100;
const TOMATO_PRICE = 10;
const CUCUMBER_PRICE = 5;
const APPLE_PRICE = 15; 

const KILOS_PER_ITEM = 2;
let cucumbersBought = KILOS_PER_ITEM;
let tomatoesBought = KILOS_PER_ITEM;
let applesBought = KILOS_PER_ITEM;

let spentOnVegetablesAndFruits = cucumbersBought * CUCUMBER_PRICE + tomatoesBought * TOMATO_PRICE + applesBought * APPLE_PRICE;
let remainingMoney = ALL_MONEY - spentOnVegetablesAndFruits;
let spentOnNuts = remainingMoney;

console.log(`Мы потратили на орехи: ${spentOnNuts}`);

let spentMoreOnVegetablesAndFruits = spentOnVegetablesAndFruits > spentOnNuts;

console.log(`Больше потратили на фрукты и овощи: ${spentMoreOnVegetablesAndFruits}`);

if (spentMoreOnVegetablesAndFruits) {
  console.log('Больше потратили на фрукты и овощи');
} else {
  console.log('Больше потратили на орехи');
}





