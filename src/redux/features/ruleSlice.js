import { createSlice } from '@reduxjs/toolkit'

const ruleSlice = createSlice({
    name: 'rule',
    initialState: {},
    reducers: {
        setRule: (state, { payload }) => {
            return {...payload}
        },

        removeRule: (state, { payload }) => {
            return {}
        }
    }
})

export const { setRule, removeRule } = ruleSlice.actions
export default ruleSlice.reducer