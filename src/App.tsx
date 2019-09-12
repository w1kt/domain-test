import React, { PureComponent } from 'react';
import './App.css';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';
import HCardPreview from './features/HCardPreview/containers/HCardPreview';

export class App extends PureComponent {
  public render() {
    return (
      <div className="App">
        <HCardBuilder onSubmit={vals => {}}/>
        <HCardPreview />
      </div>
    );
  }
}

export default App;
