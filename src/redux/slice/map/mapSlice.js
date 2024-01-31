import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    handlerMap: false
  },
  reducers: {
    onhandlerMap: (state) => {
      state.handlerMap = !state.handlerMap
    }
  }
})

export const {onhandlerMap} = mapSlice.actions
export const selectMapBlock = (state) => state.map
export const mapReducer = mapSlice.reducer;