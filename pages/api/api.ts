import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pdv.empregare.com',
    timeout: 10000,
});

export const QUERY_KEYS = {
    vagas: ['/api/{culture}/vagas/buscar-novo'] as const,
};