import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr 350px;
  min-height: 100vh;
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  background: #111519;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #1d2126;
  border-radius: 9px;
  gap: 30px;
  position: relative;
  padding: 10px;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 5px;
  height: 150px;

  @media (max-width: 1378px) {
    gap: 15px;
  }
`;

export const Title = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  color: #fffff0;
  text-align: center;

  @media (max-width: 1378px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fffff0;
  font-size: 20px;
  text-align: center;

  span {
    text-decoration: underline;
  }

  @media (max-width: 1378px) {
    font-size: 16px;
  }
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
`;

export const LightboxImage = styled.img`
  max-width: 90%; /* Nunca ultrapassa o tamanho da tela */
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  cursor: default; /* O clique na imagem não faz nada */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: #fffff0;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ff4d4d;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 15px;
  img {
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 90%;
`;

export const MiniTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: italic;
  color: #fffff0;
  font-size: 22px;
`;

export const StepList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const StepItem = styled.li`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
  color: #fffff0;
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  height: auto;
`;

export const DivImage = styled.img`
  width: 1400px;
  /* max-height: 450px; */
  margin-top: 35px;
  margin-bottom: 35px;
`;

// Container que alinha os botões ao centro no final dos passos
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  padding-top: 20px;
  width: 450px;
  border-top: 1px solid #c9c9c9;
`;

// O botão estilizado
export const PaginationButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #555;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;

  &:hover:not(:disabled) {
    background-color: #333;
    border-color: #fff;
  }

  &:disabled {
    color: #555;
    border-color: #333;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PaginationInfo = styled.span`
  color: #c9c9c9;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
`;
