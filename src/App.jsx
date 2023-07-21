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
import CriarProduto from './pages/CriarProduto/CriarProduto'
import Prontuario from './pages/Prontuario/Prontuario'
import ListaProntuario from './pages/ListaProntuario/ListaProntuario'
import CadastroExame from './pages/CadastroExame/CadastroExame'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-auto px-0'>
          <Sidebar />
        </div>

        <div className='col-10 px-0'>
          <Toolbar />
          <main className="bg-default" style={{ 'padding': '20px 100px'}}>
            <Router>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/lista-prontuario' element={<ListaProntuario />} />
                <Route path='/prontuario' element={<Prontuario />} />
                <Route path='/prontuario/:id' element={<Prontuario />} />
                
                {/* <Route path='/exame/:id' element={<CadastroExame />} />
                <Route path='/consulta/:id' element={<CadastroConsulta />} /> */}

                <Route path='/produtos' element={<Produtos />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/criar-produto' element={<CriarProduto />} />
                <Route path='/cadastro-exame' element={<CadastroExame />} />
              </Routes>
            </Router>
          </main>
        </div>

      </div>

    </div>
  )
}

export default App
