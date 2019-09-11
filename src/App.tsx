import React, { PureComponent } from 'react';
import './App.css';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';

export class App extends PureComponent {
  public render() {
    return (
      <div className="App">
        <img className="App-mockup" src="./completed-view.png"></img>
        <HCardBuilder
          onSubmit={vals => console.log('Sending to backend', vals)}
        />
      </div>
    );
  }
}

export default App;
