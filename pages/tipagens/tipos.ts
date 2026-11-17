export type Vaga = {
    id: number;
    titulo: string;
    empresa: {
        id: number;
        nome: string;
    };
    local: string;
    salario: string;
    escala: string;
    experiencia: boolean;
    descricao: string;
    atividades: string[];
    periodo: string;
    horario: string;
    requisitos: string[];
    beneficios: string[];
    diferenciais: string[];
    vagaSalva: boolean;
    modalidade: string;
    vagaCandidatada: boolean;
    dataCurriculoEnviado?: Date;
};

export type Empresa = {
    id: number;
    nome: string;
    CNPJ: string;
    site: string;
    telefone: string;
    vagas: Vaga[];
    setor: string;
    localidade: string;
    descricao: string;
}