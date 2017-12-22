import {  MarkdownPreview  } from 'react-marked-markdown'
import React, { Component } from 'react';

class Preview extends Component {

  render() {
    return (
      <div className="preview" style={{
        height: '100%',
        width: '50%',
        padding: '8px'
      }}>
        <MarkdownPreview value={this.props.text} />
      </div>
    );
  }
}

export default Preview