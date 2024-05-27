import { shuffle } from "../utils/shuffle";
import { useSelector } from "react-redux";
import "../css/floor.css";
import Box from "./Box";

function Floor({ floor, activeFloor, level }) {
  return (
    <div
      className={
        activeFloor
          ? "activeFloor floor-gems-and-bomb-container "
          : "inActiveFloor floor-gems-and-bomb-container"
      }
    >
      {floor.map((box, index) => {
        return (
          <Box box={box} key={box.id} level={level} activeFloor={activeFloor} />
        );
      })}
    </div>
  );
}

export default Floor;
