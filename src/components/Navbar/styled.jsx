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
  cursor: pointer;

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
  gap: 20px;

  .theme {
    color: #fffff0;
    cursor: pointer;
    font-size: 22px;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: #fffff0;
`;

export const MenuItem = styled.li`
  position: relative;
  list-style: none;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #fffff0;
  position: relative;
  cursor: pointer;
  font-size: 15px;

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

export const Arrow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
`;

export const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #fffff0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 200px;
  z-index: 10;
`;

export const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const DropdownListItem = styled.li`
  list-style: none;
  padding: 10px 15px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;

  &:hover {
    background-color: #f1f1f1;
  }

  a {
    text-decoration: none;
    color: #252525;
    display: block;
  }
`;
