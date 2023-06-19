import styled from 'styled-components';
import { pxToRem } from './styles/utils';

export const TopBar = styled.div`
  width: 100%;
  height: ${pxToRem(60)};
  background-color: #F2F2F2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
