const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  components: {
    cpu: null,
    cpuCooler: null,
    motherboard: null,
    memory: null,
    storage: null,
    gpu: null,
    case: null,
    psu: null,
  },
  totalPrice: 0,
};

const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    setComponent: (state, action) => {
      const { name, value, price } = action.payload;
      state.components[name] = value;
      state.totalPrice += price;
    },
    removeComponent: (state, action) => {
      const { name, price } = action.payload;
      state.components[name] = null;
      state.totalPrice -= price;
    },
  },
});

export const { setComponent, removeComponent } = componentsSlice.actions;
export default componentsSlice.reducer;
