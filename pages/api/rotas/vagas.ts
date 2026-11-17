
import { Vaga } from '@/pages/tipagens/tipos';
import type { NextApiRequest, NextApiResponse } from 'next';




export const vagas: Vaga[] = [
    {
        id: 1,
        titulo: "Desenvolvedor Front-end Júnior",
        empresa: { id: 1, nome: "TechNova" },
        local: "São Paulo - SP",
        salario: "R$ 3.500,00",
        escala: "5x2",
        experiencia: false,
        descricao: "Estamos procurando um desenvolvedor Front-end para integrar nosso time de tecnologia e participar da criação de interfaces modernas e responsivas.",
        atividades: [
            "Desenvolver interfaces utilizando React",
            "Implementar layouts responsivos",
            "Consumir APIs REST",
            "Participar de reuniões de equipe"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Conhecimento em HTML, CSS e JavaScript",
            "Conhecimento básico em React",
            "Noções de Git e GitHub",
            "Ensino superior cursando em tecnologia"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde",
            "Auxílio home office"
        ],
        diferenciais: [
            "Conhecimento em TypeScript",
            "Experiência com Next.js",
            "Portfólio de projetos pessoais"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        vagaCandidatada: false
    },
    {
        id: 2,
        titulo: "Analista de Recursos Humanos",
        empresa: { id: 2, nome: "Grupo Horizonte" },
        local: "Barueri - SP",
        salario: "R$ 4.200,00",
        escala: "5x2",
        experiencia: true,
        descricao: "Profissional responsável por apoiar os processos de gestão de pessoas, recrutamento e desenvolvimento organizacional.",
        atividades: [
            "Conduzir processos seletivos",
            "Realizar entrevistas",
            "Acompanhar indicadores de RH",
            "Apoiar ações de treinamento"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Ensino superior em Psicologia ou RH",
            "Experiência com recrutamento e seleção",
            "Conhecimento em pacote Office",
            "Boa comunicação"
        ],
        beneficios: [
            "Vale-alimentação",
            "Vale-transporte",
            "Assistência médica",
            "Participação nos lucros"
        ],
        diferenciais: [
            "Conhecimento em sistemas de RH",
            "Experiência com entrevistas por competência"
        ],
        vagaSalva: true,
        modalidade: "Presencial",
        vagaCandidatada: false
    },
    {
        id: 3,
        titulo: "Auxiliar Administrativo",
        empresa: { id: 3, nome: "Nova Gestão Serviços" },
        local: "Osasco - SP",
        salario: "R$ 2.100,00",
        escala: "5x2",
        experiencia: false,
        descricao: "Oportunidade para profissionais que desejam iniciar sua carreira na área administrativa.",
        atividades: [
            "Organizar documentos",
            "Realizar atendimento telefônico",
            "Atualizar planilhas",
            "Auxiliar nas rotinas administrativas"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento básico em informática",
            "Organização",
            "Boa comunicação"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-refeição",
            "Seguro de vida"
        ],
        diferenciais: [
            "Conhecimento em Excel",
            "Experiência com atendimento"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        vagaCandidatada: true,
        dataCurriculoEnviado: new Date("2026-11-10")
    },
    {
        id: 4,
        titulo: "Estágio em Marketing Digital",
        empresa: { id: 4, nome: "Agência Pixel" },
        local: "São Paulo - SP",
        salario: "R$ 1.500,00",
        escala: "5x2",
        experiencia: false,
        descricao: "Buscamos estudantes criativos para apoiar nossas estratégias de marketing digital e produção de conteúdo.",
        atividades: [
            "Criar conteúdos para redes sociais",
            "Auxiliar na elaboração de campanhas",
            "Analisar métricas de engajamento",
            "Apoiar a equipe de criação"
        ],
        periodo: "Estágio",
        horario: "10h às 16h",
        requisitos: [
            "Ensino superior cursando em Marketing ou Comunicação",
            "Conhecimento em redes sociais",
            "Criatividade",
            "Boa escrita"
        ],
        beneficios: [
            "Bolsa-auxílio",
            "Vale-transporte",
            "Vale-refeição",
            "Day off de aniversário"
        ],
        diferenciais: [
            "Conhecimento em Canva",
            "Noções de edição de vídeo",
            "Experiência com ferramentas de marketing"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        vagaCandidatada: false
    },
    {
        id: 5,
        titulo: "Desenvolvedor Back-end Pleno",
        empresa: { id: 5, nome: "CodeWave" },
        local: "Campinas - SP",
        salario: "R$ 7.500,00",
        escala: "5x2",
        experiencia: true,
        descricao: "Procuramos desenvolvedor Back-end para atuar na construção e manutenção de serviços e APIs escaláveis.",
        atividades: [
            "Desenvolver APIs REST",
            "Modelar bancos de dados",
            "Implementar regras de negócio",
            "Realizar testes automatizados",
            "Participar de code reviews"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Experiência com Node.js",
            "Conhecimento em TypeScript",
            "Experiência com PostgreSQL",
            "Conhecimento em arquitetura de APIs"
        ],
        beneficios: [
            "Plano de saúde",
            "Plano odontológico",
            "Vale-refeição",
            "Auxílio home office",
            "Horário flexível"
        ],
        diferenciais: [
            "Conhecimento em Docker",
            "Experiência com AWS",
            "Conhecimento em microsserviços"
        ],
        vagaSalva: true,
        modalidade: "Remoto",
        vagaCandidatada: false
    },
    {
        id: 6,
        titulo: "Atendente de Loja",
        empresa: { id: 6, nome: "Vitrine Brasil" },
        local: "Santo André - SP",
        salario: "R$ 1.900,00",
        escala: "6x1",
        experiencia: false,
        descricao: "Estamos contratando atendentes para oferecer uma experiência de compra positiva aos nossos clientes.",
        atividades: [
            "Atender clientes presencialmente",
            "Organizar produtos",
            "Repor mercadorias",
            "Auxiliar no fechamento de vendas"
        ],
        periodo: "Integral",
        horario: "13h às 21h20",
        requisitos: [
            "Ensino médio completo",
            "Boa comunicação",
            "Disponibilidade para finais de semana"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-alimentação",
            "Comissão por vendas"
        ],
        diferenciais: [
            "Experiência com vendas",
            "Conhecimento em atendimento ao cliente"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        vagaCandidatada: false
    },
    {
        id: 7,
        titulo: "Analista de Dados Júnior",
        empresa: { id: 7, nome: "DataMind" },
        local: "São Paulo - SP",
        salario: "R$ 3.800,00",
        escala: "5x2",
        experiencia: false,
        descricao: "O profissional atuará na análise de dados e geração de informações estratégicas para apoiar decisões de negócio.",
        atividades: [
            "Construir dashboards",
            "Analisar bases de dados",
            "Criar relatórios gerenciais",
            "Identificar tendências e padrões"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Conhecimento em Excel",
            "Conhecimento básico em SQL",
            "Raciocínio lógico",
            "Ensino superior cursando ou completo"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde",
            "Auxílio educação"
        ],
        diferenciais: [
            "Conhecimento em Power BI",
            "Conhecimento em Python",
            "Noções de estatística"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        vagaCandidatada: true,
        dataCurriculoEnviado: new Date("2026-11-12")
    },
    {
        id: 8,
        titulo: "Designer Gráfico",
        empresa: { id: 8, nome: "Studio Criativo" },
        local: "São Bernardo do Campo - SP",
        salario: "R$ 3.200,00",
        escala: "5x2",
        experiencia: true,
        descricao: "Buscamos designer para desenvolver materiais visuais e fortalecer a identidade das marcas atendidas pelo estúdio.",
        atividades: [
            "Criar peças gráficas",
            "Desenvolver identidade visual",
            "Produzir materiais para redes sociais",
            "Adaptar layouts para diferentes formatos"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Experiência com design gráfico",
            "Domínio do Photoshop",
            "Conhecimento em Illustrator",
            "Portfólio atualizado"
        ],
        beneficios: [
            "Vale-refeição",
            "Auxílio home office",
            "Horário flexível"
        ],
        diferenciais: [
            "Conhecimento em Figma",
            "Conhecimento em motion design",
            "Experiência com branding"
        ],
        vagaSalva: false,
        modalidade: "Remoto",
        vagaCandidatada: false
    },
    {
        id: 9,
        titulo: "Jovem Aprendiz Administrativo",
        empresa: { id: 9, nome: "Banco União" },
        local: "São Paulo - SP",
        salario: "R$ 1.100,00",
        escala: "5x2",
        experiencia: false,
        descricao: "O programa de aprendizagem oferece oportunidade de desenvolvimento profissional e formação prática na área administrativa.",
        atividades: [
            "Organizar arquivos",
            "Auxiliar no atendimento interno",
            "Digitalizar documentos",
            "Apoiar atividades administrativas"
        ],
        periodo: "Aprendiz",
        horario: "09h às 15h",
        requisitos: [
            "Ensino médio cursando ou completo",
            "Idade entre 16 e 22 anos",
            "Conhecimento básico em informática",
            "Disponibilidade para capacitação"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-refeição",
            "Seguro de vida",
            "Curso de capacitação"
        ],
        diferenciais: [
            "Conhecimento em pacote Office",
            "Participação em projetos escolares"
        ],
        vagaSalva: true,
        modalidade: "Presencial",
        vagaCandidatada: false
    },
    {
        id: 10,
        titulo: "Técnico de Suporte de TI",
        empresa: { id: 10, nome: "InfoTech Soluções" },
        local: "Guarulhos - SP",
        salario: "R$ 2.800,00",
        escala: "5x2",
        experiencia: true,
        descricao: "Profissional responsável por prestar suporte técnico aos colaboradores e garantir o funcionamento dos equipamentos e sistemas.",
        atividades: [
            "Atender chamados técnicos",
            "Configurar computadores",
            "Instalar softwares",
            "Realizar manutenção preventiva",
            "Documentar problemas técnicos"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Conhecimento em Windows",
            "Conhecimento em redes de computadores",
            "Experiência com suporte técnico",
            "Curso técnico em informática"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-alimentação",
            "Plano odontológico"
        ],
        diferenciais: [
            "Conhecimento em Linux",
            "Certificação CompTIA",
            "Conhecimento em Active Directory"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        vagaCandidatada: false
    },
    {
        id: 11,
        titulo: "Assistente Financeiro",
        empresa: { id: 11, nome: "Contábil Prime" },
        local: "São Paulo - SP",
        salario: "R$ 2.700,00",
        escala: "5x2",
        experiencia: true,
        descricao: "Responsável por auxiliar nas operações financeiras e garantir a organização dos registros e pagamentos da empresa.",
        atividades: [
            "Realizar contas a pagar e receber",
            "Conferir notas fiscais",
            "Efetuar conciliação bancária",
            "Atualizar controles financeiros"
        ],
        periodo: "Integral",
        horario: "08h30 às 17h30",
        requisitos: [
            "Ensino superior cursando em Administração ou Contabilidade",
            "Conhecimento em Excel",
            "Experiência com rotinas financeiras"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde"
        ],
        diferenciais: [
            "Conhecimento em sistemas ERP",
            "Experiência com conciliação bancária"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        vagaCandidatada: false
    },
    {
        id: 12,
        titulo: "Estágio em Desenvolvimento de Software",
        empresa: { id: 12, nome: "DevStart" },
        local: "São Paulo - SP",
        salario: "R$ 1.800,00",
        escala: "5x2",
        experiencia: false,
        descricao: "Oportunidade para estudantes de tecnologia que desejam aprender desenvolvimento de software em um ambiente colaborativo.",
        atividades: [
            "Auxiliar no desenvolvimento de aplicações",
            "Corrigir pequenos bugs",
            "Participar de testes",
            "Documentar funcionalidades"
        ],
        periodo: "Estágio",
        horario: "13h às 19h",
        requisitos: [
            "Estar cursando graduação em tecnologia",
            "Conhecimento básico em lógica de programação",
            "Noções de JavaScript",
            "Vontade de aprender"
        ],
        beneficios: [
            "Bolsa-auxílio",
            "Auxílio home office",
            "Mentoria técnica",
            "Horário flexível"
        ],
        diferenciais: [
            "Conhecimento em React",
            "Conhecimento em Git",
            "Projetos publicados no GitHub"
        ],
        vagaSalva: true,
        modalidade: "Remoto",
        vagaCandidatada: false
    },
    {
        id: 13,
        titulo: "Motorista de Entregas",
        empresa: { id: 13, nome: "LogExpress" },
        local: "Diadema - SP",
        salario: "R$ 2.500,00",
        escala: "6x1",
        experiencia: true,
        descricao: "Buscamos motorista responsável para realizar entregas e garantir a integridade dos produtos durante o transporte.",
        atividades: [
            "Realizar entregas",
            "Conferir mercadorias",
            "Preencher comprovantes",
            "Zelar pelo veículo"
        ],
        periodo: "Integral",
        horario: "07h às 16h",
        requisitos: [
            "Ensino médio completo",
            "CNH categoria B",
            "Experiência com entregas",
            "Conhecimento da região metropolitana"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Seguro de vida",
            "Adicional por produtividade"
        ],
        diferenciais: [
            "CNH categoria D",
            "Experiência com logística"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        vagaCandidatada: false
    },
    {
        id: 14,
        titulo: "Analista de Marketing Pleno",
        empresa: { id: 14, nome: "Mundo Digital" },
        local: "Santos - SP",
        salario: "R$ 5.500,00",
        escala: "5x2",
        experiencia: true,
        descricao: "Profissional para planejar, executar e acompanhar estratégias de marketing com foco em aquisição e retenção de clientes.",
        atividades: [
            "Planejar campanhas digitais",
            "Gerenciar anúncios pagos",
            "Monitorar indicadores de conversão",
            "Elaborar relatórios de desempenho"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Graduação em Marketing ou áreas relacionadas",
            "Experiência com marketing digital",
            "Conhecimento em Google Ads",
            "Conhecimento em Meta Ads"
        ],
        beneficios: [
            "Plano de saúde",
            "Vale-refeição",
            "Vale-alimentação",
            "Participação nos lucros"
        ],
        diferenciais: [
            "Certificação Google Ads",
            "Conhecimento em SEO",
            "Experiência com CRM"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        vagaCandidatada: false
    },
    {
        id: 15,
        titulo: "Product Designer",
        empresa: { id: 15, nome: "Future Labs" },
        local: "São Paulo - SP",
        salario: "R$ 6.800,00",
        escala: "5x2",
        experiencia: true,
        descricao: "Procuramos Product Designer para desenvolver experiências digitais intuitivas, conectando necessidades dos usuários aos objetivos de negócio.",
        atividades: [
            "Criar protótipos interativos",
            "Desenvolver fluxos de navegação",
            "Conduzir pesquisas com usuários",
            "Criar e manter design systems",
            "Trabalhar em conjunto com desenvolvedores"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Experiência com UX/UI Design",
            "Domínio do Figma",
            "Conhecimento em design responsivo",
            "Conhecimento em metodologias ágeis"
        ],
        beneficios: [
            "Plano de saúde",
            "Vale-refeição",
            "Vale-transporte",
            "Auxílio home office",
            "Horário flexível"
        ],
        diferenciais: [
            "Conhecimento em HTML e CSS",
            "Experiência com design systems",
            "Conhecimento em acessibilidade digital"
        ],
        vagaSalva: true,
        modalidade: "Híbrido",
        vagaCandidatada: false
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

            const vaga = vagas.filter(
                vaga => vaga.id === Number(id)
            );

            if (!vaga) {
                return res.status(404).json({
                    mensagem: 'Vaga não encontrada'
                });
            }

            return res.status(200).json(vaga);
        }

        return res.status(200).json(vagas);
    }

    return res.status(405).json({
        mensagem: 'Método não permitido'
    });
}
