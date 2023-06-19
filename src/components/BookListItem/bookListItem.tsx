import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import { fetchSearch } from '../../redux/searchReducer';
import { accountTypesSelector } from '../../redux/booksSelector';
import * as Styles from './styles';
import { ItemTitle, ItemContainer } from './styles';

interface ItemPropsI {
  title?: string;
  author_name?: string;
}

const BookListItem = ({title, author_name}: ItemPropsI) => {
  return (
    <Styles.ItemContainer>
      <Styles.ItemTitle>
        { title ?? '(no title)' }
      </Styles.ItemTitle>
      <Styles.ItemAuthor>
        { author_name ?? '(unknow author)'}
      </Styles.ItemAuthor>
    </Styles.ItemContainer>
  );
};

export default BookListItem;