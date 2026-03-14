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
                  {
                    id: 11,
                    instruction:
                      'Valores conferidos, então passaremos ao setor de notas fiscais, é onde nós vamos incluir todas as notas que nós possuímos na mão, mencionando cada campo da nota em seu devido lugar na Ordem de Transportes.',
                  },
                  {
                    id: 12,
                    instruction:
                      '1. A chave de acesso da nota fiscal, toda a numeração compõe 44 números no total. Sendo eles: O ano, o CNPJ da empresa emitente da NF, o número da nota, a série da nota e, os números finais que são compostos por um algoritmo gerador de números aleatórios, baseado nas primeiras numerações da NF.',
                  },
                  {
                    id: 13,
                    instruction: '2. A data de emissão da nota fiscal.',
                  },
                  {
                    id: 14,
                    instruction:
                      '3. O Produto transportado (Descrição do Produto) na nota, podemos utilizar sempre o código CFNF, conforme a nota fiscal.',
                  },
                  {
                    id: 15,
                    instruction:
                      '4. Por último: Quantidade, volume e valor. Quantidade mencionada na nota fiscal, volume (sempre o PESO BRUTO mencionado na nota fiscal) e   valor (sempre utilizamos o VALOR TOTAL DA NOTA FISCAL).',
                    image: '/images/ODT/nf1.jpeg',
                  },
                  {
                    id: 16,
                    instruction:
                      'Abaixo, um print da mesma tela, porém, a continuação da inserção das informações da nota fiscal.',
                    image: '/images/ODT/nf2.jpeg',
                  },
                  {
                    id: 17,
                    instruction:
                      'Após inserir todas as notas, o passo final para a criação da Ordem de transporte é ir em Adicionais de Frete, a segunda aba no topo da tela, acima do cabeçalho.',
                  },
                  {
                    id: 18,
                    instruction:
                      'Aqui, nós devemos preencher uma etapa de transporte, para primeiros casos, sempre usaremos Coleta / Entrega. Basta clicar no botão de incluir, selecionar o tipo de Etapa de Transporte e clicar em salvar.',
                    image: '/images/ODT/etapas.jpeg',
                  },
                  {
                    id: 19,
                    instruction:
                      'Feito isso, a ordem estará criada e preparada para ser inserida na OPT(Operação de Transporte) de Fracionado Geral.',
                  },
                  {
                    id: 20,
                    instruction:
                      'Partindo para a Ordem de Transporte seguindo a imagem abaixo, estaremos no processo final de criação de um Conhecimento de Transporte.',
                    image: '/images/ODT/opt.jpeg',
                  },
                  {
                    id: 21,
                    instruction:
                      'Aqui, nós preencheremos os dados do motorista que irá conduzir o caminhão, do conjunto Cavalo/Carreta que irá transportar, do conferente que está fazendo a documentação e por último, a rota que ele irá fazer.',
                  },
                  {
                    id: 22,
                    instruction:
                      '1. A Filial deve ser a mesma filial que foi mencionada no cabeçalho da OPT.',
                  },
                  {
                    id: 23,
                    instruction:
                      '2. Tipo Frete - Aqui devemos saber qual modalidade será feita o transporte, a carga será transportada por um motorista de frota própria, ou um motorista terceiro/agregado da empresa. Muito importante marcar a opção correta, ela serve para filtrar os caminhões que serão mostrados no momento em que tentar selecionar um conjunto.',
                  },
                  {
                    id: 24,
                    instruction:
                      '3. O Conferente a ser mencionado na OPT, é a própria pessoa que está conduzindo a emissão.',
                  },
                  {
                    id: 25,
                    instruction:
                      '4. Veic. Tração - É o conjunto que será utilizado para transportar a carga.',
                  },
                  {
                    id: 26,
                    instruction:
                      '5. No. Rota - É o Número da rota que o motorista fará o transporte, caso não saiba o número da rota, é possível filtrar pela cidade de origem e cidade de destino mencionado na nota fiscal.',
                    image: '/images/ODT/cabecalhoopt.jpeg',
                  },
                  {
                    id: 27,
                    instruction:
                      'Ainda na mesma tela, porém, um pouco mais abaixo, deveremos incluir aquela ordem de transporte que fizemos anteriormente.',
                    image: '/images/ODT/inserirodt.jpeg',
                  },
                  {
                    id: 28,
                    instruction:
                      'Com a ordem inserida, o passo final é criar o CT-e (Conhecimento de Transporte Eletrônico) na sub-aba CTe / NFSe',
                  },
                  {
                    id: 29,
                    instruction:
                      'Nessa tela, possuem poucos cliques, mas deve ser feito na ordem correta. Primeiro iremos clicar em MARCAR TODOS e EMITIR CTRC. Nesse momento, se não houver nenhum erro, o CT-e já irá ser criado, porém, ainda não autorizado.',
                  },
                  {
                    id: 30,
                    instruction:
                      'Para autorizarmos, iremos clicar em MARCAR TODOS novamente, e <strong>EMITIR CTE</strong>. Repare que na coluna: Sit. Atual SEFAZ, deverá conter a informação: <strong>Autorizado</strong>. Se sim, está tudo certo e o processo finaliza por aqui.',
                    images: '/images/ODT/cte.jpeg',
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
          {
            id: 'cte-devolução',
            title: 'CT-e de Devolução',
            suboperations: [
              { id: 'dev-fracionado', title: 'OPT Fracionado Geral' },
              { id: 'dev-rateio', title: 'OPT Rateio' },
            ],
          },
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
      {
        id: 'cancel-cte',
        title: 'Cancelamento de CT-e',
        operations: [
          {
            id: 'cte-cancel-naoaut',
            title: 'Cancelamento de CT-e não autorizado',
          },
          { id: 'cte-cancel-aut', title: 'Cancelamento de CT-e autorizado' },
        ],
      },
      {
        id: 'cancel-mdf',
        title: 'Cancelamento de MDF-e',
        operations: [
          {
            id: 'mdf-cancel-naoaut',
            title: 'Cancelamento de MDF-e não autorizado',
          },
          { id: 'mdf-cancel-aut', title: 'Cancelamento de MDF-e autorizado' },
        ],
      },
      {
        id: 'cancel-ciot',
        title: 'Cancelamento de CIOT',
        operations: [{ id: 'ciot-cancel', title: 'Cancelamento de CIOT' }],
      },
      {
        id: 'cancel-pgto',
        title: 'Cancelamento de Pagamento',
        operations: [
          { id: 'pgto-cancel', title: 'Cancelamento de PGTO emitido' },
        ],
      },
    ],
  },
  cadastros: {
    modulo: 'Cadastros',
    categories: [
      {
        id: 'cadmot',
        title: 'Cadastro de Motoristas',
        operations: [
          {
            id: 'cadastro-mot',
            title: 'Cadastro de Motoristas',
          },
        ],
      },
      {
        id: 'cadvec',
        title: 'Cadastro de Veículos',
        operations: [
          { id: 'cadastro-veic', title: 'Cadastro de Veículos Frota' },
          { id: 'cadastro-veic-terc', title: 'Cadastro de Veículos Terceiros' },
        ],
      },
      {
        id: 'cadopf',
        title: 'Cadastro de OPF',
        operations: [
          {
            id: 'cadastro-opf',
            title: 'Cadastro de Operação Fornecedor (OPF)',
          },
        ],
      },
      {
        id: 'cadforn',
        title: 'Cadastro de Fornecedores/Clientes',
        operations: [
          { id: 'cadastro-forn', title: 'Cadastro de Fornecedores' },
          { id: 'cadastro-clientes', title: 'Cadastro de Clientes' },
        ],
      },
      {
        id: 'engdeg',
        title: 'Engate/Desengate',
        operations: [{ id: 'engate-desengate', title: 'Engates e Desengates' }],
      },
      {
        id: 'transf',
        title: 'Transferência Agregado',
        operations: [
          {
            id: 'transferencia',
            title: 'Transferência de Terceiros/Agregados',
          },
        ],
      },
    ],
  },
  relatorios: {
    modulo: 'Relatorios',
    categories: [
      {
        id: 'consulcte',
        title: 'Consulta de CT-e',
        operations: [
          { id: 'consulta-cte', title: 'Consulta de CT-e total' },
          { id: 'consulta-cte-p', title: 'Consulta de CT-e com parâmetros' },
        ],
      },
      {
        id: 'consulmdf',
        title: 'Consulta de MDF-e',
        operations: [
          { id: 'consulta-mdf', title: 'Consulta de MDF-e total' },
          { id: 'consulta-mdf-p', title: 'Consulta de MDF-e com parâmetro' },
        ],
      },
      {
        id: 'consultciot',
        title: 'Consulta de CIOT',
        operations: [{ id: 'consulta-ciot', title: 'Consulta de CIOT' }],
      },
      {
        id: 'ferramentas',
        title: 'Ferramentas',
        operations: [
          { id: 'consul-nfe', title: 'Consulta e Validação de NF-e' },
          { id: 'consul-cte', title: 'Consulta de CT-e no sefaz' },
        ],
      },
      {
        id: 'fatura',
        title: 'Faturas',
        operations: [{ id: 'faturas', title: 'Consulta de Faturas total' }],
      },
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
