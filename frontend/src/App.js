import React, { Component } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import Dropdown from './Dropdown';

class App extends Component {
    state = {
        data: '',
        response: null,
        selectedOptions: []
    };

    handleInputChange = (e) => {
        this.setState({ data: e.target.value });
    };

    handleSubmit = async () => {
        try {
            const res = await axios.post('your_backend_url/bfhl', JSON.parse(this.state.data));
            this.setState({ response: res.data });
        } catch (err) {
            console.error(err);
        }
    };

    handleOptionChange = (selectedOptions) => {
        this.setState({ selectedOptions });
    };

    renderResponse = () => {
        const { response, selectedOptions } = this.state;
        if (!response) return null;

        const dataToRender = selectedOptions.reduce((acc, option) => {
            acc[option] = response[option];
            return acc;
        }, {});

        return (
            <div>
                {Object.entries(dataToRender).map(([key, value]) => (
                    <div key={key}>
                        <h3>{key}</h3>
                        <p>{JSON.stringify(value)}</p>
                    </div>
                ))}
            </div>
        );
    };

    render() {
        return (
            <div>
                <h1>{'your_roll_number'}</h1>
                <TextInput onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
                <Dropdown onChange={this.handleOptionChange} />
                {this.renderResponse()}
            </div>
        );
    }
}

export default App;
