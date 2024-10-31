import React from "react";
import { Button, Box, Typography } from "@mui/material";
import ServiceConsulta from "../../assets/img_animal/ServiceConsulta.jpg";
import ServiceVacina from "../../assets/img_animal/ServiceVacina.jpeg";
import ServiceCirurgia from "../../assets/img_animal/ServiceCirurgia.jpg";
import ServiceInternacao from "../../assets/img_animal/ServiceInternacao.jpg";
import ServiceVermifugacao from "../../assets/img_animal/ServiceVermifugacao.png";
import ServicePulga from "../../assets/img_animal/ServicePulga.jpg";
import ServiceNutricao from "../../assets/img_animal/ServiceNutricao.jpg";
import ServiceEmergencia from "../../assets/img_animal/ServiceEmergencia.jpg";

import "./ServiceDetails.css";

// Definição da interface para os serviços
interface Service {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

interface ServiceDetailsProps {
  selectedServiceId: string;
}

// Exemplo de dados dos serviços
const services: Service[] = [
  {
    id: "consultas",
    title: "Consultas",
    subtitle: "Atendimento especializado para o seu pet",
    text: "Nossa equipe de veterinários está pronta para oferecer o melhor cuidado ao seu pet em um ambiente seguro e acolhedor. Durante nossas consultas, realizamos avaliações completas de saúde, abordando desde exames físicos a questões comportamentais. Com uma abordagem personalizada, garantimos que seu amigo de quatro patas receba o tratamento adequado, sempre visando o bem-estar e conforto dele.",
    image: ServiceConsulta,
  },
  {
    id: "vacinas",
    title: "Vacinas",
    subtitle: "Proteção completa para seu pet",
    text: "Manter as vacinas do seu pet em dia é essencial para garantir sua saúde e proteção contra diversas doenças. No nosso serviço de vacinação, seguimos um calendário rigoroso e oferecemos todas as vacinas necessárias, conforme as recomendações veterinárias. Nossa equipe está disponível para orientá-lo sobre as melhores práticas de imunização, garantindo que seu pet fique sempre protegido.",
    image: ServiceVacina,
  },
  {
    id: "cirurgias",
    title: "Cirurgias",
    subtitle: "Procedimentos cirúrgicos seguros e avançados",
    text: "Realizamos uma variedade de cirurgias veterinárias, desde procedimentos simples até cirurgias mais complexas, sempre com o máximo de segurança e cuidado. Nossos veterinários cirurgiões utilizam técnicas modernas e equipamentos de última geração para garantir que seu pet tenha uma recuperação tranquila. Cada cirurgia é acompanhada de um plano de recuperação personalizado para que seu pet se recupere da melhor forma possível.",
    image: ServiceCirurgia,
  },{
    id: "internacoes",
    title: "Internações",
    subtitle: "Cuidados intensivos e monitoramento 24h para o seu pet",
    text: "Em casos em que o seu pet necessita de cuidados especiais, oferecemos um serviço de internação com monitoramento 24 horas por dia. Nossa estrutura é equipada para proporcionar todo o conforto e suporte que seu pet precisa durante sua recuperação. Acompanhamos de perto cada paciente, oferecendo cuidados intensivos e atenção veterinária constante para garantir o restabelecimento completo. Além disso, mantemos você informado sobre o progresso do seu pet a cada etapa do tratamento.",
    image: ServiceInternacao,
  },{
    id: "vermifugacao",
    title: "Vermifugação",
    subtitle: "Proteção eficaz contra parasitas internos",
    text: "A vermifugação é essencial para manter a saúde do seu pet livre de parasitas internos, como vermes intestinais. Oferecemos um serviço completo de vermifugação, adaptado às necessidades individuais do seu pet, garantindo proteção contínua. Nossos veterinários estão prontos para orientá-lo sobre a frequência ideal desse tratamento, assegurando que seu pet permaneça saudável e protegido contra esses parasitas que podem comprometer seu bem-estar.",
    image: ServiceVermifugacao,
  },{
    id: "controle-pulga-carrapato",
    title: "Controle de Pulgas e Carrapatos",
    subtitle: "Tratamentos eficazes para a prevenção de infestações",
    text: "Pulgas e carrapatos podem causar diversos problemas de saúde para o seu pet, além de serem um grande incômodo. Nosso serviço de controle de pulgas e carrapatos oferece tratamentos seguros e eficazes, garantindo que seu pet esteja protegido dessas infestações. Utilizamos produtos de alta qualidade e técnicas apropriadas para eliminar parasitas existentes e prevenir novas infestações, assegurando que seu pet fique livre desses invasores indesejados e mantendo o ambiente doméstico mais saudável.",
    image: ServicePulga,
  },{
    id: "aconselhamento-nutricional",
    title: "Aconselhamento Nutricional",
    subtitle: "Dietas personalizadas para uma vida mais saudável",
    text: "A alimentação correta desempenha um papel vital na saúde do seu pet. Nosso serviço de aconselhamento nutricional visa criar planos alimentares personalizados, levando em conta a idade, raça, estilo de vida e condições de saúde do seu animal. Trabalhamos com dietas equilibradas que promovem a saúde, prevenindo doenças e garantindo mais longevidade e vitalidade para o seu pet. Nossa equipe está preparada para oferecer orientações claras e precisas sobre a nutrição adequada para cada fase da vida.",
    image: ServiceNutricao,
  },{
    id: "emergencia-veterinaria",
    title: "Emergências Veterinárias",
    subtitle: "Atendimento rápido e eficiente em situações críticas",
    text: "Sabemos que emergências veterinárias podem ocorrer a qualquer momento e, por isso, estamos preparados para oferecer atendimento imediato em casos críticos. Nossa clínica conta com uma equipe especializada e equipada com tecnologia de ponta para lidar com situações de emergência. Seja um acidente ou uma doença súbita, seu pet receberá cuidados rápidos, diagnósticos precisos e tratamentos eficazes para estabilizá-lo e assegurar que ele receba o tratamento adequado o mais rápido possível.",
    image: ServiceEmergencia,
  },
];

// Componente principal para renderizar os detalhes do serviço
const ServiceDetails: React.FC<ServiceDetailsProps> = ({ selectedServiceId }) => {
  // Busca o serviço escolhido com base no ID recebido
  const selectedService = services.find(service => service.id === selectedServiceId);

  // Verifique se o serviço foi encontrado
  if (!selectedService) {
    return <Typography variant="h6">Serviço não encontrado</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Alterna de coluna para linha dependendo do tamanho da tela
        justifyContent: "space-around",
        alignItems: "center", // Centraliza verticalmente em telas menores
        width: "100%",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Conteúdo do Serviço à Esquerda */}
      <Box sx={{ width: { xs: "100%", md: "55%" }, paddingRight: { md: "2rem" } }}>
        {/* Título e Subtítulo */}
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: "600",
            fontSize: { xs: "2rem", md: "2.5rem" }, // Tamanho flexível
            color: "#2F4F4F",
            textTransform: "uppercase",
          }}
        >
          {selectedService.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "#9E9E9E",
            fontStyle: "italic",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {selectedService.subtitle}
        </Typography>

        {/* Texto */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.15rem" },
            fontFamily: "Barlow",
            fontWeight: "500",
            color: "#4A4A4A",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          {selectedService.text}
        </Typography>

        {/* Imagem */}
        <Box
          component="img"
          src={selectedService.image}
          alt={selectedService.title}
          sx={{
            width: { xs: "100%", md: "60%" },
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        />
      </Box>

      {/* Outros Serviços à Direita */}
      <Box
        sx={{
          width: { xs: "100%", md: "30%" },
          marginBottom: "4rem",
          paddingLeft: { md: "2rem" },
          borderLeft: { md: "1px solid #ddd" },
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1rem", marginTop: "2rem" }}>
          Outros Serviços
        </Typography>
        <Box sx={{ borderBottom: "2px solid #ddd", marginBottom: "4rem" }} />

        {/* Botões de outros serviços */}
        {services.map(service => (
          <Button
            key={service.id}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#31BE52",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "0.95rem" },
              width: "100%", // Botão ocupa toda a largura disponível
              height: "3rem",
              marginBottom: "0.5rem",
              transition: "1s",
              "&:hover": {
                backgroundColor: "#28A745",
                fontSize: "1.05rem",
              },
            }}
            onClick={() => (window.location.href = `/servicos/${service.id}`)}
          >
            {service.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceDetails;