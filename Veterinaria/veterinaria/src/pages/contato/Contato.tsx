import React from "react";
import TextField from "@material-ui/core/TextField";
import { Tab, Tabs, Box, Button } from "@mui/material";
import useCustomForm from "../../hook/useForm/useCustomForm";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/Button"; 
import DonoPet from "../../assets/img_animal/model-contact.png";

import "./Contato.css";
import ErrorMessage from "../../hook/useForm/useCustomForm";

export default function Contato() {
  const { register, handleSubmit, errors } = useCustomForm();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(); // Use useNavigate em vez de useHistory

  const onSubmitForm = (data: any) => {
    console.log(data);

    // Inspect each property of the data object
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}:`, value);
    });

    // Redireciona para a página principal
    navigate("/"); // Use navigate para redirecionar para a página desejada
  };

  return (
    <div className="container-form">
      <h1>Contato</h1>
      <div className="container-main-form">
      <div className="title-subtitle">
          <h1>Envie-nos uma mensagem</h1>
          <p className="subtitle">Se precisar de alguma ajuda, estamos à sua disposição.</p>

          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Box className="container-box-primary">
              {value === 0 && (
                <Box p={3} className="container-dados">
                  <div className="text">
                    <TextField
                      fullWidth
                      label="Nome"
                      {...register("name", { required: "Campo obrigatório" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <TextField
                      fullWidth
                      label="Email"
                      {...register("email", { required: "Campo obrigatório" })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <TextField
                      fullWidth
                      label="DDD + Telefone ou Celular"
                      {...register("phone", { required: "Campo obrigatório" })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}

                    <TextField
                      fullWidth
                      label="Mensagem"
                      multiline
                      rows={4}
                      {...register("message", {
                        required: "Campo obrigatório para a mensagem",
                      })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                  </div>
                </Box>
              )}
            </Box>

            <div className="button">
              <Button
                className="button-form-dados"
                type="submit"
                variant="contained"
                color="primary"
              >
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
        <div className="infos-left">
          <h3>Endereço</h3>
          <p>
            R. Equador, 480 - Nossa Sra. da Conceição, Paulista - PE, 53429-630
          </p>
          <h3>Telefone</h3>
          <p>(81) 98105-6762</p>
          <h3>Email</h3>
          <p>clinica@gmail.com</p>
        </div>
        
      </div>
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
          <a href="https://wa.me/5521965502519">
            <CustomButton
              buttonName="Agende pelo WhatsApp"
              className="button-options"
            />
          </a>
        </div>
        <div className="schedule-image">
          <img src={DonoPet} alt="Dono com seu pet" />
        </div>
      </div>
    </div>
  );
}
