import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import { fetchSearch } from '../../redux/booksReducer';
import { accountTypesSelector } from '../../redux/booksSelector';
import * as Styles from './styles';

const Search = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const total = useAppSelector(accountTypesSelector);

  const handleSearch = (text: string) => {
    if (text && text.length > 3) {
      dispatch(fetchSearch(text));
    }
  };

  return (
    <Styles.SearchContainer>
      <Styles.SearchInput
        type="search"
        placeholder='Search...'
        onChange={(e) => handleSearch(e.target.value)}>
      </Styles.SearchInput>
    </Styles.SearchContainer>
  );
};

export default Search;