import { createSlice, current } from "@reduxjs/toolkit";

const groundSlice = createSlice({
  name: "groundSlice",
  initialState: {
    pos: [null, null],
    check: false,
    name: "비어있는 땅",
    quality: 1,
    timeData: {
      plantedTime: "2022. 10. 25",
      harvestTime: "2022. 11. 30",
    },
  },
  reducers: {
    focusGround: (state, action) => {
      const { Y, X } = action.payload;
      const pos = current(state.pos);

      if (pos[0] !== Y || pos[1] !== X) {
        state.pos = [Y, X];
        state.check = true;
      } else {
        state.pos = [null, null];
        state.check = false;
      }
    },
    planting: (state, action) => {
      if (state.name === "비어있는 땅") {
        console.log("작물을 심었습니다!");
      } else {
        console.log("이미 작물이 심어져있습니다!");
      }
    },
  },
});

export default groundSlice;
export const { focusGround, planting } = groundSlice.actions;
