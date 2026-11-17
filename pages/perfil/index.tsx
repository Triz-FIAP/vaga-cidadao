import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import style from './perfil.module.css';
export default function Perfil() {
    return <div className={style.perfilContainer}>
        <h2>Meus dados</h2>

        <div className={style.informacoesContainer}>
            <div className={style.bloco}>
                <p className={style.destaque}>30</p>
                <p className={style.informacao}>Vagas candidatadas  <LaunchOutlinedIcon /></p>
            </div>
            <div className={style.bloco}>
                <p className={style.destaque}>30</p>
                <p className={style.informacao}>Rejeições  <LaunchOutlinedIcon /></p>
            </div>
            <div className={style.bloco}>
                <p className={style.destaque}>30</p>
                <p className={style.informacao}>Vezes em que o currículo foi visto <LaunchOutlinedIcon /></p>
            </div>
            <div className={style.bloco}>
                <p className={style.destaque}>30</p>
                <p className={style.informacao}>Processos seletivos ativos  <LaunchOutlinedIcon /></p>
            </div>
        </div>

        {/* <p className={style.bloco}><span className={style.destaque}>30</span> <br />vagas candidatadas <LaunchOutlinedIcon /></p>
        <p className={style.bloco}><span className={style.destaque}>30</span> <br />rejeições <LaunchOutlinedIcon /></p>
        <p className={style.bloco}><span className={style.destaque}>30</span> <br />vezes que o currículo foi visto <LaunchOutlinedIcon /></p>
        <p className={style.bloco}><span className={style.destaque}>11</span> <br />processos seletivos ativos <LaunchOutlinedIcon /></p> */}

    </div>;
}