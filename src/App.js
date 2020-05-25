import React, { Component } from 'react';
import './App.css';
import './ValidationComponent'
import ValidationComponent from './ValidationComponent';
import './CharComponent'
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    text: '',
    textLength: 0,
    charElements: []
  }

  handleTextChange = event => {
    //lenght of the entered text
    let textLength = event.target.value.length

    //create the array of character from the text
    const textArray = event.target.value.split('')

    console.log(textArray)
    
    //let's set the new state
    this.setState({
      charElements: textArray,
      textLength: textLength,
      text: event.target.value
    })
  }

  removeCharHandler = (index) => {
    console.log(index)

    //let's copy the state array
    let charArray = [...this.state.charElements]

    //let's delete the index element
    charArray.splice(index, 1)

    //let's have the new text
    let newText = charArray.join('')

    //let's set the new state
    this.setState({
      charElements: charArray,
      text: newText,
      textLength: newText.length
    })
  }

  render() {
    const inputStyle = {
      padding: '5px',
      border: '5px solid black',
      marginTop: '15px'
    }

    return (
      <div className="App">
        <input style={inputStyle} type='text' onChange={this.handleTextChange} value={this.state.text}/>
        <p>
          Text length: {this.state.textLength}
        </p>
        <ValidationComponent textLength={this.state.textLength} />
        {
          this.state.charElements.map(
            (char, index) => {
              return char === ' ' ? '' : <CharComponent 
                    char={char} 
                    key={index} 
                    removeChar={this.removeCharHandler.bind(this, index)}/>
            }
          )
        }
      </div>
    );
  }
}

export default App;
