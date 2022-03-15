import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import NavBar from './components/nav/NavBar';
import {Main} from './components/content/plan/Main';
import {PlanPage} from './components/content/plan/PlanPage';
import Explore from './components/content/explore/Explore';
import {MySignInScreen} from './components/nav/Login';
import ScholarrData from './data/ScholarshipData.json';
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<MySignInScreen/>}/>
          <Route path='main' element={<Main data={ScholarrData} />} />
          <Route path='plan' element={<PlanPage />} />
          <Route path='explore' element={<Explore />} />
          <Route path='*' element={<Navigate to='/main' />} />
        </Routes>
      </main>
    </>
  );
}

export default App;