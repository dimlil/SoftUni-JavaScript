import * as api from './api.js'

export const login = api.login
export const register = api.register
export const logout = api.logout

export async function getAll() {
    return await api.get('http://localhost:3030/data/pets?sortBy=_createdOn%20desc')
}
export async function getMyPets(userId) {
    return await api.get(`http://localhost:3030/data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}
export async function getById(id) {
    return await api.get(`http://localhost:3030/data/pets/${id}`)
}
export async function create(name,description,imageUrl,type) {
    const param={
        name,
        description,
        imageUrl,
        type
    }
    console.log(param);
    return await api.post('http://localhost:3030/data/pets',param)
}
export async function editById(id,name, description, imageUrl, type) {
    const param={
        name,
        description,
        imageUrl,
        type
    }
    return await api.put(`http://localhost:3030/data/pets/${id}`,param)
}
export async function deleteById(id) {
    return await api.del(`http://localhost:3030/data/pets/${id}`)
}
export async function getMy(userId) {
    return await api.get('http://localhost:3030' + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}