// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
/* import LifeCycleA from './ComponentLifeCycle/LifeCycleA';
import ComponentC from './ContextConcept/ComponentC';
import { UserProvider } from './ContextConcept/userContext'; */
/* import Form from './FormHandling/Form';
import ParentHocComp from './HOC/ParentHocComp';
import ParentComp from './InterviewQuestion/ParentComp';
import FunctionParentComp from './Refs/FunctionParentComp'; */
/* import ClickCounterTwo from './RenderProps/ClickCounterTwo';
import CounterComponent from './RenderProps/CounterComponent';
import HoverComponentTwo from './RenderProps/HoverComponentTwo'; */
/* import ClickCounter from './HOC/ClickCounter';
import HoverComponent from './HOC/HoverComponent'; */
/* import FunctionalComponentOne from './FunctionalComponent/FunctionalComponentOne';
import FunctionalComponent2 from './FunctionalComponent/FunctionalComponent2';
import FunctionalComponent3 from './FunctionalComponent/FunctionalComponent3';
import PureComponentClass from './PureComponents/PureComponentClass';
import PureFunctionalComponent from './PureComponents/PureFunctionalComponent'; */
/* import ParentRefComp from './Refs/ParentRefComp'; */
import ClassLifeCycleMounting from './ClassComponentLifeCycleHooks/ClassLifeCycleMounting';
import ClassLifeCycleUpdating from './ClassComponentLifeCycleHooks/ClassLifeCycleUpdating';
import ErrorGeneratingComponent from './ErrorBoundaries/ErrorGeneratingComponent';
import ErrorHandler from './ErrorBoundaries/ErrorHandler';
import PreviousState from './PreviousStateHooks/PreviousState';
import UseStateComponent from './useStateObject/UseStateComponent';
import UseStateArrayComponent from './useStateArray/UseStateArrayComponent';
import UseEffectHooksFlow from './useEffectHook/UseEffectHooksFlow';
import UseEffectHooksFlowOnStateUpdate from './useEffectHook/useEffectHooksFlowOnStateUpdate';
import ComponentDidMountUpdate from './ClassComponentLifeCycleHooks/ComponentDidMountUpdate';
import InputRefClassComp from './RefRevision/InputRefClassComp';
import RefClassCompWay2 from './RefRevision/RefClassCompWay2';
import RefClassParentComp from './RefRevision/RefClassParentComp';
import RefForwardingParentComp from './RefRevision/RefForwardingParentComp';
import MainComp from './RenderProps2/MainComp';
import FinalComp from './RenderProps2/FinalComp';
import ContextMainComp from './ContextNew/ContextMainComp';
import PrevStateComp from './FunctionalCompHooks/PrevStateComp';
import HooksCleanUp from './FunctionalCompHooks/HooksCleanUp';
import HooksCleanUpParentComp from './FunctionalCompHooks/HooksCleanUpParentComp';
import TimerComp from './FunctionalCompHooks/TimerComp';
import GrandParentComp from './useContextHook/GrandParentComp';
import ParentCompOpt from './OptimizationTech/UseCallBackHook/ParentCompOpt';
import UseRefComp from './useRefHooks/UseRefComp';
import UseMemoComp from './UseMemoHook/UseMemoComp';
import DocumentTitleComp from './CustomHooks/DocumentTitleComp';
import CountWrapComp from './CustomHooks/CountWrapComp';
import InputWrapComp from './CustomHooks/InputWrapComp';

function App() {
  /* const [data, setData] = useState('John');
  const updateData = () => {
    setData("John Wick");
  }
  const resetData = () => {
    setData('John');
  } */
  return (
    <div style={{ margin: '0px auto', padding: '10px', textAlign: 'center' }}>
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
      {/* <CounterComponent>
        {(counter, increaseCounter) =>
          <ClickCounterTwo counter={counter} increaseCounter={increaseCounter} />
        }
      </CounterComponent>
      <CounterComponent>
        {(counter, increaseCounter) => <HoverComponentTwo counter={counter} increaseCounter={increaseCounter} />}
      </CounterComponent> */}
      {/* <UserProvider value={{ name: 'Apoorv', age: 31 }}>
        <ComponentC />
      </UserProvider> */}
      {/* <ParentComp /> */}
      {/* <ParentRefComp /> */}
      {/* <FunctionParentComp /> */}
      {/* <ParentHocComp /> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <ClassLifeCycleMounting /> */}
      {/* <ClassLifeCycleUpdating/> */}
      {/* <ErrorHandler>
        <ErrorGeneratingComponent number={4} />
        <ErrorGeneratingComponent number={8} />
        <ErrorGeneratingComponent number={"10"} />
      </ErrorHandler> */}
      {/* <ErrorHandler>
        <ErrorGeneratingComponent number={4} />
      </ErrorHandler>
      <ErrorHandler>
        <ErrorGeneratingComponent number={8} />
      </ErrorHandler>
      <ErrorHandler>
        <ErrorGeneratingComponent number={"10"} />
      </ErrorHandler> */}
      {/* <PreviousState /> */}
      {/* <UseStateComponent /> */}
      {/* <UseStateArrayComponent /> */}
      {/* <UseEffectHooksFlow /> */}
      {/* <UseEffectHooksFlowOnStateUpdate />
      <ComponentDidMountUpdate /> */}
      {/* <InputRefClassComp /> */}
      {/* <RefClassCompWay2 /> */}
      {/* <RefClassParentComp /> */}
      {/* <RefForwardingParentComp /> */}
      {/* <MainComp /> */}
      {/* <FinalComp/> */}
      {/* <ContextMainComp/> */}
      {/* <PrevStateComp/> */}
      {/* <HooksCleanUp /> */}
      {/* <HooksCleanUpParentComp /> */}
      {/* <TimerComp /> */}
      {/* <GrandParentComp/> */}
      {/* <ParentCompOpt/> */}
      {/* <UseRefComp /> */}
      {/* <DocumentTitleComp /> */}
      {/* <CountWrapComp /> */}
      <InputWrapComp />
    </div >
  );
}

export default App;
