import { createSlice } from '@reduxjs/toolkit'

const scoresSlice = createSlice({
    name: 'scores',
    initialState: [],
    reducers: {
        fetchScores: (state, { payload }) => [...payload]
    }
})

export const { fetchScores } = scoresSlice.actions
export default scoresSlice.reducer