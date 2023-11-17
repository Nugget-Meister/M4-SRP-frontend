import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({results }) => {
  console.log('Results in SearchResult component:', results);
  if (!results || results.length === 0) {
    return <p>No results found.</p>;
  }
  
  return (
    <div className="container mt-4">
      <div className="row">
        {results.map((result) => (
          <div className="col-md-3" key={result.id}>
            <div className="card">
              <Link to={`/${result.id}`}>
                <img
                  src={result.volumeInfo.imageLinks.smallThumbnail}
                  alt={result.volumeInfo.title}
                  className="card-img-top"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{result.volumeInfo.title}</h5>
                <p className="card-text">Author: {result.volumeInfo.authors.join(", ")}</p>
                <p className="card-text">Publisher: {result.volumeInfo.publisher}</p>
                <p className="card-text">Published Date: {result.volumeInfo.publishedDate}</p>
                <p className="card-text">Description: {result.volumeInfo.description}</p>
                <p className="card-text">Language: {result.volumeInfo.language}</p>
                {result.volumeInfo.categories && (
                  <p className="card-text">Categories: {result.volumeInfo.categories.join(", ")}</p>
                )}
                <Link to={`/${result.id}/details`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
