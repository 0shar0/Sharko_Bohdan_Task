import {  createSlice } from '@reduxjs/toolkit';

import { UserType } from '../../types/user';
import { RootStateType } from '../rootReducer';

const initialState: UserType[] = [];


const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      return payload;
    }
  }
});

export const { setUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

export const selectUsers = (state: RootStateType) =>
  state.users;
