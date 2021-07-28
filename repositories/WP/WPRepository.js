/*
 * WPReact
 * Developed by: diaryforlife
 * */
import axios from 'axios';

export const WPDomain = 'https://pilore.com';

const username = 'ck_e74f2fa45d927e4d38c4085702fbc5735acee51f';
const password = 'cs_43b8b2ca85e439134c16a2a04a8c2a4d2516bb93';

export const oathInfo = {
    consumer_key: username,
    consumer_secret: password,
};

export const customHeaders = {
    Accept: '*/*',
};

export const WPRepository = axios.create({
    headers: customHeaders,
});
