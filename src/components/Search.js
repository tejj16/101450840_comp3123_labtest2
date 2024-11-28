// components/Search.js
import React from 'react';

function Search({ setCity }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    if (city) {
      setCity(city);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input type="text" name="city" placeholder="Enter city name" />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
