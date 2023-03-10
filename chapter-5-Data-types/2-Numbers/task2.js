// Почему 6.35.toFixed(1) == 6.3?
// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

// Например:
console.log((1.35).toFixed(1)); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?

console.log((6.35).toFixed(1)); // 6.3
// Как правильно округлить 6.35?

// Ответ: 6.35 округляется до 6.3 потому что в двоичной системе счисления оно хранится как бесконечная дробь и потеря точности в данном случае уменьшает число при его округлении. Чтобы округлить 6.35 правильно необходимо умножить число на 10, чтобы сдвинуть десятичную точку на один знак вправо, затем округлить полученное число с помощью функции round() и разделить результат на 10, чтобы вернуть десятичную точку на место.

console.log(Math.round(6.35 * 10) / 10); // 6.4
