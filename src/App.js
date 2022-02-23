import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import NavBar from './NavBar';
import {Main} from './Main';


function App() {
  return (
    <div className='container'>
      <NavBar />
      <main>
        <Routes>
          <Route path='*' element={<Navigate to='/main'/>}/>
          <Route path='main' element={<Main/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;