import React from 'react'

class ValidationComponent extends React.Component {
    render() {
        return (
            <p>
                {
                    this.props.textLength < 10 ? 'Text too short' : 'Text long enough'
                }
            </p>
        );
    }
}

export default ValidationComponent;