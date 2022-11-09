import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Pages1 from '../Pages1/Pages1';
import Pages2 from '../Pages2/Pages2';

const Pages = () => {
  return (
    <>
      <div style={{ color: 'red', fontSize: '20px', margin: '100px' }}>
        <Link to="/pages1">Blog</Link>
        <Link to="/pages2">About</Link>
       
      </div>
      <Routes>
        <Route path="/pages1" element={<Pages1 />} />
        <Route path="/pages2" element={<Pages2 />} />
      </Routes>
    </>
  );
};

export default Pages;
