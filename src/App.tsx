import './App.css'
import {Routes, Route} from "react-router-dom";
import LoginPage from './contexts/auth/LoginPage';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login-page' element={<LoginPage />}/>
      <Route path='/register-page' element={<RegisterPage />}/>
    </Routes>
    </>
  )
}

export default App
