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
              {
                id: 'opt-rateio',
                title: 'OPT Rateio',
                steps: [
                  {
                    id: 1,
                    instruction:
                      'Após a conferência das notas, se em alguma delas houver divergência entre: Remetente, Destinatário ou CFOP, é por aqui que faremos o CT-e, e o frete passará a ser um frete fracionado com os valores rateados.',
                    image: '/images/OPTRateio/optrateio.jpeg',
                  },
                  {
                    id: 2,
                    instruction:
                      'Antes de começarmos, é ideal que as notas sejam separadas por CFOP, por remetente, ou por destinatário. Dessa forma, torna-se a conferência muito mais eficaz, caso seja preciso conferir.',
                  },
                  {
                    id: 3,
                    instruction:
                      '1. Assim que entrarmos na tela, devemos preencher o cabeçalho com as informações que serão eficientes para o transporte.',
                  },
                  {
                    id: 4,
                    instruction:
                      '2. Começamos preenchendo a filial levando em consideração a origem do transporte de acordo com a nota fiscal. Possuímos 2 filiais, sendo elas: Três Lagoas em Mato Grosso do Sul e Limeira em São Paulo. Caso a origem do frete não seja em nenhum desses Estados, o frete é feito pela filial de Limeira, exceto quando a operação for Amcor.',
                  },
                  {
                    id: 5,
                    instruction:
                      '3. Tipo de Frete: Aqui levaremos em consideração a modalidade do transporte, se o transporte será feito por um frota ou por um terceiro. É importante marcar a opção correta, pois aqui irá filtrar os conjuntos de acordo com a opção desejada.',
                  },
                  {
                    id: 6,
                    instruction:
                      '4. Motorista e Conferente: Aqui devemos marcar o motorista que fará o transporte, bem como o conferênte emissor da documentação.',
                  },
                  {
                    id: 7,
                    instruction:
                      '5. Cliente Nome: Esse é um dos blocos mais importantes antes de começarmos a emissão, ele é quem irá definir a tabela de preços e qual o cliente que será o pagador do frete. Sendo assim, é de fato necessário muita atenção ao preencher.',
                  },
                  {
                    id: 8,
                    instruction:
                      '6. Veic. Tração: Essa é a parte em que devemos mencionar o caminhão que irá fazer o frete e, nesse bloco é aplicado o filtro do TIPO FRETE. Caso seja frota e o veículo não apareça, o TIPO FRETE está incorreto.',
                  },
                  {
                    id: 9,
                    instruction:
                      '7. Por último, mas não menos importante, devemos marcar o Tipo Serv. CTe. Nesse caso, podemos levar em consideração sempre o tipo normal, exceto em casos esporádicos.',
                    image: '/images/OPTRateio/cabecalho.jpeg',
                  },
                  {
                    id: 10,
                    instruction:
                      'Após preencher todas as informações, poderemos clicar em salvar localizado no rodapé da tela e seguiremos ao próximo passo.',
                  },
                  {
                    id: 11,
                    instruction:
                      'Aqui devemos preencher praticamente todas as colunas que possuem na tela como se estivessemos preenchendo uma planilha no excel. E isso se tornará repetitivo para todas as notas que possuímos na mão.',
                  },
                  {
                    id: 12,
                    instruction:
                      '1. Começamos sempre pela chave de acesso da nota fiscal, ela quem preencherá automaticamente o No NFe e a Série. ',
                  },
                  {
                    id: 13,
                    instruction:
                      '2. Logo após, Data Emissão, CFOP NFe (E aqui devemos tomar muito cuidado ao informar o CFOP, pois ele quem indicará o tipo de produto que está sendo transportado). Seguindo pelo PESO BRUTO informado na nota, QTDE informado na nota e o Valor total da nota fiscal.',
                  },
                  {
                    id: 14,
                    instruction:
                      '3. Código do produto podemos utilizar sempre um padrão de nossa escolha ele irá preencher automaticamente a Descrição do Produto. Pularemos para Espécie da Carga e nesse campo, podemos considerar sempre PRODUTO ACABADO.',
                    image: '/images/OPTRateio/nf1.jpeg',
                  },
                  {
                    id: 15,
                    instruction:
                      '4. Aqui podemos escolher de qual forma vamos preencher o Remetente mencionado na rota. Sugiro que seja sempre pelo CNPJ, pois dessa forma não haverá margem para erros.',
                  },
                  {
                    id: 16,
                    instruction:
                      '5. O mesmo passo acima, serve para preencher o destinatário. Também sugiro que seja utilizado o campo por CNPJ.',
                    image: '/images/OPTRateio/nf2.jpeg',
                  },
                  {
                    id: 17,
                    instruction:
                      '6. Também iremos preencher o Local de Coleta e Local de Entrega de acordo com a nota fiscal. Em uma nota fiscal, podem existir até 4 campos que irão informar a real origem e o real destino de um transporte, eles são: Remetente, Destinatário, Local de Coleta e Local de Entrega. E quando existir os campos de Local de Coleta/Entrega, serão os locais que iremos considerar. Quando não houver essas informações, tanto para o local de Coleta, quanto para o local de Entrega, será considerado o próprio Remetente e Destinatáro.',
                    image: '/images/OPTRateio/nf3.jpeg',
                  },
                  {
                    id: 18,
                    instruction:
                      '7. Na última inserção, são as informações do pagador do frete, nesse caso, devemos considerar o Cliente Nome mencionado lá no cabeçalho.',
                  },
                  {
                    id: 19,
                    instruction:
                      '8. CFOP - Cuidado ao confundir esse campo com o campo preenchido lá no começo, aquele CFOP é o Código Fiscal de Operação do produto transportado, já esse é o Código Fiscal de Operação de Transporte. Esse nós devemos sempre considerar o código 6352 (Prestação de Serviço de Transporte). Ele irá preencher automaticamente a Natureza da Operação que diz respeito a esse código',
                  },
                  {
                    id: 20,
                    instruction:
                      '9. Por último, o Regime Tributário, podemos sempre considerar o 00 - Tributação normal por ICMS. E repetiremos esse mesmo processo para todas as notas que irão contemplar esse mesmo transporte.',
                    image: '/images/OPTRateio/nf4.jpeg',
                  },
                  {
                    id: 21,
                    instruction:
                      'Abaixo, um demonstrativo de como pode ficar uma OPT de Rateio com todas as notas inclusas.',
                    image: '/images/OPTRateio/demonstrativo.jpeg',
                  },
                  {
                    id: 22,
                    instruction:
                      'Após a inserção e conferência de todas as notas fiscais, virá a parte em que criaremos o CT-e para todas as notas de uma vez. ',
                  },
                  {
                    id: 23,
                    instruction:
                      'Entraremos na sub-aba Qtde CTes Ativos, nela devemos clicar em MARCAR TODOS e logo após EMITIR CTRC. Repare que nesse momento, se olharmos para a coluna No CTe, veremos todas as numerações de todos os documentos gerados automaticamente, porém, não autorizados.',
                  },
                  {
                    id: 24,
                    instruction:
                      'Para autorizar todos os documentos, faremos o mesmo processo de MARCAR TODOS e clicar no botão EMITIR CTE. Nesse momento, na coluna demarcada em Azul, devemos conferir se todos os CT-es receberam a situação: Autorizado.',
                    image: '/images/OPTRateio/cte.jpeg',
                  },
                  {
                    id: 25,
                    instruction:
                      'Caso algum não possua a situação <strong>Autorizado</strong>, ao mover as colunas para o lado, podemos conferir em Descrição Status CT-e qual foi o CT-e não autorizado e o motivo dele não ter sido autorizado.',
                    image: '/images/OPTRateio/descricao.jpeg',
                  },
                ],
              },
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
          {
            id: 'cadastro-forn',
            title: 'Cadastro de Fornecedores',
            steps: [
              {
                id: 1,
                instruction:
                  'Para cadastrar um fornecedor que não possui cadastro ativo no sistema, devemos localizar as informações pertinentes a ele e acessar o módulo comercial, local onde possui o caminho para cadastros.',
                image: '/images/CadastroForn/caminho.jpeg',
              },
              {
                id: 2,
                instruction:
                  'O Cadastro é divido em dois caminhos, e você deve saber qual caminho seguir, antes de acessar os cadastros. Para o cadastro ser considerado de Fornecedor, ele deve fornecer algum serviço para a transportadora, nesse caso, fornecer algum terceiro/agregado.',
              },
              {
                id: 3,
                instruction:
                  'Esse mesmo fornecedor, pode ser pessoa física ou pessoa jurídica, basta selecionar ao lado a opção desejada e seguir com o cadastro.',
                image: '/images/CadastroForn/incluir.jpeg',
              },
              {
                id: 4,
                instruction:
                  'Se o Fornecedor for pessoa jurídica, o cadastro fica bem mais simplificado, pois o sistema utiliza de uma API que conversa com o aplicativo da receita federal que nos permite pesquisar o CNPJ digitado <strong>SE</strong> ele existir.',
                image: '/images/CadastroForn/cnpj.jpeg',
              },
              {
                id: 5,
                instruction:
                  'Assim que o campo do CNPJ for preenchido de acordo com o CNPJ do Fornecedor, o botão de busca ficará habilitado e irá buscar exatamente o CNPJ mencionado no campo.',
                image: '/images/CadastroForn/buscacnpj.jpeg',
              },
              {
                id: 6,
                instruction:
                  'Se o CNPJ digitado for encontrado, basta clicar em aplicar, que todas as informações de cadastro serão preenchidas automaticamente. Exceto a Inscrição Estadual, um dos campos mais cruciais que evitará um futuro erro na hora de emitir o CT-e.',
                image: '/images/CadastroForn/buscacnpj2.jpeg',
              },
              {
                id: 7,
                instruction:
                  'Alguns campos além da Inscrição Estadual, terão que ser preenchidos manualmente que são devidamente muito importantes para a finalização do cadastro. Sendo eles: A classificação, que nesse caso é Fornecedor, o checkbox Contribuinte ICMS só deverá ser marcado aos cadastros que possuírem uma Inscrição Estadual e a Situação Atual que, para todos os clientes/fornecedores, poderemos informar <strong>CORRENTE</strong>.',
                image: '/images/CadastroForn/info.jpeg',
              },
              {
                id: 8,
                instruction:
                  'Se o fornecedor for pessoa física, o cadastro passa a ser mais manual, porém, nada mais complicado, apenas com informações a serem preenchidas manualmente. E aí entra não só o CPF, como também, as informações de localização do fornecedor.',
                image: '/images/CadastroForn/cpf.jpeg',
              },
              {
                id: 9,
                instruction:
                  'Por fim, iremos clicar em salvar no rodapé da tela, para as informações concretizarem e partiremos a um último passo que só é cabível ao cadastro de Fornecedores.',
                image: '/images/CadastroForn/salvar.jpeg',
              },
              {
                id: 10,
                instruction:
                  'Após o salvamento, devemos passar para a aba DADOS P/EMISSÃO CIOT, lá iremos preencher o número da ANTT do fornecedor, e consultar essa numeração. O sistema fará uma comunicação com o site da CONSULTA PÚBLICA da ANTT e retornará os dados automaticamente. Note que o campo: CIOT Obr, é o campo que determinará se na hora de fazer um contrato ao motorista que faz parte desse fornecedor, irá gerar uma numeração de CIOT. Esse campo é extremamente crucial, e levaremos em consideração a quantidade de caminhões que o fornecedor em questão possui. O CIOT passa a ser obrigatório ao fornecedor que possui mais de 2 caminhões cadastrados em sua própria ANTT.',
                image: '/images/CadastroForn/antt.jpeg',
              },
            ],
          },
          {
            id: 'cadastro-clientes',
            title: 'Cadastro de Clientes',
            steps: [
              {
                id: 1,
                instruction:
                  'Para cadastrar um Cliente que não possui cadastro ativo no sistema, devemos localizar as informações pertinentes a ele e acessar o módulo comercial, local onde possui o caminho para cadastros.',
                image: '/images/CadastroCli/caminho.jpeg',
              },
              {
                id: 2,
                instruction:
                  'O Cadastro é divido em dois caminhos, e você deve saber qual caminho seguir, antes de acessar os cadastros. Para o cadastro ser considerado de Cliente, ele deve ser um ponto de origem ou destino para finalidade do transporte.',
              },
              {
                id: 3,
                instruction:
                  'Esse cliente tem a possibilidade de ser pessoa física ou pessoa jurídica. Independente da situação, deve-se marcar no canto superior esquerdo.',
                image: '/images/CadastroCli/incluir.jpeg',
              },
              {
                id: 4,
                instruction:
                  'Se o Cliente for pessoa jurídica, o cadastro fica bem mais simplificado, pois o sistema utiliza de uma API que conversa com o aplicativo da receita federal que nos permite pesquisar o CNPJ digitado SE ele existir.',
                image: '/images/CadastroCli/cnpj.jpeg',
              },
              {
                id: 5,
                instruction:
                  'Assim que o campo do CNPJ for preenchido de acordo com o CNPJ do Cliente, o botão de busca ficará habilitado e irá buscar exatamente o CNPJ mencionado no campo.',
                image: '/images/CadastroCli/buscacnpj.jpeg',
              },
              {
                id: 6,
                instruction:
                  'Se o CNPJ digitado for encontrado, basta clicar em aplicar, que todas as informações de cadastro serão preenchidas automaticamente. Exceto a Inscrição Estadual, um dos campos mais cruciais que evitará um futuro erro na hora de emitir o CT-e.',
                image: '/images/CadastroCli/buscacnpj2.jpeg',
              },
              {
                id: 7,
                instruction:
                  'Alguns campos além da Inscrição Estadual, terão que ser preenchidos manualmente que são devidamente muito importantes para a finalização do cadastro. Sendo eles: A classificação, que nesse caso é Cliente, o checkbox Contribuinte ICMS só deverá ser marcado aos cadastros que possuírem uma Inscrição Estadual e a Situação Atual que, para todos os clientes/fornecedores, poderemos informar CORRENTE.',
                image: '/images/CadastroCli/info.jpeg',
              },
              {
                id: 8,
                instruction:
                  'Se o Cliente for pessoa física, o cadastro passa a ser mais manual, porém, nada mais complicado, apenas com informações a serem preenchidas manualmente. E aí entra não só o CPF, como também, as informações de localização do fornecedor.',
                image: '/images/CadastroCli/cpf.jpeg',
              },
              {
                id: 9,
                instruction:
                  'Por fim, iremos clicar em salvar no rodapé da tela, para as informações se concretizarem. Sendo assim o cadastro de clientes está finalizado.',
                image: '/images/CadastroCli/salvar.jpeg',
              },
            ],
          },
        ],
      },
      {
        id: 'engdeg',
        title: 'Engate/Desengate',
        operations: [
          {
            id: 'engate',
            title: 'Engate',
            steps: [
              {
                id: 1,
                instruction:
                  'Todos as carretas deverão ser acopladas com os seus devidos cavalos, e quando se faz necessário o engate/desengate de algum conjunto, é essa parte que devemos acessar.',
                image: '/images/Engate/veiculos.jpeg',
              },
              {
                id: 2,
                instruction:
                  'Após acessado, iremos clicar em Incluir no rodapé da tela, para que seja aberto uma linha e que ela possa ser preenchida com as informações que temos.',
              },
              {
                id: 3,
                instruction:
                  'A linha ficará disponível para preenchimento e devemos ir preenchendo item por item para concluirmos o engate.',
                image: '/images/engate/engate.jpeg',
              },
              {
                id: 4,
                instruction:
                  'Esse passo é passível de poucos cliques, pois uma coluna contempla a outra. Devemos começar buscando o cavalo que terá uma carreta acoplada.',
                image: '/images/Engate/buscaengate.jpeg',
              },
              {
                id: 5,
                instruction:
                  'O Hodometro nada mais é que a kilometragem atual do caminhão, e nesse passo, se torna completamente necessário essa informação para que possamos concluir o engate. É solicitado diretamente ao motorista.',
              },
              {
                id: 6,
                instruction:
                  'Logo após a informação acima, podemos buscar a carreta que será acoplada a esse cavalo.',
                image: '/images/Engate/buscacarreta.jpeg',
              },
              {
                id: 7,
                instruction:
                  'A carreta não possui a informação de Hodometro, esse campo é destinado ao cavalo em que ela está sendo acoplada, podemos zerar esse campo quando solicitado.',
              },
              {
                id: 8,
                instruction:
                  'Por fim, basta apenas salvar no rodapé da tela e o cavalo estará acoplado na carreta selecionada.',
              },
            ],
          },
          {
            id: 'desengate',
            title: 'Desengate',
            steps: [
              {
                id: 1,
                instruction:
                  'Iremos fazer a mesma rota para engatar um veículo no sistema.',
                image: '/images/Engate/veiculos.jpeg',
              },
              {
                id: 2,
                instruction:
                  'Para desengatar devemos apenas excluir o registro de engate antes inserido na mesma tela. Buscamos o cavalo que acabou de ser engatado em uma determinada carreta e exluimos o seu registro.',
                image: '/images/Engate/buscacavalo.jpeg',
              },
              {
                id: 3,
                instruction:
                  'Se houver registro de Engate assim que a placa for buscada, o sistema irá preencher a linha no topo da tela, iremos excluir e salvar e o processo estará finalizado.',
                image: '/images/Engate/desengate.jpeg',
              },
            ],
          },
        ],
      },
      {
        id: 'transf',
        title: 'Transferência Agregado',
        operations: [
          {
            id: 'transferencia',
            title: 'Transferência de Terceiros/Agregados',
            steps: [
              {
                id: 1,
                instruction:
                  'Quando algum terceiro/agregado já tem viagem no sistema registrada e por algum engano ele foi cadastrado em um fornecedor errado, ou até mesmo esse terceiro/agregado trocou de fornecedor, é por esse caminho que faremos a transferência.',
                image: '/images/Transferencia/caminho.jpeg',
              },
              {
                id: 2,
                instruction:
                  'Iremos incluir uma coluna nova, buscar um veículo pela placa e aplicar para que o processo se inicie.',
                image: '/images/Transferencia/veiculo.jpeg',
              },
              {
                id: 3,
                instruction:
                  'Após a seleção do veículo, partiremos para a coluna de Agregado/Terceiro Destino, coluna essa que deverá ser preenchida o novo fornecedor que esse veículo fará a transferência. Basta buscar ele pelo nome e aplicar as informações.',
                image: '/images/Transferencia/agregado.jpeg',
              },
              {
                id: 4,
                instruction:
                  'Para finalizar a operação, basta conferir as informações selecionadas e clicar em salvar no rodapé da tela.',
                image: '/images/Transferencia/salvar.jpeg',
              },
            ],
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
