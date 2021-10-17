import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'userInfo',
    initialState: {},
    reducers: {
        setUserInfo: (state, { payload }) => {
            return {...payload}
        }, 

        removeUserInfo: (state, { payload }) => {
            return {}
        }
    }
})

export const { setUserInfo, removeUserInfo } = userSlice.actions
export default userSlice.reducer