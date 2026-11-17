import { ButtonComponent } from '@/utilidades/components/Button/ButtonComponent';
import { useGetTodasVagas } from '@/utilidades/hooks/useGetTodasVagas';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import style from './vaga.module.css';

export default function Vaga() {
    const params = useParams()
    const [vagaId, setVagaId] = useState<number | undefined>(undefined)
    const { useGetTodasVagasRetorno, useGetTodasVagasPeding } = useGetTodasVagas({ id: vagaId })

    useEffect(() => {
        params && setVagaId(Number(params.id))
    }, [params]);

    return (
        <main className={style.vagaContainer}>
            {useGetTodasVagasPeding ? <CircularProgress aria-label="Loading…" /> : useGetTodasVagasRetorno && (
                <>
                    <div className={style.vagaHeader}>
                        <h2>{useGetTodasVagasRetorno[0].titulo}</h2>
                        <Link href={`/empresa/${useGetTodasVagasRetorno[0].empresa.id}`} style={{ textDecoration: 'none' }}>
                            <p>{useGetTodasVagasRetorno[0].empresa.nome}</p>
                        </Link>
                    </div>
                    {
                        useGetTodasVagasRetorno[0].curriculoEnviado && <div className={style.curriculo}>
                            <div className={`${style.blocoCurriculo}`}>
                                <h4 className={style.tituloCurriculo}>Currículo enviado</h4>
                                <p className={style.data}>{useGetTodasVagasRetorno[0].curriculoEnviado.toString().split('T')[0]}</p>
                            </div>
                            <ArrowForwardIcon sx={{ opacity: ".5", fontSize: "2rem" }} />
                            <div className={`${style.blocoCurriculo}`}>
                                <h4 className={useGetTodasVagasRetorno[0].curriculoVisto ? style.tituloCurriculo : style.blocoCurriculoDefault}>Currículo Visto</h4>
                                {useGetTodasVagasRetorno[0].curriculoVisto && <p className={style.data}>{useGetTodasVagasRetorno[0].curriculoVisto.toString().split('T')[0]}</p>}
                            </div>
                            <ArrowForwardIcon sx={{ opacity: ".5", fontSize: "2rem" }} />
                            <div className={`${style.blocoCurriculo}`}>
                                {
                                    useGetTodasVagasRetorno[0].curriculoAprovado ?
                                        <>
                                            <h4 className={useGetTodasVagasRetorno[0].curriculoVisto ? style.tituloCurriculo : style.blocoCurriculoDefault}>Currículo Aprovado</h4>
                                            <p className={style.data}>{useGetTodasVagasRetorno[0].curriculoAprovado.toString().split('T')[0]}</p>
                                        </>
                                        : useGetTodasVagasRetorno[0].curriculoRejeitado ?
                                            <>
                                                <h4 className={useGetTodasVagasRetorno[0].curriculoVisto ? style.tituloCurriculo : style.blocoCurriculoDefault}>Currículo Rejeitado</h4>
                                                <p className={style.data}>{useGetTodasVagasRetorno[0].curriculoRejeitado.toString().split('T')[0]}</p>
                                            </>
                                            : <h4 className={style.blocoCurriculoDefault}>Resposta Pendente</h4>

                                }
                            </div>

                        </div>
                    }
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
                        <ButtonComponent text={useGetTodasVagasRetorno[0].curriculoEnviado ? 'Candidatou-se' : 'Canditatar-se'} action={() => { }} type={useGetTodasVagasRetorno[0].curriculoEnviado ? 'inativo' : 'primary'} />
                        <ButtonComponent text={useGetTodasVagasRetorno[0].vagaSalva ? 'Salvo' : 'Salvar'} action={() => { }} type='secondary' />
                    </div></>
            )}
        </main>
    );
}