
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
