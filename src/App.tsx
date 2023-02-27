import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import RequireAuth from './contexts/auth/RequireAuth';
import PrivatePage from './components/PrivatePage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login-page' element={<RequireAuth><PrivatePage /></RequireAuth>}/>
      <Route path='/register-page' element={<RegisterPage />}/>
    </Routes>
    </>
  )
}

export default App
