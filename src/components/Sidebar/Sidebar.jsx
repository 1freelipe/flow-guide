import React from 'react';
import { useParams, Link } from 'react-router';
import DropDownItem from './DropDownSide';

import * as side from './styled';
import database from '../../utils/database';

export default function Sidebar() {
  const { modulo, categoria } = useParams();

  const module = database[modulo];
  const categorieAct = module?.categories.find((cat) => cat.id === categoria);
  const operations = categorieAct?.operations || [];
  // const suboperations = operations?.suboperations || [];

  return (
    <side.Containerside>
      <side.Sidebar>
        <side.NavList>
          {operations.map((op) => (
            <side.List key={op.id}>
              {op.suboperations && op.suboperations.length > 0 ? (
                <DropDownItem
                  operations={op}
                  suboperations={op.suboperations}
                />
              ) : (
                <Link
                  to={`/guia/${modulo}/${categoria}/${op.id}`}
                  className="link"
                >
                  {op.title}
                </Link>
              )}
            </side.List>
          ))}
        </side.NavList>
      </side.Sidebar>
    </side.Containerside>
  );
}
