import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    toggleModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleModal } = modalSlice.actions;
