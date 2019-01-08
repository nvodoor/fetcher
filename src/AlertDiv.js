import React from 'react';

const AlertDiv = ({ alert}) => {
  return (
    <div onClick={alert}>
      Click on this div to see an Alert pop!
    </div>
  )
}

export default AlertDiv;