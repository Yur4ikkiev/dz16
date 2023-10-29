let result = 0;

prompt("Сколько будет 2+2?") == "4" ? (result += 10) : (result += 0);
let a = confirm("Солнце встаёт на востоке?");
console.log(a)
if (a) {result += 10;} 
	else {result += 0;};
prompt("Сколько буде 5 / 0?") == "0" ? (result += 10) : (result += 0); /*undefined*/
prompt("Какого цвета небо?") === "голубое" ? (result += 10) : (result += 0);
prompt("Какой правильный ответ на главный вопрос жизни?") == "42" ? (result += 10) : (result += 0);
	
alert(`По результатам опроса Вы набрали - ${result} балов`);
