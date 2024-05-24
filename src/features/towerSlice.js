import { createSlice, current } from "@reduxjs/toolkit";

const towerArray = [
  { name: "floor7", revealed: false, highlight: false, active: false },
  { name: "floor6", revealed: false, highlight: false, active: false },
  { name: "floor5", revealed: false, highlight: false, active: false },
  { name: "floor4", revealed: false, highlight: false, active: false },
  { name: "floor3", revealed: false, highlight: false, active: false },
  { name: "floor2", revealed: false, highlight: false, active: false },
  { name: "floor1", revealed: false, highlight: true, active: true },
];
const towerSlice = createSlice({
  name: "tower",
  initialState: {
    currentFloor: 1,
    towerArray,
  },
  reducers: {
    levelUp: (state) => {
      state.currentFloor + 1;
    },
  },
});

export default towerSlice.reducer;
