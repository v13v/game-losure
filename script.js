'use strict';

const getRundomNum = (min, max) => Math.floor(Math.random() * (max - min) + min); // функция для создания случайного числа

const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n); // Если число вернуть true иначе false

// ответ пользователя

let game;

const startGame = () => {
  const randomNum = getRundomNum(1, 100); // сюда приходит рандомное число от 1 до 100
  console.log(randomNum);
  
  return function processGame() {
    const userNum = prompt('Введите Ваше число от 1 до 100');
    let num;
    console.log(`Рандомное число загаданное ботом: ${randomNum}`);

    if (isNumber(userNum)) {
      num = +userNum;
      if(num > randomNum) {

        alert('Загаданное число меньше');
        return processGame();

      } else if(num < randomNum) {

        alert('Загаданное число больше');
        return processGame();

      } else {

        alert('Поздравляем, Вы угадали');

        if(confirm('Желаете ли Вы сыграть еще раз?')) {
          return startGame()();
        } else {
          alert('Спасибо за игру!');
        }

      }
    } else if (userNum === null) { // Если пользователь нажал на отмену
      alert('Спасибо за игру!');
    } else { // если пользователь ввел не число
      alert('Введи число!'); // уведомляем его об этом
      return processGame(); // перезапускаем игру
    }

  }

}
startGame()();
// game = startGame();
// game();