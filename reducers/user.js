import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        username: '',
        token: '',
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addPreorderInfoToStore: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { addUsernameToStore } = userSlice.actions;
export default userSlice.reducer;