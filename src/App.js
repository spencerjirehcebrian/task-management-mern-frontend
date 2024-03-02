import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';

import Login from './components/Login';

import Register from './components/Register';
import Header from './components/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import TaskList from './components/TaskList'

function App(){
  return (
    <>
    <Router>
      <div className="container">
      <Header/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/alltasks' element={<TaskList/>} />
        </Routes>
      </div>
    </Router>
    <ToastContainer/>
    </>
  )
}

export default App