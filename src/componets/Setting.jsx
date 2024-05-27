import React from "react";
import "../css/menu.css";
import SelectDifficulty from "./SelectDifficulty";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import PlayAgain from "./PlayAgain";
import AutoPlay from "./AutoPlay";
import Balance from "./Balance";

function Setting() {
  const gameLogic = useSelector((state) => state.gameLogic);
  const dispatch = useDispatch();

  return (
    <div className="menu-main-container">
      {/* <h1>Menu</h1> */}
      <PlayAgain name={"play"} />
      {/* <Balance /> */}
      <SelectDifficulty />
      <AutoPlay />
    </div>
  );
}

export default Setting;
