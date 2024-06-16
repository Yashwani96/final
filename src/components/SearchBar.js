import React, { useState } from 'react';

const SearchBar = ({ onSearch, suggestions, onSuggestionClick }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(query, true);  // Add a second parameter to indicate it's a final search
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for medicine..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-3 hover:bg-gray-200 cursor-pointer"
              onClick={() => onSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
