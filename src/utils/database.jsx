const database = {
  fiscal: {
    modulo: 'Fiscal',
    categories: [
      {
        id: 'emissão-cte',
        title: 'Emissão de CT-e',
        operations: [
          { id: 'cte-normal', title: 'CT-e normal' },
          { id: 'cte-redespacho', title: 'CT-e de Redespacho' },
          { id: 'cte-subcontratação', title: 'CT-e de Subcontratação' },
        ],
      },
      { id: 'mdf-e', title: 'Emissão de MDF-e' },
    ],
  },
  faturamento: {
    modulo: 'Faturamento',
    categories: [{ id: 'nfe', title: 'Emissão de NF-e' }],
  },
};

export default database;
