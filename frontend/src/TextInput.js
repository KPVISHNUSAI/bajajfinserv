import React from 'react';

class TextInput extends React.Component {
    render() {
        return (
            <div>
                <textarea onChange={this.props.onChange} />
                <button onClick={this.props.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default TextInput;
