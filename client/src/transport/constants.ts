import { isProd } from '../shared/utils';

export const BASE_URL = isProd() ? '' : 'http://localhost:5001';

export const API_URL = `${BASE_URL}/api`;
