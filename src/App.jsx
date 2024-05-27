import { useState } from "react";
import "./App.css";
import Floor from "./componets/Floor";
import Tower from "./componets/Tower";
import Setting from "./componets/Setting";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import GameEnds from "./componets/GameEnds";
import GameWin from "./componets/GameWin";
import RootLayout from "./Layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" index element={<Setting />} />
      <Route path="/tower" element={<Tower />} />
      <Route path="/ends" element={<GameEnds />} />
      <Route path="/win" element={<GameWin />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
