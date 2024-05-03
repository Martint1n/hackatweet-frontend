import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        username: 'Martin',
        token: '0123456789',
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUsernameToStore: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { addUsernameToStore } = userSlice.actions;
export default userSlice.reducer;