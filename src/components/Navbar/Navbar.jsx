import React from 'react';

import * as nav from './styled';

import database from '../../utils/database';
import DropDownItem from './DropDownItem';

export default function Navbar() {
  return (
    <nav.Containernav>
      <nav.Logo>
        <nav.Title>Flow</nav.Title>
        <nav.Title className="secondTitle">Guide</nav.Title>
      </nav.Logo>

      <nav.NavLinks>
        <nav.List>
          {Object.entries(database).map(([keyModule, dataModule]) => (
            <DropDownItem
              key={keyModule}
              moduleTitle={dataModule.modulo}
              categories={dataModule.categories}
            />
          ))}
        </nav.List>
      </nav.NavLinks>
    </nav.Containernav>
  );
}
