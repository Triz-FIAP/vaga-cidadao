export type Vaga = {
    id: number;
    titulo: string;
    empresa: {
        id: number;
        nome: string;
    };
    local: Cidade;
    salario: string;
    escala: Escala;
    experiencia: boolean;
    descricao: string;
    atividades: string[];
    periodo: Periodo;
    horario: string;
    requisitos: string[];
    beneficios: string[];
    diferenciais: string[];
    vagaSalva: boolean;
    modalidade: Modalidade;
    dataCurriculoEnviado?: Date;
    escolaridade: Escolaridade;
    afirmativa: Afirmativas[];
} & StatusCurriculo;

type StatusCurriculo =
    // 1. Usuário ainda não se candidatou
    | {
        curriculoEnviado: false;
        curriculoVisto: false;
        curriculoRejeitado: false;
        curriculoAprovado: false;
    }

    // 2. Currículo enviado, aguardando visualização
    | {
        curriculoEnviado: Date;
        curriculoVisto: false;
        curriculoRejeitado: false;
        curriculoAprovado: false;
    }

    // 3. Currículo visualizado, aguardando decisão
    | {
        curriculoEnviado: Date;
        curriculoVisto: Date;
        curriculoRejeitado: false;
        curriculoAprovado: false;
    }

    // 4. Currículo rejeitado
    | {
        curriculoEnviado: Date;
        curriculoVisto: Date;
        curriculoRejeitado: Date;
        curriculoAprovado: false;
    }

    // 5. Currículo aprovado
    | {
        curriculoEnviado: Date;
        curriculoVisto: Date;
        curriculoRejeitado: false;
        curriculoAprovado: Date;
    };

export type Empresa = {
    id: number;
    nome: string;
    CNPJ: string;
    site: string;
    telefone: string;
    vagas: Vaga[];
    setor: string;
    localidade: Cidade;
    descricao: string;
}

export type Escolaridade = "Educação Infantil" | "Ensino Fundamental" | "Ensino Médio" | "Superior Completo" | "Superior em andamento";
export type Escala = "6x1" | "5x2" | "4x3" | "3x4" | "2x6"
export type Afirmativas = "PCD" | "Pessoa Negra" | "Mulher" | "LGBTQIAPN+" | "Pessoas Trans"
export type Periodo = "Parcial Manhã" | "Parcial Tarde" | "Parcial Noite" | "Integral"
export type Modalidade = "Remoto" | "Presencial" | "Híbrido"
export type Cidade = "Rio de Janeiro" | "São Paulo"