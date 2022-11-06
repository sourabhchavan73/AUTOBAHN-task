import * as postAPI from '../../api/postAPI';
import {
  LIST_POST,
  LIST_POST_FAIL,
  LIST_POST_SUCCESS,
  POST_CREATE_SUCCESS,
  POST_UPDATE_SUCCESS,
} from '../types/postType';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_POST,
    });

    const { data } = await postAPI.fetchPosts();

    dispatch({
      type: LIST_POST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LIST_POST_FAIL,
      payload: err,
    });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_POST,
    });

    const { data } = await postAPI.createPost(post);

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LIST_POST_FAIL,
      payload: err,
    });
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_POST,
    });

    const { data } = await postAPI.updatePost(id, post);

    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LIST_POST_FAIL,
      payload: err,
    });
  }
};
