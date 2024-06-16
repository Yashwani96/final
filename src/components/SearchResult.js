import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ results }) => {
  return (
    <div className="mt-6">
      {results.map((result) => (
        <div key={result.id} className="p-4 border-b border-gray-200">
          <Link to={`/medicine/${result.id}`} className="text-blue-500 hover:underline">
            {result.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
