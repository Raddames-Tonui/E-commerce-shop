import React, { useState } from 'react';

function ProductSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange} 
        className="w-full p-2 border border-gray-300 rounded-md pl-2"
      />
    </div>
  );
}

export default ProductSearch;
