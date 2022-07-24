import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types/user';
import { RootStateType } from '../rootReducer';

const initialState: UserType = {
  name: '',
  following: '',
  followers: '',
  created_at: '',
  email: '',
  login: '',
  location: '',
  avatar_url: '',
  repos_url: '',
  bio: '',
  id: 0,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUser = (state: RootStateType) =>
  state.user;
