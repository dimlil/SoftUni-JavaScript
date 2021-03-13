const url = 'http://localhost:3030/jsonstore/advanced/articles/details';

async function getData() {
    const response = await fetch(url)
    const result = await response.json();
    console.log(result);
}

async function getDataById(id) {
    const response = await fetch(url + '/' + id)
    const result = await response.json();
    console.log(result);
}

async function postData(data) {
    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'appication/json' },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    console.log(result);
}

async function updateData(id, data) {
    const response = await fetch(url + '/' + id, {
        method: 'put',
        headers: { 'Content-type': 'appication/json' },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    console.log(result);
}

async function deleteData(id) {
    const response = await fetch(url + '/' + id, {
        method: 'delete'
    })
    const result = await response.json();
    console.log(result);
}