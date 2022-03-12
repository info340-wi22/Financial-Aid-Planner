import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import NavBar from './components/nav/NavBar';
import {Main} from './components/content/plan/Main';
import Explore from './components/content/explore/Explore';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='main' element={<Main />} />
          <Route path='explore' element={<Explore />} />
          <Route path='*' element={<Navigate to='/main' />} />
        </Routes>
      </main>
    </>
  );
}

export default App;