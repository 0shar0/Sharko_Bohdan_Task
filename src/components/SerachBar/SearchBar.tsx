import React, { ChangeEvent } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string
}

export const SearchBar = ({ onChangeHandler, placeholder }: SearchBarProps): JSX.Element => {
  return <>
    <input onChange={onChangeHandler} className={'SearchBar'} placeholder={placeholder} />
  </>;
};
