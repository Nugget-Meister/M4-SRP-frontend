import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getAllItems } from "../common/helpers/apicalls";

const ItemDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const Url = getAllItems();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${Url}/books/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookDetails();
  }, [id, Url]);

  if (!book) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container">
      <h1>Title: {book.title}</h1>
      <p>ISBN: {book.ISBN}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Book Rating: {book.bookRating}</p>
      <p>Has Read: {book.hasRead ? "Yes" : "No"}</p>
      <img src={book.imageURL} alt={book.title} className="img-fluid" />
    </div>
  );
};

export default ItemDetails;
