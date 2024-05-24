import React from "react";
import "../css/tower.css";
import { useSelector } from "react-redux";
import Floor from "./Floor";

function Tower() {
  const towerState = useSelector((state) => state.tower);
  return (
    <div className="tower-main-container">
      {towerState.towerArray.map((item, index) => {
        return (
          <Floor highlight={item.highlight} active={item.active} key={index} />
        );
      })}
    </div>
  );
}

export default Tower;
