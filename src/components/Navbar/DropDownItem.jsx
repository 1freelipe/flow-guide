import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IoMdArrowDropdown } from 'react-icons/io';

import * as nav from './styled';
import PropTypes from 'prop-types';

export default function DropDownItem({ moduleTitle, categories }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    setIsOpen(false);
    navigate(`/guia/${id}`);
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
    <nav.MenuItem ref={dropDownRef}>
      <nav.MenuButton onClick={toggleDropDown}>
        {moduleTitle}{' '}
        <nav.Arrow $isOpen={isOpen}>
          <IoMdArrowDropdown />
        </nav.Arrow>
      </nav.MenuButton>

      {isOpen && categories.length > 0 && (
        <nav.DropdownContainer>
          <nav.DropdownList>
            {categories.map((cat) => (
              <nav.DropdownListItem
                key={cat.id}
                onClick={() => handleNavigate(cat.id)}
              >
                {cat.title}
              </nav.DropdownListItem>
            ))}
          </nav.DropdownList>
        </nav.DropdownContainer>
      )}
    </nav.MenuItem>
  );
}

DropDownItem.propTypes = {
  moduleTitle: PropTypes.array,
  categories: PropTypes.array,
};
