import { createSlice } from '@reduxjs/toolkit';
import { RootStateType } from '../rootReducer';

const initialState: any = {};

const reposSlice = createSlice({
  name: 'Repos',
  initialState,
  reducers: {
    setRepos: (state, { payload }) => {
      state[payload.login] = payload.repos
      return state;
    }
  }
});

export const { setRepos } = reposSlice.actions;
export const reposReducer = reposSlice.reducer;

export const selectRepos = (state: RootStateType) =>
  state.repos;
