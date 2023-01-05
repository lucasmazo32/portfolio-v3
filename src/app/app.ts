import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

type themeOptions = 'dark' | 'light'

export interface AppSliceState {
  theme: themeOptions
  goToAbout?: Function
  goToExperience?: Function
  goToContact?: Function
}

const initialState: AppSliceState = {
  theme: 'dark',
}

interface AppSliceReducer extends SliceCaseReducers<AppSliceState> {
  updateTheme: (
    state: AppSliceState,
    payload: PayloadAction<themeOptions>,
  ) => void
  updateGoToAbout: (
    state: AppSliceState,
    payload: PayloadAction<Function>,
  ) => void
  updateGoToExperience: (
    state: AppSliceState,
    payload: PayloadAction<Function>,
  ) => void
  updateGoToContact: (
    state: AppSliceState,
    payload: PayloadAction<Function>,
  ) => void
}

export const appSlice = createSlice<AppSliceState, AppSliceReducer, 'app'>({
  name: 'app',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload
    },
    updateGoToAbout: (state, action) => {
      state.goToAbout = action.payload
    },
    updateGoToExperience: (state, action) => {
      state.goToExperience = action.payload
    },
    updateGoToContact: (state, action) => {
      state.goToContact = action.payload
    },
  },
})

export const {
  updateTheme,
  updateGoToAbout,
  updateGoToContact,
  updateGoToExperience,
} = appSlice.actions

export default appSlice.reducer
