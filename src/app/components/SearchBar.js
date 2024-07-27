'use client';

import { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'k' || event.key === 'K') {
        if (document.activeElement !== inputRef.current) {
          setShowSearch(prevShowSearch => !prevShowSearch);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      {showSearch && (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
          <input
            type='text'
            placeholder='Search anything...'
            className='search-bar p-2 bg-white rounded shadow-lg shadow-white/20'
            ref={inputRef}
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
