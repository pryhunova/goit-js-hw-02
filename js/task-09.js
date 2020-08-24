// Есть массив logins с логинами пользователей.Напиши скрипт добавления логина в массив logins.Добавляемый логин должен:

// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
function isLoginValid(login, min = 4, max = 16) {
  //isLoginValid только проверяет валидный ли логин и возвращает true или false.
  // Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того,
  //     попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.
  return login.length >= min && login.length <= max ? true : false;
}

function isLoginUnique(allLogins, login) {
  //isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
  'use strict';
  // Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры
  // и проверяет наличие login в массиве allLogins,
  //     возвращая true если такого логина еще нет и false если логин уже используется.
  return allLogins.includes(login) ? false : true;
}

function addLogin(allLogins, login) {
  // addLogin добавляет или не добавляет логин в массив.
  // При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.
  'use strict';
  // Напиши функцию addLogin(allLogins, login) которая:
  // Принимает новый логин и массив всех логинов как параметры
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Проверяет валидность логина используя вспомогательную функцию isLoginValid
  //Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
  if (isLoginValid(login) === false) {
    message = ERROR;
    // Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
    //Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
  } else if (isLoginUnique(allLogins, login) === false) {
    message = REFUSAL;
  } else {
    //Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
    allLogins.push(login);
    message = SUCCESS;
  }
  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
