// shuffle  and return new array
export function shuffle(arr) {
  console.log(arr);
  const copyArray = [...arr];
  console.log(copyArray);
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
