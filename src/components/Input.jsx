import React from 'react'

export const Input = ({ type = 'text', name, value = '', placeHolder, classs, handleChange }) => {
  const validation = (value >= 1979 && value <= 2019) || value === '' ? '' : 'is-invalid'
  return (
    <>
      <div className='form-control border-0 pt-0'>

        <input
          type={type}
          className={`form-control w-100px ${classs} `  + validation}
          name={name}
          min='1980'
          max='2023'
          value={value}
          onChange={e => handleChange(e)}
          placeholder={placeHolder}

        />
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          Please choose a year from 1980 - 2019.
        </div>
      </div>
    </>
  )
}
