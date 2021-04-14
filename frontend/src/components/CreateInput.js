import React from 'react';

const CreateInput = (item) => (
    <div className={"field is-centered has-text-centered"}>
        <input
            className={"input is-info is-flex-mobile"} style={{ width:"60%", margin:"auto" }}
            type={item.info[0] === 'password' || item.info[0] === 'repeatPassword' ? "password" : "text"}
            name={item.info[0]}
            placeholder={item.info[1]}/>
    </div>
);

export default CreateInput;
