// shuffle  and return new array
export function shuffle(arr) {
  const copyArray = [...arr];
  for (var a = copyArray.length - 1; a > 0; a--) {
    // generate random number till last index
    const random = Math.floor(Math.random() * (a + 1));
    const randomValue = copyArray[random];
    copyArray[random] = copyArray[a];
    copyArray[a] = randomValue;
  }
  return copyArray;
}
//   -------------------------------------------------
