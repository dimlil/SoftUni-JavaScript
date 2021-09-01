import * as api from './api.js'

export const login = api.login
export const register = api.register
export const logout = api.logout

export async function getAll() {
    return await api.get('https://localhost:3030' + '/data/cars?sortBy=_createdOn%20desc')
}
export async function getById(id) {
    return await api.get('https://localhost:3030' + '/data/cars/' + id)
}
export async function create(param) {
    return await api.post('https://localhost:3030' + '/data/cars/',param)
}
export async function editById(id,param) {
    return await api.put('https://localhost:3030' + '/data/cars/' + id,params)
}
export async function deleteById(id) {
    return await api.del('https://localhost:3030' + '/data/cars/' + id)
}
export async function getMy(userId) {
    return await api.get('https://localhost:3030' + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}