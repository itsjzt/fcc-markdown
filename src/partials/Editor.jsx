import React from 'react'
// editor
import AceEditor from 'react-ace'

import 'brace/mode/markdown'
import 'brace/theme/github'

const Editor = (props) => {
  return (
    <div style={{
      border: 'solid 1px #ccc',
      width: '50%',
      height: '100%'
      }}>
      <AceEditor
        height="100%"
        width="100%"
        mode="markdown"
        theme="github"
        fontSize={16}
        value={props.value}
        onChange={props.updatePreview}
      />
    </div>
  );
}


export default Editor