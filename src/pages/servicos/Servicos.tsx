import React from 'react';
import { useNavigate } from 'react-router-dom';
import WhatsAppIcon from "../../assets/whatsapp-svgrepo-com.svg";
import DonoPet from "../../assets/img_animal/model-contact.png";
import Consulta from "../../assets/img_animal/consulta01.jpg";
import Vacinas from "../../assets/img_animal/vacinas.jpg"; 
import Cirurgias from "../../assets/img_animal/cirurgia01.jpeg";
import Internacoes from "../../assets/img_animal/internacao.jpg";
import Vermifugacao from "../../assets/img_animal/vermifugacao.jpg";
import PulgasCarrapatos from "../../assets/img_animal/pulgas-carrapatos.jpeg";
import Nutricional from "../../assets/img_animal/nutricao.jpeg";
import Emergencias from "../../assets/img_animal/emergencia01.jpg";

import "./Servicos.css";

export default function Servicos() {
  const handleSendWhatsAppMessage = () => {
    // Lógica para criar a mensagem do WhatsApp com o pedido de agendamento
    let message = `Olá, gostaria de agendar uma consulta para meu pet. 🐾 \n\nPor favor, entre em contato para verificar a disponibilidade.`;
    window.open(
      `https://wa.me/5521965502519?text=${encodeURIComponent(message)}`
    );
  };
  const navigate = useNavigate();

  const servicos = [
    { nome: "Consultas", imagem: Consulta, id: 'consultas' },
    { nome: "Vacinas", imagem: Vacinas, id: 'vacinas' },
    { nome: "Cirurgias", imagem: Cirurgias, id: 'cirurgias' },
    { nome: "Internações", imagem: Internacoes, id: 'internacoes' },
    { nome: "Vermifugação", imagem: Vermifugacao, id: 'vermifugacao' },
    { nome: "Controle de Pulgas e Carrapatos", imagem: PulgasCarrapatos, id: 'controle-pulga-carrapato' },
    { nome: "Aconselhamento Nutricional", imagem: Nutricional, id: 'aconselhamento-nutricional' },
    { nome: "Emergências Veterinárias", imagem: Emergencias, id: 'emergencia-veterinaria' }
  ];

  const handleCardClick = (id: string) => {
    navigate(`/servicos/${id}`);
  };

  return (
    <div className="servicos-container">
      <main className="servicos-main-container">
        <h1>Serviços</h1>
        <p>Descubra nossos serviços:</p>
        <div className="cards-main-container">
          {servicos.map((servico, index) => (
            <div key={index} className="card-container" onClick={() => handleCardClick(servico.id)}>
              <img src={servico.imagem} alt={servico.nome} className="card-image" />
              <div className="card-content">
                <h3 className="titulo-card">{servico.nome}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Agende sua visita */}
      <div className="schedule-section-servicos">
        <div className="schedule-text">
          <h2>Agende sua visita</h2>
          <p>
            Agende sua visita e garanta o melhor cuidado para o seu pet! Nossa
            equipe especializada está pronta para oferecer um atendimento de
            qualidade, com todo carinho e dedicação que seu amigo de quatro
            patas merece. Seja para consultas de rotina, vacinas ou tratamentos
            mais específicos, estamos à disposição para cuidar da saúde e
            bem-estar do seu animal. Entre em contato agora e marque um horário!
          </p>
          <button
            className="button-home-section"
            onClick={handleSendWhatsAppMessage}
          >
            <img
              src={WhatsAppIcon}
              alt="WhatsApp"
              style={{ marginRight: "8px", width: "20px", height: "20px" }}
            />
            Entre em contato
          </button>
        </div>
        <div className="schedule-image">
          <img src={DonoPet} alt="Dono com seu pet" />
        </div>
      </div>
    </div>
  );
}
