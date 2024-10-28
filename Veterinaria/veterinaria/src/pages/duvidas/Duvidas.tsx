import DonoPet from "../../assets/img_animal/model-contact.png";
import WhatsAppIcon from "../../assets/whatsapp-svgrepo-com.svg";
import GatoCastrado from "../../assets/img_animal/gato-castrado.jpg";
import Crescimento from "../../assets/img_animal/crescimento.jpg";
import Pulga from "../../assets/img_animal/pulga.jpg";
import Vacinacao from "../../assets/img_animal/cachorro_vacinando.png";
import Alimentacao from "../../assets/img_animal/alimentacao.jpg";
import Emergencia from "../../assets/img_animal/emergencia.jpg";
import { Link } from "react-router-dom";

import "./Duvidas.css";

interface AjudaSuporteProps {
  expanded: string | false;
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>;
}

const Duvidas: React.FC<AjudaSuporteProps> = ({ expanded, setExpanded }) => {
  const handleSendWhatsAppMessage = () => {
    let message = `Olá, gostaria de agendar uma consulta para meu pet. 🐾 \n\nPor favor, entre em contato para verificar a disponibilidade.`;
    window.open(
      `https://wa.me/5521965502519?text=${encodeURIComponent(message)}`
    );
  };
  return (
    <>
      <div className="duvida-container">
        <main className="duvida-main-container">
          <h1 className="titulo-principal">Dúvidas</h1>
          <div>
            <a href="/castrar-gato" className="duvida-card-link">
              <div className="duvida-main-container-topicos">
                <h2>Castrar um Gato: Quando é Melhor?</h2>
                <img src={GatoCastrado} alt="" />
                <span>
                  Descubra o momento ideal para castrar seu gato, os benefícios
                  para a saúde e como o procedimento pode ajudar o seu pet.
                </span>
              </div>
            </a>
            <a href="/fases-filhote" className="duvida-card-link">
              <div className="duvida-main-container-topicos">
                <h2>Fases do Desenvolvimento do Filhote</h2>
                <img src={Crescimento} alt="" />
                <span>
                  Entenda cada etapa do crescimento do seu filhote, desde o
                  desmame até a fase adulta, e como cuidar adequadamente de cada
                  fase.
                </span>
              </div>
            </a>
            <a href="/prevenir-pulgas" className="duvida-card-link">
              <div className="duvida-main-container-topicos">
                <h2>Como Prevenir Pulgas e Carrapatos?</h2>
                <img src={Pulga} alt="" />
                <span>
                  Saiba as melhores práticas e tratamentos para proteger seu pet
                  contra pulgas e carrapatos durante todo o ano.
                </span>
              </div>
            </a>
            <a href="/vacinas-essenciais" className="duvida-card-link">
              <div className="duvida-main-container-topicos">
                <h2>Vacinas Essenciais: Quais São e Quando Aplicar?</h2>
                <img src={Vacinacao} alt="" />
                <span>
                  Aprenda sobre as vacinas indispensáveis para manter seu pet
                  protegido contra doenças graves e contagiosas.
                </span>
              </div>
            </a>
            <a href="/alimentacao-pet" className="duvida-card-link">
              <div className="duvida-main-container-topicos">
                <h2>A Alimentação Ideal para Cães e Gatos</h2>
                <img src={Alimentacao} alt="" />
                <span>
                  Descubra os nutrientes essenciais para a dieta do seu pet,
                  quais alimentos evitar e como garantir uma alimentação
                  equilibrada.
                </span>
              </div>
            </a>
            <a href="/emergencia-pet" className="duvida-card-link">
              <div className="duvida-main-container-topicos">
                <h2>O Que Fazer em Caso de Emergência?</h2>
                <img src={Emergencia} alt="" />
                <span>
                  Saiba como identificar sinais de emergência no seu pet e quais
                  os primeiros passos que você deve tomar antes de levá-lo à
                  clínica.
                </span>
              </div>
            </a>
          </div>
          <h4>
            Gostou desses tópicos? Encontre muito mais informações e dicas sobre
            o bem-estar do seu pet em nossos{" "}
            <Link to="/artigos" className="link-artigo">
              artigos exclusivos
            </Link>
            ! Não deixe de conferir para garantir os melhores cuidados para seu
            amigo de quatro patas!
          </h4>
        </main>
        <main className="duvida-frequente-main-container">
          <h1> Dúvidas frequentes</h1>
          <ol>
            <li>A clínica oferece atendimento domiciliar?</li>
            <p>
              Sim, oferecemos atendimento domiciliar, mas nosso foco principal é
              o atendimento na clínica, onde temos toda a estrutura necessária
              para realizar exames, procedimentos e tratamentos mais completos.
            </p>
            <li>
              Preciso agendar uma consulta ou aceitam atendimento por ordem de
              chegada?
            </li>
            <p>
              {" "}
              É recomendável agendar a consulta para evitar esperas, mas também
              atendemos por ordem de chegada conforme disponibilidade.
            </p>
            <li>Quais serviços são oferecidos na clínica?</li>
            <ul>
              <li>Consultas</li>
              <li>Vacinas</li>
              <li>Cirurgias</li>
              <li>Internações</li>
              <li>Vermifugação</li>
              <li>Controle de Pulgas e Carrapatos</li>
              <li>Aconselhamento Nutricional</li>
              <li>Emergências Veterinárias</li>
            </ul>
            <li>Quais são os horários de funcionamento da clínica?</li>
            <p>
              Atendemos de segunda a sábado, das 8h às 18h. Para atendimentos
              emergenciais, favor entrar em contato previamente.
            </p>
            <li>Como faço para agendar um atendimento domiciliar?</li>
            <p>
              Para agendar um atendimento domiciliar, você pode nos contatar
              pelo WhatsApp ou telefone. O serviço deve ser agendado com
              antecedência para garantirmos disponibilidade.
            </p>
            <li>
              Quais cuidados devo ter antes de levar meu pet para a consulta?
            </li>
            <p>
              Recomenda-se que você traga seu pet com a coleira e guia, além de,
              se possível, trazer a carteira de vacinação. É importante que seu
              animal esteja calmo e confortável para facilitar o atendimento.
            </p>
            <li>
              É necessário levar a carteira de vacinação do pet para a consulta?
            </li>
            <p>
              {" "}
              Sim, sempre que possível, traga a carteira de vacinação do seu pet
              para que possamos manter o controle atualizado.
            </p>
            <li>A clínica atende emergências?</li>
            <p>
              Sim, atendemos emergências durante nosso horário de funcionamento.
              Para emergências fora desse horário, entre em contato pelo
              WhatsApp.
            </p>
            <li>Vocês realizam castração?</li>
            <p>
              Sim, realizamos castração de cães e gatos, com todos os cuidados
              pré e pós-operatórios necessários para o bem-estar do seu pet.
            </p>
            <li>Quais formas de pagamento são aceitas?</li>
            <p>
              Aceitamos pagamentos em dinheiro, cartão de crédito, débito e PIX.
            </p>
          </ol>
        </main>

        {/* Agende sua visita */}
        <div className="schedule-section-duvida">
          <div className="schedule-text">
            <h2>Agende sua visita</h2>
            <p>
              Agende sua visita e garanta o melhor cuidado para o seu pet! Nossa
              equipe especializada está pronta para oferecer um atendimento de
              qualidade, com todo carinho e dedicação que seu amigo de quatro
              patas merece. Seja para consultas de rotina, vacinas ou
              tratamentos mais específicos, estamos à disposição para cuidar da
              saúde e bem-estar do seu animal. Entre em contato agora e marque
              um horário!
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
    </>
  );
};
export default Duvidas;
