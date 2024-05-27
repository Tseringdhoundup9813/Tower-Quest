import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { suffleArray } from "../features/gameLogicSlice";
import { NavLink, useNavigate } from "react-router-dom";

function CountDown() {
  const [coundDown, setCountDown] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const difficultyLevelArray = useSelector(
    (state) => state.difficultyLevel.level
  );

  useEffect(() => {
    let interval;
    if (coundDown > 0) {
      interval = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 900);
    } else if (coundDown == 0) {
      dispatch(suffleArray(difficultyLevelArray));
      navigate("/tower");
    }
    return () => {
      clearInterval(interval);
    };
  }, [coundDown]);
  return (
    <div>
      <p>Game Will Start After 10 second</p>
      <h1>CountDown {coundDown}</h1>
      <p className="auto-play-guid">auto play is on </p>
      <p className="auto-play-guid">
        to off auto play go to{" "}
        <NavLink className="auto-play-guide-link-to-menu" to="/">
          Menu
        </NavLink>
      </p>
    </div>
  );
}

export default CountDown;
