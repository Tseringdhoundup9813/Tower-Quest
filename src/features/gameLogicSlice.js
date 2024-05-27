import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "../utils/shuffle";
import {
  setArrayToLocalStorage,
  getArrayFromLocalStorage,
} from "../utils/localStorageHandler";
import { ActiveAllObject, ActivateSelectedObject } from "../utils/activeObject";

// deduct balance amount
const deductAmount = 10;
// grand amount
const grandAmount = 100;

// set balance to local storage
const gameLogicSlice = createSlice({
  name: "gameLogic",
  initialState: {
    points: 0,
    gameEnd: false,
    balance: getArrayFromLocalStorage("balance", 100),
    level: getArrayFromLocalStorage("level", 1),
    suffleBox: getArrayFromLocalStorage("shuffleBoxs", []),
    zeroBalance: false,
    autoPlay: getArrayFromLocalStorage("autoPlay", false),
  },
  reducers: {
    suffleArray: (state, action) => {
      if (state.balance < 10) {
        state.zeroBalance = true;
      } else {
        const collectionOfBox = [];
        for (var a = 1; a < 8; a++) {
          collectionOfBox.unshift({ level: a, floor: shuffle(action.payload) });
        }
        setArrayToLocalStorage("shuffleBoxs", collectionOfBox);
        state.suffleBox = getArrayFromLocalStorage("shuffleBoxs");
        setArrayToLocalStorage("level", 1);
        state.level = getArrayFromLocalStorage("level");
        state.gameEnd = false;
      }
    },

    // when select bomb, handle the bomb
    gameLooseHandler: (state, action) => {
      setArrayToLocalStorage("level", 1);
      state.level = getArrayFromLocalStorage("level");
      state.gameEnd = true;
      // set point to zero
      state.points = 0;

      setArrayToLocalStorage("balance", state.balance - deductAmount);
      state.balance = getArrayFromLocalStorage("balance");
    },

    activateAllObjectHandler: (state, action) => {
      setArrayToLocalStorage("shuffleBoxs", ActiveAllObject());
      state.suffleBox = getArrayFromLocalStorage("shuffleBoxs");
    },

    selectBoxHandler: (state, action) => {
      const { level, id } = action.payload;
      // activate selected objecte
      ActivateSelectedObject(level, id);
      state.suffleBox = getArrayFromLocalStorage("shuffleBoxs");
    },
    levelUpHandler: (state, action) => {
      if (state.level < 8) {
        const level = (state.level += 1);
        setArrayToLocalStorage("level", level);
        state.level = getArrayFromLocalStorage("level");
        state.points += 5;

        if (action.payload > 6) {
          setArrayToLocalStorage("balance", state.balance);
          const totalBalance =
            getArrayFromLocalStorage("balance") + state.points;
          setArrayToLocalStorage("balance", totalBalance);
          state.balance = getArrayFromLocalStorage("balance");
        }
      }
    },
    // ----------------------
    grandMeAmount: (state, action) => {
      setArrayToLocalStorage("balance", grandAmount);
      state.balance = getArrayFromLocalStorage("balance");
      state.zeroBalance = false;
    },
    autoPlayHandler: (state, action) => {
      setArrayToLocalStorage("autoPlay", action.payload);
      state.autoPlay = getArrayFromLocalStorage("autoPlay");
    },
  },
});

export const {
  suffleArray,
  gameLooseHandler,
  selectBoxHandler,
  levelUpHandler,
  activateAllObjectHandler,
  grandMeAmount,
  autoPlayHandler,
} = gameLogicSlice.actions;
export default gameLogicSlice.reducer;
