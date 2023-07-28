import { styled } from 'styled-components';

export const Container = styled.header`
display: flex;
flex-direction: column;
align-items: center;

margin-top: 74px;

img {
  width: 201px;
}
`;

export const InputSearchContainer = styled.div`
margin-top: 48px;
width: 100%;

input {
  width: 100%;
  height: 50px;
  padding: 0 16px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  background: #FFF;
  border: none;
  border-radius: 25px;
  outline: 0;

  &::placeholder {
    color: #BCBCBC;
  }
}
`;
