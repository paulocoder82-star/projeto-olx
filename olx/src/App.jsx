export default CadastroPage;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import CadastroPage from "./pages/cadastro";
import InicioPage from "./pages/inicio";
import LoginPage from "./pages/login";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </Routes>
  </BrowserRouter>
);
