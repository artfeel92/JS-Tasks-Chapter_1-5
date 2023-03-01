// Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:
/*
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/
let calculator = {
  read() {
    this.firstNumber = +prompt('Enter first number:', '');
    this.secondNumber = +prompt('Enter second number:', '');
  },

  sum() {
    return this.firstNumber + this.secondNumber;
  },

  mul() {
    return this.firstNumber * this.secondNumber;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
