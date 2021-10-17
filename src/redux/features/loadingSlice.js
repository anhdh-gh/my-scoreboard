import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
    name: 'loading',
    initialState: true,
    reducers: {
        showLoading: (state, { payload }) => true,
        hideLoading: (state, { payload }) => false,
    }
})

export const { showLoading, hideLoading } = loadingSlice.actions
export default loadingSlice.reducer