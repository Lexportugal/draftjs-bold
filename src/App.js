import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js'
import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {editorState: EditorState.createEmpty()};

    this.onChange = (editorState) => this.setState({editorState});
  }

  _Bold() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _Italic(){
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  _Underline(){
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  render() {
    return (
      <div className='content'>
        <button onClick={this._Bold.bind(this)}>Bold</button>
        <button onClick={this._Italic.bind(this)}>Italic</button>
        <button onClick={this._Underline.bind(this)}>Underline</button>
        <h4>Digite no campo abaixo:</h4>
        <div className='editor'>
        <Editor 
        editorState={this.state.editorState} 
        onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

export default App;
