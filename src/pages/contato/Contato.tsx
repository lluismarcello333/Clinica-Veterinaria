import React, { useRef } from "react";
import { init, send } from "@emailjs/browser"; // Atualizando a importação
import TextField from "@material-ui/core/TextField";
import { Box } from "@mui/material";
import WhatsAppIcon from "../../assets/whatsapp-svgrepo-com.svg";
import Gmail from "../../assets/e-mail.png";
import DonoPet from "../../assets/img_animal/model-contact.png";

import "./Contato.css";

export default function Contato() {
  const formRef = useRef<HTMLFormElement>(null);

  // Inicializando o EmailJS com sua chave pública
  init("eEU9e5NvGB1WAKPva"); // Insira sua chave pública aqui

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    send("service_px5yag2", "template_uuquj9e", e.target as HTMLFormElement, "eEU9e5NvGB1WAKPva")
      .then((result) => {
        console.log(result.text);
        alert("Mensagem enviada com sucesso!");
        formRef.current?.reset(); 
      })
      .catch((error) => {
        console.log(error.text);
        alert("Ocorreu um erro ao enviar a mensagem.");
      });
  };


  const handleSendWhatsAppMessage = () => {
    let message = `Olá, gostaria de agendar uma consulta para meu pet. 🐾 \n\nPor favor, entre em contato para verificar a disponibilidade.`;
    window.open(`https://wa.me/5521965502519?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="container-form">
      <h1>Contato</h1>
      <div className="container-main-form">
        <div className="infos-left">
          <h3>Endereço</h3>
          <p>R. Equador, 480 - Nossa Sra. da Conceição, Paulista - PE, 53429-630</p>
          <h3>Telefone</h3>
          <p>(81) 98105-6762</p>
          <h3>Email</h3>
          <p>clinica@gmail.com</p>
        </div>
        <div className="title-subtitle">
          <h1>Envie-nos uma mensagem</h1>
          <p className="subtitle">Se precisar de alguma ajuda, estamos à sua disposição.</p>

          <form ref={formRef} onSubmit={sendEmail}>
            <Box className="container-box-primary">
              <Box p={3} className="container-dados">
                <div className="text">
                  <TextField fullWidth label="Nome" name="name" required />
                  <TextField fullWidth label="Email" name="email" required />
                  <TextField fullWidth label="DDD + Telefone ou Celular" name="phone" required />
                  <TextField fullWidth label="Mensagem" name="message" multiline rows={4} required />
                </div>
              </Box>
            </Box>
            <button className="button-form-dados" type="submit">
              <img src={Gmail} alt="Enviar mensagem" style={{ marginRight: "8px", width: "20px", height: "20px" }} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
      <div className="schedule-section-contato">
        <div className="schedule-text">
          <h2>Agende sua visita</h2>
          <p>
            Agende sua visita e garanta o melhor cuidado para o seu pet! Nossa equipe especializada está pronta para oferecer um atendimento de qualidade, com todo carinho e dedicação que seu amigo de quatro patas merece. Seja para consultas de rotina, vacinas ou tratamentos mais específicos, estamos à disposição para cuidar da saúde e bem-estar do seu animal. Entre em contato agora e marque um horário!
          </p>
          <button className="button-home-section" onClick={handleSendWhatsAppMessage}>
            <img src={WhatsAppIcon} alt="WhatsApp" style={{ marginRight: "8px", width: "20px", height: "20px" }} />
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
