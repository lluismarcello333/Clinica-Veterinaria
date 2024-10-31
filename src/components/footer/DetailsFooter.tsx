import Message from "../../assets/mensagem.svg";
import WhatsApp from "../../assets/whatsapp.svg";
import Email from "../../assets/email.svg";
import Location from "../../assets/location.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import { Link as RouterLink } from "react-router-dom";

import "./Footer.css";

export function DetailsFooter() {
  return (
    <div className="footer-container">
      <div className="footer-container-info">
        <div className="menu">
          <h3>MENU</h3>
          <ul className="menu-footer">
            <li>
              <RouterLink to="/home">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/sobre">Sobre</RouterLink>
            </li>
            <li>
              <RouterLink to="/servicos">Serviços</RouterLink>
            </li>
            <li>
              <RouterLink to="/duvidas">Dúvidas</RouterLink>
            </li>
            <li>
              <RouterLink to="/contato">Contato</RouterLink>
            </li>
            <li>
              <RouterLink to="/artigos">Artigos</RouterLink>
            </li>
            <li>
              <RouterLink to="/politica-privacidade">Política de Privacidade</RouterLink>
            </li>
          </ul>
        </div>

        <div className="formas-pagamento">
          <h3>ONDE ATENDEMOS</h3>
          <ul className="formas-pagamento-footer">
            <li>
              <a
                href="https://maps.app.goo.gl/dYia8ipefrLJJchA8"
                target="_blank"
                rel="noopener noreferrer"
              >
                RECIFE - PE
              </a>
            </li>
          </ul>

          <h3>ATENDIMENTO</h3>
          <ul className="atendimento-footer">
            <li className="horario">De Segunda à Sábado</li>
            <li>08h às 18h</li>
          </ul>
        </div>

        <div className="redes-sociais">
          <h3>FALE CONOSCO</h3>
          <ul className="redes-sociais-footer">
            <li>
              <img className="message" src={Message} alt="message" />
              <RouterLink to="/contato">
                Envie uma mensagem
              </RouterLink>
            </li>
            <li>
              <img className="whatsapp" src={WhatsApp} alt="whatsapp" />
              <a
                href="https://api.whatsapp.com/send?phone=5521965502519&text=Olá, acessei o site e tenho uma dúvida"
                target="_blank"
                rel="noopener noreferrer"
              >
                (21) 96550-2519
              </a>
            </li>
            <li>
              <img className="whatsapp" src={WhatsApp} alt="whatsapp" />
              <a
                href="https://api.whatsapp.com/send?phone=5581981056762&text=Olá, acessei o site e tenho uma dúvida"
                target="_blank"
                rel="noopener noreferrer"
              >
                (81) 98105-6762
              </a>
            </li>
            <li>
              <img className="email" src={Email} alt="email" />
              <a
                href="mailto:lluismarcello333@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                lluismarcello333@gmail.com
              </a>
            </li>
            <li>
              <img className="location" src={Location} alt="location" />
              <a
                href="https://maps.app.goo.gl/dYia8ipefrLJJchA8"
                target="_blank"
                rel="noopener noreferrer"
              >
                R. Equador, 480 - Nossa Sra. da Conceição, Paulista - PE,
                53429-630
              </a>
            </li>
          </ul>

          {/* Links das redes sociais destacados */}
          <div className="social-links">
            <h3>REDES SOCIAIS</h3>
            <ul className="redes-sociais-footer-ss">
              <li>
                <a
                  href="https://www.instagram.com/clinicavet.amara/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-img" src={Instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/cvamaraareias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-img" src={Facebook} alt="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ajuda-suporte">
          <h3>NOSSOS SERVIÇOS</h3>
          <ul className="ajuda-suporte-footer">
            <li>
              <RouterLink to="/servicos/consultas">Consultas</RouterLink>
            </li>
            <li>
              <RouterLink to="/servicos/vacinas">Vacinas</RouterLink>
            </li>
            <li>
              <RouterLink to="/servicos/cirurgias">Cirurgias</RouterLink>
            </li>
            <li>
              <RouterLink to="/servicos/internacoes">Internações</RouterLink>
            </li>
            <li>
              <RouterLink to="/servicos/vermifugacao">Vermífugos</RouterLink>
            </li>
            <li>
              <RouterLink to="/servicos/controle-pulga-carrapato">
                Controle de Pulgas e Carrapatos
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/servicos/aconselhamento-nutricional">
                Aconselhamento Nutricional
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/servicos/emergencia-veterinaria">
                Emergências Veterinárias
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <h5>Copyright © AmaraAreias2024</h5>
        <h5>Todos os direitos reservados</h5>
      </div>
    </div>
  );
}
