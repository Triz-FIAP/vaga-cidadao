import { useGetTodasVagas } from '@/utilidades/hooks/useGetTodasVagas';
import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { CardComponent } from '../../utilidades/components/Card/CardComponent';
import style from './perfil.module.css';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            tabIndex={0}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Perfil() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const { useGetTodasVagasRetorno } = useGetTodasVagas();

    return <div className={style.perfilContainer}>
        <h2>Minhas candidaturas</h2>

        <Box sx={{ marginBlock: '1rem' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
                '& .MuiTab-root': {
                    color: 'var(--texto) !important',
                },

                '& .Mui-selected': {
                    color: 'var(--roxo-claro) !important'
                },
                '& .MuiTabs-indicator': {
                    backgroundColor: 'var(--roxo-claro) !important',
                }
            }}>
                <Tab label={`Vagas Candidatadas (${useGetTodasVagasRetorno?.filter(vaga => vaga.curriculoEnviado).length})`} {...a11yProps(0)} />
                <Tab label={`Aprovações (${useGetTodasVagasRetorno?.filter(vaga => vaga.curriculoAprovado).length})`} {...a11yProps(1)} />
                <Tab label={`Rejeições (${useGetTodasVagasRetorno?.filter(vaga => vaga.curriculoRejeitado).length})`} {...a11yProps(2)} />
                <Tab label={`Visualizações (${useGetTodasVagasRetorno?.filter(vaga => vaga.curriculoVisto).length})`} {...a11yProps(3)} />
                <Tab label={`Salvas (${useGetTodasVagasRetorno?.filter(vaga => vaga.vagaSalva).length})`} {...a11yProps(4)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <div className={style.cardContainer}>
                {useGetTodasVagasRetorno?.filter(vaga => vaga.curriculoEnviado).map(vaga => (
                    <CardComponent
                        key={vaga.id}
                        cargo={vaga.titulo}
                        empresa={vaga.empresa.nome}
                        salario={vaga.salario}
                        modalidade={vaga.modalidade}
                        experiencia={vaga.experiencia}
                        id={vaga.id}
                        localizacao={vaga.local}
                        salvo={vaga.vagaSalva}
                    />
                ))}
            </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <div className={style.cardContainer}>
                {useGetTodasVagasRetorno?.filter(vaga => vaga.curriculoAprovado).map(vaga => (
                    <CardComponent
                        key={vaga.id}
                        cargo={vaga.titulo}
                        empresa={vaga.empresa.nome}
                        salario={vaga.salario}
                        modalidade={vaga.modalidade}
                        experiencia={vaga.experiencia}
                        id={vaga.id}
                        localizacao={vaga.local}
                        salvo={vaga.vagaSalva}
                    />
                ))}
            </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            <div className={style.cardContainer}>
                {useGetTodasVagasRetorno?.filter(vaga => vaga.curriculoRejeitado).map(vaga => (
                    <CardComponent
                        key={vaga.id}
                        cargo={vaga.titulo}
                        empresa={vaga.empresa.nome}
                        salario={vaga.salario}
                        modalidade={vaga.modalidade}
                        experiencia={vaga.experiencia}
                        id={vaga.id}
                        localizacao={vaga.local}
                        salvo={vaga.vagaSalva}
                    />
                ))}
            </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
            <div className={style.cardContainer}>
                {useGetTodasVagasRetorno?.filter(vaga => vaga.curriculoVisto).map(vaga => (
                    <CardComponent
                        key={vaga.id}
                        cargo={vaga.titulo}
                        empresa={vaga.empresa.nome}
                        salario={vaga.salario}
                        modalidade={vaga.modalidade}
                        experiencia={vaga.experiencia}
                        id={vaga.id}
                        localizacao={vaga.local}
                        salvo={vaga.vagaSalva}
                    />
                ))}
            </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
            <div className={style.cardContainer}>
                {useGetTodasVagasRetorno?.filter(vaga => vaga.vagaSalva).map(vaga => (
                    <CardComponent
                        key={vaga.id}
                        cargo={vaga.titulo}
                        empresa={vaga.empresa.nome}
                        salario={vaga.salario}
                        modalidade={vaga.modalidade}
                        experiencia={vaga.experiencia}
                        id={vaga.id}
                        localizacao={vaga.local}
                        salvo={vaga.vagaSalva}
                    />
                ))}
            </div>
        </CustomTabPanel>
    </div>;
}