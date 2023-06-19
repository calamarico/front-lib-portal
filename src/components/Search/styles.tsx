import styled from 'styled-components';
import { pxToRem } from './../../styles/utils';

export const SearchContainer = styled.div`
  padding: 0 ${pxToRem(15)};
`;

export const SearchInput = styled.input`
  width: ${pxToRem(238)};
  height: ${pxToRem(42)};
  background: #E3E3E3;
  border-radius: 2px;
`;
