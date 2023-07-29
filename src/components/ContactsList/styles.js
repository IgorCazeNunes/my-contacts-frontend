import { styled } from 'styled-components';

export const Container = styled.div`
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: #222222;
    font-size: 24px;
  }

  a {
    padding: 8px 16px;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
      transition: all 0.2s ease-in;
    }
  }
`;
