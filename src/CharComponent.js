import React from 'react'

class CharComponent extends React.Component {
    render() {
        const style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black',
            backgroundColor: 'black',
            color: 'white',
            boxShadow: '0 5px 5px #ccc'
        }

        return(
            <p 
                style={style} 
                onClick={this.props.removeChar}>
                {
                    this.props.char
                }
            </p>
        );
    }
}

export default CharComponent;