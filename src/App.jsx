import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioPage from "./pages/Inicio";
import LoginPage from "./pages/Login";
import CadastroPage from "./pages/Cadastro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </BrowserRouter>
  );
}
