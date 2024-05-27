import {
  setArrayToLocalStorage,
  getArrayFromLocalStorage,
} from "../utils/localStorageHandler";

// active all the object from list
export function ActiveAllObject() {
  // active all the objects
  let shuffleActiveList = getArrayFromLocalStorage("shuffleBoxs");
  shuffleActiveList.forEach((item) => {
    // selected box set active true
    for (var a = 0; a < item.floor.length; a++) {
      item.floor[a].active = true;
    }
    item.floor.active = true;
  });
  return shuffleActiveList;
}

// activate  just selected object
export function ActivateSelectedObject(level, id) {
  let shuffleBoxList = getArrayFromLocalStorage("shuffleBoxs");
  shuffleBoxList.forEach((item) => {
    if (item.level == level) {
      // selected box set active true
      for (var a = 0; a < item.floor.length; a++) {
        if (item.floor[a].id == id) {
          item.floor[a].active = true;
        }
      }
      item.floor.active = true;
    }
    return item;
  });
  setArrayToLocalStorage("shuffleBoxs", shuffleBoxList);
}
