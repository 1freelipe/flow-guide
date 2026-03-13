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
                      'Antes de mais nada, primeiro devemos consultar todas as notas e verificar se todas possuem o mesmo Remetente, Destinatário e CFOP.',
                  },
                  {
                    id: 2,
                    instruction:
                      'Pós conferência, se todas as informações forem iguais, seguiremos pela ODT (Ordem de transporte) -> A partir de uma tabela de preço.',
                    image: '/images/ODT/InicialODT.jpeg',
                  },
                  {
                    id: 2,
                    instruction:
                      'Pós conferência, se todas as informações forem iguais, seguiremos pela ODT (Ordem de transporte) -> A partir de uma tabela de preço.',
                    image: '/images/ODT/InicialODT.jpeg',
                  },
                  {
                    id: 2,
                    instruction:
                      'Pós conferência, se todas as informações forem iguais, seguiremos pela ODT (Ordem de transporte) -> A partir de uma tabela de preço.',
                    image: '/images/ODT/InicialODT.jpeg',
                  },
                  {
                    id: 2,
                    instruction:
                      'Pós conferência, se todas as informações forem iguais, seguiremos pela ODT (Ordem de transporte) -> A partir de uma tabela de preço.',
                    image: '/images/ODT/InicialODT.jpeg',
                  },
                  {
                    id: 2,
                    instruction:
                      'Pós conferência, se todas as informações forem iguais, seguiremos pela ODT (Ordem de transporte) -> A partir de uma tabela de preço.',
                    image: '/images/ODT/InicialODT.jpeg',
                  },
                  {
                    id: 2,
                    instruction:
                      'Pós conferência, se todas as informações forem iguais, seguiremos pela ODT (Ordem de transporte) -> A partir de uma tabela de preço.',
                    image: '/images/ODT/InicialODT.jpeg',
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
