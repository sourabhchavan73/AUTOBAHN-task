import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { connect } from 'react-redux';
import { Container } from '@mui/system';

const DrawerTemplate = (props) => {
  const {
    anchor,
    open,
    children,
    handleDrawerOpen,
    handleDrawerClose,
    clearID,
  } = props;

  const matchesXs = useMediaQuery('(max-width:600px)');
  const matchesSm = useMediaQuery('(min-width:600px) and (max-width:768px)');
  const matchesMd = useMediaQuery('(min-width:768px) and (max-width:1024px)');
  const matchesLg = useMediaQuery('(min-width:1024px)');

  const handleClose = () => {
    handleDrawerClose();
    clearID();
  };

  const handleOpen = () => {
    handleDrawerOpen();
  };

  return (
    <>
      <SwipeableDrawer
        PaperProps={{
          style: {
            width: matchesXs
              ? '90%'
              : matchesSm
              ? '60%'
              : matchesMd
              ? '45%'
              : matchesLg
              ? '30%'
              : '50%',
          },
        }}
        anchor={anchor}
        open={open}
        onOpen={() => handleOpen()}
        onClose={() => handleClose()}
      >
        <Container>{children}</Container>
      </SwipeableDrawer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.handleDrawer.isDrawerOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDrawerOpen: () => dispatch({ type: 'DRAWER_OPEN' }),
    handleDrawerClose: () => dispatch({ type: 'DRAWER_CLOSE' }),
    clearID: () => dispatch({ type: 'CLEAR_POST_ID' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerTemplate);
