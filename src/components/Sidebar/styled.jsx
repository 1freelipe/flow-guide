import styled from 'styled-components';

export const Containerside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 1000px;
  width: 250px;
  padding: 20px;
  margin-left: 80px;
`;

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  width: 150px;
  height: 250px;
  border-right: 1px solid #c9c9c9;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    height: 1px;
    position: absolute;
    background: #fffff0;
    top: 0;
    width: 0%;
    left: 0;
    transition: all 0.3s ease-in-out;
  }

  &::after {
    content: '';
    height: 1px;
    position: absolute;
    background: #fffff0;
    width: 0%;
    right: 0;
    bottom: -1px;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover::before {
    width: 100%;
  }
`;
