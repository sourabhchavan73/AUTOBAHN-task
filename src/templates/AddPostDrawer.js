import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import DrawerTemplate from '../components/drawer/DrawerTemplate';

import TextField from '@mui/material/TextField';
import ButtonInput from '../components/button/ButtonInput';
import { createPost } from '../redux/actions/postAction';
import { connect } from 'react-redux';
import { updatePost } from '../redux/actions/postAction';
import { useStyles } from './drawerStyles';
import { Alert } from '@mui/material';

const AddPostDrawer = (props) => {
  const classes = useStyles();

  const {
    createNewPost,
    handleDrawerClose,
    postID,
    post,
    updatePost,
    clearID,
  } = props;

  const [data, setData] = useState({
    title: '',
    body: '',
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (postID) {
      setData(post);
    } else {
      inputReset();
    }
  }, [postID, post]);

  const hanldeInputChange = (e) => {
    const { value, name } = e.target;
    if (error) {
      setError(false);
    }
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.title || !data.body) {
      setError(true);
      return;
    }

    if (postID) {
      updatePost(postID, data);
      clearID();
    } else {
      createNewPost({ ...data, userId: 1 });
    }

    handleDrawerClose();
    inputReset();
  };

  const inputReset = () => {
    setData({
      title: '',
      body: '',
    });
  };

  return (
    <>
      <DrawerTemplate anchor='right' open={true}>
        <div>
          <h3 className={classes.formTitle}>
            {postID ? `Edit Post - ID(${post.id})` : 'Add New Post'}
          </h3>
        </div>
        {error && <Alert severity='error'>All the fields are mandatory</Alert>}
        <br />
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.formGroup}>
                <TextField
                  name='title'
                  className={classes.textField}
                  onChange={hanldeInputChange}
                  id='outlined-basic'
                  label='Title'
                  variant='outlined'
                  placeholder='Post Title...'
                  value={data.title}
                  data-test-id='form-title-input'
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className={classes.formGroup}>
                <TextField
                  name='body'
                  className={classes.textField}
                  onChange={hanldeInputChange}
                  id='outlined-basic'
                  label='Description'
                  variant='outlined'
                  multiline
                  rows={4}
                  placeholder='Post Description...'
                  value={data.body}
                  data-test-id='form-description-input'
                />
              </div>
            </Grid>
          </Grid>
          <ButtonInput
            title={postID ? 'Edit Post' : 'Add Post'}
            type='submit'
          />
        </form>
      </DrawerTemplate>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    postCount: state.postList.posts.length,
    postID: state.handleEditPostDrawer.postId,
    post: state.postList.posts.find(
      (post) => post.id === state.handleEditPostDrawer.postId
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPost: (post) => dispatch(createPost(post)),
    handleDrawerClose: () => dispatch({ type: 'DRAWER_CLOSE' }),
    updatePost: (id, post) => dispatch(updatePost(id, post)),
    clearID: () => dispatch({ type: 'CLEAR_POST_ID' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostDrawer);
