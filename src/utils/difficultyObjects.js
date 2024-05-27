import bomb from "../../public/images/bomb.png";
import gems from "../../public/images/gems.png";

export const difficultyObject = {
  normal: [
    { id: 1, img: bomb, active: false },
    { id: 2, img: gems, active: false },
    { id: 3, img: gems, active: false },
    { id: 4, img: gems, active: false },
  ],
  medium: [
    { id: 1, img: bomb, active: false },
    { id: 2, img: gems, active: false },
    { id: 3, img: gems, active: false },
  ],
  hard: [
    { id: 1, img: bomb, active: false },
    { id: 2, img: bomb, active: false },
    { id: 3, img: gems, active: false },
  ],
  impossible: [
    { id: 1, img: bomb, active: false },
    { id: 2, img: gems, active: false },
    { id: 3, img: bomb, active: false },
    { id: 4, img: bomb, active: false },
  ],
};
