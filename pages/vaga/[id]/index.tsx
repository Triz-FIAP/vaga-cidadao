import { ButtonComponent } from '@/pages/components/Button/ButtonComponent';
import Link from 'next/link';
import style from './vaga.module.css';
import { useParams } from 'next/navigation';
import { useGetTodasVagas } from '@/pages/api/hooks/useGetTodasVagas';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Vaga() {
    const params = useParams()
    const [vagaId, setVagaId] = useState<number | undefined>(undefined)
    const { useGetTodasVagasRetorno, useGetTodasVagasPeding } = useGetTodasVagas({ id: vagaId })

    useEffect(() => {
        params && setVagaId(Number(params.id))
    }, [params]);

    return (
        <div className={style.vagaContainer}>
            {useGetTodasVagasPeding ? <CircularProgress aria-label="Loading…" /> : useGetTodasVagasRetorno && (
                <>
                    <div className={style.vagaHeader}>
                        <h2>{useGetTodasVagasRetorno[0].titulo}</h2>
                        <Link href={`/empresa/${useGetTodasVagasRetorno[0].empresa.id}`} style={{ textDecoration: 'none' }}>
                            <p>{useGetTodasVagasRetorno[0].empresa.nome}</p>
                        </Link>
                    </div>
                    <div className={style.vagaBody}>
                        <div className={style.descricao}>
                            <h3>Descrição da vaga</h3>
                            <p>{useGetTodasVagasRetorno[0].descricao}</p>
                        </div>
                        <div className={style.descricao}>
                            <h3>Principais atividades</h3>
                            <div className={style.atividadesContainer}>
                                {
                                    useGetTodasVagasRetorno[0].atividades.map((atividade, index) => (
                                        <p className={style.atividade} key={index}>{atividade}</p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={style.descricao}>
                            <h3>Principais informações</h3>
                            <ul>
                                <li>{useGetTodasVagasRetorno[0].modalidade}</li>
                                <li>Escala: {useGetTodasVagasRetorno[0].escala}</li>
                                <li>{useGetTodasVagasRetorno[0].periodo}: {useGetTodasVagasRetorno[0].horario}</li>
                                <li>{useGetTodasVagasRetorno[0].salario}</li>
                                <li>{useGetTodasVagasRetorno[0].experiencia ? 'Com experiência' : 'Sem experiência'}</li>
                            </ul>
                        </div>
                        <div className={style.descricao}>
                            <h3>Requisitos</h3>
                            <ul>
                                {
                                    useGetTodasVagasRetorno[0].requisitos.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={style.descricao}>
                            <h3>Diferenciais</h3>
                            <ul>
                                {
                                    useGetTodasVagasRetorno[0].diferenciais.map((dif, index) => (
                                        <li key={index}>{dif}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={style.descricao}>
                            <h3>Benefícios</h3>
                            <ul>
                                {
                                    useGetTodasVagasRetorno[0].beneficios.map((beneficios, index) => (
                                        <li key={index}>{beneficios}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={style.vagaFooter}>
                        <ButtonComponent text="Candidatar-se" action={() => { }} type='primary' />
                        <ButtonComponent text="Salvar" action={() => { }} type='secondary' />
                    </div></>
            )}
        </div>
    );
}