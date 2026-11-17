import { CardComponent } from '@/pages/components/Card/CardComponent'
import style from './empresa.module.css'

export default function Empresa() {
    return (
        <div className={style.container}>
            <h2>FIAP</h2>
            <div className={style.descricaoContainer}>
                <div className={style.descricao}>
                    <h3>Sobre a empresa</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloremque et facere corrupti facilis explicabo adipisci veniam cum temporibus soluta reiciendis non consectetur labore mollitia suscipit quia officia, tempore inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta suscipit dicta nesciunt, nisi in reiciendis maxime pariatur harum numquam voluptatum assumenda quod. Dolorem eius tempore ipsa dolor architecto voluptate!</p>
                </div>
                <div className={style.descricao}>
                    <h3>Principais informações</h3>
                    <ul>
                        <li>CNPJ</li>
                        <li>Site</li>
                        <li>Telefone</li>
                        <li>Quantidade de vagas: 12</li>
                        <li>Local</li>
                        <li>Setor</li>
                    </ul>
                </div>
            </div>
            <div className={style.descricao}>
                <h3>Vagas disponíveis (12)</h3>
                <div className={style.cardContainer}>
                    <CardComponent
                        id={1}
                        cargo="Analista de tecnologia"
                        empresa="FIAP"
                        escala="5x2"
                        experiencia={true}
                        localizacao="São Paulo"
                        salario="R$1.000 - R$2.000"
                        salvo
                    />
                    <CardComponent
                        id={1}
                        cargo="Analista de tecnologia"
                        empresa="FIAP"
                        escala="5x2"
                        experiencia={true}
                        localizacao="São Paulo"
                        salario="R$1.000 - R$2.000"
                        salvo
                    />
                    <CardComponent
                        id={1}
                        cargo="Analista de tecnologia"
                        empresa="FIAP"
                        escala="5x2"
                        experiencia={true}
                        localizacao="São Paulo"
                        salario="R$1.000 - R$2.000"
                        salvo
                    />
                    <CardComponent
                        id={1}
                        cargo="Analista de tecnologia"
                        empresa="FIAP"
                        escala="5x2"
                        experiencia={true}
                        localizacao="São Paulo"
                        salario="R$1.000 - R$2.000"
                        salvo
                    />
                    <CardComponent
                        id={1}
                        cargo="Analista de tecnologia"
                        empresa="FIAP"
                        escala="5x2"
                        experiencia={true}
                        localizacao="São Paulo"
                        salario="R$1.000 - R$2.000"
                        salvo
                    />
                </div>
            </div>
        </div>
    )
}