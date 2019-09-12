import React, { PureComponent } from 'react';
import './App.css';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';
import HCardPreview from './features/HCardPreview/containers/HCardPreview';

export class App extends PureComponent {
  public render() {
    return (
      <div className="App">
        {/* <img className="App-mockup" src="./completed-view.png" alt="mockup"></img> */}
        <HCardBuilder
          onSubmit={vals => console.log('Sending to backend', vals)}
        />
        <HCardPreview />
      </div>
    );
  }
}

export default App;
