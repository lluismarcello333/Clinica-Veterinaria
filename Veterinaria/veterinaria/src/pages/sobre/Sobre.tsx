import * as React from "react";
import WhatsAppIcon from "../../assets/whatsapp-svgrepo-com.svg";
import DonoPet from "../../assets/img_animal/model-contact.png";
import MaeFilha from "../../assets/img_vet/mae-filha.png";
import "./Sobre.css";

export default function Sobre() {
  const handleSendWhatsAppMessage = () => {
    // Lógica para criar a mensagem do WhatsApp com o pedido de agendamento
    let message = `Olá, gostaria de agendar uma consulta para meu pet. 🐾 \n\nPor favor, entre em contato para verificar a disponibilidade.`;
    window.open(
      `https://wa.me/5521965502519?text=${encodeURIComponent(message)}`
    );
  };
  return (
    <div className="container-quemSomos">
      <main className="container-main-quemSomos">
        <h1>Sobre</h1>

        <p className="subtitle">
          A Clínica Veterinária Dra. Amara Areias tem uma história marcada por
          amor e dedicação aos animais, uma tradição que passa de geração em
          geração.
        </p>
        <section className="section-quemSomos">
        <div>
          <p>
            Fundada há mais de 20 anos, a clínica surgiu do sonho e paixão de
            uma mãe veterinária, que dedicou sua vida ao cuidado dos animais.
            Hoje, esse legado é continuado pela filha, Dra. Daniele Areias, que
            desde pequena se inspirou no exemplo da mãe e seguiu o mesmo
            caminho, movida pelo profundo amor à profissão e aos animais.
          </p>

          <p>
            Na Clínica Dra. Amara Areias, acreditamos que nossos pets são
            membros da família, e é por isso que cada atendimento é feito com
            carinho e respeito. Oferecemos um serviço humanizado, onde o
            bem-estar do seu animal está sempre em primeiro lugar.
          </p>

          <p>
            Nossa equipe está em constante atualização, garantindo o melhor
            cuidado, tanto nas consultas em nossa clínica quanto no conforto do
            seu lar. Assim, evitamos o estresse dos animais, proporcionando um
            ambiente tranquilo e seguro.
          </p>

          <p className="subtitle-last">
            Aqui, cada visita é mais do que um simples atendimento — é um gesto
            de cuidado e dedicação que fazemos questão de oferecer, porque
            entendemos o quanto eles são importantes para você.
          </p>
        </div>
        <div className="image-section-quemSomos">
            <img src={MaeFilha} alt="Dono Pet" />
          </div>
        </section>
      </main>

      {/* Agende sua visita */}
      <div className="schedule-section-sobre">
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
