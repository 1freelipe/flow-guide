import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 1400px;
  background: #111519;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  border: 2px solid #1d2126;
  border-radius: 9px;
  gap: 30px;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  height: 250px;
`;

export const Title = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  color: #fffff0;
`;

export const SubTitle = styled.h2`
  font-family: 'Lilita One', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fffff0;
  font-size: 20px;
  text-align: center;
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 95%;
`;

export const MiniTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
  color: #fffff0;
`;
