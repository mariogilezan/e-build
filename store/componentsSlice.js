const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  cpu: null,
  cpuCooler: null,
  motherboard: null,
  memory: null,
  storage: null,
  gpu: null,
  case: null,
  psu: null,
};

const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    setComponent: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    removeComponent: (state, action) => {
      const { name } = action.payload;
      state[name] = null;
    },
  },
});

export const { setComponent, removeComponent } = componentsSlice.actions;
export default componentsSlice.reducer;
