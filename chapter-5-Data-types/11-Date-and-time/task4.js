// Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// Функция должна надёжно работать при значении days=365 и больших значениях.
// P.S. Функция не должна изменять переданный ей объект date.

function getDateAgo(date, days) {
  const dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

const date4 = new Date(2015, 0, 2);
console.log(getDateAgo(date4, 3));
