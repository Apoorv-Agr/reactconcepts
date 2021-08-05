// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import ClickCounterTwo from './RenderProps/ClickCounterTwo';
import CounterComponent from './RenderProps/CounterComponent';
import HoverComponentTwo from './RenderProps/HoverComponentTwo';
/* import ClickCounter from './HOC/ClickCounter';
import HoverComponent from './HOC/HoverComponent'; */
/* import FunctionalComponentOne from './FunctionalComponent/FunctionalComponentOne';
import FunctionalComponent2 from './FunctionalComponent/FunctionalComponent2';
import FunctionalComponent3 from './FunctionalComponent/FunctionalComponent3';
import PureComponentClass from './PureComponents/PureComponentClass';
import PureFunctionalComponent from './PureComponents/PureFunctionalComponent'; */

function App() {
  /* const [data, setData] = useState('John');
  const updateData = () => {
    setData("John Wick");
  }
  const resetData = () => {
    setData('John');
  } */
  return (
    <>
      <div>App.js</div>
      {/* <FunctionalComponentOne />
      <FunctionalComponent2 />
      <FunctionalComponent3 data={{ name: data, updateNameBtnHandler: updateData, resetBtnHandler: resetData }} />
      <PureComponentClass />
      <PureFunctionalComponent /> */}
      {/* <ClickCounter name={`Dummy User`}/>
      <HoverComponent name={`Dummy User`}/> */}
      {/* <ClickCounterTwo render={ ()=>{}}/> */}
      {/* <CounterComponent
        render={(counter, increaseCounter) => <ClickCounterTwo counter={counter} increaseCounter={increaseCounter} />} />
      <CounterComponent render={(counter, increaseCounter) => <HoverComponentTwo counter={counter} increaseCounter={increaseCounter} />} /> */}
      <CounterComponent>
        {(counter, increaseCounter) =>
          <ClickCounterTwo counter={counter} increaseCounter={increaseCounter} />
        }
      </CounterComponent>
      <CounterComponent>
        {(counter, increaseCounter) => <HoverComponentTwo counter={counter} increaseCounter={increaseCounter} />}
      </CounterComponent>
    </>
  );
}

export default App;
