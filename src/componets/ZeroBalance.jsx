import React from "react";
import "../css/zero.css";
import { useDispatch, useSelector } from "react-redux";
import { grandMeAmount } from "../features/gameLogicSlice";
import { useNavigate } from "react-router-dom";
function ZeroBalance() {
  const gameLogicState = useSelector((state) => state.gameLogic);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function grandHandler() {
    dispatch(grandMeAmount());
    navigate("/");
  }
  return (
    <div className="zero-balance-container">
      <h1>Opps, Sorry you are poor</h1>
      <h4>Request me to grand you some amount</h4>
      <h4>Balance Less then 10</h4>
      <h4>Acutual Balance {gameLogicState.balance}</h4>
      <button onClick={grandHandler}>Grand Me</button>
    </div>
  );
}

export default ZeroBalance;
