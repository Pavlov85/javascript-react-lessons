
//  Runner только для браузера в этом примере. Создаем пустой массив,
//  куда записываем данные от пользователя последовательно)

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет', '');

console.log(answers);

//  Увеличить на + 1 и уменьшить на + 1 (Учесть можно 
//  префиксное и постфиксное)

let incr = 10,
    decr = 10;

   ++incr;
   --decr;

   console.log(incr);
   console.log(decr);

//   Остаток от деления двух целых чисел

console.log(5%2);

// Пример работы логического оператора или || c отрицанием !)

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);