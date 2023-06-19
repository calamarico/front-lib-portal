import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import { fetchSearch, reset } from '../../redux/searchReducer';
import { accountTypesSelector, searchResultSelector } from '../../redux/booksSelector';
import BookListItem from '../BookListItem/bookListItem';
import * as Styles from './styles';

const Search = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const total = useAppSelector(accountTypesSelector);
  const results = useAppSelector(searchResultSelector);

  const handleSearch = (text: string) => {
    if (text && text.length > 3) {
      dispatch(fetchSearch(text));
    } else {
      dispatch(reset());
    }
  };

  return (
    <Styles.SearchContainer>
      <Styles.SearchInput
        type="search"
        placeholder='Search...'
        onChange={(e) => handleSearch(e.target.value)}>
      </Styles.SearchInput>
      { total && total > 0 &&
        <Styles.SearchResultList>
          { results?.slice(0, 4).map(({ title, author_name }) => <BookListItem title={title} author_name={author_name} /> ) }
        </Styles.SearchResultList>
      }
    </Styles.SearchContainer>
  );
};

export default Search;