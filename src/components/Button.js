import styled from 'styled-components';

export default styled.button`
  padding: 4px 16px;

  height: 52px;

  border: none;
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 16px;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: #ccc;
    cursor: default;
  }
`;
