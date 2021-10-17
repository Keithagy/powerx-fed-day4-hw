import { fetchJson } from 'lib/fetch-json';
import { BASE_URL } from 'const';

export const getActiveUser = (accessToken, signal) =>
    fetchJson(`${BASE_URL}/whoami`, {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        signal,
    });
