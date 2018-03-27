import React, { Component } from 'react';

import  CodeMirror from 'codemirror';

class CodeMirrorEditor extends Component {

  constructor(props) {
    super(props);
    this.editor ; 
    this.state = { isControlled: this.props.value != null };
  }
  

  componentDidMount() {
    var isTextArea = this.props.forceTextArea;
    if (!isTextArea) {
      this.editor = CodeMirror.fromTextArea(this.refs.editor, this.props);
      this.editor.on('change', ()=>{this.handleChange()});
    }
  }

  componentDidUpdate() {
    if (this.editor) {
      if (this.props.value != null) {
        if (this.editor.getValue() !== this.props.value) {
          this.editor.setValue(this.props.value);
        }
      }
    }
  }

  handleChange() {
    if (this.editor) {
      var value = this.editor.getValue();
      if (value !== this.props.value) {
        this.props.onChange && this.props.onChange(value);
        if (this.editor.getValue() !== this.props.value) {
          if (this.state.isControlled) {
            this.editor.setValue(this.props.value);
          } else {
            this.props.value = value;
          }
        }
      }
    }
  }

  render() {
    var editor = React.createElement('textarea', {
      ref: 'editor',
      value: this.props.value,
      readOnly: this.props.readOnly,
      defaultValue: this.props.defaultValue,
      onChange: this.props.onChange,
      style: this.props.textAreaStyle,
      className: this.props.textAreaClassName || this.props.textAreaClass
    });

    return React.createElement('div', {style: this.props.style, className: this.props.className}, editor);
  }
}

export default CodeMirrorEditor;