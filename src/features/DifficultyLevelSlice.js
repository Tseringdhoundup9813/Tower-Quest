import { createSlice } from "@reduxjs/toolkit";
import bomb from "../../public/images/bomb.png";
import gems1 from "../../public/images/gems1.png";
import gems3 from "../../public/images/gems1.png";
import { act } from "react";

const normal = [
  { id: 1, img: bomb, active: false },
  { id: 2, img: gems1, active: false },
  { id: 3, img: gems3, active: false },
  { id: 4, img: gems1, active: false },
];

const medium = [
  { id: 1, img: bomb, active: false },
  { id: 2, img: gems1, active: false },
  { id: 3, img: gems3, active: false },
];
const hard = [
  { id: 1, img: bomb, active: false },
  { id: 2, img: bomb, active: false },
  { id: 3, img: gems3, active: false },
];
const impossible = [
  { id: 1, img: bomb, active: false },
  { id: 2, img: gems1, active: false },
  { id: 3, img: bomb, active: false },
  { id: 4, img: bomb, active: false },
];

// set array to local storage
function setArrayToLocalStorage(arr) {
  localStorage.setItem("difficulty", JSON.stringify(arr));
}

// access array from local storage from diffuculty object
function getArrayFromLocalStorage() {
  const arr = JSON.parse(localStorage.getItem("difficulty"));
  if (arr == null) return normal; //if arr value is eqaull to null then return normal array
  return arr;
}

const initalValue = {
  level: getArrayFromLocalStorage(),
};

const defficultyLevelSlice = createSlice({
  name: "DefficultLevel",
  initialState: initalValue,
  reducers: {
    normalHandler: (state) => {
      setArrayToLocalStorage(normal);
      state.level = getArrayFromLocalStorage();
    },
    mediumhandler: (state) => {
      setArrayToLocalStorage(medium);
      state.level = getArrayFromLocalStorage();
    },
    hardHandler: (state) => {
      setArrayToLocalStorage(hard);
      state.level = getArrayFromLocalStorage();
    },
    impossibleHandler: (state) => {
      setArrayToLocalStorage(impossible);
      state.level = getArrayFromLocalStorage();
    },
  },
});

export const { normalHandler, mediumhandler, hardHandler, impossibleHandler } =
  defficultyLevelSlice.actions;

export default defficultyLevelSlice.reducer;
