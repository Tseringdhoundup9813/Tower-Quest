import { difficultyObject } from "./difficultyObjects";

// set array to local storage

export function setArrayToLocalStorage(name, arr) {
  localStorage.setItem(name, JSON.stringify(arr));
}

// access array from local storage from diffuculty object
export function getArrayFromLocalStorage(name, option) {
  const arr = JSON.parse(localStorage.getItem(name));
  if (arr == null) return option; //if arr value is eqaull to null then return normal array
  return arr;
}
