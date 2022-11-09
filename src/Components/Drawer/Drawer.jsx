import React, { useState } from 'react';


import Button from '@atlaskit/button/standard-button';

import Drawer from '@mui/material/Drawer';
import Lorem from 'react-lorem-component';
import { Box } from '@mui/material';


const ADrawer = (props) => {
  console.log('sdsdd',props)
  return (
    <>
      <Drawer onClose={() => props.setOpen(false)} anchor={'left'} open={props.isOpen}>
      <Box sx={{ width: 250 }} >
        <h1>
          HELLO WORLD
        </h1>
      </Box>
      </Drawer>
    </>
  );
};

export default ADrawer;