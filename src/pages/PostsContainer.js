import React, { useEffect } from 'react';
import PostCard from '../components/card/PostCard';
import Grid from '@mui/material/Grid';
import { fetchPosts } from '../redux/actions/postAction';
import { connect } from 'react-redux';
import ButtonInput from '../components/button/ButtonInput';
import Loader from '../components/Loader';
import { Alert } from '@mui/material';

const PostsContainer = (props) => {
  const { fetchPosts, postsList, postLoading, handleDrawerOpen } = props;
  const { posts, error, loading } = postsList;

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const postsContainer = {
    background: '#f0f2f5',
    padding: '20px',
  };

  const handleDrawer = () => {
    handleDrawerOpen();
  };

  return (
    <>
      {loading ? (
        <Loader open={postLoading} />
      ) : error ? (
        <Alert severity='error'>{error.message}</Alert>
      ) : (
        <div className='h-100' style={postsContainer}>
          <Grid container>
            <Grid item>
              <ButtonInput
                onClick={() => handleDrawer()}
                my={2}
                title='Add New Post'
              />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {posts.length > 0 ? (
              posts.map((post, i) => (
                <Grid key={i} item lg={3} md={4} sm={6} xs={6}>
                  <PostCard
                    title={post.title}
                    content={post.body}
                    postId={post.id}
                  />
                </Grid>
              ))
            ) : (
              <Grid item lg={3} md={4} sm={6} xs={6}>
                <Alert severity='info'>no post available - Add New</Alert>
              </Grid>
            )}
          </Grid>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    postsList: state.postList,
    postLoading: state.postList.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    handleDrawerOpen: () => dispatch({ type: 'DRAWER_OPEN' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
