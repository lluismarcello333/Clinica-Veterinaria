import HomeCarousel from "../../components/home-carousel/HomeCarousel";
import "./Home.css";
import ConsultaPet from "../../assets/img_animal/hoto-.jpg";
import VacinaPet from "../../assets/img_animal/vac.jpg";
import CirurgiaPet from "../../assets/img_animal/ciru.jpg";
import DonoPet from "../../assets/img_animal/model-contact.png";
import Domicilio from "../../assets/img_animal/Domicilio.jpg";
import SegurandoPet from "../../assets/img_animal/download.jpeg";
import WhatsAppIcon from "../../assets/whatsapp-svgrepo-com.svg";

import CarouselDepoiments from "../../components/carousel-depoiments/CarouselDepoiments";

export default function Home() {
  const handleSendWhatsAppMessage = () => {
    // Lógica para criar a mensagem do WhatsApp com o pedido de agendamento
    let message = `Olá, gostaria de agendar uma consulta para meu pet. 🐾 \n\nPor favor, entre em contato para verificar a disponibilidade.`;
    window.open(
      `https://wa.me/5521965502519?text=${encodeURIComponent(message)}`
    );
  };
  return (
    <>
      {/* Seção principal com o carrossel e a descrição */}
      <div className="home-section">
        <div className="carousel-container">
          <HomeCarousel />
        </div>
        <div className="clinic-description">
          <h1>Clínica Veterinária Dra. Amara Areias</h1>
          <p>
            Cuidamos da saúde e bem-estar dos seus pets com dedicação e uma
            equipe experiente. Oferecemos atendimento de qualidade para
            consultas, emergências e cuidados especializados, garantindo uma
            vida saudável e feliz para seu animal com responsabilidade e
            carinho.
          </p>
          <div className="button">
            <a href="/servicos" className="no-underline">
              <button className="button-home-section">Nossos Serviços</button>
            </a>

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
        </div>
      </div>

      {/* Seção "Infos" */}
      <div className="container-service-content">
        {/* Itens da seção */}
        <div className="service-item">
          <div className="service-item-img">
            <img src={ConsultaPet} alt="Consulta de Pet" className="photo" />
          </div>
          <div className="service-item-title">
            <h1>Consultas</h1>
          </div>
          <div className="service-item-description">
            Nossas consultas são conduzidas por profissionais qualificados,
            oferecendo atendimento especializado para cada tipo de animal, desde
            check-ups de rotina até emergências. Com equipamentos modernos e uma
            equipe dedicada, garantimos o cuidado da saúde do seu pet em todas
            as fases da vida.
          </div>
          <a href="/servicos/consultas">
            <button className="saiba-mais-button">Saiba mais</button>
          </a>
        </div>
        <div className="service-item">
          <div className="service-item-img">
            <img src={VacinaPet} alt="Vacinas para Pet" className="photo" />
          </div>
          <div className="service-item-title">
            <h1>Vacinas</h1>
          </div>
          <div className="service-item-description">
            Manter o calendário de vacinas do seu pet em dia é essencial para
            prevenir doenças e garantir seu bem-estar. Oferecemos todas as
            vacinas recomendadas, atendendo às necessidades específicas do seu
            animal, proporcionando segurança e tranquilidade para você e seu
            melhor amigo.
          </div>
          <a href="/servicos/vacinas">
            <button className="saiba-mais-button">Saiba mais</button>
          </a>
        </div>
        <div className="service-item">
          <div className="service-item-img">
            <img src={CirurgiaPet} alt="Cirurgias para Pet" className="photo" />
          </div>
          <div className="service-item-title">
            <h1>Cirurgias</h1>
          </div>
          <div className="service-item-description">
            Seja para cirurgias de emergência ou procedimentos eletivos, nossa
            clínica está equipada com tecnologia de ponta e profissionais
            especializados para cuidar do seu pet. Realizamos cada cirurgia com
            atenção e carinho, mantendo o foco na saúde e recuperação plena do
            seu animal.
          </div>
          <a href="/servicos/cirurgias">
            <button className="saiba-mais-button">Saiba mais</button>
          </a>
        </div>
      </div>

      {/* Agende sua visita */}
      <div className="schedule-section">
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

      {/* Consultas a Domicilio */}
      <div className="schedule-section-domicilio">
        <div className="schedule-image-domicilio">
          <img src={Domicilio} alt="Consultas a Domicilio" />
        </div>
        <div className="schedule-text">
          <h2>Consultas a Domicilio</h2>
          <p>
            Solicite uma consulta em casa agora mesmo! Atendemos de domingo à
            domingo até às 22h, após esse horário somente para clientes
            cadastrados. Agende pelo telefone, WhatsApp ou em nosso site.
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
      </div>

      {/* Quando procurar um veterinário */}
      <div className="schedule-section-search">
        <div className="schedule-text">
          <h2>Quando devo procurar um médico veterinário?</h2>
          <p>
            É fundamental saber quando seu pet precisa de cuidados
            profissionais. Consultas regulares são essenciais para a prevenção
            de doenças, permitindo a detecção precoce de problemas de saúde.
            Essas visitas não apenas garantem que seu animal esteja saudável,
            mas também ajudam a monitorar seu bem-estar geral, proporcionando
            atualizações sobre vacinas e cuidados preventivos.
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
          <img src={SegurandoPet} alt="Dono com seu pet" />
        </div>
      </div>

      {/* Depoimentos de donos de Pets */}
      <div className="carousel-container-depoiments">
        <CarouselDepoiments />
      </div>
    </>
  );
}
