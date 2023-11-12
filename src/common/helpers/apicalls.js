
const URL = import.meta.env.VITE_API_URL



const getAllItems = () => {
    return fetch(URL)
    .then(res => res.json())
    .then(json => json.data.payload)
    .catch(err => console.error(err))
}
const getItem = (id) => {

}
const addItem = (item) => {}
const updateItem = (id, item) => {}
const deleteItem = (id) => {}

export  {
    getAllItems,
    getItem,
    updateItem,
    addItem,
    deleteItem
}