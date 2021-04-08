import React from 'react';

const CreateInput = (item) => (
    <div className={"field is-centered mr-6"}>
        <input
            className={"input is-info mr-6"}
            type={item.info[0] === 'hasło' || item.info[0] === 'powHasło' ? "password" : "text"}
            name={item.info[0]}
            placeholder={item.info[1]}/>
    </div>
);

export default CreateInput;
