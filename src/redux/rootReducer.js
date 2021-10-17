import { combineReducers } from 'redux'
import scoresReducer from './features/scoresSlice'
import loadingReducer from './features/loadingSlice'
import userInfoReducer from './features/userSlice'
import ruleReducer from './features/ruleSlice'

export default combineReducers({
    scores: scoresReducer,
    loading: loadingReducer,
    userInfo: userInfoReducer,
    rule: ruleReducer,
})