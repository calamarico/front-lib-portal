import React from 'react';
import { BookItemI } from '../../redux/searchReducer';
import * as Styles from './styles';

const BookListItem = ({title, author_name}: BookItemI) => {
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