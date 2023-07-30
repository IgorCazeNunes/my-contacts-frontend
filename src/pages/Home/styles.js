import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  hr {
    border: ${({ theme }) => theme.colors.gray[200]} solid 1px
  }
`;

export const InputSearch = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 16px;
    margin-bottom: 32px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 25px;
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary.main};
      transition: border 0.2s ease-in;
    }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.colors.gray[900]};
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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  header button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const ListBody = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  list-style: none;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .contact-name {
    display: flex;
    align-items: center;
    gap: 8px;

    small {
      padding: 4px;

      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      text-transform: uppercase;

      background: ${({ theme }) => theme.colors.primary.lighter};
      border-radius: 4px;
    }
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    background: transparent;
    border: none;
  }
`;
