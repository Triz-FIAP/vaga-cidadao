
import { Empresa } from '@/pages/tipagens/tipos';
import type { NextApiRequest, NextApiResponse } from 'next';


import { vagas } from "./vagas";

export const empresas: Empresa[] = [
    {
        id: 1,
        nome: "TechNova",
        CNPJ: "00.000.000/0001-00",
        site: "https://technova.example",
        telefone: "(11) 90000-0001",
        descricao: "A TechNova é uma empresa de tecnologia especializada no desenvolvimento de soluções digitais e sistemas personalizados para negócios de diferentes segmentos. Fundada com o propósito de conectar inovação e praticidade, a empresa atua na criação de plataformas web, aplicações mobile e ferramentas de automação. Seu ambiente de trabalho incentiva a criatividade, o aprendizado contínuo e a colaboração entre profissionais. A TechNova acredita que a tecnologia deve simplificar processos e proporcionar experiências cada vez melhores para seus usuários e clientes.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 1),
        setor: "Tecnologia da Informação",
        localidade: "São Paulo - SP"
    },
    {
        id: 2,
        nome: "Grupo Horizonte",
        CNPJ: "00.000.000/0001-01",
        site: "https://grupohorizonte.example",
        telefone: "(11) 90000-0002",
        descricao: "O Grupo Horizonte é uma organização especializada em consultoria empresarial, gestão de pessoas e desenvolvimento organizacional. Sua atuação é voltada para empresas que desejam aprimorar seus processos internos, fortalecer suas equipes e alcançar melhores resultados. Com profissionais de diferentes especialidades, o grupo oferece serviços de recrutamento, seleção, treinamento e planejamento estratégico de recursos humanos. A empresa valoriza relações profissionais transparentes, diversidade e desenvolvimento humano, buscando criar oportunidades tanto para seus clientes quanto para os profissionais que fazem parte de sua equipe.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 2),
        setor: "Recursos Humanos e Consultoria",
        localidade: "Barueri - SP"
    },
    {
        id: 3,
        nome: "Nova Gestão Serviços",
        CNPJ: "00.000.000/0001-02",
        site: "https://novagestao.example",
        telefone: "(11) 90000-0003",
        descricao: "A Nova Gestão Serviços é uma empresa dedicada à prestação de serviços administrativos e operacionais para organizações de pequeno, médio e grande porte. Seu trabalho envolve a organização de documentos, gestão de informações, atendimento corporativo e suporte às atividades internas de seus clientes. A empresa busca oferecer soluções eficientes para simplificar rotinas empresariais e melhorar a produtividade das organizações atendidas. Com foco na qualidade e na responsabilidade profissional, a Nova Gestão acredita que uma administração organizada é essencial para o crescimento sustentável de qualquer negócio.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 3),
        setor: "Serviços Administrativos",
        localidade: "Osasco - SP"
    },
    {
        id: 4,
        nome: "Agência Pixel",
        CNPJ: "00.000.000/0001-03",
        site: "https://agenciapixel.example",
        telefone: "(11) 90000-0004",
        descricao: "A Agência Pixel é uma agência de marketing e publicidade especializada na construção de marcas e no desenvolvimento de estratégias de comunicação digital. A empresa atende negócios de diferentes segmentos, oferecendo serviços de planejamento de campanhas, gerenciamento de redes sociais, produção de conteúdo e identidade visual. Seu time reúne profissionais criativos que trabalham em conjunto para transformar ideias em experiências relevantes para o público. A Agência Pixel acredita no poder da comunicação para aproximar empresas e consumidores, utilizando criatividade, planejamento e análise de resultados para desenvolver projetos de impacto.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 4),
        setor: "Marketing e Publicidade",
        localidade: "São Paulo - SP"
    },
    {
        id: 5,
        nome: "CodeWave",
        CNPJ: "00.000.000/0001-04",
        site: "https://codewave.example",
        telefone: "(19) 90000-0005",
        descricao: "A CodeWave é uma empresa de desenvolvimento de software que cria soluções tecnológicas personalizadas para atender às necessidades de diferentes organizações. Especializada em aplicações web, sistemas corporativos e integração de plataformas, a empresa trabalha com tecnologias modernas e metodologias ágeis de desenvolvimento. Seu ambiente profissional incentiva a troca de conhecimentos, a autonomia e a evolução técnica de seus colaboradores. A CodeWave busca desenvolver produtos digitais seguros, escaláveis e eficientes, mantendo o compromisso com a qualidade do código, a inovação e a satisfação de seus clientes.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 5),
        setor: "Desenvolvimento de Software",
        localidade: "Campinas - SP"
    },
    {
        id: 6,
        nome: "Vitrine Brasil",
        CNPJ: "00.000.000/0001-05",
        site: "https://vitrinebrasil.example",
        telefone: "(11) 90000-0006",
        descricao: "A Vitrine Brasil é uma empresa do setor varejista que atua na comercialização de produtos para diferentes perfis de consumidores. Com foco na experiência de compra, a organização investe na qualidade do atendimento, na variedade de produtos e na organização de suas unidades comerciais. Sua operação envolve equipes de vendas, atendimento, estoque e gestão de loja, que trabalham juntas para garantir um serviço eficiente. A empresa acredita que o relacionamento com o cliente é um dos principais fatores para o sucesso no varejo e oferece oportunidades de desenvolvimento profissional para pessoas interessadas em construir uma carreira na área comercial.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 6),
        setor: "Comércio Varejista",
        localidade: "Santo André - SP"
    },
    {
        id: 7,
        nome: "DataMind",
        CNPJ: "00.000.000/0001-06",
        site: "https://datamind.example",
        telefone: "(11) 90000-0007",
        descricao: "A DataMind é uma empresa especializada em análise de dados, inteligência de negócios e desenvolvimento de soluções orientadas por informações. Seu trabalho consiste em transformar grandes volumes de dados em conhecimentos estratégicos que auxiliam organizações na tomada de decisões. A empresa desenvolve dashboards, relatórios gerenciais e ferramentas de acompanhamento de indicadores utilizando tecnologias de análise e visualização de dados. Sua equipe reúne profissionais de tecnologia, estatística e negócios, trabalhando de maneira integrada para identificar oportunidades, compreender comportamentos e melhorar os resultados de seus clientes.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 7),
        setor: "Análise de Dados e Tecnologia",
        localidade: "São Paulo - SP"
    },
    {
        id: 8,
        nome: "Studio Criativo",
        CNPJ: "00.000.000/0001-07",
        site: "https://studiocriativo.example",
        telefone: "(11) 90000-0008",
        descricao: "O Studio Criativo é uma empresa especializada em design gráfico, comunicação visual e construção de identidades de marca. Seu trabalho envolve o desenvolvimento de materiais publicitários, projetos gráficos, conteúdos digitais e experiências visuais para empresas que desejam fortalecer sua presença no mercado. Com uma equipe formada por profissionais criativos, o estúdio valoriza a originalidade, a atenção aos detalhes e a consistência visual em todos os projetos. A organização busca combinar criatividade e estratégia para criar soluções que comuniquem ideias de maneira clara, atrativa e alinhada aos objetivos de cada cliente.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 8),
        setor: "Design e Comunicação Visual",
        localidade: "São Bernardo do Campo - SP"
    },
    {
        id: 9,
        nome: "Banco União",
        CNPJ: "00.000.000/0001-08",
        site: "https://bancouniao.example",
        telefone: "(11) 90000-0009",
        descricao: "O Banco União é uma instituição fictícia do setor financeiro que oferece serviços bancários, soluções de crédito e ferramentas de gestão financeira para pessoas e empresas. Sua atuação busca facilitar o acesso a serviços financeiros por meio de processos seguros, atendimento qualificado e soluções digitais. A instituição investe na modernização de seus sistemas e na capacitação de seus colaboradores para acompanhar as transformações do mercado financeiro. Além de suas atividades operacionais, o Banco União valoriza a educação financeira, a responsabilidade e o relacionamento de longo prazo com seus clientes.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 9),
        setor: "Serviços Financeiros",
        localidade: "São Paulo - SP"
    },
    {
        id: 10,
        nome: "InfoTech Soluções",
        CNPJ: "00.000.000/0001-09",
        site: "https://infotech.example",
        telefone: "(11) 90000-0010",
        descricao: "A InfoTech Soluções é uma empresa de tecnologia especializada em suporte técnico, infraestrutura de TI e manutenção de ambientes computacionais. Sua atuação contempla a instalação e configuração de equipamentos, administração de redes, suporte a sistemas e atendimento às necessidades tecnológicas de seus clientes. A empresa trabalha para garantir a continuidade das operações e reduzir problemas técnicos que possam comprometer a produtividade das organizações. Com uma equipe preparada para lidar com diferentes desafios tecnológicos, a InfoTech busca oferecer atendimento ágil, soluções confiáveis e acompanhamento contínuo de seus serviços.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 10),
        setor: "Suporte e Infraestrutura de TI",
        localidade: "Guarulhos - SP"
    },
    {
        id: 11,
        nome: "Contábil Prime",
        CNPJ: "00.000.000/0001-10",
        site: "https://contabilprime.example",
        telefone: "(11) 90000-0011",
        descricao: "A Contábil Prime é uma empresa especializada em serviços contábeis, financeiros e consultoria administrativa para organizações de diferentes portes. Entre suas principais atividades estão a organização de documentos fiscais, elaboração de relatórios financeiros, acompanhamento de obrigações contábeis e orientação para a gestão empresarial. A empresa busca oferecer informações confiáveis e soluções que auxiliem seus clientes na administração de seus recursos. Seu ambiente profissional valoriza a ética, a precisão e a atualização constante, acompanhando as mudanças na legislação e nas práticas do mercado contábil.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 11),
        setor: "Contabilidade e Finanças",
        localidade: "São Paulo - SP"
    },
    {
        id: 12,
        nome: "DevStart",
        CNPJ: "00.000.000/0001-11",
        site: "https://devstart.example",
        telefone: "(11) 90000-0012",
        descricao: "A DevStart é uma empresa de tecnologia voltada ao desenvolvimento de aplicações digitais e à formação de novos talentos na área de programação. Sua equipe trabalha na construção de sistemas, plataformas web e ferramentas que auxiliam empresas em seus processos cotidianos. A organização acredita que o aprendizado contínuo é fundamental para acompanhar a evolução tecnológica e, por isso, incentiva a participação de estudantes e profissionais em início de carreira. Por meio de mentorias, projetos colaborativos e troca de experiências, a DevStart procura criar um ambiente favorável ao crescimento técnico e profissional de seus colaboradores.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 12),
        setor: "Desenvolvimento de Software",
        localidade: "São Paulo - SP"
    },
    {
        id: 13,
        nome: "LogExpress",
        CNPJ: "00.000.000/0001-12",
        site: "https://logexpress.example",
        telefone: "(11) 90000-0013",
        descricao: "A LogExpress é uma empresa especializada em logística, distribuição e transporte de mercadorias, atendendo organizações que precisam de soluções eficientes para movimentação de produtos. Sua operação envolve planejamento de rotas, controle de entregas, gestão de estoques e acompanhamento de transportes. A empresa trabalha para garantir que as mercadorias cheguem ao destino dentro dos prazos estabelecidos e em condições adequadas. Com foco na organização operacional, segurança e qualidade dos serviços, a LogExpress investe na melhoria contínua de seus processos e na capacitação de seus profissionais.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 13),
        setor: "Logística e Transportes",
        localidade: "Diadema - SP"
    },
    {
        id: 14,
        nome: "Mundo Digital",
        CNPJ: "00.000.000/0001-13",
        site: "https://mundodigital.example",
        telefone: "(13) 90000-0014",
        descricao: "A Mundo Digital é uma empresa especializada em estratégias de marketing digital, publicidade online e posicionamento de marcas no ambiente virtual. Seu trabalho envolve o planejamento de campanhas, gerenciamento de anúncios, otimização de mecanismos de busca e análise de indicadores de desempenho. A organização auxilia empresas a ampliarem sua presença digital, alcançarem novos públicos e fortalecerem o relacionamento com seus consumidores. Com uma equipe multidisciplinar, a Mundo Digital combina criatividade, análise de dados e conhecimento de mercado para desenvolver estratégias alinhadas aos objetivos comerciais de seus clientes.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 14),
        setor: "Marketing Digital",
        localidade: "Santos - SP"
    },
    {
        id: 15,
        nome: "Future Labs",
        CNPJ: "00.000.000/0001-14",
        site: "https://futurelabs.example",
        telefone: "(11) 90000-0015",
        descricao: "A Future Labs é uma empresa de inovação e tecnologia dedicada ao desenvolvimento de produtos digitais e experiências que aproximam pessoas e soluções tecnológicas. Sua atuação envolve pesquisa de experiência do usuário, design de interfaces, desenvolvimento de plataformas e criação de produtos digitais. A empresa trabalha de forma colaborativa, reunindo profissionais de design, tecnologia e estratégia para transformar necessidades reais em soluções funcionais e intuitivas. Seu ambiente incentiva a experimentação, a criatividade e a busca por novas possibilidades, valorizando profissionais interessados em participar da construção de projetos inovadores.",
        vagas: vagas.filter(vaga => vaga.empresa.id === 15),
        setor: "Design e Tecnologia",
        localidade: "São Paulo - SP"
    }
];




export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const { id } = req.query;

        if (id !== undefined) {
            if (typeof id !== 'string' || !Number.isInteger(Number(id))) {
                return res.status(400).json({
                    mensagem: 'ID inválido'
                });
            }

            const empresa = empresas.filter(
                empresa => empresa.id === Number(id)
            );

            if (!empresa) {
                return res.status(404).json({
                    mensagem: 'Empresa não encontrada'
                });
            }

            return res.status(200).json(empresa);
        }

        return res.status(200).json(empresas);
    }

    return res.status(405).json({
        mensagem: 'Método não permitido'
    });
}
