import { createSlice } from "@reduxjs/toolkit";

import {
  setArrayToLocalStorage,
  getArrayFromLocalStorage,
} from "../utils/localStorageHandler";
import { difficultyObject } from "../utils/difficultyObjects";

const initalValue = {
  level: getArrayFromLocalStorage("difficulty", difficultyObject.normal),
  difficultyName: getArrayFromLocalStorage("difficultyName", "normal"),
};

const defficultyLevelSlice = createSlice({
  name: "DefficultLevel",
  initialState: initalValue,

  reducers: {
    normalHandler: (state) => {
      setArrayToLocalStorage("difficulty", difficultyObject.normal);
      state.level = getArrayFromLocalStorage("difficulty");
      setArrayToLocalStorage("difficultyName", "normal");
      state.difficultyName = getArrayFromLocalStorage("difficultyName");
    },
    mediumhandler: (state) => {
      setArrayToLocalStorage("difficulty", difficultyObject.medium);
      state.level = getArrayFromLocalStorage("difficulty");
      setArrayToLocalStorage("difficultyName", "medium");
      state.difficultyName = getArrayFromLocalStorage("difficultyName");
    },
    hardHandler: (state) => {
      setArrayToLocalStorage("difficulty", difficultyObject.hard);
      state.level = getArrayFromLocalStorage("difficulty");
      setArrayToLocalStorage("difficultyName", "hard");
      state.difficultyName = getArrayFromLocalStorage("difficultyName");
    },
    impossibleHandler: (state) => {
      setArrayToLocalStorage("difficulty", difficultyObject.impossible);
      state.level = getArrayFromLocalStorage("difficulty");
      setArrayToLocalStorage("difficultyName", "impossible");
      state.difficultyName = getArrayFromLocalStorage("difficultyName");
    },
  },
});

export const { normalHandler, mediumhandler, hardHandler, impossibleHandler } =
  defficultyLevelSlice.actions;

export default defficultyLevelSlice.reducer;
