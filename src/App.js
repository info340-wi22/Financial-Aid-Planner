import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import NavBar from './NavBar';
import {Main} from './Main';
import Explore from './Explore';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='*' element={<Navigate to='/main' />} />
          <Route path='main' element={<Main />} />
          <Route path='explore' element={<Explore />} />
        </Routes>
      </main>
    </>
  );
}

export default App;