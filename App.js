import React, { Component } from 'react'
import Firstclasscomponent from './components/classcomponent'
import Functionalcomponent from './components/functionalcomponent'
import './App.css';

export class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      showFucntionalComponent: false,
      showclasscomponent: true,
    }
  }
  showfun1 = () => {
    this.setState({
      showFucntionalComponent:!this.state.showFucntionalComponent
    })}
    showcls = () => {
      this.setState({
        showclasscomponent:!this.state.showclasscomponent
      })
  }
  render() {
    return (
          <div className='mymain'>
            <h1>Styling using Functional and Class component</h1>
            <div className="a1">
              <div className='a' onClick={this.showfun1}>To see styling in Functional Component</div>
              <div className='a' onClick={this.showcls}>To see styling in Class Component</div>
            </div>
            {this.state.showFucntionalComponent &&  < Functionalcomponent />}
            {this.state.showclasscomponent && <Firstclasscomponent /> }
          </div>
    );
  }
}
export default App
