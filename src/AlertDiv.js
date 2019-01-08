import React from 'react';
import PropTypes from 'prop-types';

const AlertDiv = ({ alert}) => {
  return (
    <div onClick={alert}>
      Click on this div to see an Alert pop!
    </div>
  )
}

PropTypes.AlertDiv = {
  alert: PropTypes.func
}

export default AlertDiv;