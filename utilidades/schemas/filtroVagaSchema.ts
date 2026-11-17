
import { z } from "zod";

import type {
    Escolaridade,
    Escala,
    Afirmativas,
    Periodo,
    Modalidade,
    Cidade,
} from "../tipos";

const escolaridades = [
    "Educação Infantil",
    "Ensino Fundamental",
    "Ensino Médio",
    "Superior Completo",
    "Superior em andamento",
] as const satisfies readonly Escolaridade[];

const escalas = [
    "6x1",
    "5x2",
    "4x3",
    "3x4",
    "2x6",
] as const satisfies readonly Escala[];

const afirmativas = [
    "PCD",
    "Pessoa Negra",
    "Mulher",
    "LGBTQIAPN+",
    "Pessoas Trans",
] as const satisfies readonly Afirmativas[];

const periodos = [
    "Parcial Manhã",
    "Parcial Tarde",
    "Parcial Noite",
    "Integral",
] as const satisfies readonly Periodo[];

const modalidades = [
    "Remoto",
    "Presencial",
    "Híbrido",
] as const satisfies readonly Modalidade[];

const cidades = [
    "Rio de Janeiro",
    "São Paulo",
] as const satisfies readonly Cidade[];

// Schema
export const filtroVagaSchema = z.object({
    titulo: z.string(),

    escolaridade: z.enum(escolaridades),

    afirmativa: z.array(z.enum(afirmativas)),
    periodo: z.array(z.enum(periodos)),
    escala: z.array(z.enum(escalas)),
    experiencia: z.array(z.boolean()),
    cidade: z.array(z.enum(cidades)),
    modalidade: z.array(z.enum(modalidades)),
});

