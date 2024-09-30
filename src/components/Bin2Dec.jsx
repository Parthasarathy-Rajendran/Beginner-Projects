import React, { useState } from 'react';
import './Bin2Dec.css';

const Bin2Dec = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState('');

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    // Validate binary input
    if (/^[01]*$/.test(value) || value === '') {
      setBinaryInput(value);
      setDecimalOutput(value ? parseInt(value, 2) : '');
    } else {
      alert('Please enter a valid binary number.');
    }
  };

  return (
    <div className="App">
      <h1>Beginner Projects</h1>
      <h2>Binary to Decimal Converter</h2>
      <div className="converter-panel">
        <input
          type="text"
          placeholder="Enter binary number"
          value={binaryInput}
          onChange={handleBinaryChange}
        />
        <button onClick={() => setDecimalOutput(parseInt(binaryInput, 2))}>
          Convert
        </button>
        <h3>Decimal Output: {decimalOutput}</h3>
      </div>
    </div>
  );
};

export default Bin2Dec;