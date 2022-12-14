import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
