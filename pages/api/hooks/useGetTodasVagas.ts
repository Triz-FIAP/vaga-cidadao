// useVagas.ts

import { useQuery } from "@tanstack/react-query";
import { api, QUERY_KEYS } from "../api";

export function useGetTodasVagas() {
    const { data, isPending, isError, error } = useQuery<{ model: retornoVagas }>({
        queryKey: QUERY_KEYS.vagas,
        queryFn: async () => {
            const { data } = await api.get<{ model: retornoVagas }>(QUERY_KEYS.vagas[0]);
            return data;
        },
    });

    return {
        vagas: data,
        pending: isPending,
        hasError: isError,
        errorMessage: error?.message,
    };
}