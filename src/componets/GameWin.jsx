import React from "react";
import "../css/win.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { suffleArray } from "../features/gameLogicSlice";
import PlayAgain from "./PlayAgain";
import SelectDifficulty from "./SelectDifficulty";
import CountDown from "./CountDown";

function GameWin() {
  const difficultyLevelArray = useSelector(
    (state) => state.difficultyLevel.level
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameLogicState = useSelector((state) => state.gameLogic);

  return (
    <div className="win-container">
      <h1>You have Won </h1>
      <p>congratulations</p>
      <CountDown />
      <PlayAgain name={"Play Again"} />
      <SelectDifficulty />
    </div>
  );
}

export default GameWin;
