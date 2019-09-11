import React, { PureComponent } from 'react'
import './App.css'
import HCardBuilder from './features/HCardBuilder/components'

export class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <img className="App-mockup" src="./completed-view.png"></img>
        <HCardBuilder></HCardBuilder>
      </div>
    )
  }
}

export default App
