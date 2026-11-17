
import { Vaga } from '@/utilidades/tipos';
import type { NextApiRequest, NextApiResponse } from 'next';

export const vagas: Vaga[] = [
    // 1. TechNova
    {
        id: 1,
        titulo: "Desenvolvedor Front-end Júnior",
        empresa: { id: 1, nome: "TechNova" },
        local: "São Paulo",
        salario: "R$ 3.200,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A TechNova busca um profissional em início de carreira para integrar seu time de desenvolvimento. A pessoa será responsável por contribuir na construção de interfaces modernas, acessíveis e responsivas, trabalhando em conjunto com designers e desenvolvedores.",
        atividades: [
            "Desenvolver interfaces utilizando HTML, CSS e JavaScript",
            "Implementar componentes reutilizáveis",
            "Realizar ajustes de responsividade",
            "Participar de reuniões e revisões de código"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Conhecimento básico de HTML, CSS e JavaScript",
            "Noções de React",
            "Conhecimento de Git",
            "Boa comunicação e vontade de aprender"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde",
            "Auxílio home office"
        ],
        diferenciais: [
            "Conhecimento em TypeScript",
            "Projetos pessoais publicados",
            "Noções de Figma"
        ],
        vagaSalva: true,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: [],
        curriculoEnviado: false,
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 2. Grupo Horizonte
    {
        id: 2,
        titulo: "Assistente de Recursos Humanos",
        empresa: { id: 2, nome: "Grupo Horizonte" },
        local: "Rio de Janeiro",
        salario: "R$ 2.400,00",
        escala: "5x2",
        experiencia: false,
        descricao: "O Grupo Horizonte procura uma pessoa organizada e comunicativa para auxiliar nas atividades do departamento de Recursos Humanos, oferecendo suporte aos processos de recrutamento, seleção e administração de pessoal.",
        atividades: [
            "Organizar documentos de colaboradores",
            "Auxiliar na divulgação de vagas",
            "Agendar entrevistas",
            "Atualizar planilhas e sistemas internos"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento básico de informática",
            "Organização e atenção aos detalhes",
            "Boa comunicação"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Assistência médica"
        ],
        diferenciais: [
            "Conhecimento em rotinas de RH",
            "Experiência com atendimento"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: ["Mulher"],
        curriculoEnviado: false,
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 3. Nova Gestão Serviços
    {
        id: 3,
        titulo: "Auxiliar Administrativo",
        empresa: { id: 3, nome: "Nova Gestão Serviços" },
        local: "São Paulo",
        salario: "R$ 2.100,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A Nova Gestão Serviços está em busca de um auxiliar administrativo para apoiar as rotinas do escritório, contribuindo para a organização dos documentos, atualização de informações e atendimento aos colaboradores.",
        atividades: [
            "Organizar arquivos físicos e digitais",
            "Preencher planilhas e relatórios",
            "Auxiliar no controle de documentos",
            "Realizar atendimento telefônico"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento básico de Excel",
            "Organização",
            "Facilidade para trabalhar em equipe"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-alimentação",
            "Seguro de vida"
        ],
        diferenciais: [
            "Conhecimento em ferramentas do Office",
            "Experiência com rotinas administrativas"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: [],
        curriculoEnviado: false,
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 4. Agência Pixel
    {
        id: 4,
        titulo: "Social Media Júnior",
        empresa: { id: 4, nome: "Agência Pixel" },
        local: "Rio de Janeiro",
        salario: "R$ 2.800,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A Agência Pixel procura uma pessoa criativa para auxiliar no planejamento e gerenciamento de redes sociais de diferentes clientes. A oportunidade é voltada a profissionais interessados em comunicação digital e produção de conteúdo.",
        atividades: [
            "Auxiliar na criação de calendários editoriais",
            "Produzir textos para redes sociais",
            "Acompanhar métricas de desempenho",
            "Apoiar o planejamento de campanhas"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Ensino médio completo",
            "Boa escrita",
            "Conhecimento de redes sociais",
            "Criatividade e organização"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano odontológico"
        ],
        diferenciais: [
            "Conhecimento em Canva",
            "Noções de marketing digital",
            "Portfólio de conteúdo"
        ],
        vagaSalva: true,
        modalidade: "Híbrido",
        escolaridade: "Ensino Médio",
        afirmativa: ["Mulher", "LGBTQIAPN+"],
        curriculoEnviado: false,
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 5. CodeWave
    {
        id: 5,
        titulo: "Desenvolvedor Back-end Júnior",
        empresa: { id: 5, nome: "CodeWave" },
        local: "São Paulo",
        salario: "R$ 3.500,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A CodeWave busca um desenvolvedor em início de carreira para contribuir com a criação e manutenção de aplicações e serviços back-end. O profissional terá contato com projetos reais e acompanhamento de desenvolvedores experientes.",
        atividades: [
            "Desenvolver APIs REST",
            "Realizar consultas em bancos de dados",
            "Corrigir erros e implementar melhorias",
            "Participar de reuniões técnicas"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Conhecimento em lógica de programação",
            "Noções de JavaScript ou Python",
            "Conhecimento básico de SQL",
            "Noções de Git"
        ],
        beneficios: [
            "Vale-refeição",
            "Plano de saúde",
            "Auxílio home office",
            "Participação nos lucros"
        ],
        diferenciais: [
            "Conhecimento em Node.js",
            "Experiência com PostgreSQL",
            "Projetos publicados no GitHub"
        ],
        vagaSalva: false,
        modalidade: "Remoto",
        escolaridade: "Superior em andamento",
        afirmativa: [],
        curriculoEnviado: false,
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 6. Vitrine Brasil
    {
        id: 6,
        titulo: "Operador de Loja",
        empresa: { id: 6, nome: "Vitrine Brasil" },
        local: "São Paulo",
        salario: "R$ 1.850,00",
        escala: "6x1",
        experiencia: false,
        descricao: "A Vitrine Brasil está contratando operadores de loja para atuar no atendimento aos clientes e na organização de seus produtos. A empresa oferece treinamento e oportunidades de crescimento profissional.",
        atividades: [
            "Organizar produtos nas prateleiras",
            "Auxiliar clientes durante as compras",
            "Verificar preços e etiquetas",
            "Manter o ambiente de loja organizado"
        ],
        periodo: "Parcial Tarde",
        horario: "13h às 19h20",
        requisitos: [
            "Ensino fundamental completo",
            "Boa comunicação",
            "Disponibilidade para trabalhar aos finais de semana",
            "Comprometimento"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-alimentação",
            "Desconto em produtos da loja"
        ],
        diferenciais: [
            "Experiência com atendimento",
            "Conhecimento em varejo"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Fundamental",
        afirmativa: ["PCD"],
        curriculoEnviado: false,
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 7. DataMind
    {
        id: 7,
        titulo: "Assistente de Análise de Dados",
        empresa: { id: 7, nome: "DataMind" },
        local: "São Paulo",
        salario: "R$ 3.000,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A DataMind procura um profissional para apoiar a equipe de análise de dados na organização de informações e elaboração de relatórios. A oportunidade é indicada para pessoas com perfil analítico e interesse em tecnologia.",
        atividades: [
            "Organizar bases de dados",
            "Atualizar dashboards",
            "Auxiliar na elaboração de relatórios",
            "Verificar inconsistências em informações"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento intermediário de Excel",
            "Raciocínio lógico",
            "Atenção aos detalhes"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde",
            "Auxílio educação"
        ],
        diferenciais: [
            "Conhecimento em Power BI",
            "Noções de SQL",
            "Interesse em análise de dados"
        ],
        vagaSalva: true,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: ["Pessoa Negra", "PCD"],
        curriculoEnviado: new Date("2026-11-03T10:00:00"),
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 8. Studio Criativo
    {
        id: 8,
        titulo: "Designer Gráfico Júnior",
        empresa: { id: 8, nome: "Studio Criativo" },
        local: "Rio de Janeiro",
        salario: "R$ 2.700,00",
        escala: "5x2",
        experiencia: false,
        descricao: "O Studio Criativo busca um designer gráfico para colaborar na criação de materiais visuais para campanhas e projetos de seus clientes. A pessoa selecionada terá a oportunidade de desenvolver seu portfólio e trabalhar com diferentes segmentos.",
        atividades: [
            "Criar peças gráficas para mídias digitais",
            "Desenvolver materiais institucionais",
            "Adaptar layouts para diferentes formatos",
            "Participar de reuniões criativas"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Conhecimento em ferramentas de design",
            "Criatividade",
            "Organização",
            "Portfólio básico"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano odontológico"
        ],
        diferenciais: [
            "Conhecimento em Photoshop",
            "Conhecimento em Illustrator",
            "Noções de identidade visual"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Superior em andamento",
        afirmativa: [],
        curriculoEnviado: new Date("2026-11-04T14:30:00"),
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 9. Banco União
    {
        id: 9,
        titulo: "Atendente de Serviços Bancários",
        empresa: { id: 9, nome: "Banco União" },
        local: "São Paulo",
        salario: "R$ 2.900,00",
        escala: "5x2",
        experiencia: false,
        descricao: "O Banco União procura profissionais para atuar no atendimento aos clientes e prestar orientações sobre os serviços oferecidos pela instituição. A pessoa selecionada receberá treinamento sobre os processos e sistemas internos.",
        atividades: [
            "Atender clientes presencialmente",
            "Prestar informações sobre serviços bancários",
            "Auxiliar no preenchimento de solicitações",
            "Direcionar demandas para os setores responsáveis"
        ],
        periodo: "Integral",
        horario: "10h às 19h",
        requisitos: [
            "Ensino médio completo",
            "Boa comunicação",
            "Conhecimento básico de informática",
            "Organização"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-alimentação",
            "Plano de saúde",
            "Previdência privada"
        ],
        diferenciais: [
            "Experiência com atendimento",
            "Noções de matemática financeira"
        ],
        vagaSalva: true,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: ["Mulher"],
        curriculoEnviado: new Date("2026-11-05T09:15:00"),
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 10. InfoTech Soluções
    {
        id: 10,
        titulo: "Auxiliar de Suporte Técnico",
        empresa: { id: 10, nome: "InfoTech Soluções" },
        local: "São Paulo",
        salario: "R$ 2.500,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A InfoTech Soluções está em busca de um auxiliar de suporte técnico para atender chamados e auxiliar na manutenção de equipamentos e sistemas utilizados por seus clientes.",
        atividades: [
            "Atender chamados de suporte",
            "Auxiliar na configuração de computadores",
            "Instalar programas e atualizações",
            "Registrar soluções em sistema interno"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento básico de informática",
            "Interesse em tecnologia",
            "Boa comunicação"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-refeição",
            "Plano de saúde"
        ],
        diferenciais: [
            "Noções de redes de computadores",
            "Conhecimento em Windows",
            "Curso de suporte técnico"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: ["PCD"],
        curriculoEnviado: new Date("2026-11-06T11:00:00"),
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 11. Contábil Prime
    {
        id: 11,
        titulo: "Auxiliar Contábil",
        empresa: { id: 11, nome: "Contábil Prime" },
        local: "São Paulo",
        salario: "R$ 2.600,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A Contábil Prime procura um auxiliar contábil para apoiar as atividades do departamento financeiro e contábil, contribuindo para a organização de documentos e conferência de informações.",
        atividades: [
            "Organizar documentos fiscais",
            "Auxiliar na classificação de despesas",
            "Atualizar planilhas financeiras",
            "Apoiar a elaboração de relatórios"
        ],
        periodo: "Integral",
        horario: "08h30 às 17h30",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento básico de Excel",
            "Atenção aos detalhes",
            "Organização"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano odontológico"
        ],
        diferenciais: [
            "Curso técnico em contabilidade",
            "Noções de legislação fiscal"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: [],
        curriculoEnviado: new Date("2026-11-07T15:20:00"),
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 12. DevStart
    {
        id: 12,
        titulo: "Estágio em Desenvolvimento Web",
        empresa: { id: 12, nome: "DevStart" },
        local: "São Paulo",
        salario: "R$ 1.600,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A DevStart está oferecendo uma oportunidade de estágio para estudantes interessados em desenvolvimento web. O estagiário participará de projetos internos e contará com acompanhamento de profissionais experientes.",
        atividades: [
            "Auxiliar no desenvolvimento de páginas web",
            "Realizar testes de funcionalidades",
            "Corrigir pequenos problemas de interface",
            "Participar de atividades de aprendizagem técnica"
        ],
        periodo: "Parcial Tarde",
        horario: "13h às 18h",
        requisitos: [
            "Estar cursando ensino superior na área de tecnologia",
            "Conhecimento básico de HTML e CSS",
            "Noções de JavaScript",
            "Disponibilidade para estágio"
        ],
        beneficios: [
            "Bolsa-auxílio",
            "Vale-transporte",
            "Auxílio educação"
        ],
        diferenciais: [
            "Conhecimento em React",
            "Projetos acadêmicos",
            "Conhecimento em Git"
        ],
        vagaSalva: true,
        modalidade: "Remoto",
        escolaridade: "Superior em andamento",
        afirmativa: ["Pessoa Negra", "LGBTQIAPN+"],
        curriculoEnviado: new Date("2026-11-08T12:00:00"),
        curriculoVisto: false,
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 13. LogExpress
    {
        id: 13,
        titulo: "Auxiliar de Logística",
        empresa: { id: 13, nome: "LogExpress" },
        local: "São Paulo",
        salario: "R$ 2.000,00",
        escala: "6x1",
        experiencia: false,
        descricao: "A LogExpress está contratando auxiliares de logística para apoiar as operações de armazenamento e distribuição. A pessoa selecionada participará das atividades de recebimento, separação e conferência de mercadorias.",
        atividades: [
            "Separar mercadorias para expedição",
            "Conferir produtos recebidos",
            "Organizar o estoque",
            "Auxiliar no controle de inventário"
        ],
        periodo: "Integral",
        horario: "07h às 16h",
        requisitos: [
            "Ensino fundamental completo",
            "Disposição para atividades operacionais",
            "Organização",
            "Responsabilidade"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-alimentação",
            "Seguro de vida"
        ],
        diferenciais: [
            "Experiência em estoque",
            "Conhecimento em sistemas de controle"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Fundamental",
        afirmativa: ["PCD"],
        curriculoEnviado: new Date("2026-11-01T09:00:00"),
        curriculoVisto: new Date("2026-11-03T14:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 14. Mundo Digital
    {
        id: 14,
        titulo: "Analista de Marketing Digital Júnior",
        empresa: { id: 14, nome: "Mundo Digital" },
        local: "Rio de Janeiro",
        salario: "R$ 3.400,00",
        escala: "5x2",
        experiencia: true,
        descricao: "A Mundo Digital busca um profissional para auxiliar na execução e análise de campanhas de marketing digital. A pessoa trabalhará com diferentes plataformas e terá contato direto com estratégias de comunicação e aquisição de clientes.",
        atividades: [
            "Acompanhar campanhas de mídia paga",
            "Analisar indicadores de desempenho",
            "Produzir relatórios de resultados",
            "Auxiliar na elaboração de estratégias digitais"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Ensino superior em andamento",
            "Conhecimento em marketing digital",
            "Boa comunicação escrita",
            "Conhecimento de métricas digitais"
        ],
        beneficios: [
            "Vale-refeição",
            "Plano de saúde",
            "Auxílio home office",
            "Bônus por desempenho"
        ],
        diferenciais: [
            "Conhecimento em Google Ads",
            "Conhecimento em Meta Ads",
            "Experiência com relatórios"
        ],
        vagaSalva: true,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: ["Mulher"],
        curriculoEnviado: new Date("2026-11-02T10:30:00"),
        curriculoVisto: new Date("2026-11-04T09:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 15. Future Labs
    {
        id: 15,
        titulo: "UI/UX Designer Júnior",
        empresa: { id: 15, nome: "Future Labs" },
        local: "São Paulo",
        salario: "R$ 3.600,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A Future Labs procura um designer interessado em criar experiências digitais acessíveis e intuitivas. O profissional trabalhará com pesquisas, prototipação e desenvolvimento de interfaces em colaboração com equipes de tecnologia.",
        atividades: [
            "Criar protótipos de interfaces",
            "Desenvolver fluxos de navegação",
            "Participar de pesquisas com usuários",
            "Documentar padrões de design"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Conhecimento básico de design de interfaces",
            "Noções de experiência do usuário",
            "Conhecimento em Figma",
            "Organização e criatividade"
        ],
        beneficios: [
            "Vale-refeição",
            "Plano de saúde",
            "Auxílio home office",
            "Auxílio educação"
        ],
        diferenciais: [
            "Conhecimento em acessibilidade digital",
            "Portfólio de projetos",
            "Noções de design system"
        ],
        vagaSalva: false,
        modalidade: "Remoto",
        escolaridade: "Superior em andamento",
        afirmativa: ["LGBTQIAPN+", "Pessoas Trans"],
        curriculoEnviado: new Date("2026-11-02T13:00:00"),
        curriculoVisto: new Date("2026-11-05T10:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 16. TechNova
    {
        id: 16,
        titulo: "Analista de QA Júnior",
        empresa: { id: 1, nome: "TechNova" },
        local: "São Paulo",
        salario: "R$ 3.100,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A TechNova busca um profissional para apoiar os processos de qualidade de seus produtos digitais. A pessoa selecionada será responsável por testar funcionalidades, identificar problemas e colaborar com a equipe de desenvolvimento.",
        atividades: [
            "Executar testes manuais em aplicações",
            "Documentar erros encontrados",
            "Validar correções realizadas",
            "Apoiar a elaboração de casos de teste"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Conhecimento básico de tecnologia",
            "Raciocínio lógico",
            "Atenção aos detalhes",
            "Boa comunicação"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde",
            "Auxílio home office"
        ],
        diferenciais: [
            "Noções de testes automatizados",
            "Conhecimento em Postman",
            "Noções de metodologias ágeis"
        ],
        vagaSalva: true,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: [],
        curriculoEnviado: new Date("2026-11-09T09:00:00"),
        curriculoVisto: new Date("2026-11-10T11:30:00"),
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 17. Grupo Horizonte
    {
        id: 17,
        titulo: "Analista de Recrutamento e Seleção",
        empresa: { id: 2, nome: "Grupo Horizonte" },
        local: "Rio de Janeiro",
        salario: "R$ 3.200,00",
        escala: "5x2",
        experiencia: true,
        descricao: "O Grupo Horizonte procura um analista para conduzir processos seletivos de diferentes áreas e apoiar os clientes na identificação de profissionais. A pessoa terá contato com candidatos, gestores e equipes internas.",
        atividades: [
            "Conduzir entrevistas individuais",
            "Analisar currículos",
            "Acompanhar processos seletivos",
            "Elaborar relatórios de recrutamento"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Ensino superior em andamento em RH ou Psicologia",
            "Boa comunicação",
            "Conhecimento em recrutamento e seleção",
            "Organização"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde",
            "Day off de aniversário"
        ],
        diferenciais: [
            "Experiência com plataformas de recrutamento",
            "Conhecimento em entrevistas por competência"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: ["Pessoa Negra"],
        curriculoEnviado: new Date("2026-11-10T10:00:00"),
        curriculoVisto: new Date("2026-11-11T09:30:00"),
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 18. Nova Gestão Serviços
    {
        id: 18,
        titulo: "Recepcionista",
        empresa: { id: 3, nome: "Nova Gestão Serviços" },
        local: "São Paulo",
        salario: "R$ 1.950,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A Nova Gestão Serviços está em busca de uma pessoa para atuar na recepção e prestar atendimento a visitantes, colaboradores e fornecedores. É importante ter cordialidade, organização e facilidade para lidar com o público.",
        atividades: [
            "Recepcionar visitantes",
            "Atender ligações telefônicas",
            "Controlar o acesso de pessoas",
            "Organizar correspondências e documentos"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Ensino médio completo",
            "Boa comunicação",
            "Conhecimento básico de informática",
            "Postura profissional"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-refeição",
            "Assistência médica"
        ],
        diferenciais: [
            "Experiência em recepção",
            "Conhecimento em atendimento ao público"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: ["Mulher", "PCD"],
        curriculoEnviado: new Date("2026-11-11T08:00:00"),
        curriculoVisto: new Date("2026-11-12T15:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: false
    },

    // 19. Agência Pixel
    {
        id: 19,
        titulo: "Assistente de Produção de Conteúdo",
        empresa: { id: 4, nome: "Agência Pixel" },
        local: "Rio de Janeiro",
        salario: "R$ 2.500,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A Agência Pixel procura uma pessoa para auxiliar na produção de conteúdos digitais e no desenvolvimento de materiais de comunicação para seus clientes. O profissional trabalhará com diferentes formatos e plataformas.",
        atividades: [
            "Redigir textos para publicações",
            "Pesquisar referências e tendências",
            "Auxiliar na produção de roteiros",
            "Revisar materiais antes da publicação"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Ensino médio completo",
            "Boa escrita",
            "Criatividade",
            "Organização"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano odontológico"
        ],
        diferenciais: [
            "Experiência com produção de conteúdo",
            "Conhecimento em ferramentas de edição",
            "Noções de SEO"
        ],
        vagaSalva: true,
        modalidade: "Remoto",
        escolaridade: "Superior em andamento",
        afirmativa: [],
        curriculoEnviado: new Date("2026-11-01T10:00:00"),
        curriculoVisto: new Date("2026-11-03T11:00:00"),
        curriculoRejeitado: new Date("2026-11-05T16:00:00"),
        curriculoAprovado: false
    },

    // 20. CodeWave
    {
        id: 20,
        titulo: "Desenvolvedor Full Stack Pleno",
        empresa: { id: 5, nome: "CodeWave" },
        local: "São Paulo",
        salario: "R$ 7.500,00",
        escala: "5x2",
        experiencia: true,
        descricao: "A CodeWave busca um desenvolvedor full stack para participar da construção e evolução de aplicações web. O profissional terá autonomia para implementar funcionalidades e colaborar nas decisões técnicas dos projetos.",
        atividades: [
            "Desenvolver aplicações front-end e back-end",
            "Projetar e integrar APIs",
            "Implementar melhorias de desempenho",
            "Participar de revisões de código"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Experiência com desenvolvimento web",
            "Conhecimento em React e Node.js",
            "Conhecimento em bancos de dados relacionais",
            "Experiência com Git"
        ],
        beneficios: [
            "Vale-refeição",
            "Plano de saúde",
            "Auxílio home office",
            "Participação nos lucros"
        ],
        diferenciais: [
            "Conhecimento em Docker",
            "Experiência com cloud",
            "Conhecimento em testes automatizados"
        ],
        vagaSalva: false,
        modalidade: "Remoto",
        escolaridade: "Superior Completo",
        afirmativa: ["Pessoa Negra", "LGBTQIAPN+"],
        curriculoEnviado: new Date("2026-11-02T08:30:00"),
        curriculoVisto: new Date("2026-11-04T10:00:00"),
        curriculoRejeitado: new Date("2026-11-06T14:00:00"),
        curriculoAprovado: false
    },

    // 21. Vitrine Brasil
    {
        id: 21,
        titulo: "Operador de Caixa",
        empresa: { id: 6, nome: "Vitrine Brasil" },
        local: "São Paulo",
        salario: "R$ 1.900,00",
        escala: "6x1",
        experiencia: false,
        descricao: "A Vitrine Brasil busca profissionais para atuar no caixa de suas lojas, realizando operações de pagamento e prestando atendimento aos clientes durante o processo de compra.",
        atividades: [
            "Registrar produtos no sistema",
            "Realizar operações de pagamento",
            "Conferir valores recebidos",
            "Auxiliar clientes em dúvidas sobre compras"
        ],
        periodo: "Parcial Tarde",
        horario: "14h às 20h20",
        requisitos: [
            "Ensino médio completo",
            "Atenção e responsabilidade",
            "Boa comunicação",
            "Disponibilidade para escala 6x1"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-alimentação",
            "Desconto em produtos da loja"
        ],
        diferenciais: [
            "Experiência com operação de caixa",
            "Conhecimento em sistemas de vendas"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: ["Mulher"],
        curriculoEnviado: new Date("2026-11-03T13:00:00"),
        curriculoVisto: new Date("2026-11-05T10:00:00"),
        curriculoRejeitado: new Date("2026-11-07T16:00:00"),
        curriculoAprovado: false
    },

    // 22. DataMind
    {
        id: 22,
        titulo: "Analista de Business Intelligence",
        empresa: { id: 7, nome: "DataMind" },
        local: "São Paulo",
        salario: "R$ 5.800,00",
        escala: "5x2",
        experiencia: true,
        descricao: "A DataMind procura um analista de BI para transformar dados em informações estratégicas. O profissional será responsável por desenvolver dashboards, acompanhar indicadores e apoiar diferentes áreas na tomada de decisões.",
        atividades: [
            "Desenvolver dashboards gerenciais",
            "Criar consultas em bancos de dados",
            "Analisar indicadores de negócio",
            "Apresentar resultados às áreas internas"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Ensino superior em andamento ou completo",
            "Conhecimento em SQL",
            "Experiência com ferramentas de BI",
            "Perfil analítico"
        ],
        beneficios: [
            "Vale-refeição",
            "Plano de saúde",
            "Auxílio educação",
            "Participação nos lucros"
        ],
        diferenciais: [
            "Conhecimento em Power BI",
            "Conhecimento em Python",
            "Experiência com modelagem de dados"
        ],
        vagaSalva: true,
        modalidade: "Híbrido",
        escolaridade: "Superior Completo",
        afirmativa: [],
        curriculoEnviado: new Date("2026-11-04T09:00:00"),
        curriculoVisto: new Date("2026-11-06T10:00:00"),
        curriculoRejeitado: new Date("2026-11-08T17:00:00"),
        curriculoAprovado: false
    },

    // 23. Studio Criativo
    {
        id: 23,
        titulo: "Assistente de Comunicação Visual",
        empresa: { id: 8, nome: "Studio Criativo" },
        local: "Rio de Janeiro",
        salario: "R$ 2.400,00",
        escala: "5x2",
        experiencia: false,
        descricao: "O Studio Criativo está contratando um assistente para apoiar a produção de materiais de comunicação visual. A oportunidade é indicada para pessoas interessadas em design e criação de materiais gráficos.",
        atividades: [
            "Apoiar a criação de materiais gráficos",
            "Organizar arquivos de projetos",
            "Preparar materiais para apresentação",
            "Realizar ajustes em peças visuais"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento básico de ferramentas de design",
            "Organização",
            "Criatividade"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano odontológico"
        ],
        diferenciais: [
            "Conhecimento em Canva",
            "Noções de Photoshop",
            "Interesse em design gráfico"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: ["PCD"],
        curriculoEnviado: new Date("2026-11-05T10:00:00"),
        curriculoVisto: new Date("2026-11-07T09:30:00"),
        curriculoRejeitado: new Date("2026-11-09T11:00:00"),
        curriculoAprovado: false
    },

    // 24. Banco União
    {
        id: 24,
        titulo: "Assistente Financeiro",
        empresa: { id: 9, nome: "Banco União" },
        local: "São Paulo",
        salario: "R$ 3.300,00",
        escala: "5x2",
        experiencia: true,
        descricao: "O Banco União procura um assistente financeiro para apoiar atividades de controle e acompanhamento de operações financeiras. A pessoa selecionada deverá contribuir para a organização dos registros e conferência de informações.",
        atividades: [
            "Conferir lançamentos financeiros",
            "Auxiliar na elaboração de relatórios",
            "Organizar documentos e comprovantes",
            "Acompanhar solicitações internas"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Ensino superior em andamento em Administração ou áreas relacionadas",
            "Conhecimento em Excel",
            "Organização",
            "Atenção aos detalhes"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-alimentação",
            "Plano de saúde",
            "Previdência privada"
        ],
        diferenciais: [
            "Experiência em rotinas financeiras",
            "Conhecimento em sistemas ERP"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: ["Pessoa Negra"],
        curriculoEnviado: new Date("2026-11-06T14:00:00"),
        curriculoVisto: new Date("2026-11-08T10:00:00"),
        curriculoRejeitado: new Date("2026-11-10T15:00:00"),
        curriculoAprovado: false
    },

    // 25. InfoTech Soluções
    {
        id: 25,
        titulo: "Técnico de Infraestrutura de TI",
        empresa: { id: 10, nome: "InfoTech Soluções" },
        local: "São Paulo",
        salario: "R$ 3.800,00",
        escala: "5x2",
        experiencia: true,
        descricao: "A InfoTech Soluções busca um técnico de infraestrutura para atuar na manutenção e administração de ambientes de tecnologia. O profissional será responsável por apoiar a disponibilidade e o funcionamento dos equipamentos e redes dos clientes.",
        atividades: [
            "Configurar equipamentos de rede",
            "Realizar manutenção de computadores",
            "Monitorar serviços de infraestrutura",
            "Registrar incidentes e soluções"
        ],
        periodo: "Integral",
        horario: "08h às 17h",
        requisitos: [
            "Curso técnico em informática ou áreas relacionadas",
            "Conhecimento em redes",
            "Conhecimento em sistemas operacionais",
            "Experiência com suporte técnico"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde",
            "Seguro de vida"
        ],
        diferenciais: [
            "Conhecimento em Linux",
            "Certificações de TI",
            "Conhecimento em servidores"
        ],
        vagaSalva: true,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: ["PCD", "Pessoas Trans"],
        curriculoEnviado: new Date("2026-11-01T08:30:00"),
        curriculoVisto: new Date("2026-11-03T10:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: new Date("2026-11-10T14:00:00")
    },

    // 26. Contábil Prime
    {
        id: 26,
        titulo: "Analista Fiscal Júnior",
        empresa: { id: 11, nome: "Contábil Prime" },
        local: "São Paulo",
        salario: "R$ 3.500,00",
        escala: "5x2",
        experiencia: true,
        descricao: "A Contábil Prime está procurando um analista fiscal júnior para apoiar as atividades de apuração de impostos e conferência de documentos fiscais, contribuindo para a conformidade das operações de seus clientes.",
        atividades: [
            "Conferir documentos fiscais",
            "Auxiliar na apuração de impostos",
            "Acompanhar obrigações fiscais",
            "Atualizar informações em sistemas contábeis"
        ],
        periodo: "Integral",
        horario: "08h30 às 17h30",
        requisitos: [
            "Ensino superior em andamento em Ciências Contábeis",
            "Conhecimento básico de legislação fiscal",
            "Conhecimento em Excel",
            "Atenção aos detalhes"
        ],
        beneficios: [
            "Vale-refeição",
            "Vale-transporte",
            "Plano de saúde",
            "Plano odontológico"
        ],
        diferenciais: [
            "Experiência em escritório contábil",
            "Conhecimento em sistemas ERP",
            "Noções de SPED"
        ],
        vagaSalva: false,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: ["Mulher"],
        curriculoEnviado: new Date("2026-11-02T09:00:00"),
        curriculoVisto: new Date("2026-11-04T11:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: new Date("2026-11-11T16:00:00")
    },

    // 27. DevStart
    {
        id: 27,
        titulo: "Estágio em Desenvolvimento Back-end",
        empresa: { id: 12, nome: "DevStart" },
        local: "São Paulo",
        salario: "R$ 1.800,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A DevStart busca estudantes de tecnologia interessados em desenvolvimento back-end. O estagiário participará de atividades de programação, testes e integração de sistemas, com apoio de profissionais experientes.",
        atividades: [
            "Auxiliar no desenvolvimento de APIs",
            "Realizar testes em funcionalidades",
            "Apoiar a integração de sistemas",
            "Documentar soluções desenvolvidas"
        ],
        periodo: "Parcial Manhã",
        horario: "08h às 13h",
        requisitos: [
            "Estar cursando ensino superior em tecnologia",
            "Conhecimento básico de lógica de programação",
            "Noções de banco de dados",
            "Disposição para aprender"
        ],
        beneficios: [
            "Bolsa-auxílio",
            "Vale-transporte",
            "Auxílio educação"
        ],
        diferenciais: [
            "Conhecimento em Node.js",
            "Conhecimento em Python",
            "Noções de APIs REST"
        ],
        vagaSalva: true,
        modalidade: "Remoto",
        escolaridade: "Superior em andamento",
        afirmativa: ["Pessoa Negra", "Pessoas Trans"],
        curriculoEnviado: new Date("2026-11-03T08:00:00"),
        curriculoVisto: new Date("2026-11-05T13:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: new Date("2026-11-12T10:00:00")
    },

    // 28. LogExpress
    {
        id: 28,
        titulo: "Assistente de Controle de Estoque",
        empresa: { id: 13, nome: "LogExpress" },
        local: "São Paulo",
        salario: "R$ 2.450,00",
        escala: "6x1",
        experiencia: false,
        descricao: "A LogExpress procura um assistente para apoiar o controle de estoque e a organização dos produtos armazenados. A pessoa selecionada trabalhará em conjunto com as equipes de recebimento e expedição.",
        atividades: [
            "Atualizar registros de estoque",
            "Conferir entradas e saídas de produtos",
            "Identificar divergências de inventário",
            "Auxiliar na organização do armazém"
        ],
        periodo: "Integral",
        horario: "07h às 16h",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento básico de informática",
            "Organização",
            "Responsabilidade"
        ],
        beneficios: [
            "Vale-transporte",
            "Vale-alimentação",
            "Seguro de vida"
        ],
        diferenciais: [
            "Experiência com estoque",
            "Conhecimento em sistemas de logística"
        ],
        vagaSalva: false,
        modalidade: "Presencial",
        escolaridade: "Ensino Médio",
        afirmativa: ["PCD"],
        curriculoEnviado: new Date("2026-11-04T07:30:00"),
        curriculoVisto: new Date("2026-11-06T09:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: new Date("2026-11-13T14:00:00")
    },

    // 29. Mundo Digital
    {
        id: 29,
        titulo: "Assistente de Tráfego Pago",
        empresa: { id: 14, nome: "Mundo Digital" },
        local: "Rio de Janeiro",
        salario: "R$ 2.900,00",
        escala: "5x2",
        experiencia: false,
        descricao: "A Mundo Digital busca um assistente para apoiar o planejamento e acompanhamento de campanhas de anúncios digitais. A pessoa selecionada terá contato com ferramentas de publicidade e análise de resultados.",
        atividades: [
            "Auxiliar na configuração de campanhas",
            "Acompanhar indicadores de anúncios",
            "Organizar relatórios de desempenho",
            "Pesquisar oportunidades de otimização"
        ],
        periodo: "Integral",
        horario: "09h às 18h",
        requisitos: [
            "Ensino médio completo",
            "Conhecimento básico de marketing digital",
            "Organização",
            "Raciocínio analítico"
        ],
        beneficios: [
            "Vale-refeição",
            "Plano de saúde",
            "Auxílio home office"
        ],
        diferenciais: [
            "Conhecimento em Google Ads",
            "Conhecimento em Meta Ads",
            "Noções de Google Analytics"
        ],
        vagaSalva: true,
        modalidade: "Híbrido",
        escolaridade: "Superior em andamento",
        afirmativa: ["Mulher", "LGBTQIAPN+"],
        curriculoEnviado: new Date("2026-11-05T09:30:00"),
        curriculoVisto: new Date("2026-11-07T11:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: new Date("2026-11-14T15:00:00")
    },

    // 30. Future Labs
    {
        id: 30,
        titulo: "Desenvolvedor de Interfaces Pleno",
        empresa: { id: 15, nome: "Future Labs" },
        local: "São Paulo",
        salario: "R$ 6.800,00",
        escala: "4x3",
        experiencia: true,
        descricao: "A Future Labs procura um desenvolvedor de interfaces para integrar sua equipe de produtos digitais. O profissional será responsável por transformar protótipos em aplicações funcionais, garantindo qualidade, acessibilidade e desempenho.",
        atividades: [
            "Desenvolver interfaces responsivas",
            "Implementar componentes reutilizáveis",
            "Integrar aplicações com APIs",
            "Colaborar com designers e desenvolvedores"
        ],
        periodo: "Integral",
        horario: "08h às 18h",
        requisitos: [
            "Experiência com desenvolvimento front-end",
            "Conhecimento em React e TypeScript",
            "Conhecimento em HTML e CSS",
            "Experiência com Git"
        ],
        beneficios: [
            "Vale-refeição",
            "Plano de saúde",
            "Auxílio home office",
            "Auxílio educação",
            "Day off de aniversário"
        ],
        diferenciais: [
            "Conhecimento em Next.js",
            "Experiência com design systems",
            "Conhecimento em acessibilidade"
        ],
        vagaSalva: false,
        modalidade: "Remoto",
        escolaridade: "Superior Completo",
        afirmativa: ["LGBTQIAPN+", "Pessoas Trans"],
        curriculoEnviado: new Date("2026-11-06T08:00:00"),
        curriculoVisto: new Date("2026-11-08T10:00:00"),
        curriculoRejeitado: false,
        curriculoAprovado: new Date("2026-11-15T12:00:00")
    }
];


function getArrayParam(
    params: URLSearchParams,
    key: string
): string[] {
    const values = [
        ...params.getAll(`${key}[]`),
        ...params.getAll(key),
    ];

    return [...new Set(values.filter((value) => value.trim() !== ""))];
}

// Converte strings "true" e "false" em booleanos reais
function getBooleanArray(
    params: URLSearchParams,
    key: string
): boolean[] {
    return getArrayParam(params, key).flatMap((value) => {
        if (value === "true") return [true];
        if (value === "false") return [false];

        return [];
    });
}

// Verifica se o valor da vaga corresponde ao filtro.
function matchesSelection(
    selected: (string | boolean)[],
    current: unknown
): boolean {
    if (selected.length === 0) return true;

    const values = Array.isArray(current) ? current : [current];

    return values.some((value) =>
        selected.includes(value as string | boolean)
    );
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        return res.status(405).json({
            mensagem: "Método não permitido",
        });
    }

    const params = new URL(
        req.url ?? "/",
        "http://localhost"
    ).searchParams;

    // ========================================
    // 1. FILTRO POR ID (PRIORIDADE ABSOLUTA)
    // ========================================

    if (params.has("id")) {
        const id = params.getAll("id");

        if (
            id.length !== 1 ||
            id[0].trim() === "" ||
            !Number.isInteger(Number(id[0]))
        ) {
            return res.status(400).json({
                mensagem: "ID inválido",
            });
        }

        const idNumerico = Number(id[0]);

        const vagasPorId = vagas.filter(
            (vaga) => vaga.id === idNumerico
        );

        return res.status(200).json(vagasPorId);
    }

    // ========================================
    // 2. CAPTURA DOS FILTROS
    // ========================================

    const titulo = params.get("titulo")?.trim().toLowerCase() ?? "";

    const escolaridade = getArrayParam(params, "escolaridade");
    const afirmativa = getArrayParam(params, "afirmativa");
    const periodo = getArrayParam(params, "periodo");
    const escala = getArrayParam(params, "escala");
    const experiencia = getBooleanArray(params, "experiencia");
    const cidade = getArrayParam(params, "cidade");
    const modalidade = getArrayParam(params, "modalidade");

    // Validação de booleanos
    const experienciaRecebida = getArrayParam(params, "experiencia");

    if (
        experienciaRecebida.some(
            (value) => value !== "true" && value !== "false"
        )
    ) {
        return res.status(400).json({
            mensagem: "Experiência deve receber true ou false",
        });
    }

    // ========================================
    // 3. FILTRAGEM DAS VAGAS
    // ========================================

    const vagasFiltradas = vagas.filter((vaga) => {

        const correspondeTitulo =
            !titulo ||
            vaga.titulo.toLowerCase().includes(titulo);

        const correspondeEscolaridade = matchesSelection(
            escolaridade,
            vaga.escolaridade
        );

        const correspondeAfirmativa = matchesSelection(
            afirmativa,
            vaga.afirmativa
        );

        const correspondePeriodo = matchesSelection(
            periodo,
            vaga.periodo
        );

        const correspondeEscala = matchesSelection(
            escala,
            vaga.escala
        );

        const correspondeExperiencia = matchesSelection(
            experiencia,
            vaga.experiencia
        );

        const correspondeCidade = matchesSelection(
            cidade,
            vaga.local
        );

        const correspondeModalidade = matchesSelection(
            modalidade,
            vaga.modalidade
        );

        return (
            correspondeTitulo &&
            correspondeEscolaridade &&
            correspondeAfirmativa &&
            correspondePeriodo &&
            correspondeEscala &&
            correspondeExperiencia &&
            correspondeCidade &&
            correspondeModalidade
        );
    });

    return res.status(200).json(vagasFiltradas);
}
