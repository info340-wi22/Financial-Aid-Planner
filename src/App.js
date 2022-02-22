import NavBar from './NavBar';
import React from 'react';
import {CardList} from './CardList';

export default function App() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className='plan'>
        <CardList/>
      </div>
    </div>
  );
}
