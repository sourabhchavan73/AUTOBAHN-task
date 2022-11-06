import {
  LIST_POST,
  LIST_POST_SUCCESS,
  LIST_POST_FAIL,
  POST_CREATE_SUCCESS,
  POST_UPDATE_SUCCESS,
} from '../types/postType';

export const postList = (state = { posts: [] }, action) => {
  switch (action.type) {
    case LIST_POST:
      return {
        ...state,
        loading: true,
      };

    case LIST_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };

    case POST_CREATE_SUCCESS:
      return {
        loading: false,
        posts: [action.payload, ...state.posts],
      };

    case POST_UPDATE_SUCCESS:
      return {
        loading: false,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };

    case LIST_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
