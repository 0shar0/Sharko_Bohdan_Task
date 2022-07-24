import React, { ChangeEvent, useCallback } from 'react';
import { searchUsers } from '../../api/gitHubApi';
import { SearchBar } from '../../components/SerachBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { UserPreview } from '../../components/UserPreview/UserPreview';
import { selectUsers, setUsers } from '../../model/users/usersReducer';
import { UserType } from '../../types/user';
import _ from 'lodash';

export default (): JSX.Element => {
  const users: UserType[] = useSelector(selectUsers);
  const dispatch = useDispatch();

  const searchHandler = useCallback(
    _.debounce((searchValue) => {
      searchUsers(searchValue).then(({ items }) => dispatch(setUsers(items)));
    }, 700), []
  );

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const searchValue = target.value.trim();
    if (searchValue) {
      searchHandler(searchValue);
    }
  };

  return <>
    <SearchBar onChangeHandler={onChangeHandler} placeholder="Search For Users" />
    {users.map(user => <UserPreview key={user.id} user={user} />)}
  </>;
}
