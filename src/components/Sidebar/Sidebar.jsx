import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';

import * as side from './styled';
import database from '../../utils/database';

export default function Sidebar() {
  const { modulo, categoria } = useParams();

  const module = database[modulo];
  console.log(module);
  const categorieAct = module?.categories.find((cat) => cat.id === categoria);
  console.log(categorieAct);
  const operations = categorieAct?.operations || [];
  console.log(operations);

  return (
    <side.Containerside>
      <side.Sidebar>
        <side.NavList>
          {operations.map((op) => (
            <side.List key={op.key}>
              <Link
                to={`/guia/${modulo}/${categoria}/${op.id}`}
                className="link"
              >
                {op.title}
              </Link>
            </side.List>
          ))}
        </side.NavList>
      </side.Sidebar>
    </side.Containerside>
  );
}
