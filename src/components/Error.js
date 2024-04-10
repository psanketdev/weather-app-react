import React from 'react'

const Error = ({error, active}) => {
  return (
    <div  className={`error ${active}`}>
      <p>{error}</p>
    </div>
  )
}

export default Error
