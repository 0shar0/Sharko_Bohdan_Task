import { combineReducers } from '@reduxjs/toolkit';
import { reposReducer } from './repos/reposReducer';
import { userReducer } from './user/userReducer';
import { usersReducer } from './users/usersReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  repos: reposReducer
});


export type RootStateType = ReturnType<typeof rootReducer>
