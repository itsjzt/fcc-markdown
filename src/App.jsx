import React, { Component } from 'react';
import Preview from './partials/Preview'
import Editor from './partials/Editor'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textToPreview: ''
    }
  }

  updatePreview(value) {
    this.setState({textToPreview: value})
  }

  render() {
    return (
      <div className="app" style={{
        display: 'flex',
        width: '80vw',
        height: '80vh',
        border: 'solid 1px #ccc',
        background: '#f3f5f7'
      }}>
        <Editor updatePreview={this.updatePreview.bind(this)} value={this.state.textToPreview} />
        <Preview text={this.state.textToPreview} />
      </div>
    );
  }
}

export default App;
