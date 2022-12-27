import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

type themeOptions = 'dark' | 'light'

export interface AppSliceState {
  theme: themeOptions
}

const initialState: AppSliceState = {
  theme: 'dark',
}

interface AppSliceReducer extends SliceCaseReducers<AppSliceState> {
  updateTheme: (
    state: AppSliceState,
    payload: PayloadAction<themeOptions>,
  ) => void
}

export const appSlice = createSlice<AppSliceState, AppSliceReducer, 'app'>({
  name: 'app',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export const { updateTheme } = appSlice.actions

export default appSlice.reducer
