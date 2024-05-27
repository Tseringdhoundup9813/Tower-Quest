import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/end.css";
import SelectDifficulty from "./SelectDifficulty";
import { useDispatch, useSelector } from "react-redux";
import PlayAgain from "./PlayAgain";
import CountDown from "./CountDown";

function GameEnds() {
  const gameLogicState = useSelector((state) => state.gameLogic);
  const points = gameLogicState.points;
  const balance = gameLogicState.balance;
  let previousBalance = balance - points;

  const dispatch = useDispatch();

  return (
    <div className="loose-container">
      <h1>You Loose</h1>
      {gameLogicState.autoPlay && <CountDown />}
      {/* <h1>Loose 10 points</h1> */}
      <PlayAgain name={"Play Again"} />
      <SelectDifficulty />
    </div>
  );
}

export default GameEnds;
