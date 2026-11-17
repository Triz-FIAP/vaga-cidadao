import axios from 'axios';

export const api = axios.create({
    baseURL: '',
    timeout: 10000,
});

export const QUERY_KEYS = {
    vagas: ['/api/vagas'] as const,
    empresa: ['/api/empresas'] as const,
};