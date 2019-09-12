import React, { PureComponent } from 'react';
import './App.css';
import ComponentPreview from './features/ComponentPreview/components/ComponentPreview';
import HCard from './features/HCard/components/HCard';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';

export class App extends PureComponent {
  public render() {
    return (
      <div className="App">
        <img className="App-mockup" src="./completed-view.png" alt="mockup"></img>
        <HCardBuilder
          onSubmit={vals => console.log('Sending to backend', vals)}
        />
        <ComponentPreview name="hCard Preview">
          <HCard />
        </ComponentPreview>
      </div>
    );
  }
}

export default App;
