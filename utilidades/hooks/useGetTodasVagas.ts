import { api, QUERY_KEYS } from "@/utilidades/api";
import { Afirmativas, Cidade, Escala, Escolaridade, Modalidade, Periodo, Vaga } from "@/utilidades/tipos";
import { useQuery } from "@tanstack/react-query";

type FiltrosVagas = {
    id?: number;
    titulo?: string;
    escolaridade?: Escolaridade;
    afirmativa?: Afirmativas[];
    periodo?: Periodo[];
    escala?: Escala[];
    experiencia?: boolean[];
    cidade?: Cidade[];
    modalidade?: Modalidade[];
};

export function useGetTodasVagas(filtros: FiltrosVagas = {}) {

    const { data, isPending, isError, error } = useQuery<Vaga[]>({
        queryKey: [...QUERY_KEYS.vagas, filtros],

        queryFn: async () => {
            const { data } = await api.get<Vaga[]>(
                QUERY_KEYS.vagas[0],
                {
                    params: filtros
                }
            );

            return data;
        },
    });

    return {
        useGetTodasVagasRetorno: data,
        useGetTodasVagasPeding: isPending,
        useGetTodasVagasError: isError,
        useGetTodasVagasErrorMesage: error?.message,
    };
}