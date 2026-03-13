import styled from 'styled-components';

export const Containerside = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 100%;
  /* margin: auto 0; */
  padding: 20px 0 20px 80px;
  position: relative;
`;

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  height: fit-content;
  border-right: 2px solid #c9c9c9;
  position: sticky;
  top: 45%;
  z-index: 100;

  @media (max-width: 1378px) {
    top: 35%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  width: 100%;
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

  .link {
    text-decoration: none;
    color: #fffff0;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
    width: 100%;
    padding: 5px;
    font-size: 15px;

    @media (max-width: 1378px) {
      font-size: 14px;
    }
  }

  &::before {
    content: '';
    height: 1px;
    position: absolute;
    background: #fffff0;
    top: -1px;
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

export const MenuItem = styled.li`
  position: relative;
  list-style: none;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
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

  @media (max-width: 1378px) {
    font-size: 14px;
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
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #111519;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  border: 2px solid #1d2126;
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
  color: #fffff0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
