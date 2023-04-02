// 1)	
// 	Создайте input type text и три кнопки
// 	кнопки должны иметь следующий функционал (должны запускать соответствующие функции)
// 	1. Кнопка "Очистить input" (удалять содержимое value тега input)
// 	2. Кнопка заблокировать инпут (disabled setAttribute)
// 	3. Кнопка разблокировать инпут (disabled removeAttribute)
// 	или input.disabled = true/false;

function clearInput() {
	document.getElementById('inputZero').value = '';
}

function blockInput() {
	document.getElementById('inputZero').setAttribute('disabled', 'disabled');
}

function unblockInput() {
	document.getElementById('inputZero').removeAttribute('disabled');
}

// 2) 
//Создайте в HTML два текстовых инпута и кнопку
//Напишите функцию, которая будет по нажатию на кнопку
//менять содержимое инпутов (value) местами

function changeInputs() {
	let input1 = document.getElementById('inputOne');
	let input2 = document.getElementById('inputTwo');
	let tempValue = inputOne.value;
	inputOne.value = inputTwo.value;
	inputTwo.value = tempValue;
}