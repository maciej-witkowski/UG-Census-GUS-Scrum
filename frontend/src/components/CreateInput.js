import React from 'react';

const inputStyle = {
    width: '80%',
    margin: '15px',
    padding: '20px',
    border: 'none',
    borderBottom: '1px solid #333',
    outline: 'none'
}

const CreateInput = (item) => (
    <input
        style={inputStyle}
        type="text"
        name={item.info[0]}
        placeholder={item.info[1]}/>
)


export default CreateInput;
