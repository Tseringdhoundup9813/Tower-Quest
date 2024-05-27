import React from "react";
import "../css/difficulty.css";
import { useDispatch, useSelector } from "react-redux";
import {
  normalHandler,
  mediumhandler,
  hardHandler,
  impossibleHandler,
} from "../features/DifficultyLevelSlice";

function SelectDifficulty() {
  const difficultyName = useSelector(
    (state) => state.difficultyLevel.difficultyName
  );
  console.log(difficultyName);
  const dispatch = useDispatch();
  return (
    <div className="difficulty-component">
      <button
        onClick={() => dispatch(normalHandler())}
        className={difficultyName == "normal" ? "active" : "inactive"}
      >
        normal
      </button>
      <button
        onClick={() => dispatch(mediumhandler())}
        className={difficultyName == "medium" ? "active" : "inactive"}
      >
        medium
      </button>
      <button
        onClick={() => dispatch(hardHandler())}
        className={difficultyName == "hard" ? "active" : "inactive"}
      >
        hard
      </button>
      <button
        onClick={() => dispatch(impossibleHandler())}
        className={difficultyName == "impossible" ? "active" : "inactive"}
      >
        impossible
      </button>
    </div>
  );
}

export default SelectDifficulty;
