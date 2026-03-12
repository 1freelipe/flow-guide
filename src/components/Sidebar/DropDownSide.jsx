import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { IoMdArrowDropdown } from 'react-icons/io';

import * as side from './styled';
import PropTypes from 'prop-types';

export default function DropDownItem({ operations, suboperations }) {
  const [isOpen, setIsOpen] = useState(false);
  const { modulo, categoria } = useParams();

  const navigate = useNavigate();

  const handleNavigate = (subId) => {
    setIsOpen(false);
    navigate(
      `/guia/${modulo.toLowerCase()}/${categoria}/${operations.id}/${subId}`,
    );
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  // Criando uma referência de container
  const dropDownRef = useRef(null);

  // Criando um handle e um listener para acompanhar os clicks na tela, se o click for fora do dropdown, ele vai fechar automáticamente, evitando de abrir mais de um dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Se a referência existe e o elemento clicado não está dentro do dropdown ele vai fechar
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <side.MenuItem ref={dropDownRef}>
      <side.MenuButton onClick={toggleDropDown}>
        {operations.title}{' '}
        <side.Arrow $isOpen={isOpen}>
          <IoMdArrowDropdown />
        </side.Arrow>
      </side.MenuButton>

      {isOpen && suboperations.length > 0 && (
        <side.DropdownContainer>
          <side.DropdownList>
            {suboperations.map((sub) => (
              <side.DropdownListItem
                key={sub.id}
                onClick={() => handleNavigate(sub.id)}
              >
                {sub.title}
              </side.DropdownListItem>
            ))}
          </side.DropdownList>
        </side.DropdownContainer>
      )}
    </side.MenuItem>
  );
}

DropDownItem.propTypes = {
  suboperations: PropTypes.array.isRequired,
  operations: PropTypes.object.isRequired,
};
