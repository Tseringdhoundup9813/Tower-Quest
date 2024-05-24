import { shuffle } from "../utils/shuffle";
import { useSelector } from "react-redux";
import "../css/floor.css";
import Box from "./Box";

function Floor({ highlight, active }) {
  const diffcultyState = useSelector((state) => state.difficultyLevel.level);
  //   access randomly generated array
  const randomBoxList = shuffle(diffcultyState);
  return (
    <div className="floor-gems-and-bomb-container">
      {randomBoxList.map((item) => {
        return <Box item={item} key={item.id} activeBox={active} />;
      })}
    </div>
  );
}

export default Floor;
