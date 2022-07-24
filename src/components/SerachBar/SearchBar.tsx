import React, { ChangeEvent } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  defaultValue?: string | null
}

export const SearchBar = ({ onChangeHandler, placeholder, defaultValue }: SearchBarProps): JSX.Element => {
  return <>
    <input onChange={onChangeHandler} className={'SearchBar'} placeholder={placeholder}
           defaultValue={defaultValue ? defaultValue : ''} />
  </>;
};
