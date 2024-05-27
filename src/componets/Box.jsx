import React, { Fragment, useState } from "react";
import boxImage from "../../public/images/boxs.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  gameLooseHandler,
  selectBoxHandler,
  levelUpHandler,
  activateAllObjectHandler,
} from "../features/gameLogicSlice";

function Box({ box, level, activeFloor }) {
  const [selectBox, setSelectBox] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function GameLoose() {
    dispatch(gameLooseHandler());
    // activate all the object after a while and move to ends page
    setTimeout(function () {
      dispatch(activateAllObjectHandler());
      setTimeout(function () {
        navigate("/ends");
      }, 1500);
    }, 500);
  }

  function SelectBoxHandler(item) {
    if (activeFloor) {
      // select handler function
      dispatch(selectBoxHandler({ level: level, id: item.id }));
      // get only image name
      let objectName = item.img.split("/")[3];
      // remove image extension
      objectName = objectName.split(".")[0];
      if (objectName == "bomb") {
        GameLoose();
      } else if (objectName == "gems") {
        dispatch(levelUpHandler(level));
        if (level > 6) {
          navigate("/win");
        }
      }
    }
  }

  return (
    <div
      onClick={() => SelectBoxHandler(box)}
      style={{
        backgroundImage: `url(${boxImage})`,
      }}
      className={box.active ? "activeBox" : "inactiveBox"}
    >
      <img
        src={box.img}
        style={{
          opacity: `${box.active ? "1" : "0"}`,
        }}
        className={box.active ? "activeImage" : "inactiveImage"}
      />
    </div>
  );
}

export default Box;
