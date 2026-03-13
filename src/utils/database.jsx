const database = {
  fiscal: {
    modulo: 'Fiscal',
    categories: [
      {
        id: 'emissão-cte',
        title: 'Emissão de CT-e',
        operations: [
          {
            id: 'cte-normal',
            title: 'CT-e Normal',
            suboperations: [
              {
                id: 'opt-fracionado',
                title: 'OPT Fracionado Geral',
                steps: [
                  {
                    id: 1,
                    instruction:
                      'Antes de mais nada, primeiro devemos consultar todas as notas e verificar se todas possuem o mesmo <em>Remetente</em>, <em>Destinatário</em> e <em>CFOP</em>.',
                  },
                  {
                    id: 2,
                    instruction:
                      'Pós conferência, se todas as informações forem iguais, seguiremos pela ODT (Ordem de transporte) -> A partir de uma tabela de preço.',
                    image: '/images/ODT/InicialODT.jpeg',
                  },
                  {
                    id: 3,
                    instruction:
                      'Começaremos preenchendo de cima para baixo, começando lá do cabeçalho e terminando no rodapé da tela.',
                  },
                  {
                    id: 4,
                    instruction:
                      '1. Filial - Levamos em consideração o Estado em que o veículo está saindo. Temos Filial em Mato Grosso do Sul/MS e Limeira/SP. Se a carga estiver saindo de MS a filial é: Três Lagoas, caso contrário, a filial é: Limeira ',
                  },
                  {
                    id: 5,
                    instruction: `2. Tipo de Frete, levamos em consideração o pagador do frete, se ele diz respeito ao Remetente, então o Tipo de Frete é: PAGO. Se for o destinatário, o Tipo de Frete será: A PAGAR. `,
                  },
                  {
                    id: 6,
                    instruction: '3. Espécie Carga: Produto Acabado ',
                  },
                  {
                    id: 7,
                    instruction:
                      '4. Combinação Veicular está diretamente ligado à tabela de frete, para metalfrio, seja ela Remetente ou Destinatário, será sempre: CONJUNTO CONVENCIONAL 5 EIXOS. Aos demais, será informado no momento da solicitação. ',
                  },
                  {
                    id: 8,
                    instruction:
                      '5. Por último, a Natureza da Carga - Utilizaremos como padrão sempre: Produto Acabado, esporádicamente: Produto Acabado - Devolução.',
                    image: '/images/ODT/cabecalho.jpeg',
                  },
                  {
                    id: 9,
                    instruction:
                      'Abaixo, iremos preencher o Remetente e o Destinatário que estão na nota, escolher o Tipo Serv. CTe: Normal e, logo abaixo, salvar a ODT, nesse momento, irá registrar um Número de ODT lá no topo de cabeçalho.',
                    image: '/images/ODT/corpo.jpeg',
                  },
                  {
                    id: 10,
                    instruction:
                      'Iremos conferir os valores de frete na tabela ao lado, ele deve preencher o FRETE PESO, conforme o valor informado antes da solicitação do CT-e.',
                    image: '/images/ODT/tabela.jpeg',
                  },
                ],
              },
              { id: 'opt-rateio', title: 'OPT Rateio' },
            ],
          },
          {
            id: 'cte-redespacho',
            title: 'CT-e de Redespacho',
            steps: [{ id: 1, instruction: 'qwopdkqpow' }],
          },
          { id: 'cte-subcontratação', title: 'CT-e de Subcontratação' },
          { id: 'cte-devolução', title: 'CT-e de Devolução' },
          { id: 'cte-complementar', title: 'CT-e Complementar' },
        ],
      },
      {
        id: 'mdf-e',
        title: 'Emissão de MDF-e',
        operations: [
          { id: 'mdfe-normal', title: 'MDF-e Normal' },
          { id: 'mdfe-trans', title: 'MDF-e de Transferência' },
          { id: 'percurso', title: 'Percurso Avulso' },
          { id: 'pgto', title: 'Contrato & Descontos' },
        ],
      },
      {
        id: 'gnre',
        title: 'Emissão de Guia GNRE',
        operations: [
          { id: 'gnre-nacional', title: 'GNRE Nacional' },
          { id: 'gnre-pr', title: 'GNRE Paraná' },
          { id: 'gnre-es', title: 'GNRE Espiríto Santo' },
        ],
      },
      {
        id: 'baixa-cte',
        title: 'Baixa de CT-e',
        operations: [{ id: 'baixa', title: 'Baixa/Reativação de CT-e' }],
      },
    ],
  },
  faturamento: {
    modulo: 'Faturamento',
    categories: [{ id: 'nfe', title: 'Emissão de NF-e' }],
  },
  cancelamentos: {
    modulo: 'Cancelamentos',
    categories: [
      { id: 'cancel-cte', title: 'Cancelamento de CT-e' },
      { id: 'cancel-mdf', title: 'Cancelamento de MDF-e' },
      { id: 'cancel-ciot', title: 'Cancelamento de CIOT' },
      { id: 'cancel-pgto', title: 'Cancelamento de Pagamento' },
    ],
  },
  cadastros: {
    modulo: 'Cadastros',
    categories: [
      { id: 'cadmot', title: 'Cadastro de Motoristas' },
      { id: 'cadvec', title: 'Cadastro de Veículos' },
      { id: 'cadopf', title: 'Cadastro de OPF' },
      { id: 'cadforn', title: 'Cadastro de Fornecedores/Clientes' },
      { id: 'engdeg', title: 'Engate/Desengate' },
      { id: 'transf', title: 'Transferência Agregado' },
    ],
  },
  relatorios: {
    modulo: 'Relatórios',
    categories: [
      { id: 'consulcte', title: 'Consulta de CT-e' },
      { id: 'consulmdf', title: 'Consulta de MDF-e' },
      { id: 'consultciot', title: 'Consulta de CIOT' },
      { id: 'ferramentas', title: 'Ferramentas' },
      { id: 'fatura', title: 'Faturas' },
    ],
  },
  erros: {
    modulo: 'Guia de Erros',
    categories: [
      { id: 'erros', title: 'CT-e' },
      { id: 'erros-mdf', title: 'MDF-e' },
      { id: 'erros-pedagio', title: 'Pedágio' },
      { id: 'erros-ciot', title: 'CIOT' },
    ],
  },
};

export default database;
