import {
  CLEAR_POST_ID,
  DRAWER_CLOSE,
  DRAWER_OPEN,
  SET_POST_ID,
} from '../types/drawerTypes';

export const handleDrawer = (state = { isDrawerOpen: false }, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return {
        ...state,
        isDrawerOpen: true,
      };

    case DRAWER_CLOSE:
      return {
        isDrawerOpen: false,
      };

    default:
      return state;
  }
};

export const handleEditPostDrawer = (state = { postId: null }, action) => {
  switch (action.type) {
    case SET_POST_ID:
      return {
        ...state,
        postId: action.payload,
      };

    case CLEAR_POST_ID:
      return {
        postId: null,
      };

    default:
      return state;
  }
};
