// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import FunctionalComponentOne from './FunctionalComponent/FunctionalComponentOne';
import FunctionalComponent2 from './FunctionalComponent/FunctionalComponent2';
import FunctionalComponent3 from './FunctionalComponent/FunctionalComponent3';
import PureComponentClass from './PureComponents/PureComponentClass';
import PureFunctionalComponent from './PureComponents/PureFunctionalComponent';

function App() {
  const [data, setData] = useState('John');
  const updateData = () => {
    setData("John Wick");
  }
  const resetData = () => {
    setData('John');
  }
  return (
    <>
      <div>App.js</div>
      <FunctionalComponentOne />
      <FunctionalComponent2 />
      <FunctionalComponent3 data={{ name: data, updateNameBtnHandler: updateData, resetBtnHandler: resetData }} />
      <PureComponentClass />
      <PureFunctionalComponent />
    </>
  );
}

export default App;
