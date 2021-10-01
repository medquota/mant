/*
 * WPReact
 * Developed by: diaryforlife
 * */
import axios from 'axios';

export const WPDomain = 'https://medquota.com';

const username = 'ck_38ea6b13f8204fcd94665ba180c939e505c2f5e7';
const password = 'cs_ff4c6db8ce7e05f74f569d4b60462ab1016b9f2d';

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
