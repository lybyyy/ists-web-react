import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class CodeBlock extends React.Component {
  render() {
    const { codeString, language } = this.props
    return (
      <SyntaxHighlighter language={language} style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  }
}
export default CodeBlock
