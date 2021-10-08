import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';


function TextButton({btnText, onBtnClick}) {
 

  return (
    <Button variant="text"  onClick={onBtnClick}>
      {btnText}
    </Button>
    
  );
}

TextButton.propTypes = {
  btnText: PropTypes.string,
  onBtnClick: PropTypes.func,
};

export default TextButton;