
const URL = import.meta.env.VITE_API_URL



const getAllItems = () => {
    return fetch(URL)
    .then(res => res.json())
    .then(json => json.data.payload)
    .catch(err => console.error(err))
}
const getItem = (id) => {
    return fetch(`${URL}/${id}`)
    .then(res => res.json())
    // .then(json => json.data.payload)
    .catch(err => console.error(err))
}
const addItem = (item) => {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }
    return fetch(URL, options)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const updateItem = (id, item) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }
}
const deleteItem = (id) => {
    const options = {
        method: "delete",
    }

}

export  {
    getAllItems,
    getItem,
    updateItem,
    addItem,
    deleteItem
}