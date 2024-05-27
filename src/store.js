import { configureStore } from "@reduxjs/toolkit";
import difficultyReducer from "./features/DifficultyLevelSlice";

import gameLogicReducer from "./features/gameLogicSlice";

export const store = configureStore({
  reducer: {
    difficultyLevel: difficultyReducer,
    gameLogic: gameLogicReducer,
  },
});
