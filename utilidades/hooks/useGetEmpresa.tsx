
import { api, QUERY_KEYS } from "@/utilidades/api";
import { Empresa } from "@/utilidades/tipos";
import { useQuery } from "@tanstack/react-query";

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
