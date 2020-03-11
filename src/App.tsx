import React from 'react';
import Timeline from './components/Timeline';
import { goals } from './Entities/data';

function App() {
    console.log(goals);
  return (
      <>
      <Timeline />
    </>
  );
}

export default App;
