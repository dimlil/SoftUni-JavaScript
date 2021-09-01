import { clearUserData, getUserData, setUserData } from '../utility.js';

// const host = 'https://localhost:3030/';
export const settings = {
    host: 'https://localhost:3030'
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            const error = await response.json;
            throw new Error(error.message);
        }
        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (error) {
        alert(error);
        throw error;
    }
}
function createOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    }
    const user = getUserData();
    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }
    if (body) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body)
    }
    console.log(method);
    console.log(options);
    return options;
}

export async function get(url) {
    return await request(url, createOptions());
}
export async function post(url, data) {
    return await request(url, createOptions('post', data));
}
export async function put(url, data) {
    return await request(url, createOptions('put', data));
}
export async function del(url) {
    return await request(url, createOptions('delete'));
}
export async function login(email, password) {
    const result = await post('http://localhost:3030/users/login', { email, password });
    console.log(settings.host + '/users/login');
    setUserData(result);
    return result;
}
export async function register(email, password) {
    const result = await post('http://localhost:3030/users/register', { email, password });
    setUserData(result);
    return result;
}
export function logout() {
    const result = post('http://localhost:3030/users/logout');
    clearUserData();
    return result;
}