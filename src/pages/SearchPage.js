import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (query, isFinalSearch = false) => {
    if (query.trim() === '') {
      setSuggestions([]);
      setResults([]);
      return;
    }

    try {
      const response = await axios.get(`https://api.fda.gov/drug/label.json?search=${query}`);
      const data = response.data.results.map((item) => ({
        id: item.id,
        name: item.openfda.brand_name[0],
      }));

      if (isFinalSearch) {
        setResults(data);
        setSuggestions([]);
      } else {
        const uniqueNames = [...new Set(data.map(item => item.name))];
        setSuggestions(uniqueNames);
      }
    } catch (error) {
      console.error('Error fetching the data', error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSearch(suggestion, true);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <SearchBar onSearch={handleSearch} suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
      <SearchResult results={results} />
    </div>
  );
};

export default SearchPage;
