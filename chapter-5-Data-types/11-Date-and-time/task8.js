// Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
/*
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

function formatDate(date) {
  const difference = new Date() - date;
  if (difference < 1000) {
    return 'прямо сейчас';
  } else if (difference < 60000) {
    return `${Math.floor(difference / 1000)} сек. назад`;
  } else if (difference < 3600000) {
    return `${Math.floor(difference / 60000)} мин. назад`;
  } else {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 7 * 1000)));
console.log(formatDate(new Date(new Date() - 42 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
