import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchUsers } from '../../api/gitHubApi';
import { SearchBar } from '../../components/SerachBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { UserPreview } from '../../components/UserPreview/UserPreview';
import { selectUsers, setUsers } from '../../model/users/usersReducer';
import { UserType } from '../../types/user';
import _ from 'lodash';

export default (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const users: UserType[] = useSelector(selectUsers);
  const dispatch = useDispatch();
  const defaultSearch = searchParams.get('search');

  const searchHandler = useCallback(
    _.debounce((searchValue) => {
      setSearchParams({ search: searchValue });
      searchUsers(searchValue).then(({ items }) => dispatch(setUsers(items)));
    }, 700), []
  );

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const searchValue = target.value.trim();
    if (searchValue) {
      searchHandler(searchValue);
    }
  };

  useEffect(() => {
    if (defaultSearch) {
      searchUsers(defaultSearch).then(({ items }) => dispatch(setUsers(items)));
    }
  }, []);

  return <>
    <SearchBar onChangeHandler={onChangeHandler} placeholder="Search For Users"
               defaultValue={defaultSearch} />
    {users.map(user => <UserPreview key={user.id} user={user} />)}
  </>;
}
