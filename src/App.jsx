import {
  BrowserRouter as Router, // Apenas renomeando BrowserRouter para Router
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Sidebar from './components/OthersComponents/Sidebar/Sidebar'
import Toolbar from './components/OthersComponents/Toolbar/Toolbar'
function App() {
  return (
    <div className='container'>
      

      <div className='row'>
        <div className='col-2'>
          <Sidebar />
        </div>

        <div className='col-10'>
          <Toolbar />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>
        </div>

      </div>

    </div>
  )
}

export default App
