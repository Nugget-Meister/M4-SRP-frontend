const URL = import.meta.env.VITE_API_LOCAL || import.meta.env.VITE_URL_PROD;
// const googleAPI = import.meta.env.VITE_GOOGLE_BOOK_API;

// const googleUrl = (searchQuery) => {
//   const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${googleAPI}`;

//   return fetch(apiUrl)
//     .then((res) => res.json())
//     .then((json) => json.items) 
//     .catch((err) => console.error(err));
// };


const getAllItems = () => {
  return fetch(URL)
    .then((res) => res.json())
    .then((json) => json.data.payload)
    .catch((err) => console.error(err));
};
const getItem = (id) => {
  return fetch(`${URL}/${id}`)
    .then((res) => res.json())

    .catch((err) => console.error(err));
};
const addItem = (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const updateItem = (id, data) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${URL}/${id}`, options);
};
const deleteItem = (id) => {
  const options = {
    method: "delete",
  };

  return fetch(`${URL}/${id}`, options)
    .then((res) => res.json())
    .then((json) => {
      return json.payload.data.id ? true : false;
    })
    .catch((err) => console.error(err));
};

export { getAllItems, getItem, updateItem, addItem, deleteItem,};
