import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import Unicpage from './unicPage';

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/guia" replace />} />
      <Route path="/guia" element={<Unicpage />} />
      <Route path="/guia/:modulo/:categoria" element={<Unicpage />} />
      <Route path="/guia/:modulo/:categoria/:operacao" element={<Unicpage />} />
      <Route
        path="/guia/:modulo/:categoria/:operacao/:suboperacao"
        element={<Unicpage />}
      />
    </Routes>
  );
}
