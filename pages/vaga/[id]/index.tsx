import { ButtonComponent } from '@/pages/components/Button/ButtonComponent';
import Link from 'next/link';
import style from './vaga.module.css';

export default function Vaga() {
    return (
        <div className={style.vagaContainer}>
            <div className={style.vagaHeader}>
                <h2>Analista de tecnologia</h2>
                <Link href="/empresa/2" style={{ textDecoration: 'none' }}>
                    <p>FIAP</p>
                </Link>
            </div>
            <div className={style.vagaBody}>
                <div className={style.descricao}>
                    <h3>Descrição da vaga</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloremque et facere corrupti facilis explicabo adipisci veniam cum temporibus soluta reiciendis non consectetur labore mollitia suscipit quia officia, tempore inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta suscipit dicta nesciunt, nisi in reiciendis maxime pariatur harum numquam voluptatum assumenda quod. Dolorem eius tempore ipsa dolor architecto voluptate!</p>
                </div>
                <div className={style.descricao}>
                    <h3>Principais atividades</h3>
                    <div className={style.atividadesContainer}>
                        <p className={style.atividade}>Desenvolver Software</p>
                        <p className={style.atividade}>Fazer CI/CD</p>
                        <p className={style.atividade}>Desenvolver Software</p>
                        <p className={style.atividade}>Fazer CI/CD</p>
                    </div>
                </div>

                <div className={style.descricao}>
                    <h3>Principais informações</h3>
                    <ul>
                        <li>Presencial</li>
                        <li>Escala</li>
                        <li>Manhã: 08h00 - 12h</li>
                        <li>R$1.000 - R$2.000</li>
                        <li>Sem experiência</li>
                    </ul>
                </div>
                <div className={style.descricao}>
                    <h3>Requisitos</h3>
                    <ul>
                        <li>Conhecimento em X, Y, Z</li>
                        <li>Dois anos como Analista</li>
                        <li>Curso Superior completo em X, Y, Z</li>
                        <li>Conhecimento em X, Y, Z</li>
                        <li>Conhecimento em X, Y, Z</li>
                    </ul>
                </div>
                <div className={style.descricao}>
                    <h3>Diferenciais</h3>
                    <ul>
                        <li>Conhecimento em X, Y, Z</li>
                        <li>Dois anos como Analista</li>
                        <li>Curso Superior completo em X, Y, Z</li>
                        <li>Conhecimento em X, Y, Z</li>
                        <li>Conhecimento em X, Y, Z</li>
                    </ul>
                </div>
                <div className={style.descricao}>
                    <h3>Benefícios</h3>
                    <ul>
                        <li>Conhecimento em X, Y, Z</li>
                        <li>Dois anos como Analista</li>
                        <li>Curso Superior completo em X, Y, Z</li>
                        <li>Conhecimento em X, Y, Z</li>
                        <li>Conhecimento em X, Y, Z</li>
                    </ul>
                </div>
            </div>
            <div className={style.vagaFooter}>
                <ButtonComponent text="Candidatar-se" action={() => { }} type='primary' />
                <ButtonComponent text="Salvar" action={() => { }} type='secondary' />
            </div>
        </div>
    );
}