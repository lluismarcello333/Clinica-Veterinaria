import React from 'react';
import './PoliticaPrivacidade.css';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="politica-container">
      <main className="politica-main-container">
        <h1 className="titulo-principal">Política de Privacidade</h1>
        
        <section className="politica-section">
          <h2>1. Coleta de Informações Pessoais</h2>
          <p>
            Coletamos os seguintes tipos de informações pessoais:
            <ul>
              <li><strong>Dados de Identificação:</strong> Nome, endereço, e-mail, número de telefone e documentos como RG e CPF.</li>
              <li><strong>Informações do Pet:</strong> Nome, idade, espécie, raça, histórico médico e informações de comportamento do seu animal.</li>
              <li><strong>Dados de Pagamento:</strong> Informações necessárias para processar pagamentos, como detalhes de cartão de crédito/débito.</li>
              <li><strong>Informações de Navegação:</strong> Dados coletados automaticamente, como endereço IP, tipo de navegador e comportamento de navegação.</li>
            </ul>
          </p>
        </section>

        <section className="politica-section">
          <h2>2. Uso das Informações</h2>
          <p>
            Utilizamos suas informações pessoais para as seguintes finalidades:
            <ul>
              <li><strong>Prestação de Serviços Veterinários:</strong> Agendamento de consultas, realização de procedimentos e atendimento médico ao seu pet.</li>
              <li><strong>Comunicação:</strong> Enviar confirmações de consultas, lembretes, resultados de exames e responder a dúvidas ou solicitações.</li>
              <li><strong>Processamento de Pagamentos:</strong> Gerenciar transações financeiras pelos serviços prestados.</li>
              <li><strong>Melhoria de Serviços:</strong> Personalizar e otimizar a experiência do usuário em nosso site e serviços digitais.</li>
              <li><strong>Cumprimento Legal:</strong> Atender exigências legais e regulamentares, inclusive manutenção de registros médicos de animais.</li>
            </ul>
          </p>
        </section>

        <section className="politica-section">
          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto:
            <ul>
              <li><strong>Prestadores de Serviços:</strong> Como processadores de pagamento e laboratórios de diagnóstico que ajudam na operação de nossos serviços.</li>
              <li><strong>Autoridades Governamentais:</strong> Quando exigido por lei ou para responder a solicitações válidas de autoridades públicas.</li>
              <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos, segurança e propriedade, bem como a de nossos clientes ou terceiros.</li>
            </ul>
          </p>
        </section>

        <section className="politica-section">
          <h2>4. Proteção das Informações</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda, destruição ou divulgação indevida. Utilizamos criptografia para proteger informações sensíveis e controles de acesso restrito.
          </p>
        </section>

        <section className="politica-section">
          <h2>5. Armazenamento e Retenção de Dados</h2>
          <p>
            Armazenamos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Quando os dados não forem mais necessários, serão eliminados ou anonimizados de forma segura.
          </p>
        </section>

        <section className="politica-section">
          <h2>6. Seus Direitos</h2>
          <p>
            Você tem os seguintes direitos em relação às suas informações pessoais:
            <ul>
              <li><strong>Acessar seus dados pessoais:</strong> Solicitar uma cópia dos dados coletados sobre você.</li>
              <li><strong>Corrigir dados:</strong> Solicitar correção de dados incorretos ou incompletos.</li>
              <li><strong>Excluir dados:</strong> Solicitar a exclusão de seus dados, exceto quando for necessário mantê-los por exigência legal.</li>
              <li><strong>Restringir ou se opor ao processamento:</strong> Solicitar limitação do uso dos seus dados ou se opor ao tratamento, quando aplicável.</li>
              <li><strong>Portabilidade de dados:</strong> Solicitar que forneçamos seus dados em formato estruturado para transferência a outra organização.</li>
            </ul>
          </p>
        </section>

        <section className="politica-section">
          <h2>7. Uso de Cookies</h2>
          <p>
            Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação, personalizar conteúdo, anúncios e analisar o tráfego em nosso site. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade de algumas áreas do site.
          </p>
        </section>

        <section className="politica-section">
          <h2>8. Alterações na Política de Privacidade</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou para cumprir novas exigências legais. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
          </p>
        </section>

        <section className="politica-section">
          <h2>9. Contato</h2>
          <p>
            Se você tiver qualquer dúvida ou solicitação relacionada a esta Política de Privacidade, entre em contato conosco:
            <ul>
              <li><strong>E-mail:</strong> contato@seusite.com</li>
              <li><strong>Telefone:</strong> (81) 98105-6762</li>
              <li><strong>Endereço:</strong> R. Equador, 480 - Nossa Sra. da Conceição, Paulista - PE, 53429-630</li>
            </ul>
          </p>
        </section>

      </main>
    </div>
  );
};

export default PoliticaPrivacidade;
