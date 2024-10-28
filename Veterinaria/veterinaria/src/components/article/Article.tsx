import React from "react";
import gatoCastrado from "assets/img_animal/gato-castrado.jpg";
import Crescimento from "../../assets/img_animal/crescimento.jpg";
import Pulga from "../../assets/img_animal/pulga.jpg";
import Vacinacao from "../../assets/img_animal/cachorro_vacinando.png";
import Alimentacao from "../../assets/img_animal/alimentacao.jpg";
import Emergencia from "../../assets/img_animal/emergencia.jpg";
import Renal from "../../assets/img_animal/renal-gatos.jpeg";
import Carrapato from "../../assets/img_animal/carrapato.jpg";
import Parvovirose from "../../assets/img_animal/parvovirose.jpeg";
import Dermatite from "../../assets/img_animal/dermatite.png";
import Diabetes from "../../assets/img_animal/diabetes.jpeg";
import Leishmaniose from "../../assets/img_animal/leishmaniose.jpg";
import Obesidade from "../../assets/img_animal/obesidade.jpeg";
import Otite from "../../assets/img_animal/otite-canina.jpg";
import Socializacao from "../../assets/img_animal/socialização-filhotes.jpeg";
import VacinasFilhotes from "../../assets/img_animal/vacina-cachorro-filhote.jpg";
import Periodontal from "../../assets/img_animal/doenca-periodontal.jpg";
import Hiperatividade from "../../assets/img_animal/caes-hiperativos.jpg";
import Toxoplasmose from "../../assets/img_animal/toxoplasmose.jpeg";
import Alergia from "../../assets/img_animal/alergia.jpg";
import Convivencia from "../../assets/img_animal/convivencia-gatos-caes.jpg";
import Ansiedade from "../../assets/img_animal/ansiedade.jpg";
import Passeio from "../../assets/img_animal/passeio.jpg";
import Cancer from "../../assets/img_animal/cancer.jpg";
import AtividadeFisica from "../../assets/img_animal/atividade-fisica.jpeg";
import DoencaRespiratoria from "../../assets/img_animal/respiratoria.jpg";
import AlimentacaoNatural from "../../assets/img_animal/alimentacao-natural.jpg";
import Brinquedos from "../../assets/img_animal/brinquedos-pet.jpg";
import InfeccaoUrinaria from "../../assets/img_animal/urinaria.jpg";
import AdestramentoPositivo from "../../assets/img_animal/adestramento-positivo.jpg";
import { Link } from "react-router-dom";

import "./Article.css";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  relatedArticles: string[];
}

