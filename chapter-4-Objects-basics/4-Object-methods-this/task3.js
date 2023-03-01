// Цепь вызовов
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
  },
};
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// Ответ: чтобы позволить нашим методам работать по цепочке, мы должны возвращать объект ladder в каждом из этих методов
ladder = {
  step: 0,
  up() {
    this.step++;
    return ladder;
  },
  down() {
    this.step--;
    return ladder;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return ladder;
  },
};
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
