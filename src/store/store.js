import { configureStore } from '@reduxjs/toolkit';
import colorSlicer from './slicer/colorSlicer';

const store = configureStore({
  reducer: {
    colors: colorSlicer,
  },
});

export default store;
