import React from "react";

import { useDispatch } from "react-redux";
import {
  normalHandler,
  mediumhandler,
  hardHandler,
  impossibleHandler,
} from "../features/DifficultyLevelSlice";

function SelectDifficulty() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(normalHandler())}>normal</button>
      <button onClick={() => dispatch(mediumhandler())}>medium</button>
      <button onClick={() => dispatch(hardHandler())}>hard</button>
      <button onClick={() => dispatch(impossibleHandler())}>impossible</button>
    </div>
  );
}

export default SelectDifficulty;
