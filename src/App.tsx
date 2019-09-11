import React, { PureComponent, Component } from 'react';
import './App.css';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';
import ComponentPreview from './features/ComponentPreview/components/ComponentPreview';

export class App extends PureComponent {
  public render() {
    return (
      <div className="App">
        <img className="App-mockup" src="./completed-view.png"></img>
        <HCardBuilder
          onSubmit={vals => console.log('Sending to backend', vals)}
        />
        <ComponentPreview name="hCard Preview">
          <div
            style={{ width: 430, height: 305, backgroundColor: 'white' }}
          ></div>
        </ComponentPreview>
      </div>
    );
  }
}

export default App;
