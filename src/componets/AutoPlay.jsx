import React, { useState } from "react";
import "../css/autoPlay.css";
import { useDispatch, useSelector } from "react-redux";
import { autoPlayHandler } from "../features/gameLogicSlice";
function AutoPlay() {
  const gameLogicState = useSelector((state) => state.gameLogic);
  const dispatch = useDispatch();
  const autoPlayState = gameLogicState.autoPlay;

  function autoPlayHandlerFunc(data) {
    dispatch(autoPlayHandler(data));
  }
  return (
    <div className="autoplay-component">
      <p>Auto Play</p>
      <div>
        <div>
          <label>On</label>
          <input
            type="checkbox"
            onClick={() => autoPlayHandlerFunc(true)}
            checked={autoPlayState}
          ></input>
        </div>
        <div>
          <label>Off</label>
          <input
            type="checkbox"
            checked={!autoPlayState}
            onClick={() => autoPlayHandlerFunc(false)}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default AutoPlay;
