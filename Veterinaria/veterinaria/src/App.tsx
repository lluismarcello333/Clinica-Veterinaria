import { theme, ThemeProvider } from "./theme";
import Header from "./components/header/Header";
import "./App.css";
import NavButtonGroup from "./components/buttonGroup/NavButtonGroup";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import ServiceDetails from "./components/serviceDetails/ServiceDetails";
import Servicos from "./pages/servicos/Servicos";
import Sobre from "./pages/sobre/Sobre";
import Contato from "./pages/contato/Contato";
import Footer from "./components/footer/Footer";
import Duvidas from "./pages/duvidas/Duvidas";
import Article from "./components/article/Article";
import ArticleDetails from "./components/articleDetails/ArticleDetails";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Componente Wrapper para ServiceDetails
const ServiceDetailsWrapper = () => {
  const { id } = useParams<{ id: string }>(); // Usando useParams para pegar o ID
  return <ServiceDetails selectedServiceId={id!} />; // Passando o ID para o ServiceDetails
};

function App() {
  const location = useLocation();
  const path = location.pathname;

  const [expanded, setExpanded] = useState<string | false>(false);

  React.useEffect(() => {
    let newExpandedState: string | false = false;
    switch (path) {
      case "/ajuda-suporte":
        newExpandedState = "formasPagamento";
        break;
      case "/ajuda-suporte/politica-privacidade":
        newExpandedState = "politicaPrivacidade";
        break;
      case "/ajuda-suporte/politica-reembolso":
        newExpandedState = "politicaReembolso";
        break;
      case "/ajuda-suporte/trocas-devolucoes":
        newExpandedState = "trocaDevolucoes";
        break;
      case "/ajuda-suporte/prazo-entrega":
        newExpandedState = "prazoEntrega";
        break;
      case "/ajuda-suporte/compra-segura":
        newExpandedState = "compraSegura";
        break;
      default:
        newExpandedState = false;
        break;
    }
    setExpanded(newExpandedState);
  }, [path]);

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <header>
          <Header />
        </header>
        <nav>
          <NavButtonGroup />
        </nav>

        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/:id" element={<ServiceDetailsWrapper />} />
            <Route path="/contato" element={<Contato />} />
            <Route
              path="/duvidas"
              element={
                <Duvidas expanded={expanded} setExpanded={setExpanded} />
              }
            />
            <Route path="/artigos" element={<Article />} />
            <Route path="/artigos/:id" element={<ArticleDetails />} />
          </Routes>
        </main>

        <Footer />

        <div className="whatsapp-button">
          <a
            href="https://wa.me/5521965502519"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.drpetdomiciliar.com.br/images/ico_whatsapp_float.png"
              alt="WhatsApp"
              className="whatsapp-icon"
            />
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
