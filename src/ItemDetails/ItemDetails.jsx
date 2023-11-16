import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteItem, getItem } from "../common/helpers/apicalls";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";


const ItemDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getItem(id).then((res) => setBook(res));
  }, [id]);

  const navigate = useNavigate()

  if (!book) {
    return <div className="container">Loading....</div>;
  }

  const promptDelete = () => {
    if(confirm(`Delete ${book.title}?`)){
      deleteItem(id)
      .then(res => {
        if(res){
          alert(`Successfuly deleted ${book.title}`)
          navigate("/")
        } else {
          alert("Unable to delete entry, please try again later.")
        }
      })
      .catch(err => console.error(err))
    }

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
              <h1 className="card-title navbar-font">{book.title}</h1>
              <Table bordered>
                <thead></thead>
                <tbody className="font-inter fs-6">
                  <tr>
                    <td>ISBN:</td>
                    <td>{book.isbn}</td>
                  </tr>
                  <tr>
                    <td>Author:</td>
                    <td>{book.author}</td>
                  </tr>
                  <tr>
                    <td>Genre:</td>
                    <td>{book.genre}</td>
                  </tr>
                  <tr>
                    <td>Book Rating:</td>
                    <td>{book.bookrating}</td>
                  </tr>
                  <tr>
                    <td colspan={2} className="fs-3 navbar-font">
                      {book.hasRead ? "Read" : "Unfinished"}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Link to={`/${id}/edit`} className="btn btn-primary">
                Edit
              </Link>
              <Button 
                variant="outline-danger"
                className="m-2"
                onClick={promptDelete}>
                  
                  Delete
              </Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

