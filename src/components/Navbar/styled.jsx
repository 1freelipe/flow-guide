import styled from 'styled-components';

export const Containernav = styled.header`
  width: 100%;
  height: 80px;
  background: #111519;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 28px;
  border-bottom: 1px solid #1d2126;
  margin-bottom: 10px;
`;

export const NavLinks = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 15px;

  .secondTitle {
    position: absolute;
    bottom: -8px;
    right: 30px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #fffff0;
  position: relative;
  cursor: pointer;
  font-size: 17px;

  &::after {
    content: '';
    height: 1px;
    background: #fffff0;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%);
    width: 0%;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: #fffff0;
`;
