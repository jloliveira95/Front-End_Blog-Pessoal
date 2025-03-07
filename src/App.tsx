import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { UserProvider } from './contexts/UserContext';
import ListaTemas from './temas/listatemas/ListaTemas';

import { AuthProvider } from './contexts/AuthContext'; // Certifique-se de importar corretamente
import FormTema from './temas/formtemas/FormTemas';
import DeletarTema from './temas/cardtemas/DeletarTemas';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import FormPostagem from './components/postagens/formpostagem/FormPostagem';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil';

function App() {
  return (
    <AuthProvider> {/* ✅ Agora todos os componentes terão acesso ao AuthContext */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/cadastrartema" element={<FormTema />} />
          <Route path="/editartema/:id" element={<FormTema />} />
          <Route path="/deletartema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/cadastrarpostagem" element={<FormPostagem />} />
          <Route path="/editarpostagem/:id" element={<FormPostagem />} />
          <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
