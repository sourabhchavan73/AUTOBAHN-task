import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { postList } from './reducers/PostReducers';
import { handleDrawer, handleEditPostDrawer } from './reducers/drawerReducer';

const initialState = {
  isDrawerOpen: false,
};

const store = configureStore({
  reducer: { postList, initialState, handleDrawer, handleEditPostDrawer },

  middleware: [thunk],
});

export default store;
