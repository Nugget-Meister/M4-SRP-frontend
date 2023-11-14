import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getItem } from "../common/helpers/apicalls";

const ItemDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getItem(id).then((res) => setBook(res));
  });

  if (!book) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container">
      <h1> {book.title}</h1>
      <p> {book.isbn}</p>
      <p> {book.author}</p>
      <p> {book.genre}</p>
      <p> {book.bookrating}</p>
      <p>Has Read : {book.hasRead ? "Yes" : "No"}</p>
      <img src={book.imageurl} alt={book.title} className="img-fluid" />
    </div>
  );
};

export default ItemDetails;
