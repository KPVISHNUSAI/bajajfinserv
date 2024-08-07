import React, { useState } from 'react';
import axios from 'axios';

const TextInput = ({ onResponse }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const json = JSON.parse(input);
      const response = await axios.post('http://localhost:5000/bfhl', json);
      onResponse(response.data);
      setError('');
    } catch (err) {
      setError('Invalid JSON input');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="API Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TextInput;
