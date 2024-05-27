import React from "react";

import { useSelector } from "react-redux";
function Balance() {
  const gameLogic = useSelector((state) => state.gameLogic);
  return (
    <div>
      <h1>Balance{gameLogic.balance}</h1>
    </div>
  );
}

export default Balance;
