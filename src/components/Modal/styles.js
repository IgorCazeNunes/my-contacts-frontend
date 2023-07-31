import { styled } from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);
  background-filter: blur(5px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: min(100%, 450px);

  padding: 24px;
  margin: 0 12px;

  border-radius: 4px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  h1 {
    font-size: 22px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  button:first-child {
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 16px;
  }
`;