const articles: Article[] = [
  {
    id: 1,
    title: "Castrar um Gato: Quando é Melhor?",
    description:
      "Descubra o momento ideal para castrar seu gato, os benefícios para a saúde e como o procedimento pode ajudar o seu pet.",
    image: gatoCastrado,
    link: "/castrar-gato",
    relatedArticles: [
      "Vacinas Essenciais: Quais são e Quando aplicar?",
      "A alimentação ideal para Cães e Gatos",
    ],
  },
  {
    id: 2,
    title: "Fases do Desenvolvimento do Filhote",
    description:
      "Entenda cada etapa do crescimento do seu filhote, desde o desmame até a fase adulta, e como cuidar adequadamente de cada fase.",
    image: Crescimento,
    link: "/fases-filhote",
    relatedArticles: [
      "A alimentação ideal para Cães e Gatos",
      "Vacinas Essenciais: Quais são e Quando aplicar?",
    ],
  },
  {
    id: 3,
    title: "Como Prevenir Pulgas e Carrapatos?",
    description:
      "Saiba as melhores práticas e tratamentos para proteger seu pet contra pulgas e carrapatos durante todo o ano.",
    image: Pulga,
    link: "/prevenir-pulgas",
    relatedArticles: [
      "Vacinas Essenciais: Quais são e Quando aplicar?",
      "O que fazer em caso de Emergência",
    ],
  },
  {
    id: 4,
    title: "Vacinas Essenciais: Quais São e Quando Aplicar?",
    description:
      "Aprenda sobre as vacinas indispensáveis para manter seu pet protegido contra doenças graves e contagiosas.",
    image: Vacinacao,
    link: "/vacinas-essenciais",
    relatedArticles: [
      "Fases do Desenvolvimento do filhote",
      "A alimentação ideal para Cães e Gatos",
    ],
  },
  {
    id: 5,
    title: "A Alimentação Ideal para Cães e Gatos",
    description:
      "Descubra os nutrientes essenciais para a dieta do seu pet, quais alimentos evitar e como garantir uma alimentação equilibrada.",
    image: Alimentacao,
    link: "/alimentacao-pet",
    relatedArticles: [
      "Fases do Desenvolvimento do filhote",
      "Vacinas Essenciais: Quais são e Quando aplicar?",
    ],
  },
  {
    id: 6,
    title: "O Que Fazer em Caso de Emergência?",
    description:
      "Saiba como identificar sinais de emergência no seu pet e quais os primeiros passos que você deve tomar antes de levá-lo à clínica.",
    image: Emergencia,
    link: "/emergencia-pet",
    relatedArticles: [
      "Como prevenir pulgas e carrapatos",
      "Castrar um gato: Quando é melhor?",
    ],
  },
  {
    id: 7,
    title: "Doença Renal Crônica em Gatos",
    description:
      "A Doença Renal Crônica é uma das mais comuns em gatos. Entenda os sinais e como tratar.",
    image: Renal,
    link: "/doenca-renal",
    relatedArticles: [
      "Castrar um gato: Quando é melhor?",
      "A alimentação ideal para Cães e Gatos",
    ],
  },
  {
    id: 8,
    title: "Doença do Carrapato: Sintomas e Prevenção",
    description:
      "A doença do carrapato é perigosa para cães. Saiba como identificá-la e preveni-la.",
    image: Carrapato,
    link: "/doenca-carrapato",
    relatedArticles: [
      "Como prevenir pulgas e carrapatos",
      "O que fazer em caso de Emergência",
    ],
  },
  {
    id: 9,
    title: "Parvovirose Canina: O que é e como tratar?",
    description:
      "A Parvovirose é uma doença viral séria. Conheça os sintomas e tratamentos disponíveis.",
    image: Parvovirose,
    link: "/parvovirose-canina",
    relatedArticles: [
      "Vacinas Essenciais: Quais são e Quando aplicar?",
      "O que fazer em caso de Emergência",
    ],
  },
  {
    id: 10,
    title: "Dermatite em Cães e Gatos",
    description:
      "A dermatite é uma condição comum de pele. Descubra como identificar e tratar.",
    image: Dermatite,
    link: "/dermatite-pet",
    relatedArticles: [
      "A alimentação ideal para Cães e Gatos",
      "Como prevenir pulgas e carrapatos",
    ],
  },
  {
    id: 11,
    title: "Diabetes em Pets: Diagnóstico e Cuidados",
    description:
      "O diabetes pode afetar tanto cães quanto gatos. Veja como diagnosticá-lo e tratá-lo.",
    image: Diabetes,
    link: "/diabetes-pet",
    relatedArticles: [
      "A alimentação ideal para Cães e Gatos",
      "Doença Renal Crônica em Gatos",
    ],
  },
  {
    id: 12,
    title: "Leishmaniose: Prevenção e Tratamento",
    description:
      "Saiba como proteger seu cão da Leishmaniose, uma doença grave transmitida por mosquitos.",
    image: Leishmaniose,
    link: "/leishmaniose",
    relatedArticles: [
      "Vacinas Essenciais: Quais são e Quando aplicar?",
      "Doença do Carrapato: Sintomas e Prevenção",
    ],
  },
  {
    id: 13,
    title: "Obesidade em Cães e Gatos: Causas e Consequências",
    description:
      "A obesidade pode trazer sérios problemas de saúde para pets. Saiba como prevenir.",
    image: Obesidade,
    link: "/obesidade-pet",
    relatedArticles: [
      "A alimentação ideal para Cães e Gatos",
      "Fases do Desenvolvimento do filhote",
    ],
  },
  {
    id: 14,
    title: "Otite em Cães: Causas e Tratamentos",
    description:
      "A otite é uma inflamação no ouvido comum em cães. Aprenda a identificá-la e tratá-la.",
    image: Otite,
    link: "/otite-caes",
    relatedArticles: [
      "Dermatite em Cães e Gatos",
      "O que fazer em caso de Emergência",
    ],
  },
  {
    id: 15,
    title: "A Importância da Socialização para Filhotes",
    description:
      "A socialização desde cedo é fundamental para o desenvolvimento saudável do seu pet.",
    image: Socializacao,
    link: "/socializacao-filhotes",
    relatedArticles: [
      "Fases do Desenvolvimento do filhote",
      "Vacinas Essenciais: Quais são e Quando aplicar?",
    ],
  },
  {
    id: 16,
    title: "Vacinas para Filhotes: Um Guia Completo",
    description:
      "Entenda o cronograma de vacinas e a importância delas para a saúde do filhote.",
    image: VacinasFilhotes,
    link: "/vacinas-filhotes",
    relatedArticles: [
      "Vacinas Essenciais: Quais são e Quando aplicar?",
      "Fases do Desenvolvimento do filhote",
    ],
  },
  {
    id: 17,
    title: "Doença Periodontal em Cães e Gatos",
    description:
      "A doença periodontal afeta os dentes e gengivas dos pets. Veja como prevenir e tratar.",
    image: Periodontal,
    link: "/doenca-periodontal",
    relatedArticles: [
      "A alimentação ideal para Cães e Gatos",
      "Dermatite em Cães e Gatos",
    ],
  },
  {
    id: 18,
    title: "Hiperatividade em Cães: Como lidar?",
    description:
      "Cães hiperativos podem ser desafiadores. Saiba como ajudá-los a controlar a energia.",
    image: Hiperatividade,
    link: "/hiperatividade-caes",
    relatedArticles: [
      "Fases do Desenvolvimento do filhote",
      "A alimentação ideal para Cães e Gatos",
    ],
  },
  {
    id: 19,
    title: "Toxoplasmose em Gatos: Verdades e Mitos",
    description:
      "A toxoplasmose é uma preocupação comum para donos de gatos. Entenda mais sobre essa doença.",
    image: Toxoplasmose,
    link: "/toxoplasmose-gatos",
    relatedArticles: [
      "Doença Renal Crônica em Gatos",
      "Vacinas Essenciais: Quais são e Quando aplicar?",
    ],
  },
  {
    id: 20,
    title: "Alergias Alimentares em Pets",
    description:
      "Alergias alimentares podem causar desconforto e doenças em pets. Saiba como identificar.",
    image: Alergia,
    link: "/alergias-alimentares",
    relatedArticles: [
      "A alimentação ideal para Cães e Gatos",
      "Dermatite em Cães e Gatos",
    ],
  },
  {
    id: 21,
    title: "Convivência entre Gatos e Cães: Dicas Importantes",
    description:
      "Gatos e cães podem conviver em harmonia. Veja algumas dicas para facilitar a adaptação.",
    image: Convivencia,
    link: "/convivencia-gatos-caes",
    relatedArticles: [
      "A alimentação ideal para Cães e Gatos",
      "Fases do Desenvolvimento do filhote",
    ],
  },
  {
    id: 22,
    title: "Ansiedade de Separação em Cães",
    description:
      "Cães que ficam sozinhos por longos períodos podem desenvolver ansiedade. Saiba como lidar.",
    image: Ansiedade,
    link: "/ansiedade-separacao",
    relatedArticles: [
      "Fases do Desenvolvimento do filhote",
      "Hiperatividade em Cães: Como lidar?",
    ],
  },
  {
    id: 23,
    title: "Guia de Passeios Seguros com o Seu Pet",
    description:
      "Descubra como garantir a segurança do seu pet durante os passeios.",
    image: Passeio,
    link: "/passeios-seguros",
    relatedArticles: [
      "Vacinas Essenciais: Quais são e Quando aplicar?",
      "Como prevenir pulgas e carrapatos",
    ],
  },
  {
    id: 24,
    title: "Câncer em Cães e Gatos: Sintomas e Tratamentos",
    description:
      "O câncer pode atingir cães e gatos. Saiba quais os sintomas e os tratamentos disponíveis.",
    image: Cancer,
    link: "/cancer-pet",
    relatedArticles: [
      "Doença Renal Crônica em Gatos",
      "O que fazer em caso de Emergência",
    ],
  },
  {
    id: 25,
    title: "A importância da Atividade Física para Pets",
    description:
      "A prática regular de exercícios é fundamental para a saúde física e mental dos pets.",
    image: AtividadeFisica,
    link: "/atividade-fisica-pets",
    relatedArticles: [
      "Fases do Desenvolvimento do filhote",
      "A alimentação ideal para Cães e Gatos",
    ],
  },
  {
    id: 26,
    title: "Doença Respiratória em Gatos: Como Prevenir",
    description:
      "Doenças respiratórias são comuns em gatos. Veja como protegê-los.",
    image: DoencaRespiratoria,
    link: "/doenca-respiratoria",
    relatedArticles: [
      "Toxoplasmose em Gatos: Verdades e Mitos",
      "Doença Renal Crônica em Gatos",
    ],
  },
  {
    id: 27,
    title: "Alimentação Natural: Benefícios e Cuidados",
    description:
      "A alimentação natural pode ser uma opção saudável para pets, mas exige cuidados.",
    image: AlimentacaoNatural,
    link: "/alimentacao-natural",
    relatedArticles: [
      "A alimentação ideal para Cães e Gatos",
      "Alergias Alimentares em Pets",
    ],
  },
  {
    id: 28,
    title: "Como Escolher Brinquedos para o Seu Pet",
    description:
      "Brinquedos são essenciais para o bem-estar dos pets. Veja como escolher os melhores.",
    image: Brinquedos,
    link: "/brinquedos-pet",
    relatedArticles: [
      "Fases do Desenvolvimento do filhote",
      "A importância da Atividade Física para Pets",
    ],
  },
  {
    id: 29,
    title: "Infecções Urinárias em Cães: Causas e Tratamentos",
    description:
      "Infecções urinárias são dolorosas e podem ser recorrentes. Veja como tratar e prevenir.",
    image: InfeccaoUrinaria,
    link: "/infeccao-urinaria",
    relatedArticles: [
      "Doença Renal Crônica em Gatos",
      "O que fazer em caso de Emergência",
    ],
  },
  {
    id: 30,
    title: "Adestramento Positivo: O que é e como fazer?",
    description:
      "O adestramento positivo é uma técnica eficaz e carinhosa para educar seu pet.",
    image: AdestramentoPositivo,
    link: "/adestramento-positivo",
    relatedArticles: [
      "A importância da Socialização para Filhotes",
      "A alimentação ideal para Cães e Gatos",
    ],
  },
];

const ArticleCardList: React.FC = () => {
  return (
    <div className="duvida-container">
      <div className="duvida-header">
        <h1>Artigos</h1>
        <p>
          Explore uma variedade de artigos informativos sobre saúde e cuidados
          com o seu pet. Encontre dicas, orientações e melhores práticas para
          garantir o bem-estar do seu animal de estimação.
        </p>
      </div>
      <div className="duvida-main-container">
        <div>
          {articles.map((article) => (
            <Link to={`/artigos/${article.id}`} className="first-link">
              <a
                href={article.link}
                className="duvida-card-link"
                key={article.id}
              >
                <div className="duvida-main-container-topicos">
                  <h2>{article.title}</h2>
                  <img src={article.image} alt={article.title} />
                  <span>{article.description}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCardList;
