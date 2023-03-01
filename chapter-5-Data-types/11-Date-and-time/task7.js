// Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  const rightNow = new Date();
  const tomorrow = new Date(
    rightNow.getFullYear(),
    rightNow.getMonth(),
    rightNow.getDate() + 1
  );
  const difference = tomorrow - rightNow;
  return Math.floor(difference / 1000);
}

console.log(getSecondsToTomorrow());
