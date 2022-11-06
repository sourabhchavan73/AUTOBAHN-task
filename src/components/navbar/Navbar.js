import { Container } from '@mui/system';
import React from 'react';
import { useStyles } from './navbarStyles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <Container>
        <div className='logo-container'>
          <h2 className={classes.brandTitle}>
            <span className={classes.brandText}>Posts</span>
          </h2>
        </div>

        <div className={classes.navItem}>
          <span className={classes.menuTitle}>Home</span>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
