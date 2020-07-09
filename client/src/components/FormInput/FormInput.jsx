import React from 'react';

const FormInput = ({handleChange,lable,...otherProps}) => {
    return (
        <div className='group'>
        <input className="form-input"
        onChange={handleChange}{...otherProps}
        />
        {
        (


        )}
            
        </div>
    );
}

export default FormInput;
