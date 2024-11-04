import React from 'react'

export default function Viewdate(props) {
  return (
    <div>
         <h3>Selected Date:</h3>
       <input
        type="text"
        value={props.selectedDate}
        readOnly
        style={{ width: '100%', padding: '10px', marginTop: '10px' }}
      />
    </div>
  )
}
