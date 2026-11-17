interface retornoVagas {
    cargoValido: boolean;
    dados: null | camposVaga[];
    itensPagina: number | string;
    pagina: number | string;
    totalPaginas: number | string;
    totalRegistro: number | string;
    totalVagas: number | string;
}

interface camposVaga {
    chamada: null | string
    cidades: null | string[]
    codigoEdital: null | string
    data: null | string
    dataCadastro: null | string
    dataExpiracao: null | string
    distanciaKm: null | number | string
    empresa: null | string
    expiracaoImpulsao: null | string
    id: number | string
    impulsionada: boolean
    logoThumb: null | string
    nivel: null | string
    pcd: boolean
    recrutamentoCego: null | string
    salario: null | string
    status: null | string
    timestamp: number | string
    tipoProcessoSeletivo: null | string
    titulo: null | string
    trabalhoRemoto: null | string
    trabalhoRemotoTexto: null | string
    url: null | string
    tags: null | { tag: null | string, vagaID: number | string }[]
}