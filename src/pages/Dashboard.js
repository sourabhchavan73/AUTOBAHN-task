import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Grid from '@mui/material/Grid';
import PostsContainer from './PostsContainer';
import AddPostDrawer from '../templates/AddPostDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';

const Dashboard = () => {
  const matchesSM = useMediaQuery('(min-width:600px)');

  return (
    <>
      <AddPostDrawer />
      <Grid container>
        {matchesSM && (
          <Grid item xs={2} sm={3} md={2} lg={2} style={{ minHeight: '100vh' }}>
            <Navbar />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={9}
          md={10}
          lg={10}
          style={{ minHeight: '100vh' }}
        >
          <PostsContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
