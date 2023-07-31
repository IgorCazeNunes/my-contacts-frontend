import styled from 'styled-components';

export default styled.select`
  padding: 4px 16px;

  width: 100%;
  height: 52px;

  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    transition: border-color 0.2s ease-in;
  }
`;
