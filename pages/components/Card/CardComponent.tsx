import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CalendarViewWeekOutlinedIcon from '@mui/icons-material/CalendarViewWeekOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import { useRouter } from 'next/navigation';
import { ButtonComponent } from '../Button/ButtonComponent';
import styles from './CardComponent.module.css';

interface CardComponentProps {
    id: string | number;
    empresa: string;
    cargo: string;
    localizacao: string;
    salario: string;
    modalidade: string;
    experiencia: boolean;
    salvo: boolean;
}

export function CardComponent({ ...CardComponentProps }: CardComponentProps) {
    const router = useRouter()
    return (
        <div className={styles.card}>
            <div>
                <p>{CardComponentProps.empresa}</p>
                <h3 className={styles.titulo}>{CardComponentProps.cargo}</h3>
            </div>
            <div className={styles.informacoes}>
                <p className={styles.detalhes}><LocationOnOutlinedIcon />{CardComponentProps.localizacao}</p>
                <p className={styles.detalhes}><AttachMoneyOutlinedIcon />{CardComponentProps.salario}</p>
                <p className={styles.detalhes}><CalendarViewWeekOutlinedIcon />{CardComponentProps.modalidade}</p>
                <p className={styles.detalhes}><WorkHistoryOutlinedIcon />{CardComponentProps.experiencia ? 'Com ' : 'Sem '}experiência</p>
            </div>
            <div className={styles.botoes}>
                <ButtonComponent type="primary" action={() => { router.push(`/vaga/${CardComponentProps.id}`) }} text="Acessar vaga" />
                <ButtonComponent type="secondary" action={() => { }} text={CardComponentProps.salvo ? 'Salvo' : 'Salvar'} />
            </div>
        </div>
    )
}