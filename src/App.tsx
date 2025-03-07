import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { UserProvider } from './context/UserContext';
import ListaTemas from './temas/listatemas/ListaTemas';

import { AuthProvider } from './context/AuthContext'; // Certifique-se de importar corretamente
import FormTema from './temas/formtemas/FormTemas';
import DeletarTema from './temas/cardtemas/DeletarTemas';

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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
