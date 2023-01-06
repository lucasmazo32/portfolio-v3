import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { ThemeOptions } from '../types'

export interface AppSliceState {
  theme: ThemeOptions
  sideMenuOpen: boolean
  goToAbout?: Function
  goToExperience?: Function
  goToContact?: Function
}

const initialState: AppSliceState = {
  theme: 'light',
  sideMenuOpen: false,
}

interface AppSliceReducer extends SliceCaseReducers<AppSliceState> {
  updateTheme: (
    state: AppSliceState,
    payload: PayloadAction<ThemeOptions>,
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
  updateSideMenuOpen: (
    state: AppSliceState,
    payload: PayloadAction<boolean>,
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
    updateSideMenuOpen: (state, action) => {
      state.sideMenuOpen = action.payload
    },
  },
})

export const {
  updateTheme,
  updateGoToAbout,
  updateGoToContact,
  updateGoToExperience,
  updateSideMenuOpen,
} = appSlice.actions

export default appSlice.reducer
