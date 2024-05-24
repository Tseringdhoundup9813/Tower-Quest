import { useState } from "react";
import "./App.css";
import Floor from "./componets/Floor";
import { useDispatch } from "react-redux";
import SelectDifficulty from "./componets/SelectDifficulty";
import Tower from "./componets/Tower";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <SelectDifficulty />
      <Tower />
    </div>
  );
}

export default App;
