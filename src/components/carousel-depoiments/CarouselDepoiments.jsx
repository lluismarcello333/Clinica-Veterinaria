import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Typography } from '@mui/material';

import './CarouselDepoiments.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testimonials = [
  {
    name: 'Rosangela Melo',
    pet: 'Pandora e Simba (Cachorro)',
    testimony: 'Levei para ela dois filhotes que meu  filho encontrou na rua, estavam num estado deplorável.  Ela tratou eles e hoje estão ĺindos. Pandora já está castrada, falta o Simba equipe é nota Dez.',
  },
  {
    name: 'Juliana Ramos',
    pet: 'Meg (Gata)',
    testimony: 'A minha gatinha Meg foi muito bem tratada por todas! Além do atendimento excelente, ainda teve acompanhamento posterior  para que fosse observada a recuperação! Estou muito satisfeita! Obrigada Dra. Amara e toda equipe! Vocês são show!  😍😍😍 …',
  },
  {
    name: 'Michele Izafer',
    pet: 'Naomy (Gata)',
    testimony: 'A minha gata Naomy foi até a Dra. Amara para fazer uma castração. Foi muito bem tratada, ótima profissional e a clínica tem excelente atendimento.',
  },
  {
    name: 'Fernanda',
    pet: 'Simba (Cachorro)',
    testimony: 'Simba sempre teve medo de veterinário, mas o atendimento em casa mudou isso. O carinho e paciência da equipe fizeram toda a diferença.',
  },
  {
    name: 'Thamires Evelin',
    testimony: 'Médica veterinária TOP e Especialista em Leishmaniose. NUNCA SACRIFIQUEM SEU CÃO, POIS LEISHMANIOSE TEM TRATAMENTO SIM E QUALIDADE DE VIDA PARA O ANIMAL.',
  },
];

export default function CarouselDepoiments() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box 
      sx={{
        position: 'relative',
        overflow: 'hidden', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50rem', 
        width: '100%',  // Garante que o carousel ocupe toda a largura da tela
      }}
    >
      {/* Div com a imagem de fundo */}
      <Box
        sx={{
          backgroundPosition: 'center', 
          backgroundSize: 'cover', // Ajuste para cobrir toda a área
          height: '100%', 
          width: '100%', 
          display: 'flex',
          alignItems: 'center', // Centraliza verticalmente o conteúdo
          justifyContent: 'center', // Centraliza horizontalmente o conteúdo
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={6000} // Intervalo de 5 segundos (5000ms)
          springConfig={{
            duration: '2s', // Duração da transição
            easeFunction: 'cubic-bezier(0.25, 0.8, 0.5, 1)', // Suavidade da transição
            delay: '0s', 
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                color: '#f1f1f1',
                textAlign: 'center',
                width: '600px', // Define uma largura fixa para manter o conteúdo centralizado
                margin: '0 auto', // Garante que o conteúdo fique centralizado horizontalmente
              }}
            >
              <Typography variant="h1" sx={{ fontStyle: 'normal', fontWeight: 'bold', color: '#FF6F61', fontSize: '3rem' }}>
                &rdquo;
              </Typography>
              <Typography variant="h2" sx={{ fontSize: '2rem', fontFamily: 'Barlow Semi Condensed', fontWeight: 'bold', color: '#B2F9B2', marginBottom: '0.5rem' }}>
                {testimonial.name}
              </Typography>
              <Typography variant="h3" sx={{ fontSize: '1.5rem', fontFamily: 'Barlow Semi Condensed', color: '#B2F9B2', marginBottom: '1.5rem' }}>
                {testimonial.pet}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', fontFamily: 'Barlow Semi Condensed', fontStyle: 'italic', color: '#D3D3D3',  lineHeight: 1.4 }}>
                {testimonial.testimony}
              </Typography>              
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </Box>
  );
}
