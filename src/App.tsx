import React, { PureComponent } from 'react';
import './App.css';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';
import HCardPreview from './features/HCardPreview/containers/HCardPreview';

/**
 * [hCard is a simple, open format for publishing people, companies and
 * organizations on the web](http://microformats.org/wiki/hCard).
 * (This app provides an interface to create a hCard and preview the changes in realtime.
 */
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
