import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "react-toastify/dist/ReactToastify.css"
import { Toast, Loader } from './components'
import AppNavigator from './navigation/AppNavigator'
import { useEffect } from 'react'
import Firebase from './utils/Firebase'
import { useSelector } from 'react-redux'

const App = () => {
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    Firebase.listenToTheChangeOfScoresDB()
    Firebase.listenToAuthChanged()
  }, [])

  return loading ? <Loader/> : <div className="text-break">
    <Toast/>
    <AppNavigator/>
  </div>
}

export default App