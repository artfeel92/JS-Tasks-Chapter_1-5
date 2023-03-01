// Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
  const rightNow = new Date();
  const startOfToday = new Date(
    rightNow.getFullYear(),
    rightNow.getMonth(),
    rightNow.getDate()
  );
  return Math.round(rightNow - startOfToday / 1000);
}

console.log(getSecondsToday());
