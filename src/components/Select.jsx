import React from 'react'

export const Select = ({ value = '', handleChange }) => {
  return (
    <>
      <select className="form-select form-select-sm w-100px" name="winnerFilter" onChange={handleChange}>
        <option value=''>Yes/No</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </>
  )
}
