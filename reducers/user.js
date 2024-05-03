import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        username: 'hokage4th',
        token: '0123456789',
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeToken: (state, action) => {
            state.value.token = action.payload;
        },
    }
});

export const { changeToken } = userSlice.actions;
export default userSlice.reducer;