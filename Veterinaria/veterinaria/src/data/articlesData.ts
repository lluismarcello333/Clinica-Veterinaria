interface RelatedArticle {
  id: number;
  title: string;
}


export interface ArticleContent {
  id: number;
  mainTitle: string;
  mainSubtitle: string;
  benefitSectionTitle?: string;
  benefitSubtitle1?: string;
  benefitSubtitle2?: string;
  timingSectionTitle?: string;
  userInteractionTitle?: string;
  userQuestion?: string;
  introduction: string;
  benefitDescription1: string;
  benefitDescription2: string;
  behaviorDescription: string;
  timingDescription1: string;
  timingDescription2: string;
  userPromptDescription: string;
  videoTitle: string;
  videoDescription: string;
  videoUrl: string;
  images: string[];
  caseTitles: string[];
  caseDescriptions: string[];
  relatedArticlesTitle: string;
  relatedArticles: RelatedArticle[];
}

const articlesData: ArticleContent[] = [
  {
    id: 1,
    mainTitle: "Castrar um Gato: Quando é Melhor?",
    mainSubtitle: "Descubra o momento ideal e os benefícios da castração",
    benefitSectionTitle: "Benefícios da Castração",
    benefitSubtitle1: "Prevenção de doenças graves",
    benefitSubtitle2: "Comportamento mais equilibrado",
    timingSectionTitle: "Quando é o Melhor Momento para Castrar?",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Já considerou castrar o seu gato? O que te impede ou incentiva a tomar essa decisão?",
    introduction:
      "Castrar um gato é uma decisão importante que traz benefícios tanto para a saúde do animal quanto para a convivência em casa. Este artigo irá explorar detalhadamente o melhor momento para castrar o seu gato, os benefícios dessa prática, exemplos de casos reais, além de responder às dúvidas mais comuns sobre o procedimento. Também incluiremos exemplos práticos, imagens e um vídeo para esclarecer tudo sobre o assunto.",
    benefitDescription1:
      "A castração não só evita gestações indesejadas, mas também ajuda a prevenir doenças graves, como tumores e infecções. Nas fêmeas, o risco de câncer de mama é drasticamente reduzido, e nos machos, a castração elimina qualquer possibilidade de desenvolver tumores testiculares.",
    benefitDescription2:
      "Em fêmeas, a castração evita o desenvolvimento de piometra, uma infecção uterina perigosa, além de reduzir as chances de tumores mamários. Nos machos, a retirada dos testículos elimina o risco de tumores testiculares, comuns em gatos mais velhos.",
    behaviorDescription:
      "Os gatos castrados geralmente ficam mais tranquilos. Comportamentos agressivos, marcação de território e tentativas de fuga diminuem consideravelmente, especialmente nos machos. Isso melhora a qualidade de vida do animal e a convivência no lar.",
    timingDescription1:
      "A recomendação dos veterinários é realizar a castração entre 4 e 6 meses de idade, antes do gato atingir a maturidade sexual. Esse período é ideal porque o animal ainda não desenvolveu completamente os comportamentos relacionados ao cio e à reprodução, como a marcação de território.",
    timingDescription2:
      "A castração precoce garante uma recuperação rápida e previne a gravidez indesejada nas fêmeas, além de reduzir a probabilidade de tumores nas mamas.",
    userPromptDescription:
      "Se você tem um gato, pense sobre o comportamento dele e sua rotina atual. Ele apresenta comportamentos como tentar fugir, urinar fora da caixa ou ser agressivo com outros animais? Esses são sinais de que ele pode estar atingindo a maturidade sexual, e a castração pode ser uma boa solução.",
    images: [
      "https://static.ric.com.br/uploads/2021/06/buddah-the-cat-main.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3g1PlXY0Ua0aWAq6yTdOyl2kRyf-VlGdvQw&s",
    ],
    caseTitles: ["Gato Macho Fugitivo", "Gata com Piometra Prevenida"],
    caseDescriptions: [
      "Um tutor relatou que seu gato macho fugia constantemente de casa, buscando fêmeas no cio nas redondezas. Após a castração, o comportamento mudou completamente. O gato se tornou mais caseiro, parou de tentar escapar e ficou mais calmo nas interações com outros animais.",
      "Uma gata fêmea, que foi castrada aos 5 meses de idade, evitou complicações sérias que poderiam ter ocorrido anos depois. Fêmeas não castradas têm maior chance de desenvolver piometra, uma infecção uterina que pode ser fatal se não tratada. A decisão de castrar precocemente evitou esse risco.",
    ],
    videoTitle: "Assista ao Vídeo Sobre Castração",
    videoDescription:
      "Assista ao vídeo abaixo para mais informações sobre os cuidados com a castração e o pós-operatório do seu gato. Esse conteúdo pode ajudar a esclarecer ainda mais as suas dúvidas sobre o procedimento.",
    videoUrl: "https://www.youtube.com/embed/6LvcKFGYl60?si=8WbRa4cbk4u3-vNh",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Vacinas Essenciais: Quais são e Quando aplicar?", id: 4},
      {title: "A alimentação ideal para Cães e Gatos", id: 5}
    ],
  },
  {
    id: 2,
    mainTitle: "Fases do Desenvolvimento do Filhote",
    mainSubtitle: "Entenda cada etapa do crescimento do seu filhote.",
    benefitSectionTitle: "Benefícios do Desenvolvimento Adequado",
    benefitSubtitle1: "Crescimento saudável",
    benefitSubtitle2: "Comportamento equilibrado",
    timingSectionTitle: "Fases de Desenvolvimento",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Qual fase do desenvolvimento do seu filhote você considera mais desafiadora?",
    introduction:
      "O desenvolvimento de um filhote passa por diversas fases que exigem cuidados específicos. Desde o desmame até a fase adulta, entender cada etapa é crucial para garantir um crescimento saudável. Neste artigo, abordaremos como cuidar do seu filhote em cada fase, os desafios comuns e como superá-los.",
    benefitDescription1:
      "Um desenvolvimento adequado ajuda a prevenir problemas de saúde no futuro. Filhotes bem cuidados tornam-se adultos equilibrados e saudáveis.",
    benefitDescription2:
      "Compreender as necessidades de cada fase contribui para a socialização e adaptação do seu pet, evitando comportamentos problemáticos na idade adulta.",
    behaviorDescription:
      "Filhotes em desenvolvimento podem apresentar comportamentos variados. É importante observar e entender suas necessidades para promover um crescimento saudável.",
    timingDescription1:
      "Os filhotes passam por várias fases, incluindo a fase neonatal, a fase de socialização e a fase de maturidade. Cada uma delas requer cuidados específicos.",
    timingDescription2:
      "A fase de socialização é especialmente importante, pois influencia o comportamento e a interação do filhote com outros animais e humanos.",
    userPromptDescription:
      "Pense na rotina do seu filhote. Ele tem interações positivas com outros animais? Está aprendendo os comandos básicos? Isso é fundamental para seu desenvolvimento.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbsLtzNiSMaO6aliLv7liLrxF-nz253Wqhg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37F5VObnxNfGDmJoNegfdCpDoUBaB7y5sRw&s"],
    caseTitles: ["Filhote Sociável", "Filhote em Crescimento Saudável"],
    caseDescriptions: [
      "Um tutor que dedicou tempo à socialização do seu filhote notou que ele se tornou um cão amigável e adaptável, fazendo amizades facilmente.",
      "Outra tutora observou que seu filhote cresceu forte e saudável devido a uma dieta equilibrada e cuidados veterinários regulares.",
    ],
    videoTitle: "Assista ao Vídeo Sobre Fases de Desenvolvimento",
    videoDescription:
      "Este vídeo explica as fases do desenvolvimento do filhote e como cuidar dele em cada etapa.",
    videoUrl: "https://www.youtube.com/embed/jC2HRMK9D40",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Castrar um Gato: Quando é Melhor?", id: 1},
      {title: "A alimentação ideal para Cães e Gatos", id: 5},
    ],
  },
  {
    id: 3,
    mainTitle: "Como Prevenir Pulgas e Carrapatos?",
    mainSubtitle: "Proteja seu pet contra parasitas.",
    benefitSectionTitle: "Importância da Prevenção",
    benefitSubtitle1: "Saúde do seu pet",
    benefitSubtitle2: "Convivência tranquila",
    timingSectionTitle: "Quando Prevenir?",
    userInteractionTitle: "Saiba que",
    userQuestion: "Você já notou sinais de pulgas ou carrapatos no seu pet?",
    introduction:
      "A prevenção de pulgas e carrapatos é essencial para a saúde do seu pet. Neste artigo, discutiremos as melhores práticas e tratamentos para manter seu amigo livre desses parasitas ao longo do ano.",
    benefitDescription1:
      "Pulgas e carrapatos podem causar doenças graves. A prevenção é mais eficaz e menos onerosa do que o tratamento.",
    benefitDescription2:
      "Manter seu pet livre de parasitas melhora sua qualidade de vida e reduz o risco de transmissão de doenças.",
    behaviorDescription:
      "Os sinais de infestação incluem coceira excessiva e irritação na pele. Esteja atento e procure orientação veterinária se notar qualquer sintoma.",
    timingDescription1:
      "A prevenção deve ser feita durante todo o ano, mas é especialmente importante na primavera e no verão, quando os parasitas são mais ativos.",
    timingDescription2:
      "Use produtos recomendados pelo veterinário e mantenha a higiene do ambiente do seu pet para evitar a infestação.",
    userPromptDescription:
      "Observe o comportamento do seu pet. Ele coça mais do que o normal? Isso pode ser um sinal de infestação.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHD5UIkReM_McV5IdbmIkfohbpZt_ipjKNSg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUazQwuOwKxxE2uQYsiughZJGhUdbzPSBtOg&s"],
    caseTitles: ["Cão Livre de Pulgas", "Gato Sem Carrapatos"],
    caseDescriptions: [
      "Após seguir um plano de prevenção rigoroso, um tutor ficou aliviado ao notar que seu cão não tinha mais pulgas e estava muito mais feliz.",
      "Uma gata que sempre tinha carrapatos se tornou mais ativa e saudável depois que a tutora começou a usar um produto preventivo adequado.",
    ],
    videoTitle: "Assista ao Vídeo Sobre Prevenção de Pulgas e Carrapatos",
    videoDescription:
      "Neste vídeo, você encontrará dicas sobre como prevenir e tratar infestação de pulgas e carrapatos em seu pet.",
    videoUrl: "https://www.youtube.com/embed/pD_64yQoXWA?si=1t8nThiEuHy3jgQF",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {titile: "Vacinas Essenciais: Quais são e Quando aplicar?", id: 4},
      {titile: "A alimentação ideal para Cães e Gatos", id: 5},
    ],
  },
  {
    id: 4,
    mainTitle: "Vacinas Essenciais: Quais São e Quando Aplicar?",
    mainSubtitle: "A saúde do seu pet começa com a vacinação correta.",
    benefitSectionTitle: "Importância das Vacinas",
    benefitSubtitle1: "Prevenção de doenças",
    benefitSubtitle2: "Maior longevidade",
    timingSectionTitle: "Quando Vacinar?",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Seu pet está com a vacinação em dia? Já perdeu alguma vacina importante?",
    introduction:
      "Vacinas são essenciais para a saúde do seu pet, prevenindo doenças graves e garantindo uma vida longa e saudável. Este artigo abordará as vacinas mais importantes, quando aplicá-las e os cuidados necessários.",
    benefitDescription1:
      "As vacinas ajudam a prevenir doenças como cinomose, parvovirose e leptospirose, que podem ser fatais.",
    benefitDescription2:
      "Pets vacinados têm uma maior expectativa de vida e menor risco de contrair doenças infecciosas.",
    behaviorDescription:
      "Um pet saudável é um pet feliz! A vacinação contribui para um comportamento equilibrado e ativa uma boa convivência.",
    timingDescription1:
      "Filhotes devem receber suas primeiras vacinas a partir das 6-8 semanas de vida, com reforços a cada 3-4 semanas até completarem 16 semanas.",
    timingDescription2:
      "Após o primeiro ano, as vacinas devem ser mantidas com reforços anuais ou bienais, dependendo do tipo de vacina.",
    userPromptDescription:
      "Verifique o cartão de vacinação do seu pet. Está tudo em dia? Caso contrário, agende uma visita ao veterinário.",
    images: [
      "https://optimumpet.com.br/media/uploads/2022/12/vacinas-para-caes-scaled.webp",
      "https://i0.wp.com/bernadetealves.com/wp-content/uploads/2021/07/Vacinas-essenciais-para-manter-a-saude-dos-pets-gatinho-Bernadete-Alves.jpg?fit=1024%2C768&ssl=1",
    ],
    caseTitles: ["Cão Vacinado e Feliz", "Gato Livre de Doenças"],
    caseDescriptions: [
      "Um cão que recebeu todas as vacinas recomendadas teve uma vida saudável e ativa, com visitas regulares ao veterinário e sem doenças graves.",
      "Uma gata que foi vacinada em dia apresentou uma saúde exemplar e não contraiu nenhuma doença infecciosa.",
    ],
    videoTitle: "Assista ao Vídeo sobre Vacinas",
    videoDescription:
      "Neste vídeo, você encontrará informações detalhadas sobre as vacinas essenciais para cães e gatos e suas respectivas aplicações.",
    videoUrl: "https://www.youtube.com/embed/maRGQZZAhWA?si=7ccuGAqXDu0hjotI",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Vacinas para Filhotes: Um Guia Completo", id: 16},
      {title: "A Alimentação Ideal para Cães e Gatos", id: 5},
    ],
  },
  {
    id: 5,
    mainTitle: "A Alimentação Ideal para Cães e Gatos",
    mainSubtitle: "Como garantir uma dieta equilibrada para o seu pet.",
    benefitSectionTitle: "Benefícios de uma Alimentação Saudável",
    benefitSubtitle1: "Saúde e Bem-Estar",
    benefitSubtitle2: "Aumento da Longevidade",
    timingSectionTitle: "Como Montar a Dieta Ideal?",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você sabe qual é a dieta mais adequada para o seu pet? Quais são os alimentos que ele mais gosta?",
    introduction:
      "A alimentação correta é fundamental para a saúde do seu cão ou gato. Neste artigo, discutiremos quais são os alimentos ideais, como equilibrar a dieta e as necessidades nutricionais específicas de cada animal.",
    benefitDescription1:
      "Uma dieta balanceada ajuda a prevenir doenças e a manter o peso ideal, garantindo que seu pet tenha uma vida saudável.",
    benefitDescription2:
      "Alimentos de qualidade contribuem para uma pelagem brilhante, energia e disposição adequadas.",
    behaviorDescription:
      "Um pet bem alimentado é mais ativo, brincalhão e feliz, além de ser menos propenso a doenças relacionadas à dieta.",
    timingDescription1:
      "Os cães e gatos têm necessidades nutricionais diferentes em cada fase da vida. Filhotes, adultos e idosos precisam de dietas adaptadas.",
    timingDescription2:
      "Consulte sempre um veterinário para entender a dieta mais apropriada para o seu pet, levando em consideração suas necessidades específicas.",
    userPromptDescription:
      "Observe a alimentação do seu pet. Você tem seguido as recomendações de porções e tipos de alimentos?",
    images: [
      "https://www.revistaveterinaria.com.br/wp-content/uploads/2013/05/c%C3%A3o-e-gato-se-alimentando-300x200.jpg",
      "https://www.dogvibe.com.br/wp-content/uploads/2018/05/pet_food.jpg",
    ],
    caseTitles: [
      "Dieta Balanceada para Cães",
      "Alimentação Saudável para Gatos",
    ],
    caseDescriptions: [
      "Um tutor percebeu que seu cão, após mudar para uma dieta balanceada, ficou mais enérgico e saudável, com a pelagem brilhante e bem cuidada.",
      "Uma gata, que seguia uma alimentação rica em nutrientes, tinha um aumento visível de energia e melhor disposição para brincar.",
    ],
    videoTitle: "Assista ao Vídeo sobre Alimentação de Pets",
    videoDescription:
      "Neste vídeo, você encontrará dicas sobre como montar uma dieta equilibrada para cães e gatos, incluindo receitas caseiras.",
    videoUrl: "https://www.youtube.com/embed/MAjnouv3BAg?si=Ssh8yzH5Ego0eVV3",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Vacinas Essenciais: Quais São e Quando Aplicar?", id: 4},
      {title: "Obesidade em Cães e Gatos: Causas e Consequências", id: 13},
    ],
  },
  {
    id: 6,
    mainTitle: "O Que Fazer em Caso de Emergência?",
    mainSubtitle: "Prepare-se para situações críticas com seu pet.",
    benefitSectionTitle: "A Importância da Preparação",
    benefitSubtitle1: "Ação Rápida",
    benefitSubtitle2: "Maior Segurança",
    timingSectionTitle: "Como se Preparar?",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você tem um plano de emergência para o seu pet? Quais medidas já tomou?",
    introduction:
      "Situações de emergência podem acontecer a qualquer momento. Estar preparado pode salvar a vida do seu pet. Neste artigo, discutiremos como agir em caso de emergências, como identificar situações críticas e quais medidas tomar para garantir a segurança do seu amigo.",
    benefitDescription1:
      "A rapidez na ação pode fazer a diferença em situações de emergência, aumentando as chances de recuperação do seu pet.",
    benefitDescription2:
      "Um bom preparo proporciona tranquilidade para você e segurança para o seu animal.",
    behaviorDescription:
      "O comportamento do seu pet pode mudar em situações de estresse. Manter a calma é essencial para lidar com emergências.",
    timingDescription1:
      "É fundamental ter um kit de emergência preparado em casa, incluindo itens como medicamentos, alimentos, água e documentos do veterinário.",
    timingDescription2:
      "Identificar sinais de emergência, como dificuldade para respirar, sangramentos ou convulsões, é crucial para uma intervenção rápida.",
    userPromptDescription:
      "Revise seu plano de emergência e certifique-se de que todos na sua casa sabem como agir em caso de necessidade.",
    images: [
      "https://petsaltoblog.com.br/wordpress/wp-content/files/petsaltoblog.com.br/2024/05/primeiros-socorros-pet.png",
      "https://centralpet.vet.br/paineladm/wp-content/uploads/2022/10/Quais-sao-os-primeiros-socorros-para-caes.jpg",
    ],
    caseTitles: ["Cão Ferido", "Gato com Sintomas de Emergência"],
    caseDescriptions: [
      "Um tutor agiu rapidamente ao notar que seu cão havia se ferido. Ele imediatamente levou o animal ao veterinário, onde recebeu os cuidados necessários e se recuperou bem.",
      "Uma gata apresentou dificuldade para respirar. O tutor, ciente dos sinais de emergência, levou-a ao veterinário, onde foi diagnosticada com um problema respiratório grave, mas que foi tratado a tempo.",
    ],
    videoTitle: "Assista ao Vídeo sobre Emergências com Pets",
    videoDescription:
      "Este vídeo fornece dicas sobre como se preparar e agir em caso de emergência com seu animal de estimação.",
    videoUrl: "https://www.youtube.com/embed/Ow_wW9nC2pg?si=M7OacMvJQlM2VDtg",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Doença Renal Crônica em Gatos", id: 7},
      {title: "O Que Fazer em Caso de Emergência?", id: 6},
    ],
  },
  {
    id: 7,
    mainTitle: "Doença Renal Crônica em Gatos",
    mainSubtitle: "Identificação e cuidados com gatos afetados.",
    benefitSectionTitle: "Importância do Diagnóstico Precoce",
    benefitSubtitle1: "Aumento da Qualidade de Vida",
    benefitSubtitle2: "Tratamento Eficiente",
    timingSectionTitle: "Sinais de Alerta",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você já fez exames regulares no seu gato? Quais sinais de alerta você notou?",
    introduction:
      "A Doença Renal Crônica (DRC) é comum em gatos idosos, mas pode afetar felinos mais jovens também. Identificar os sinais precocemente é essencial para um tratamento eficaz. Neste artigo, discutiremos a DRC, seus sintomas e como cuidar de um gato afetado.",
    benefitDescription1:
      "Com o diagnóstico precoce, é possível implementar mudanças na dieta e na rotina, aumentando a qualidade de vida do seu gato.",
    benefitDescription2:
      "Tratamentos adequados ajudam a controlar a progressão da doença e melhoram o bem-estar do felino.",
    behaviorDescription:
      "Gatos com DRC podem apresentar alterações no apetite e na atividade, tornando-se mais reclusos e menos ativos.",
    timingDescription1:
      "Os sinais de DRC incluem aumento da sede e da urina, perda de peso e vômitos. Fique atento a essas mudanças.",
    timingDescription2:
      "Consultas veterinárias regulares são essenciais para monitorar a saúde renal do seu gato, especialmente à medida que ele envelhece.",
    userPromptDescription:
      "Observe o comportamento do seu gato. Alguma mudança recente chamou sua atenção? Isso pode ser um sinal de alerta.",
    images: [
      "https://blog.cobasi.com.br/wp-content/uploads/2022/03/doenca-renal-cronica-em-gatos-capa.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq5mQx_REDWakQX_2lKAGFmVRhUsBJMy9GQ&s",
    ],
    caseTitles: ["Gato em Tratamento", "Gato em Recuperação"],
    caseDescriptions: [
      "Um gato diagnosticado com DRC começou a receber uma dieta especial e cuidados veterinários, melhorando significativamente sua qualidade de vida.",
      "Após um tratamento bem-sucedido, um gato que apresentava sinais de DRC voltou a brincar e a interagir com sua família como antes.",
    ],
    videoTitle: "Assista ao Vídeo sobre Doença Renal em Gatos",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre a DRC, incluindo sinais, diagnóstico e opções de tratamento.",
    videoUrl: "https://www.youtube.com/embed/sCBVrzlmA8I?si=dYe4UuJZqCzNiROy",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "O Que Fazer em Caso de Emergência?", id: 6},
      {title: "Diabetes em Pets: Diagnóstico e Cuidados", id: 11},
    ],
  },
  {
    id: 8,
    mainTitle: "Doença do Carrapato: Sintomas e Prevenção",
    mainSubtitle: "Cuide do seu pet e evite essa doença perigosa.",
    benefitSectionTitle: "Importância da Prevenção",
    benefitSubtitle1: "Saúde do Pet",
    benefitSubtitle2: "Menos Risco de Infecções",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Seu pet apresenta sintomas como letargia ou febre? Já pensou em prevenir a doença do carrapato?",
    introduction:
      "A Doença do Carrapato é uma condição séria que pode afetar a saúde do seu cão e, em casos extremos, ser fatal. Neste artigo, abordaremos os sintomas, a prevenção e o tratamento dessa doença.",
    benefitDescription1:
      "Prevenir a infecção por carrapatos é crucial para a saúde do seu pet e pode evitar complicações graves.",
    benefitDescription2:
      "Identificar a doença precocemente aumenta as chances de recuperação e diminui o risco de sequelas.",
    behaviorDescription:
      "Cães infectados podem apresentar sintomas como fraqueza, febre e perda de apetite, além de mudanças no comportamento.",
    timingDescription1:
      "Os sintomas mais comuns incluem febre, letargia, perda de peso e inchaço das articulações.",
    timingDescription2:
      "Exames regulares no veterinário ajudam a identificar a presença de carrapatos e a prevenir a doença.",
    userPromptDescription:
      "Verifique se o seu cão está com carrapatos. Você tem um plano de prevenção em prática?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbk7-c3GAA-wqEI5miCJXL9Wp1PJ7YgQx1AA&s",
      "https://digitalvet.com.br/wp-content/uploads/2019/01/doenca-do-carrapato-1000x525.png",
    ],
    caseTitles: ["Cão Tratado com Sucesso", "Prevenção Eficiente"],
    caseDescriptions: [
      "Um tutor percebeu os sintomas de Doença do Carrapato em seu cão e procurou o veterinário rapidamente. O tratamento foi eficaz e o cão se recuperou totalmente.",
      "Uma família adotou um plano rigoroso de prevenção com produtos adequados e nunca teve problemas com carrapatos em seus pets.",
    ],
    videoTitle: "Assista ao Vídeo sobre Doença do Carrapato",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre a Doença do Carrapato, incluindo sintomas e como prevenir.",
    videoUrl: "https://www.youtube.com/embed/GLm-bCJsnHk?si=Y8SQ3NdgaTyryAPS",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Vacinas Essenciais: Quais São e Quando Aplicar?", id: 4},
      {title: "Doença Renal Crônica em Gatos", id: 7},
    ],
  },
  {
    id: 9,
    mainTitle: "Parvovirose Canina: O que é e como tratar?",
    mainSubtitle: "Entenda a parvovirose e proteja seu pet.",
    benefitSectionTitle: "Importância da Vacinação",
    benefitSubtitle1: "Prevenção Eficaz",
    benefitSubtitle2: "Tratamento Rápido",
    timingSectionTitle: "Sintomas a Observar",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você conhece os sinais de parvovirose em cães? Já vacinou seu cão?",
    introduction:
      "A parvovirose é uma doença viral grave que afeta principalmente filhotes e cães não vacinados. Neste artigo, discutiremos os sintomas, a prevenção e o tratamento da parvovirose.",
    benefitDescription1:
      "Vacinar seu cão contra a parvovirose é a maneira mais eficaz de prevenir a infecção e salvar vidas.",
    benefitDescription2:
      "O tratamento precoce aumenta as chances de recuperação e pode evitar complicações mais sérias.",
    behaviorDescription:
      "Cães com parvovirose podem ficar letárgicos, apresentar vômitos e diarreia severa, o que pode levar a desidratação.",
    timingDescription1:
      "Os sintomas incluem vômito, diarreia sanguinolenta, desidratação e febre. Fique atento a qualquer mudança no comportamento do seu cão.",
    timingDescription2:
      "Leve seu cão ao veterinário imediatamente se notar sintomas de parvovirose, pois a rápida intervenção é crucial.",
    userPromptDescription:
      "Certifique-se de que seu cão esteja vacinado e preste atenção a sinais de doenças. Você tem um plano de saúde em dia?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOn6yXtHY3eFxB_MxwwLgtash_nuL8fMpiQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjS0Es-8S-eCdvHyTiOpACkZoJHQeWam8oiQ5WhP7YY-lzBAoGKUfmAzES5qEy8B_qdE&usqp=CAU",
    ],
    caseTitles: ["Cão Recuperado da Parvovirose", "Vacinação Eficaz"],
    caseDescriptions: [
      "Após ser diagnosticado com parvovirose, um filhote recebeu tratamento intensivo e se recuperou, tornando-se um cão saudável.",
      "Uma família manteve seu cão vacinado e, apesar de conviver com outros animais, nunca teve problemas com a parvovirose.",
    ],
    videoTitle: "Assista ao Vídeo sobre Parvovirose",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre a parvovirose canina, incluindo sintomas e opções de tratamento.",
    videoUrl: "https://www.youtube.com/embed/62ABLxOMfZ4?si=n82waPj1Zp_uA94t",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Vacinas Essenciais: Quais São e Quando Aplicar?", id: 4},
      {title: "Obesidade em Cães e Gatos: Causas e Consequências", id: 13},
    ],
  },
  {
    id: 10,
    mainTitle: "Dermatite em Cães e Gatos",
    mainSubtitle: "Identificando e tratando dermatites em pets.",
    benefitSectionTitle: "Importância do Diagnóstico",
    benefitSubtitle1: "Conforto do Pet",
    benefitSubtitle2: "Prevenção de Complicações",
    timingSectionTitle: "Sinais de Dermatite",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Seu pet apresenta coceira excessiva ou vermelhidão na pele? O que você já fez para ajudar?",
    introduction:
      "A dermatite é uma condição comum que pode causar desconforto em cães e gatos. Neste artigo, abordaremos os tipos de dermatite, seus sintomas e como tratá-las.",
    benefitDescription1:
      "Um diagnóstico precoce e tratamento adequado garantem mais conforto e qualidade de vida para seu pet.",
    benefitDescription2:
      "Prevenir complicações como infecções secundárias é fundamental para a saúde do seu animal.",
    behaviorDescription:
      "Pets com dermatite podem apresentar coceira excessiva, lamparinas nas áreas afetadas e alteração no comportamento.",
    timingDescription1:
      "Os principais sinais incluem vermelhidão, coceira intensa, perda de pelo e mau odor na pele.",
    timingDescription2:
      "É importante consultar um veterinário ao notar qualquer alteração na pele do seu pet para um diagnóstico preciso.",
    userPromptDescription:
      "Observe a pele do seu pet. Alguma área está vermelha ou irritada? Isso pode ser um sinal de dermatite.",
    images: [
      "https://cdn.awsli.com.br/2485/2485118/arquivos/como-tratar-a-dermatite-atopica-em-caes-1536x1025.png",
      "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia29550/dermatite_de_dobras_cutaneas_voce_conhece_essa_doenca_de_pele_que_acomete_os_caes.jpg",
    ],
    caseTitles: ["Cão com Dermatite", "Gato em Tratamento"],
    caseDescriptions: [
      "Um cão com dermatite recebeu tratamento adequado e, após algumas semanas, sua pele se recuperou e ele ficou mais confortável.",
      "Uma gata diagnosticada com dermatite passou por um tratamento eficaz e teve uma melhoria significativa em sua qualidade de vida.",
    ],
    videoTitle: "Assista ao Vídeo sobre Dermatite em Pets",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre dermatites em cães e gatos, incluindo causas, sintomas e tratamentos.",
    videoUrl: "https://www.youtube.com/embed/GyAJY48C2LA?si=ZLoDLwUP6NuaNeGE",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "A Alimentação Ideal para Cães e Gatos", id: 5},
      {title: "Doença Renal Crônica em Gatos", id: 7},
    ],
  },
  {
    id: 11,
    mainTitle: "Diabetes em Pets: Diagnóstico e Cuidados",
    mainSubtitle: "Entenda o diabetes e como gerenciá-lo.",
    benefitSectionTitle: "Importância do Diagnóstico Precoce",
    benefitSubtitle1: "Controle da Doença",
    benefitSubtitle2: "Melhora na Qualidade de Vida",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você sabe quais são os sinais de diabetes em cães e gatos? Como você está cuidando do seu pet?",
    introduction:
      "O diabetes é uma condição crescente em cães e gatos, especialmente em animais mais velhos ou com sobrepeso. Neste artigo, discutiremos o diagnóstico, os sintomas e os cuidados necessários para gerenciar o diabetes em pets.",
    benefitDescription1:
      "Um diagnóstico precoce permite que você implemente mudanças na dieta e no estilo de vida do seu pet, ajudando no controle da doença.",
    benefitDescription2:
      "Com o tratamento correto, muitos pets diabéticos podem levar uma vida plena e feliz.",
    behaviorDescription:
      "Animais com diabetes podem apresentar aumento da sede, urina frequente e perda de peso, mesmo com aumento do apetite.",
    timingDescription1:
      "Os sinais de diabetes incluem aumento da sede, urina frequente, letargia e perda de peso inexplicada.",
    timingDescription2:
      "Exames regulares e consultas veterinárias são fundamentais para o diagnóstico e tratamento eficaz do diabetes.",
    userPromptDescription:
      "Fique atento ao comportamento do seu pet. Alguma mudança recente? Isso pode ser um sinal de alerta para diabetes.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGl7oWLgQVOct9FkCjCitrSjP-LEEhOZ1XA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsP8tHf4wpkB8TCklMgQWgAekCv5wBaCZ4MN_xVSrlMRYic9yPmTlrAvfvEuqbOesuq10&usqp=CAU",
    ],
    caseTitles: ["Cão Diabético em Tratamento", "Gato Controlando Diabetes"],
    caseDescriptions: [
      "Um cão diabético começou a receber insulina e seguiu uma dieta adequada, mostrando melhoras significativas em sua saúde.",
      "Uma gata diagnosticada com diabetes passou a receber cuidados específicos e teve uma qualidade de vida elevada.",
    ],
    videoTitle: "Assista ao Vídeo sobre Diabetes em Pets",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre como diagnosticar e gerenciar o diabetes em cães e gatos.",
    videoUrl: "https://www.youtube.com/embed/9b4oxb1GKbc?si=f5TrY8Z0seHCG7fc",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Doença Renal Crônica em Gatos", id: 7},
      {title: "Doença do Carrapato: Sintomas e Prevenção", id: 8},
    ],
  },
  {
    id: 12,
    mainTitle: "Leishmaniose: Prevenção e Tratamento",
    mainSubtitle: "Proteja seu pet contra a leishmaniose.",
    benefitSectionTitle: "Importância da Prevenção",
    benefitSubtitle1: "Saúde do Pet",
    benefitSubtitle2: "Segurança para a Família",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você conhece os riscos da leishmaniose para cães? Como está protegendo seu pet?",
    introduction:
      "A leishmaniose é uma doença grave transmitida por mosquitos que pode afetar a saúde dos cães. Neste artigo, abordaremos como prevenir e tratar a leishmaniose.",
    benefitDescription1:
      "A prevenção da leishmaniose é crucial para a saúde do seu cão e ajuda a evitar complicações graves.",
    benefitDescription2:
      "O tratamento precoce pode aumentar as chances de recuperação e controlar os sintomas da doença.",
    behaviorDescription:
      "Cães com leishmaniose podem apresentar perda de peso, letargia e lesões na pele.",
    timingDescription1:
      "Os principais sinais de leishmaniose incluem perda de peso, feridas na pele e aumento do volume abdominal.",
    timingDescription2:
      "Consultas regulares ao veterinário são essenciais para monitorar a saúde do seu cão e detectar sinais precoces da doença.",
    userPromptDescription:
      "Considere usar repelentes e vacinas para proteger seu cão contra a leishmaniose. Você já tomou essas precauções?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUY4r1lVvZmSicx3pWnqVgeCuVSS-6etFfPw&s",
      "https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/images-carrossel/22884-leishmaniose-canina-feridas-nao-cicatri-orig-1.webp?itok=zBs--7xs",
    ],
    caseTitles: ["Cão Tratado com Sucesso", "Prevenção Eficiente"],
    caseDescriptions: [
      "Um cão diagnosticado com leishmaniose passou por tratamento adequado e teve uma recuperação positiva, voltando a uma vida ativa.",
      "Uma família adotou medidas preventivas, como uso de repelentes e vacinas, e nunca teve problemas com leishmaniose.",
    ],
    videoTitle: "Assista ao Vídeo sobre Leishmaniose",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre leishmaniose, incluindo prevenção e opções de tratamento.",
    videoUrl: "https://www.youtube.com/embed/0OCXrgq_abw?si=gYWpHRXLJYIelEOV",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Doença Renal Crônica em Gatos", id: 7},
      {title: "Dermatite em Cães e Gatos", id: 10},
    ],
  },
  {
    id: 13,
    mainTitle: "Obesidade em Cães e Gatos: Causas e Consequências",
    mainSubtitle: "Entenda a obesidade e como combatê-la.",
    benefitSectionTitle: "Importância do Controle de Peso",
    benefitSubtitle1: "Saúde Geral",
    benefitSubtitle2: "Maior Longevidade",
    timingSectionTitle: "Identificando a Obesidade",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você percebe que seu pet está acima do peso? O que já fez para ajudá-lo?",
    introduction:
      "A obesidade é uma condição crescente em cães e gatos e pode levar a várias complicações de saúde. Neste artigo, discutiremos as causas, consequências e como gerenciar a obesidade em pets.",
    benefitDescription1:
      "Controlar o peso do seu pet é essencial para prevenir doenças como diabetes, doenças cardíacas e problemas articulares.",
    benefitDescription2:
      "Animais saudáveis têm maior expectativa de vida e melhor qualidade de vida.",
    behaviorDescription:
      "Cães e gatos obesos podem apresentar menos energia, dificuldade em se mover e problemas de saúde relacionados ao peso.",
    timingDescription1:
      "Os sinais de obesidade incluem dificuldade em respirar, letargia e acúmulo de gordura em áreas específicas, como a barriga.",
    timingDescription2:
      "Um veterinário pode ajudar a determinar o peso ideal do seu pet e oferecer um plano de emagrecimento adequado.",
    userPromptDescription:
      "Observe o peso do seu pet. Você está oferecendo a quantidade correta de ração? É importante monitorar o peso regularmente.",
    images: [
      "https://www.specialdog.com.br/assets/uploads/images/3-%20SOBREPESO.png",
      "https://vethealing.com.br/wp-content/uploads/2020/06/obesidade-foto-certa.jpg",
    ],
    caseTitles: [
      "Cão em Processo de Emagrecimento",
      "Gato Retornando ao Peso Ideal",
    ],
    caseDescriptions: [
      "Um cão que passou por um programa de emagrecimento teve sua saúde melhorada, com aumento de energia e disposição.",
      "Uma gata que estava acima do peso conseguiu emagrecer de forma saudável e agora é mais ativa e feliz.",
    ],
    videoTitle: "Assista ao Vídeo sobre Obesidade em Pets",
    videoDescription:
      "Neste vídeo, você encontrará dicas sobre como prevenir e tratar a obesidade em cães e gatos.",
    videoUrl: "https://www.youtube.com/embed/7crxUe5Mst4?si=WxOqHrgotUKgaprs",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "A Alimentação Ideal para Cães e Gatos", id: 5},
      {title: "Diabetes em Pets: Diagnóstico e Cuidados", id: 11},
    ],
  },
  {
    id: 14,
    mainTitle: "Otite em Cães: Causas e Tratamentos",
    mainSubtitle: "Saiba como identificar e tratar a otite em cães.",
    benefitSectionTitle: "Importância do Tratamento",
    benefitSubtitle1: "Alívio da Dor",
    benefitSubtitle2: "Prevenção de Complicações",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Seu cão está coçando as orelhas? O que você já fez para ajudá-lo?",
    introduction:
      "A otite é uma infecção comum em cães que pode causar dor e desconforto. Neste artigo, vamos explorar as causas, sintomas e tratamentos da otite em cães.",
    benefitDescription1:
      "Tratar a otite rapidamente ajuda a aliviar a dor e o desconforto do seu pet.",
    benefitDescription2:
      "A prevenção e o tratamento adequados evitam que a otite se torne uma condição crônica.",
    behaviorDescription:
      "Cães com otite podem balançar a cabeça, coçar as orelhas e apresentar secreção.",
    timingDescription1:
      "Os sinais incluem coceira intensa, vermelhidão nas orelhas e mau cheiro.",
    timingDescription2:
      "Consulta veterinária é crucial para identificar a causa da otite e iniciar o tratamento correto.",
    userPromptDescription:
      "Fique atento a qualquer mudança nas orelhas do seu cão. Você notou algo diferente?",
    images: [
      "https://i0.statig.com.br/bancodeimagens/80/3p/4f/803p4fa3q4dyh4yi336715ysl.jpg",
      "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26497/otite-canina-cpt.jpg",
    ],
    caseTitles: ["Cão Tratado com Sucesso", "Tratamento Preventivo"],
    caseDescriptions: [
      "Um cão diagnosticado com otite recebeu tratamento adequado e se recuperou rapidamente.",
      "Um proprietário começou a limpar regularmente as orelhas do seu cão e preveniu novas infecções.",
    ],
    videoTitle: "Assista ao Vídeo sobre Otite em Cães",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre otite em cães, incluindo causas e opções de tratamento.",
    videoUrl: "https://www.youtube.com/embed/r4dVKShvtsk?si=5e46LC8F4dtkdbdt",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Doença Periodontal em Cães e Gatos", id: 17},
      {title: "A Importância da Atividade Física para Pets", id: 25},
    ],
  },
  {
    id: 15,
    mainTitle: "A Importância da Socialização para Filhotes",
    mainSubtitle: "Entenda como a socialização beneficia seu filhote.",
    benefitSectionTitle: "Importância da Socialização",
    benefitSubtitle1: "Comportamento Equilibrado",
    benefitSubtitle2: "Menos Medo e Agressividade",
    timingSectionTitle: "Período Crítico",
    userInteractionTitle: "Saiba que",
    userQuestion: "Você já apresentou seu filhote a novas pessoas e animais?",
    introduction:
      "A socialização é fundamental para o desenvolvimento saudável de filhotes. Neste artigo, discutiremos a importância da socialização e como implementá-la.",
    benefitDescription1:
      "Filhotes bem socializados tendem a ser mais confiantes e têm menos problemas de comportamento.",
    benefitDescription2:
      "Uma boa socialização ajuda a prevenir medos e agressividade no futuro.",
    behaviorDescription:
      "Filhotes socializados apresentam comportamentos mais equilibrados e interagem melhor com outros animais e pessoas.",
    timingDescription1:
      "O período crítico para socialização é entre 3 e 14 semanas de idade.",
    timingDescription2:
      "Introduzir seu filhote a diferentes ambientes, sons e pessoas ajuda no desenvolvimento social.",
    userPromptDescription:
      "Pense em como você está socializando seu filhote. Já participou de aulas de adestramento?",
    images: [
      "https://roledodog.com.br/wp-content/uploads/2024/03/Role-do-Dog-50.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzcHAaFsspdPiTq9RKszJsafCYkyRD9VjMQ&s",
    ],
    caseTitles: ["Filhote Bem Socializado", "Filhote com Medos"],
    caseDescriptions: [
      "Um filhote que foi exposto a diferentes pessoas e ambientes tornou-se um cão adulto confiante e amigável.",
      "Um filhote que não foi socializado apresentou dificuldades em interagir com outros cães e pessoas.",
    ],
    videoTitle: "Assista ao Vídeo sobre Socialização de Filhotes",
    videoDescription:
      "Neste vídeo, você aprenderá sobre a importância da socialização e como fazê-la corretamente.",
    videoUrl: "https://www.youtube.com/embed/anuREZj-zjQ?si=a1fK-L-X2P5phlOD",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "A Importância da Atividade Física para Pets", id:25},
      {title: "Adestramento Positivo: O que é e como fazer?", id: 30},
    ],
  },
  {
    id: 16,
    mainTitle: "Vacinas para Filhotes: Um Guia Completo",
    mainSubtitle: "Mantenha seu filhote saudável com as vacinas certas.",
    benefitSectionTitle: "Importância da Vacinação",
    benefitSubtitle1: "Prevenção de Doenças",
    benefitSubtitle2: "Saúde a Longo Prazo",
    timingSectionTitle: "Calendário de Vacinação",
    userInteractionTitle: "Saiba que",
    userQuestion: "Você conhece as vacinas necessárias para seu filhote?",
    introduction:
      "As vacinas são essenciais para proteger os filhotes contra doenças graves. Neste artigo, apresentaremos um guia completo sobre vacinas para filhotes.",
    benefitDescription1:
      "A vacinação previne doenças potencialmente fatais, como cinomose e parvovirose.",
    benefitDescription2:
      "Vacinas também ajudam a garantir a saúde do seu pet a longo prazo, evitando surtos de doenças.",
    behaviorDescription:
      "Filhotes vacinados têm menos chances de contrair doenças e se tornam adultos saudáveis.",
    timingDescription1:
      "As primeiras vacinas devem ser administradas entre 6 e 8 semanas de idade, com reforços até 16 semanas.",
    timingDescription2:
      "É importante seguir o calendário de vacinação recomendado pelo veterinário.",
    userPromptDescription:
      "Verifique se seu filhote está com as vacinas em dia. Você já levou ao veterinário?",
    images: [
      "https://image.cachorrogato.com.br/textimages/vacina-para-cachorros.jpg",
      "https://pet.totalneem.com/wp-content/uploads/2021/09/Manual-de-vacina-para-cachorro.jpg",
    ],
    caseTitles: ["Filhote Vacinado", "Importância da Vacinação"],
    caseDescriptions: [
      "Um filhote vacinado com sucesso desenvolveu um sistema imunológico forte e saudável.",
      "Um filhote que não recebeu vacinas contraiu uma doença grave e necessitou de tratamento intensivo.",
    ],
    videoTitle: "Assista ao Vídeo sobre Vacinação de Filhotes",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre o calendário de vacinação e a importância das vacinas.",
    videoUrl: "https://www.youtube.com/embed/BijxSW_K7yk?si=wu5mBuBkqPm5nk2C",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Vacinas Essenciais: Quais São e Quando Aplicar?", id: 4},
      {title: "A Alimentação Ideal para Cães e Gatos", id: 5},
    ],
  },
  {
    id: 17,
    mainTitle: "Doença Periodontal em Cães e Gatos",
    mainSubtitle: "Saiba como prevenir e tratar a doença periodontal.",
    benefitSectionTitle: "Importância da Saúde Bucal",
    benefitSubtitle1: "Prevenção de Dor",
    benefitSubtitle2: "Saúde Geral do Animal",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você já notou mau hálito no seu pet? Isso pode ser um sinal de problemas bucais.",
    introduction:
      "A doença periodontal é uma condição comum que afeta a saúde bucal de cães e gatos. Neste artigo, discutiremos suas causas, sintomas e tratamentos.",
    benefitDescription1:
      "Manter a saúde bucal do seu pet ajuda a prevenir dores e desconforto relacionados à doença periodontal.",
    benefitDescription2:
      "Uma boa saúde bucal está relacionada à saúde geral, ajudando a evitar complicações em órgãos internos.",
    behaviorDescription:
      "Animais com doença periodontal podem apresentar mau hálito, dificuldade para comer e sangramento nas gengivas.",
    timingDescription1:
      "Os sinais de doença periodontal incluem mau hálito, gengivas vermelhas e acúmulo de tártaro.",
    timingDescription2:
      "Consultas regulares ao veterinário são essenciais para avaliar a saúde bucal do seu pet.",
    userPromptDescription:
      "Verifique a boca do seu pet. Você percebeu algum sinal de problema?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDrhVljgFmtocD_R5RQF3ADiq9OBA5IPL9w&s",
      "https://irp-cdn.multiscreensite.com/84d3f6f2/dms3rep/multi/vet-odonto-e1530923502446-300x300.jpg",
    ],
    caseTitles: ["Tratamento Bem-Sucedido", "Prevenção com Escovação"],
    caseDescriptions: [
      "Um cão com doença periodontal foi tratado com limpeza dentária e agora está saudável.",
      "Um gato cuja boca foi escovada regularmente não apresentou problemas bucais.",
    ],
    videoTitle: "Assista ao Vídeo sobre Doença Periodontal",
    videoDescription:
      "Neste vídeo, você aprenderá sobre a doença periodontal, seus sintomas e como prevenir.",
    videoUrl: "https://www.youtube.com/embed/s22Z6yZHaVY?si=UF4Pgb4pVU_oiymi",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Otite em Cães: Causas e Tratamentos", id: 14},
      {title: "A Importância da Atividade Física para Pets", id: 25},
    ],
  },
  {
    id: 18,
    mainTitle: "Hiperatividade em Cães: Como lidar?",
    mainSubtitle: "Entenda a hiperatividade em cães e como tratá-la.",
    benefitSectionTitle: "Importância do Controle",
    benefitSubtitle1: "Ambiente Mais Calmo",
    benefitSubtitle2: "Melhor Comportamento",
    timingSectionTitle: "Identificando a Hiperatividade",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Seu cão tem dificuldade em se acalmar? Como você tem lidado com isso?",
    introduction:
      "A hiperatividade em cães pode ser desafiadora para os donos. Neste artigo, discutiremos as causas da hiperatividade e como gerenciá-la.",
    benefitDescription1:
      "Controlar a hiperatividade do seu cão ajuda a criar um ambiente mais calmo em casa.",
    benefitDescription2:
      "Cães menos hiperativos são mais propensos a se comportar bem em diferentes situações.",
    behaviorDescription:
      "Cães hiperativos podem correr excessivamente, latir muito e ter dificuldade em se concentrar.",
    timingDescription1:
      "Os sinais incluem inquietação, dificuldade em obedecer comandos e comportamento destrutivo.",
    timingDescription2:
      "Consulte um veterinário ou especialista em comportamento canino para avaliar a hiperatividade.",
    userPromptDescription:
      "Reflita sobre a rotina do seu cão. Ele tem energia de sobra? Como é a sua rotina de exercícios?",
    images: [
      "https://www.patasdacasa.com.br/sites/default/files/noticias/2020/03/como-lidar-com-um-cachorro-hiperativo-e-amenizar-esse-comportamento.jpg",
      "https://cvvidaanimal.com.br/wp-content/uploads/2016/03/cachorro-hiperativo-caes-superativos1-300x166.jpg.webp",
    ],
    caseTitles: ["Cão Treinado com Sucesso", "Rotina de Exercícios"],
    caseDescriptions: [
      "Um cão hiperativo foi adestrado e agora consegue se acalmar em casa.",
      "Um proprietário aumentou os passeios e brincadeiras, ajudando a reduzir a hiperatividade do seu cão.",
    ],
    videoTitle: "Assista ao Vídeo sobre Hiperatividade em Cães",
    videoDescription:
      "Neste vídeo, você aprenderá a identificar a hiperatividade em cães e dicas para gerenciá-la.",
    videoUrl: "https://www.youtube.com/embed/PTM6h6ZSAVI?si=h4BeYqmPWqvqXi8m",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "A Importância da Atividade Física para Pets", id: 25},
      {title: "Adestramento Positivo: O que é e como fazer?", id: 30},
    ],
  },
  {
    id: 19,
    mainTitle: "Toxoplasmose em Gatos: Verdades e Mitos",
    mainSubtitle: "Desmistifique a toxoplasmose em gatos.",
    benefitSectionTitle: "Importância da Informação",
    benefitSubtitle1: "Proteção da Saúde",
    benefitSubtitle2: "Compreensão da Doença",
    timingSectionTitle: "Identificando a Toxoplasmose",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você sabia que a toxoplasmose pode afetar tanto gatos quanto humanos?",
    introduction:
      "A toxoplasmose é uma infecção parasitária que pode afetar gatos e humanos. Neste artigo, abordaremos verdades e mitos sobre a toxoplasmose.",
    benefitDescription1:
      "Compreender a toxoplasmose ajuda a proteger a saúde do seu gato e a sua própria saúde.",
    benefitDescription2:
      "Desmistificar a doença permite que você tome decisões informadas sobre a saúde do seu pet.",
    behaviorDescription:
      "Gatos infectados podem apresentar letargia, febre e dificuldade em respirar.",
    timingDescription1:
      "Os sintomas da toxoplasmose podem variar e nem sempre são evidentes.",
    timingDescription2:
      "Se você suspeita de toxoplasmose, consulte um veterinário imediatamente.",
    userPromptDescription:
      "Pense sobre a dieta do seu gato. Você já ofereceu carne crua?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWb_-e-CWseAzfurhiJOZqne7_vvZL5uNVQ&s",
      "https://veterinaria.hospvet.com.br/imagens/exame-para-gatos-exame-para-detectar-toxoplasmose-em-gatos.jpg",
    ],
    caseTitles: ["Gato Tratado com Sucesso", "Entendendo a Toxoplasmose"],
    caseDescriptions: [
      "Um gato com toxoplasmose foi tratado e se recuperou totalmente com cuidados veterinários.",
      "Um dono que entendeu a toxoplasmose evitou alimentar seu gato com carne crua.",
    ],
    videoTitle: "Assista ao Vídeo sobre Toxoplasmose em Gatos",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre a toxoplasmose em gatos, seus sintomas e como prevenir.",
    videoUrl: "https://www.youtube.com/embed/iiwi2c3yX1k?si=5Tjxp-nVJ7ogF3UR",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Doença Renal Crônica em Gatos", id: 7},
      {title: "Alergias Alimentares em Pets", id: 20},
    ],
  },
  {
    id: 20,
    mainTitle: "Alergias Alimentares em Pets",
    mainSubtitle: "Identifique e trate alergias alimentares em cães e gatos.",
    benefitSectionTitle: "Importância da Dieta",
    benefitSubtitle1: "Saúde Digestiva",
    benefitSubtitle2: "Melhor Qualidade de Vida",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Seu pet apresenta coceiras ou problemas digestivos? Isso pode ser uma alergia alimentar.",
    introduction:
      "As alergias alimentares são comuns em cães e gatos e podem afetar sua qualidade de vida. Neste artigo, abordaremos como identificá-las e tratá-las.",
    benefitDescription1:
      "Identificar e tratar alergias alimentares melhora a saúde digestiva do seu pet.",
    benefitDescription2:
      "Uma dieta adequada pode ajudar a aliviar sintomas e melhorar a qualidade de vida do seu animal.",
    behaviorDescription:
      "Pets com alergias alimentares podem apresentar coceira, vômitos e diarreia.",
    timingDescription1:
      "Os sinais de alergia alimentar incluem coceira intensa, vermelhidão na pele e problemas digestivos.",
    timingDescription2:
      "Consulta veterinária é fundamental para diagnóstico e orientação sobre a dieta adequada.",
    userPromptDescription:
      "Observe a dieta do seu pet. Você percebeu alguma mudança após a alimentação?",
    images: [
      "https://t1.ea.ltmcdn.com/pt/posts/4/6/9/alergia_alimentar_em_caes_sintomas_e_tratamento_22964_600.jpg",
      "https://lh3.googleusercontent.com/proxy/4gi00YwbOURgZ4CQQ4jMwECFPKFszsRJdu8_8zvpDeTMKLi1CeJfQ6yJWAx4rU5Y2P7lY-Asx8OP7TkBuzFDCoysia0",
    ],
    caseTitles: ["Tratamento Eficaz", "Dieta Adequada"],
    caseDescriptions: [
      "Um cão com alergia alimentar seguiu uma dieta especial e melhorou significativamente.",
      "Um gato que teve alergia diagnosticada conseguiu controlar os sintomas com uma dieta adequada.",
    ],
    videoTitle: "Assista ao Vídeo sobre Alergias Alimentares",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre alergias alimentares em pets, seus sintomas e como tratá-las.",
    videoUrl: "https://www.youtube.com/embed/837bXSyAYGA?si=k4iKQMkQXJZ_IL9M",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Dermatite em Cães e Gatos", id: 10},
      {title: "Obesidade em Cães e Gatos: Causas e Consequências", id: 13},
    ],
  },
  {
    id: 21,
    mainTitle: "Convivência entre Gatos e Cães: Dicas Importantes",
    mainSubtitle: "Aprenda a promover a convivência harmoniosa.",
    benefitSectionTitle: "Importância da Convivência",
    benefitSubtitle1: "Ambiente Harmonioso",
    benefitSubtitle2: "Menos Estresse",
    timingSectionTitle: "Introduzindo Animais",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você tem um gato e um cachorro? Como é a convivência entre eles?",
    introduction:
      "A convivência entre gatos e cães pode ser desafiadora, mas é possível promover um ambiente harmonioso. Neste artigo, vamos compartilhar dicas importantes.",
    benefitDescription1:
      "Uma boa convivência ajuda a criar um ambiente mais calmo e harmonioso para todos os animais.",
    benefitDescription2:
      "Evitar conflitos entre gatos e cães reduz o estresse e melhora a qualidade de vida.",
    behaviorDescription:
      "Cães e gatos podem apresentar comportamentos territoriais e de caça, o que pode levar a conflitos.",
    timingDescription1:
      "Os sinais de estresse incluem rosnados, gritos e comportamentos agressivos.",
    timingDescription2:
      "Introduzir lentamente os animais e proporcionar espaços separados ajuda na adaptação.",
    userPromptDescription:
      "Pense sobre a interação entre seus pets. Já percebeu algum sinal de desconforto?",
    images: [
      "https://blog-static.petlove.com.br/wp-content/uploads/2018/05/shutterstock_646123102.jpg",
      "https://static.poder360.com.br/2023/10/cachorros-gatos-1-848x477.png",
    ],
    caseTitles: ["Cães e Gatos Bem Adaptados", "Conflito Superado"],
    caseDescriptions: [
      "Após uma introdução cuidadosa, um cão e um gato aprenderam a conviver juntos em harmonia.",
      "Um gato e um cachorro que inicialmente não se davam aprenderam a respeitar o espaço um do outro.",
    ],
    videoTitle: "Assista ao Vídeo sobre Convivência entre Gatos e Cães",
    videoDescription:
      "Neste vídeo, você encontrará dicas para promover uma convivência harmoniosa entre gatos e cães.",
    videoUrl: "https://www.youtube.com/embed/8oE-2bwKvoU?si=tlRQTurZLkEk-RgF",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "A Importância da Socialização para Filhotes", id: 15},
      {title: "Ansiedade de Separação em Cães", id: 22},
    ],
  },
  {
    id: 22,
    mainTitle: "Ansiedade de Separação em Cães",
    mainSubtitle: "Entenda e trate a ansiedade de separação em cães.",
    benefitSectionTitle: "Importância do Tratamento",
    benefitSubtitle1: "Bem-Estar do Animal",
    benefitSubtitle2: "Ambiente Tranquilo",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Seu cão fica agitado quando você sai de casa? Como ele reage?",
    introduction:
      "A ansiedade de separação é um problema comum em cães que pode ser tratado. Neste artigo, discutiremos os sintomas e as soluções.",
    benefitDescription1:
      "Tratar a ansiedade de separação melhora o bem-estar emocional do seu cão.",
    benefitDescription2:
      "Cães que superam a ansiedade de separação tornam-se mais felizes e tranquilos.",
    behaviorDescription:
      "Cães com ansiedade de separação podem latir excessivamente, destruir objetos ou urinar dentro de casa.",
    timingDescription1:
      "Os sinais incluem choramingos, agitação e destruição de objetos quando o dono sai.",
    timingDescription2:
      "Consulte um veterinário para uma avaliação adequada e opções de tratamento.",
    userPromptDescription:
      "Pense sobre como você pode ajudar seu cão a se sentir mais seguro. Já tentou treinar seu cão a ficar sozinho?",
    images: [
      "https://i0.statig.com.br/bancodeimagens/0b/nr/mf/0bnrmfs6uc0cha2uwyy0h8bv6.jpg",
      "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/cachorro-ansiedade-separacao-petlove.jpg",
    ],
    caseTitles: ["Cão Tratado com Sucesso", "Dicas de Enriquecimento"],
    caseDescriptions: [
      "Um cão com ansiedade de separação foi treinado e agora fica calmo quando o dono sai.",
      "Um proprietário implementou atividades de enriquecimento, ajudando a reduzir a ansiedade do seu cão.",
    ],
    videoTitle: "Assista ao Vídeo sobre Ansiedade de Separação em Cães",
    videoDescription:
      "Neste vídeo, você aprenderá sobre a ansiedade de separação em cães e como tratá-la.",
    videoUrl: "https://www.youtube.com/embed/_QJBxdZ9Bo4?si=VNGsKsvDji2lFC2v",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      {title: "Hiperatividade em Cães: Como lidar?", id: 18},
      {title: "Guia de Passeios Seguros com o Seu Pet", id: 23},
    ],
  },
  {
    id: 23,
    mainTitle: "Guia de Passeios Seguros com o Seu Pet",
    mainSubtitle: "Dicas para passeios agradáveis e seguros.",
    benefitSectionTitle: "Importância do Passeio",
    benefitSubtitle1: "Exercício Físico",
    benefitSubtitle2: "Estimulação Mental",
    timingSectionTitle: "Planejando o Passeio",
    userInteractionTitle: "Saiba que",
    userQuestion: "Quais cuidados você toma ao passear com seu pet?",
    introduction:
      "Passear com seu pet é essencial para sua saúde física e mental. Neste artigo, daremos dicas sobre como realizar passeios seguros e agradáveis.",
    benefitDescription1:
      "Passeios regulares ajudam a manter o seu pet ativo e saudável.",
    benefitDescription2:
      "Estímulos mentais durante os passeios são essenciais para o bem-estar do seu animal.",
    behaviorDescription:
      "Cães podem mostrar empolgação ao ver a coleira, indicando que estão prontos para o passeio.",
    timingDescription1:
      "Escolher horários apropriados e locais seguros é essencial para um passeio tranquilo.",
    timingDescription2:
      "Mantenha sempre seu pet na guia e evite locais perigosos.",
    userPromptDescription:
      "Reflita sobre seus passeios. Você está aproveitando ao máximo o tempo com seu pet?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMammK-0tIVxxcLBhr8_EuqAIfM0Tzzi3CA&s",
      "https://lancenoticias.com.br/wp-content/uploads/2023/08/Design-sem-nome-4-17-1300x879.png",
    ],
    caseTitles: ["Passeio Seguros", "Aproveitando o Tempo Juntos"],
    caseDescriptions: [
      "Um cão que passeia regularmente com seu dono se mantém saudável e feliz.",
      "Um passeio planejado evita estresses e perigos, proporcionando diversão para o pet.",
    ],
    videoTitle: "Assista ao Vídeo sobre Passeios Seguros com Seu Pet",
    videoDescription:
      "Neste vídeo, você encontrará dicas para passeios seguros e agradáveis com seu animal de estimação.",
    videoUrl: "https://www.youtube.com/embed/M91VOqMLUUE?si=ZOoSgVrUsMDLpNrl",   
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      "A Importância da Atividade Física para Pets", id: 25,
      "Guia de Adestramento Positivo",
    ],
  },
  {
    id: 24,
    mainTitle: "Câncer em Cães e Gatos: Sintomas e Tratamentos",
    mainSubtitle: "Saiba como identificar e tratar o câncer em pets.",
    benefitSectionTitle: "Importância do Diagnóstico",
    benefitSubtitle1: "Detecção Precoce",
    benefitSubtitle2: "Opções de Tratamento",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você já notou alterações no comportamento ou aparência do seu pet?",
    introduction:
      "O câncer pode afetar cães e gatos em qualquer idade. Neste artigo, discutiremos os sintomas e as opções de tratamento.",
    benefitDescription1:
      "Diagnosticar câncer precocemente aumenta as chances de tratamento eficaz.",
    benefitDescription2:
      "Existem várias opções de tratamento disponíveis, dependendo do tipo e estágio do câncer.",
    behaviorDescription:
      "Pets com câncer podem apresentar perda de peso, letargia e alterações no apetite.",
    timingDescription1:
      "Os sinais incluem inchaços, feridas que não cicatrizam e alterações no comportamento.",
    timingDescription2:
      "Consulta veterinária imediata é crucial se você notar qualquer sintoma preocupante.",
    userPromptDescription:
      "Considere a saúde do seu pet. Você notou alguma mudança recentemente?",
    images: [
      "https://s2-g1.glbimg.com/fxEgo3TDNLR0iVYKA2xaQMm1S0k=/0x0:1280x809/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/u/K/iPLWXxSt2Hpa8GyULm1Q/gato-com-cancer-2.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PNv9fiuYWNGbKmzSBOus65BM_3jFXPpl8ZovsLZaT25azRqdyfdHyHHRKpK2NONB24A&usqp=CAU",
    ],
    caseTitles: ["Tratamento Bem-Sucedido", "Detecção Precoce"],
    caseDescriptions: [
      "Um cão diagnosticado precocemente com câncer passou por tratamento e está em remissão.",
      "Um gato que recebeu tratamento a tempo conseguiu levar uma vida saudável após o câncer.",
    ],
    videoTitle: "Assista ao Vídeo sobre Câncer em Cães e Gatos",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre os tipos de câncer que afetam cães e gatos e suas opções de tratamento.",
    videoUrl: "https://www.youtube.com/embed/RstA97jR_Hk?si=9SiYfxcQyqtPlMFV",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      "Doença Renal Crônica em Gatos", id: 7,
      "Obesidade em Cães e Gatos: Causas e Consequências", id: 13,
    ],
  },
  {
    id: 25,
    mainTitle: "A importância da Atividade Física para Pets",
    mainSubtitle: "Como a atividade física beneficia cães e gatos.",
    benefitSectionTitle: "Importância do Exercício",
    benefitSubtitle1: "Saúde Física",
    benefitSubtitle2: "Saúde Mental",
    timingSectionTitle: "Níveis de Atividade",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você faz exercícios regularmente com seu pet? Quais atividades ele mais gosta?",
    introduction:
      "A atividade física é fundamental para a saúde e bem-estar de cães e gatos. Neste artigo, vamos discutir a importância do exercício.",
    benefitDescription1:
      "Exercícios regulares ajudam a manter um peso saudável e a prevenir doenças.",
    benefitDescription2:
      "A atividade física também estimula a saúde mental e reduz o estresse.",
    behaviorDescription:
      "Pets ativos são geralmente mais felizes e têm um comportamento melhor.",
    timingDescription1:
      "O nível de atividade necessário varia de acordo com a raça, idade e saúde do animal.",
    timingDescription2:
      "Consulte um veterinário para recomendações específicas de exercícios.",
    userPromptDescription:
      "Reflita sobre as atividades que você faz com seu pet. Você está oferecendo estímulos suficientes?",
    images: [
      "https://aeaseguros.com.br/wp-content/uploads/2021/11/2019-11-12-quais-sao-os-beneficios-da-atividade-fisica-para-caes-1280x720-1.jpg",
      "https://lh3.googleusercontent.com/proxy/JTxmh18uhE6fLQ91JMAXMDCgjcJXWnJa16_ql84XZWBnvSnUZ4NgS2WxmeaG_9CqDvgULKhBbEpbCGLgCRA24j4U0I_U_DK3StV5kJPqIPJPURA57HFX_Af4OcE8Z3lzPAOUfckHPOjv",
    ],
    caseTitles: ["Cão em Forma", "Gato Brincalhão"],
    caseDescriptions: [
      "Um cão que pratica exercícios regularmente é saudável e feliz.",
      "Um gato que brinca diariamente se mantém ativo e saudável.",
    ],
    videoTitle: "Assista ao Vídeo sobre Atividade Física para Pets",
    videoDescription:
      "Neste vídeo, você encontrará dicas sobre como manter seu pet ativo e saudável.",
    videoUrl: "https://www.youtube.com/embed/fJ0-v-YuxCE?si=-o36kt541Utq2s80",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      "Guia de Passeios Seguros com o Seu Pet",
      "Obesidade em Cães e Gatos: Causas e Consequências", id: 13,
    ],
  },
  {
    id: 26,
    mainTitle: "Doença Respiratória em Gatos: Como Prevenir",
    mainSubtitle: "Dicas para manter a saúde respiratória dos felinos.",
    benefitSectionTitle: "Importância da Prevenção",
    benefitSubtitle1: "Saúde Geral",
    benefitSubtitle2: "Conforto do Animal",
    timingSectionTitle: "Identificando Sintomas",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você já notou seu gato espirrando ou com dificuldade para respirar?",
    introduction:
      "A saúde respiratória dos gatos é vital para o seu bem-estar. Neste artigo, discutiremos como prevenir doenças respiratórias em felinos.",
    benefitDescription1:
      "Manter a saúde respiratória do seu gato contribui para uma vida mais longa e saudável.",
    benefitDescription2:
      "Gatos com boa saúde respiratória são mais ativos e felizes.",
    behaviorDescription:
      "Gatos doentes podem apresentar letargia, perda de apetite e dificuldade para respirar.",
    timingDescription1:
      "Preste atenção a sinais como tosse, espirros e secreção nasal.",
    timingDescription2:
      "A vacinação e a manutenção de um ambiente limpo são essenciais para prevenir doenças.",
    userPromptDescription:
      "Pense na saúde do seu gato. Você está fazendo o suficiente para proteger suas vias respiratórias?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjO6uR27iXHPHL9oLhc8WDgHuC1BkT9x9kWw&s",
      "https://www.patasdacasa.com.br/sites/default/files/noticias/2020/03/asma-felina-entenda-mais-sobre-a-acao-da-doenca-respiratoria-nos-gatos.jpg",
    ],
    caseTitles: ["Gato Recuperado", "Prevenção Eficaz"],
    caseDescriptions: [
      "Um gato com sintomas de doença respiratória foi tratado e agora vive feliz e saudável.",
      "Gatos vacinados regularmente apresentam menos casos de doenças respiratórias.",
    ],
    videoTitle: "Assista ao Vídeo sobre Doença Respiratória em Gatos",
    videoDescription:
      "Neste vídeo, você aprenderá sobre a prevenção de doenças respiratórias em gatos.",
    videoUrl: "https://www.youtube.com/embed/SmoVQCXn2Gw?si=KkfOnIlF1pTBo6WX",   
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: ["Cuidados Gerais com Gatos", "Doenças Comuns em Gatos"],
  },
  {
    id: 27,
    mainTitle: "Alimentação Natural: Benefícios e Cuidados",
    mainSubtitle: "O que você precisa saber sobre a dieta natural para pets.",
    benefitSectionTitle: "Vantagens da Alimentação Natural",
    benefitSubtitle1: "Nutrição Balanceada",
    benefitSubtitle2: "Aumento da Energia",
    timingSectionTitle: "Cuidados na Alimentação Natural",
    userInteractionTitle: "Saiba que",
    userQuestion:
      "Você já considerou mudar a dieta do seu pet para uma alimentação natural?",
    introduction:
      "A alimentação natural pode trazer muitos benefícios para a saúde dos pets. Neste artigo, exploraremos suas vantagens e os cuidados necessários.",
    benefitDescription1:
      "Uma dieta balanceada ajuda a manter o peso ideal e a saúde geral.",
    benefitDescription2:
      "Pets com alimentação natural tendem a ter mais energia e disposição.",
    behaviorDescription:
      "Os pets podem mostrar mais vitalidade e um pelo mais brilhante com uma alimentação adequada.",
    timingDescription1:
      "É importante garantir que a dieta contenha todos os nutrientes essenciais.",
    timingDescription2:
      "Consulte um veterinário ou nutricionista especializado antes de fazer mudanças na dieta do seu pet.",
    userPromptDescription:
      "Pense sobre a alimentação do seu pet. Você sabe o que é realmente saudável para ele?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5nbliIvbjBnziWTbsAJDNItEWEK7vxZwIA&s",
      "https://formulanimal.com.br/wp-content/uploads/2023/05/Blog_2.jpg",
    ],
    caseTitles: ["Mudança Bem-Sucedida", "Consultoria Profissional"],
    caseDescriptions: [
      "Um cão que passou de ração industrial para alimentação natural apresentou melhora na saúde e energia.",
      "Um gato recebeu orientação nutricional e melhorou a saúde em geral com uma dieta equilibrada.",
    ],
    videoTitle: "Assista ao Vídeo sobre Alimentação Natural",
    videoDescription:
      "Neste vídeo, você encontrará informações sobre como preparar uma alimentação saudável para o seu pet.",
    videoUrl: "https://www.youtube.com/embed/h8B264bLVog?si=S-BzB1HDhqkOoZBA",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      "Nutrição para Cães e Gatos",
      "A Importância da Hidratação em Pets",
    ],
  },
  {
    id: 28,
    mainTitle: "Como Escolher Brinquedos para o Seu Pet",
    mainSubtitle: "Dicas para selecionar os brinquedos ideais.",
    benefitSectionTitle: "Importância dos Brinquedos",
    benefitSubtitle1: "Estímulo Mental",
    benefitSubtitle2: "Atividade Física",
    timingSectionTitle: "Dicas para Escolher Brinquedos",
    userInteractionTitle: "Saiba que",
    userQuestion: "Quais brinquedos o seu pet mais gosta de brincar?",
    introduction:
      "Brinquedos são essenciais para o bem-estar dos pets. Neste artigo, vamos discutir como escolher os melhores brinquedos para seu animal de estimação.",
    benefitDescription1:
      "Brinquedos estimulam a mente do seu pet e evitam o tédio.",
    benefitDescription2:
      "A atividade física promovida pelos brinquedos ajuda a manter um peso saudável.",
    behaviorDescription:
      "Pets que brincam regularmente tendem a ser mais felizes e menos destrutivos.",
    timingDescription1:
      "Escolha brinquedos de acordo com o tamanho e a força do seu pet.",
    timingDescription2:
      "Varie os tipos de brinquedos para manter o interesse do seu pet.",
    userPromptDescription:
      "Reflita sobre os brinquedos que seu pet mais gosta. Eles estão ajudando na sua diversão e saúde?",
    images: [
      "https://caoemcompanhia.com.br/wp-content/uploads/2016/11/brinquedo-cachorro.jpg",
      "https://meuverdejardim.com.br/wp-content/uploads/2023/05/Natureza-melhores-brinquedos-cachorros-funcoes.webp",
    ],
    caseTitles: ["Brinquedos Interativos", "Variedade de Brinquedos"],
    caseDescriptions: [
      "Um cão que começou a usar brinquedos interativos se tornou mais ativo e feliz.",
      "Um gato com acesso a diferentes tipos de brinquedos se tornou mais brincalhão e menos estressado.",
    ],
    videoTitle: "Assista ao Vídeo sobre Brinquedos para Pets",
    videoDescription:
      "Neste vídeo, você verá como escolher os melhores brinquedos para seu animal de estimação.",
    videoUrl: "https://www.youtube.com/embed/cS5HeVCBjkk?si=krwQwD5a86cdZnMD",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      "Dicas de Enriquecimento para Pets",
      "A Importância do Exercício para Pets",
    ],
  },
  {
    id: 29,
    mainTitle: "Infecções Urinárias em Cães: Causas e Tratamentos",
    mainSubtitle: "Reconheça os sintomas e saiba como tratar.",
    benefitSectionTitle: "Principais Benefícios do Tratamento",
    benefitSubtitle1: "Alívio Imediato",
    benefitSubtitle2: "Prevenção de Complicações",
    timingSectionTitle: "Causas e Tratamentos",
    userInteractionTitle: "Saiba que",
    userQuestion: "Você percebeu mudanças no comportamento urinário do seu cão?",
    introduction: 
      "Infecções urinárias são um problema comum em cães e podem causar desconforto e dor. Neste artigo, discutiremos suas causas, sintomas e opções de tratamento para garantir o bem-estar do seu pet.",
    benefitDescription1: 
      "O tratamento rápido alivia a dor e desconforto associados às infecções urinárias.",
    benefitDescription2: 
      "Tratar as infecções urinárias a tempo previne complicações como problemas renais ou infecções recorrentes.",
    behaviorDescription: 
      "Cães com infecções urinárias podem apresentar sinais como dificuldade para urinar, aumento da frequência urinária e presença de sangue na urina.",
    timingDescription1: 
      "As infecções urinárias geralmente são causadas por bactérias, mas condições como diabetes, problemas anatômicos e até infecções de pele podem aumentar o risco.",
    timingDescription2: 
      "O tratamento inclui antibióticos prescritos por um veterinário, e é fundamental completar o ciclo de medicação para evitar resistência bacteriana.",
    userPromptDescription: 
      "Observe o comportamento urinário do seu cão. Mudanças, como esforço ao urinar ou aumento da sede, podem ser sinais de infecção.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjkiTLszWOfS7PDdrs4T7DMI5xAorq9pqyA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTtT-1pOWRKmubL8RYc9YyrgzuqDrBA5VRg&s"
    ],
    caseTitles: ["Cão Tratado", "Detecção Precoce"],
    caseDescriptions: [
      "Um cão que foi diagnosticado com infecção urinária e tratado adequadamente voltou a urinar normalmente e sem dor.",
      "A detecção precoce dos sintomas ajudou no diagnóstico e tratamento rápido, evitando complicações graves."
    ],
    videoTitle: "Assista ao Vídeo sobre Infecções Urinárias em Cães",
    videoDescription: 
      "Neste vídeo, você aprenderá a identificar os sintomas de infecções urinárias em cães e como tratá-las de forma eficaz.",
    videoUrl: "https://www.youtube.com/embed/rq7IAsN6hto?si=vJXKe5T61CoNZfgD",
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      "Cuidados com a Saúde Urinária em Cães",
      "Sintomas Comuns em Cães"
    ]
},
  {
    id: 30,
    mainTitle: "Adestramento Positivo: O que é e como fazer?",
    mainSubtitle: "Métodos eficazes para treinar seu pet.",
    benefitSectionTitle: "Vantagens do Adestramento Positivo",
    benefitSubtitle1: "Melhoria no Comportamento",
    benefitSubtitle2: "Fortalecimento do Vínculo",
    timingSectionTitle: "Dicas para o Adestramento",
    userInteractionTitle: "Saiba que",
    userQuestion: "Você já tentou adestrar seu pet? Quais métodos você usou?",
    introduction:
      "O adestramento positivo é uma abordagem eficaz que utiliza recompensas para ensinar comportamentos desejados. Neste artigo, discutiremos seus benefícios e como aplicá-lo.",
    benefitDescription1:
      "O adestramento positivo ajuda a corrigir comportamentos indesejados sem punições.",
    benefitDescription2:
      "Reforça o vínculo entre o tutor e o animal, tornando o aprendizado mais agradável.",
    behaviorDescription:
      "Pets que passam por adestramento positivo tendem a ser mais obedientes e confiantes.",
    timingDescription1:
      "O adestramento deve ser iniciado na infância, mas pode ser feito em qualquer idade.",
    timingDescription2:
      "Seja paciente e consistente para obter melhores resultados.",
    userPromptDescription:
      "Reflita sobre as interações que você tem com seu pet. Você está usando reforços positivos suficientes?",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFUd8Cl6nhRdi21hdMIHVgFf0IdIuwrxPYw&s",
      "https://paixaoanimal.com/wp-content/uploads/2022/06/melhores-cursos-de-adestramento-de-caes-site-paixao-animal-3-1.jpg.webp",
    ],
    caseTitles: ["Cão Bem Treinado", "Adoção de Comportamento Positivo"],
    caseDescriptions: [
      "Um cão que foi ensinado com métodos de adestramento positivo tornou-se mais obediente e sociável.",
      "O uso de recompensas durante o treinamento ajudou a adotar comportamentos desejáveis em um gato.",
    ],
    videoTitle: "Assista ao Vídeo sobre Adestramento Positivo",
    videoDescription:
      "Neste vídeo, você aprenderá técnicas de adestramento positivo para melhorar o comportamento do seu pet.",
    videoUrl: "https://www.youtube.com/embed/rfvQOUV0iCs?si=h_yL0G5kbUGSC7LZ",  
    relatedArticlesTitle: "Artigos Relacionados",
    relatedArticles: [
      "Técnicas de Adestramento para Cães",
      "Comportamento Felino: Entendendo seu Gato",
    ],
  },
];

export default articlesData;
