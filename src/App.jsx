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
import Produtos from './pages/Produtos/Produtos'
import Cadastro from './pages/Cadastro/Cadastro'

import Sidebar from './components/OthersComponents/Sidebar/Sidebar'
import Toolbar from './components/OthersComponents/Toolbar/Toolbar'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-2 px-0'>
          <Sidebar />
        </div>

        <div className='col-10 px-0'>
          <Toolbar />
          <main style={{ 'padding': '20px 100px'}}>
            <Router>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/cadastro' element={<Cadastro />} />
              </Routes>
            </Router>
          </main>
        </div>

      </div>

    </div>
  )
}

export default App
