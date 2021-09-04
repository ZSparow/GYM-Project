import React from 'react'

function InputField({ label, type, value, setValue }) {
    return (
        <div className="input-field">
            <label htmlFor={`mainInput,`}>{label}:</label>
            <input id="mainInput" type={type ? type : "text"} />
        </div>
    )
}

export default InputField
