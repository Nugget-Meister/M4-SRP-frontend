import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { googleUrl } from '../../helpers/apicalls';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      return;
    }
    setLoading(true);
    googleUrl(searchQuery)
      .then((results) => {
        console.log(' Results on searchBar Component:', results);
        onSearch(results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        placeholder="Search books"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control me-2"
      />
      <Link to="/search-result">
        <button onClick={handleSearch} className="btn btn-outline-light">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
