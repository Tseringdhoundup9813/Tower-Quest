import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ZeroBalance from "../componets/ZeroBalance";

function RootLayout() {
  const gameLogicState = useSelector((state) => state.gameLogic);
  return <div>{gameLogicState.zeroBalance ? <ZeroBalance /> : <Outlet />}</div>;
}

export default RootLayout;
