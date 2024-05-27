import React from "react";
import "../css/tower.css";
import { useSelector } from "react-redux";
import Floor from "./Floor";
import { NavLink } from "react-router-dom";

function Tower() {
  const gameLogicState = useSelector((state) => state.gameLogic);
  const difficultyState = useSelector((state) => state.difficultyLevel);
  const Mode = difficultyState.difficultyName;

  const points = gameLogicState.points;
  const balance = gameLogicState.balance;
  let level = gameLogicState.level;
  let shuffleBoxList = gameLogicState.suffleBox;
  let gameEnd = gameLogicState.gameEnd;

  return (
    <div className="tower-main-container">
      <div className="">
        <h2>Balance {balance}</h2>
        <h2>Mode {Mode}</h2>
        <NavLink to="/">Menu</NavLink>
      </div>
      <div className="game-play-area-cotnainer">
        <h1 className="points-spawn">Points {points}</h1>
        {shuffleBoxList?.map((shuffleBoxsObject, index) => {
          return (
            <Floor
              key={index}
              floor={shuffleBoxsObject.floor}
              activeFloor={level == shuffleBoxsObject.level && !gameEnd}
              level={shuffleBoxsObject.level}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tower;
