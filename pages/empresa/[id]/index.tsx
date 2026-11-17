import { CardComponent } from '@/utilidades/components/Card/CardComponent'
import { useGetEmpresa } from '@/utilidades/hooks/useGetEmpresa'
import { CircularProgress } from '@mui/material'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import style from './empresa.module.css'

export default function Empresa() {
    const params = useParams()
    const [empresaID, setEmpresaID] = useState<number | undefined>(undefined)
    const { useGetEmpresaRetorno, useGetEmpresaPeding } = useGetEmpresa({ id: empresaID })

    useEffect(() => {
        params && setEmpresaID(Number(params.id))
    }, [params]);
    return (
        <div className={style.container}>
            {useGetEmpresaPeding ? <CircularProgress aria-label="Loading…" /> : useGetEmpresaRetorno && (
                <>
                    <h2>{useGetEmpresaRetorno[0].nome}</h2>
                    <div className={style.descricaoContainer}>
                        <div className={style.descricao}>
                            <h3>Sobre a empresa</h3>
                            <p>{useGetEmpresaRetorno[0].descricao}</p>
                        </div>
                        <div className={style.descricao}>
                            <h3>Principais informações</h3>
                            <ul>
                                <li><strong>CNPJ:</strong> {useGetEmpresaRetorno[0].CNPJ}</li>
                                <li><strong>Site:</strong> {useGetEmpresaRetorno[0].site}</li>
                                <li><strong>Telefone:</strong> {useGetEmpresaRetorno[0].telefone}</li>
                                <li><strong>Quantidade de vagas:</strong> {useGetEmpresaRetorno[0].vagas.length}</li>
                                <li><strong>Localidade:</strong> {useGetEmpresaRetorno[0].localidade}</li>
                                <li><strong>Setor:</strong> {useGetEmpresaRetorno[0].setor}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.descricao}>
                        <h3>Vagas disponíveis ({useGetEmpresaRetorno[0].vagas.length})</h3>
                        <div className={style.cardContainer}>
                            {useGetEmpresaRetorno[0].vagas.map((vaga) => (
                                <CardComponent
                                    key={vaga.id}
                                    id={vaga.id}
                                    cargo={vaga.titulo}
                                    empresa={vaga.empresa.nome}
                                    localizacao={vaga.local}
                                    salvo={vaga.vagaSalva}
                                    modalidade={vaga.modalidade}
                                    experiencia={vaga.experiencia}
                                    salario={vaga.salario}
                                />
                            ))}
                        </div>
                    </div></>
            )}

        </div>
    )
}