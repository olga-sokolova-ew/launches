import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';


function BtnMain({btnText, onBtnClick}) {
 

  return (
    <Button variant="contained" onClick={onBtnClick}>{btnText}
    {/*<button className="button" type="button" onClick={onBtnClick}>${btnText}</button>*/}
    </Button>
    
  );
}

BtnMain.propTypes = {
  btnText: PropTypes.string,
  onBtnClick: PropTypes.func,
};

export default BtnMain;