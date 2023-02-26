import './App.css'
import {Routes, Route} from "react-router-dom";
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login-page' element={<LoginPage />}/>
    </Routes>
    </>
  )
}

export default App
