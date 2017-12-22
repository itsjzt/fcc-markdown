import React, { Component } from 'react';
import Preview from './partials/Preview'
import Editor from './partials/Editor'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textToPreview: 'this is markdown sample text. with come _italics_ and **bold** texts. \n # some headings too.'
    }
  }

  updatePreview(value) {
    this.setState({textToPreview: value})
  }

  render() {
    return (
      <div className="App" style={{
        display: 'flex',
        flexGrow: '1',
        width: '100%',
        height: '100vh',
      }}>
        <Editor updatePreview={this.updatePreview.bind(this)} value={this.state.textToPreview} />
        <Preview text={this.state.textToPreview} />
      </div>
    );
  }
}

export default App;
