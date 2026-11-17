
import { useQuery } from "@tanstack/react-query";
import { api, QUERY_KEYS } from "../api";
import { Vaga } from "@/pages/tipagens/tipos";

export function useGetTodasVagas({ id }: { id?: number }) {
    const { data, isPending, isError, error } = useQuery<Vaga[]>({
        queryKey: [...QUERY_KEYS.vagas, id],

        queryFn: async () => {
            const { data } = await api.get<Vaga[]>(
                QUERY_KEYS.vagas[0],
                {
                    params: { id }
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
