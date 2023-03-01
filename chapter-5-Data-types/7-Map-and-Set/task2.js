// Отфильтруйте анаграммы
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм. Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  const anagrams = new Map();

  for (let unsortedWord of arr) {
    const sortedWord = unsortedWord.toLowerCase().split('').sort().join('');
    console.log(sortedWord);

    if (anagrams.has(sortedWord)) {
      anagrams.get(sortedWord).push(unsortedWord);
    } else {
      anagrams.set(sortedWord, [unsortedWord]);
    }
  }
  return Array.from(anagrams.values()).map((words) => words[0]);
}

console.log(aclean(arr));
