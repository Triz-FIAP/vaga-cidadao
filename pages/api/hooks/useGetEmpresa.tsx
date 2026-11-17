
import { Empresa } from "@/pages/tipagens/tipos";
import { useQuery } from "@tanstack/react-query";
import { api, QUERY_KEYS } from "../api";

export function useGetEmpresa({ id }: { id?: number }) {
    const { data, isPending, isError, error } = useQuery<Empresa[]>({
        queryKey: [...QUERY_KEYS.empresa, id],

        queryFn: async () => {
            const { data } = await api.get<Empresa[]>(
                QUERY_KEYS.empresa[0],
                {
                    params: { id }
                }
            );

            return data;
        },
    });

    return {
        useGetEmpresaRetorno: data,
        useGetEmpresaPeding: isPending,
        useGetEmpresaError: isError,
        useGetEmpresaErrorMesage: error?.message,
    };
}
