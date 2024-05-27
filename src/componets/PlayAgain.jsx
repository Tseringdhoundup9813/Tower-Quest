import React from "react";
import "../css/play.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { suffleArray } from "../features/gameLogicSlice";

function PlayAgain({ name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const difficultyLevelArray = useSelector(
    (state) => state.difficultyLevel.level
  );
  function playHandler() {
    dispatch(suffleArray(difficultyLevelArray));
    navigate("/tower");
  }
  return (
    <div className="play-component">
      <button onClick={playHandler}>{name}</button>
    </div>
  );
}

export default PlayAgain;
