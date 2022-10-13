import React, { Component } from 'react';
import CssModuleTest from './component/CssModuleTest';
// import HookUseCb from './component/HookUseCb';
// import HookPractice from './component/HookPractice';
// import TestComponent from './component/TestComponent';
// import HookTest from './component/HookTest';
// import HookUseMemo from './component/HookUseMemo';

class App extends Component {
  render() {
    return (
      <div>
        {/* <HookTest></HookTest> */}
        {/* <HookUseMemo></HookUseMemo> */}
        {/* <HookUseCb></HookUseCb> */}
        <CssModuleTest></CssModuleTest>
      </div>
    );
  }
}

export default App;