import firebase, { auth, scoresDB, rulesDB } from '../config/firebase'
import { fetchScores } from '../redux/features/scoresSlice'
import { showLoading, hideLoading } from '../redux/features/loadingSlice'
import { setUserInfo, removeUserInfo } from '../redux/features/userSlice'
import { setRule, removeRule } from '../redux/features/ruleSlice'
import store from '../redux/store'
import { Util, Notify } from './index'

const Firebase = {
    listenToTheChangeOfScoresDB: () => {
        scoresDB.on('value', snapshot => {
            store.dispatch(showLoading())
            const data = snapshot.val()
            const scores = Util.convertDataSnapshotToArray(data)
            store.dispatch(fetchScores(Util.fomatScores(scores)))
            store.dispatch(hideLoading())
        })
    },

    listenToTheChangeOfRulesDB: (uid) => {
        rulesDB.child(uid).on('value', snapshot => {
            const data = snapshot.val()
            store.dispatch(setRule({...data}))
        })        
    },

    listenToAuthChanged: () => {
        auth.onAuthStateChanged(user => {
            if(user) {
                const userInfo = Util.formatUserInfo(user)
                store.dispatch(setUserInfo(userInfo))
                Firebase.listenToTheChangeOfRulesDB(userInfo?.uid)
            }
            else {
                const { userInfo } = store.getState()
                rulesDB.child(userInfo?.uid).off()
                store.dispatch(removeUserInfo())
                store.dispatch(removeRule())
            }
        })
    },

    signInGoogle: async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            await auth.signInWithPopup(provider)
            Notify.success('Đăng nhập thành công!')  
        }
        catch (error) {
            Notify.error('Đăng nhập thất bại!')   
        }
    },

    signOut: async () => {
        try {
            await auth.signOut()
            Notify.success('Đăng xuất thành công!')   
        }
        catch (error) {
            Notify.error('Đăng xuất thất bại!')   
        }
    },

    removeScore: (id, handleRemoveSuccess) => {
        try {
            scoresDB.child(id).remove()
            Notify.success('Xóa thành công!')
            handleRemoveSuccess()
        }
        catch (error) {
            Notify.error('Có lỗi. Thử lại!')
        }
    },

    addScore: (score, handleAddSusses) => {
        try {
            scoresDB.push(score)
            Notify.success('Thêm học phần thành công!')
            handleAddSusses()
        }
        catch (error) {
            Notify.error('Có lỗi. Thử lại!')
        }
    },

    updateScore: (id, score, handleUpdateSusses) => {
        try {
            scoresDB.child(id).update(score)
            Notify.success('Cập nhật học phần thành công!')
            handleUpdateSusses()
        }
        catch (error) {
            Notify.error('Có lỗi. Thử lại!')
        }    
    }
}

export default Firebase