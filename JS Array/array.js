	//1)
	//	Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

	//	То есть дефисы удаляются, а все слова после них получают заглавную букву.
	//	Примеры:

	//	camelize("background-color") == 'backgroundColor';
	//	camelize("list-style-image") == 'listStyleImage';
	//	camelize("-webkit-transition") == 'WebkitTransition';
	//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно

// const camelize = (string) => {
// 	let words = string.split('-');
// 	let arr = words.map((word, index) => {
// 		if (index === 0) {
// 			return word;
// 		} else {
// 			return word[0].toUpperCase() + word.slice(1);
//    }})
//  return arr.join('');
// }
// console.log(camelize('my-short-string'));


//2)
//Задача: написать функцию, принимающую массив чисел
	//	и возвращающую сумму всех его положительных элементов и отрицательных 
	//	чисел отдельно в виде нового массива

	//	например функция принимает как аргумент следующий массив
		//arr = [1, -2, 3, 4, -9]

		//и должна вернуть [8, -11]
		//Сохраняйте вызов этой функции через деструктурирующее присваивание


const sumPositiveNegative = (arr) => {
	let positiveSum = 0;
	let negativeSum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
	positiveSum += arr[i];
    } 
		else if (arr[i] < 0) {
	negativeSum += arr[i];
	}
}
return [positiveSum, negativeSum];
}

const arr = [1, -2, 3, 4, -9];
const [positiveSum, negativeSum] = sumPositiveNegative(arr);

console.log([positiveSum, negativeSum]); // [8, -11]
