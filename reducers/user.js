import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        username: 'farah',
        token: 'K-61OoWE6Tvp66BBgfNtsY3OgqiKoS-m',
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