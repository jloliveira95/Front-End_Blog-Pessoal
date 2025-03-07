import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import ListarUsuarios from './components/usuarios/listarusuarios/ListarUsuarios'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route index element={<Login />} /> {/* Define Login como página inicial */}
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios" element={<ListarUsuarios />} /> {/* Agora acessível por rota */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
