import styled from 'styled-components';
import { pxToRem } from './../../styles/utils';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(10)}; 0;
`;

export const ItemTitle = styled.p`
  margin: 0;
`;

export const ItemAuthor = styled.p`
  margin: 0;
  font-style: italic;
  font-size: small;
`;
