//Base address shared by the apis

const BASE_URL = 'http://localhost:5000';

export const PIZZE_URL = BASE_URL + '/api/pizze';
export const PIZZE_TAG_URL = PIZZE_URL + '/tags';
export const PIZZE_BY_SEARCH_URL = PIZZE_URL + '/search/';
export const PIZZE_BY_TAG_URL = PIZZE_URL + '/tag/';
export const PIZZE_BY_ID_URL = PIZZE_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL+'/api/users/register';
