import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import './Accordion.css';
import { useLocation } from 'react-router-dom';


interface CustomizedAccordionsProps {
    expanded: string | false;
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>;
  }


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CustomizedAccordions: React.FC<CustomizedAccordionsProps> = ({ expanded, setExpanded }) => {
/* export default function CustomizedAccordions({ expanded, setExpanded }: CustomizedAccordionsProps) { */
   /*  const [expanded, setExpanded] = React.useState<string | false>(getInitialExpandedPanel(path)); */
   const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

    const location = useLocation();
    const path = location.pathname;


/*     const handleChange = (panel: string) => (
        event: React.SyntheticEvent,
        newExpanded: boolean
      ) => {
        setExpanded(newExpanded ? panel : false);
      };
     */

    return (
        <main>
            <Accordion expanded={expanded === 'formasPagamento'} onChange={handleChange('formasPagamento')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Formas de Pagamento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h4>A TOP QUEEN disponibiliza várias formas de pagamento para sua melhor comodidade!</h4>

                        <h5> FORMA DE PAGAMENTO A VISTA (COM DESCONTO DE 10%)</h5>
                        <ul>
                            <li>PIX CELULAR = (11) 77978171 – Favorecido TOP QUEEN</li>

                            <li>BOLETO: ao final da sua compra o boleto é gerado automaticamente.</li>
                        </ul>


                        <h5> FORMA DE PAGAMENTO A PRAZO:</h5>
                        <ul>
                            <li>CARTÃO DE CREDITO: pague suas compras em até 6x sem juros nos cartões de crédito.</li>

                            <li>CARTÃO DE DEBITO/DINHEIRO: Você pode utilizar essas opções de pagamento escolhendo a opção de envio via motoboy (Somente para São Paulo)</li>

                            <li>DEPÓSITO OU TRANSFERÊNCIA: você pode fazer o depósito do valor da sua compra para a seguinte conta:</li>
                        </ul>

                        <h5>NOSSAS CONTAS:</h5>
                        <ul>
                            <li>BANCO SANTANDER (033)</li>
                            <li>AGÊNCIA - 0809</li>
                            <li>CONTA CORRENTE - 13000429-8</li>
                            <li>FAVORECIDO - MAZZE SEMI JOIAS</li>
                            <li>CNPJ: 18.733.197/0001-33</li>

                            <li>BANCO DO BRASIL (001)</li>
                            <li>AGÊNCIA 1622-5</li>
                            <li>CONTA CORRENTE 113.108-7</li>
                            <li>FAVORECIDO - MAZZE SEMI JOIAS</li>
                            <li>CNPJ: 18.733.197/0001-33</li>
                        </ul>

                        <p>Os pagamentos via PIX ou depósito são identificados automaticamente pelo nosso sistema quando o CPF cadastrado no momento da compra for igual ao CPF da conta bancária de origem do pagamento, e o valor exato do valor da sua compra.

                            No caso de CPFs ou valores diferentes, não esqueça de enviar seu comprovante de pagamento para o e-mail:

                            financeiro@mazzesemijoias.com.br

                            Ótimas Compras
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'politicaPrivacidade'} onChange={handleChange('politicaPrivacidade')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Política de Privacidade</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>A Política de Privacidade Online foi criada para reafirmar o nosso compromisso com a sua segurança e privacidade. Como esta política pode ser atualizada, recomendamos que ela seja consultada periodicamente. Você pode visitar nosso site e conhecer os produtos, conferir nossas promoções, ler matérias e textos em geral, sem precisar fornecer nenhuma informação pessoal. Mas, caso exista essa necessidade, esta política procura esclarecer como coletamos e tratamos seus dados:</p>
                        <ul >
                            <li>Todos os dados postados em nosso formulário de cadastro são transmitidos em modo de segurança (SSL - Secure Socket Layer) onde todas as informações são criptografadas e apenas o nosso servidor poderá interpretá-las.</li>

                            <li>As informações do seu cadastro serão criptografadas e armazenadas de modo onde nenhuma pessoa, a não ser os funcionários qualificados da TopQueen, terão acesso.</li>

                            <li>A sua senha é importante para manter seus dados em absoluto sigilo. Por isso, não a forneça para outras pessoas, evitando assim transtornos no futuro. Nenhum funcionário da TopQueen tem acesso para ler ou mudar as senhas dos usuários cadastrados</li>

                            <li>Não divulgaremos para terceiros seus dados cadastrais como nome, telefone, e-mail, etc com o intuito de manter ao máximo a sua privacidade.</li>

                            <li>Utilizaremos, com sua prévia autorização, o seu endereço de e-mail para informá-lo sobre novidades, lançamentos e promoções da TopQueen.</li>

                            <li>Você poderá sempre administrar as suas informações cadastrais clicando na opção "Minha Conta". Nesta seção você poderá atualizar os seus dados cadastrais, mudar sua senha e acompanhar de perto o histórico das suas compras na nossa loja.</li>

                            <li>Você pode solicitar a exclusão dos seus dados seguindo as instruções deste link:  (colocar link da TopQueen que direciona o cliente para exclusão de seu cadastro)</li>
                        </ul>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'politicaReembolso'} onChange={handleChange('politicaReembolso')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Política de Reembolso</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Como solicitar uma devolução por arrependimento:</p>
                        <ul>
                            <li>Faça a solicitação do pedido em até 7 dias contados a partir do recebimento do item.
                                Caso o consumidor não faça a comunicação de desistência à Alteridade, dentro do prazo
                                de 7 (sete) dias corridos, a desistência será recusada e o produto será devolvido no
                                mesmo endereço do remetente, sendo o custo do frete por responsabilidade do consumidor.
                                Em caso de devolução por desistência, o produto deve estar em perfeitas condições de uso.
                                Se houver avarias, danos, riscos de qualquer característica que desclassifique como um produto novo, a devolução será recusada.

                            </li>
                            <li>A desistência da compra deverá ser informada através do e-mail para logistica@mazzesemijoias.com.br,
                                informe seus dados, nome completo, número do pedido.</li>
                        </ul>

                        <p>ATENÇÃO: O produto que não atender às condições exigidas acima, não será aceito como devolução e automaticamente
                            será remetido de volta ao endereço de origem. Nessas condições, a Alteridade se reservará no direito de fazer nova cobrança de frete.</p>

                        <ul>
                            <li>O valor será ressarcido com a mesma forma de pagamento usada para a compra e você não vai precisar pagar nenhum valor extra.</li>
                            <li>Nas compras feitas com o cartão de crédito, o reembolso é feito direto na fatura do cartão. O prazo para o reembolso depende
                                da política de reembolso da operadora do cartão de crédito utilizado na compra</li>
                        </ul>
                        <p>ATENÇÃO: A restituição dos valores será processada somente após o recebimento e análise das condições do(s)
                            produto(s) em nosso Centro de Distribuição. O produto não poderá trazer qualquer indício de uso.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'trocaDevolucoes'} onChange={handleChange('trocaDevolucoes')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Trocas e Devoluções</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Como faço para solicitar uma troca?

                            Entenda como poderá fazer o processo de troca do produto:

                            Toda devolução ou troca de produtos comercializados pela Loja Virtual estão condicionadas à prévia comunicação à Central de Atendimento.</p>

                        <p>Produtos adquiridos na Loja Virtual poderão ser trocados ou devolvido até 7 dias corridos após a confirmação de entrega.</p>
                        <ul>
                            <li>Devolução por desistência ou arrependimento de compra;</li>
                            <li>Troca normal de tamanho ou numeração;</li>
                            <li>Troca decorrente de defeito de fabricação do produto;</li>
                        </ul>

                        <span>Joias em promoção NÃO serão trocados em nenhum caso</span>

                        <h5>COMO FAZER?</h5>
                        <span>Comunique a nossa central por e-mail: logistica@mazzesemijoias.com.br especificando sua solicitação de troca ou devolução, informando:</span>
                        <ul>

                        </ul>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'prazoEntrega'} onChange={handleChange('prazoEntrega')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>Prazo de Entrega</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h5>COMO SE REALIZAM OS ENVIOS E QUAL É O PRAZO</h5>
                        <p>As entregas da TopQueen são realizadas através dos Correios, antes de cada envio nosso sistema calcula qual amelhor opção de acordo com o seu endereço. Dessa forma conseguimos que seu pedido cegue até você no meor tempo possível.</p>
                        <p>ATENÇÃO: O prazo de entrega começa a contr a partir da data de aprovação do pagamento</p>

                        <ul>
                            <p>O prazo de entrega dependerá do seu CEP e também da modalidade de entrega escolhida. Oferecemos 2 tipos de entrega:</p>
                            <li>PADRÃO</li>
                            <li>EXPRESSO</li>
                        </ul>

                        <p>Fique tranquila,antes da finalização da sua compra, aparecerão as formas de envio, os prazos e o valor de cada uma delas para que você possa escolher!</p>
                        <p>O valor do frete é calculado de acordo com o peso e volume da compra d acordo com atabela dos Correios, sendo informado no momento da finalização do pedido.</p>
                        <p>O prazo de entrega varia de acordo com a cidade, o estado e o tipo de frete escolhido na hora da compra, nossos produtos são enviados com transportadores vinculadas ao Correios. O prazo de envio é contado a partir da confirmação do pagamento. Em caso de uso de cartão a administradora pode demorar até 24 horas para notificarmos sobre o pagamento.</p>
                        <p>Compras realizadas e aprovadas até a meia-noite serão despachadas no dia seguinte em caso de dia útil.</p>
                        <p>Pedidos realizado aso sábados, domingos ou feriados serão despachados no primeiro dia útil subsequente à autorização da administradora do cartão de crédito ou instituição financeira.</p>
                        <p>Caso tenha algum atraso com sua entrega, a responsabilidade é repassada aos Correios, uma vez que já possua o código de rastreio da sua compra, sugerimos que acesse site dos correios e verifique o prazo neste link: http://www.correios.com.br/rastreamento</p>
                        <p>Boas Compras!</p>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'compraSegura'} onChange={handleChange('compraSegura')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>Compra Segura</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Comprar na TOP QUEEN é muito rápido, fácil e seguro.

                            Para você realizar a sua compra é muito fácil é só seguir os passos:

                            Acesse o site e faça o seu Login

                            Caso você não tenha um, cadastre-se e preencha todos os seus dados, confira se todos os campos estão preenchidos corretamente e confirme. Após a confirmação do seu cadastro você poderá iniciar a suas compras.

                            Em todos os produtos terá o botão COMPRAR para você adicionar o produto no seu carrinho.

                            Quando você terminar a sua compra é só clicar no botão FINALIZAR COMPRA na página do carrinho, ele te levará a páginas de confirmação de cadastro e formas de pagamento.

                            Agora que você já sabe como comprar seja muito bem vindo (a) e fique à vontade. A TOP QUEEN agradece desde já a sua preferência.


                            Boas Compras!</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </main>
    );
}
export default CustomizedAccordions;