import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getEnv } from "../../Helpers/getEnv";

const ItemDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const apiUrl = getEnv();

  useEffect(() => {
    fetch(`${apiUrl}/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!book) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1>Title:{book.title}</h1>
      <p>ISBN:{book.ISBN}</p>
      <p>Author:{book.author}</p>
      <p>Genre:{book.genre}</p>
      <p>Book Rating:{book.bookRating}</p>
      <p>Has Read: {book.hasRead ? "Yes" : "No"}</p>
      <img src={book.imageURL} alt={book.title} />
    </div>
  );
};

export default ItemDetails;
