import React from 'react';

class Dropdown extends React.Component {
    state = {
        options: ['alphabets', 'numbers', 'highest_alphabet'],
        selectedOptions: []
    };

    handleChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        this.setState({ selectedOptions });
        this.props.onChange(selectedOptions);
    };

    render() {
        return (
            <div>
                <select multiple={true} onChange={this.handleChange}>
                    {this.state.options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Dropdown;
