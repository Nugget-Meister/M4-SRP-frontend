import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getItem } from "../common/helpers/apicalls";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getItem(id).then((res) => setBook(res));
  }, [id]);

  if (!book) {
    return <div className="container">Loading....</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img
              src={book.imageurl}
              alt={book.title}
              className="card-img-top"
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">{book.title}</h1>
              <p className="card-text">ISBN: {book.isbn}</p>
              <p className="card-text">Author: {book.author}</p>
              <p className="card-text">Genre: {book.genre}</p>
              <p className="card-text">Book Rating: {book.bookrating}</p>
              <p className="card-text">
                Has Read: {book.hasRead ? "Yes" : "No"}
              </p>
              <Link to={`/${id}/edit`} className="btn btn-primary">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

