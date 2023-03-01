// Создать расширяемый калькулятор
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей:

// 1) Реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// 2) Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции(умножение, деление и возведение в степень). Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

function Calculator() {
  this.availableOperations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    const splittedStr = str.split(' ');
    const firstNumber = +splittedStr[0];
    const operation = splittedStr[1];
    const secondNumber = +splittedStr[2];

    if (
      isNaN(firstNumber) ||
      !this.availableOperations[operation] ||
      isNaN(secondNumber)
    ) {
      return NaN;
    }

    return this.availableOperations[operation](firstNumber, secondNumber);
  };

  this.addMethod = function (name, func) {
    this.availableOperations[name] = func;
  };
}

const calc = new Calculator();

console.log(calc.calculate('6 + 3'));

console.log(calc.calculate('6 - 3'));

calc.addMethod('/', (a, b) => a / b);
console.log(calc.calculate('6 / 3'));

calc.addMethod('*', (a, b) => a * b);
console.log(calc.calculate('6 * 3'));

calc.addMethod('**', (a, b) => Math.pow(a, b));
console.log(calc.calculate('6 ** 3'));

console.log(calc.calculate('6 # 3'));
