import { configureStore } from "@reduxjs/toolkit";
import difficultyReducer from "./features/DifficultyLevelSlice";
import towerReducer from "./features/towerSlice";

export const store = configureStore({
  reducer: {
    difficultyLevel: difficultyReducer,
    tower: towerReducer,
  },
});
