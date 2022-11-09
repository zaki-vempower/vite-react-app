import React, { useState } from 'react';


import Button from '@atlaskit/button/standard-button';

import Drawer from '@atlaskit/drawer';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { handleDrawer } from '../store/actions';


const ADrawer = () => {
  const dispatch = useDispatch()
  const {  drawerHandle } = useSelector(state => state.userReducer);
  return (
    <div>
      <Drawer onClose={() => dispatch(handleDrawer(false))} isOpen={drawerHandle}>
      <Box>
        <h1>
          HELLO WORLD
        </h1>
      </Box>
      </Drawer>
    </div>
  );
};

export default ADrawer;