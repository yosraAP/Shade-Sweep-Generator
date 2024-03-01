import { createSlice } from '@reduxjs/toolkit';
import randomColor from 'randomcolor';

// Create a slice for color management with initial state and reducers.
const colorSlicer = createSlice({
  name: 'colors', // Define the slice name, used in action types.
  initialState: [randomColor(), randomColor()], // Initial state with two random colors.
  reducers: {
    // Reducer to add a new random color to the state array.
    addColor: (state) => {
      state.push(randomColor());
    },
    // Reducer to remove the last color from the state array.
    removeColor: (state) => {
      state.pop();
    },
    // Reducer to change the entire color array. Payload should be an array of colors.
    changeColor: (state, action) => (state = action.payload),
  },
});

export const { addColor, removeColor, changeColor } = colorSlicer.actions;
export default colorSlicer.reducer;
