import React, { useState, FC, ChangeEvent } from 'react';

const Search: FC = () => {
  const [location, setLocation] = useState('Seattle, WA');

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">location</label>
        <h1>{location}</h1>
        <input
          id="location"
          value={location}
          placeholder="location"
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.currentTarget.value)
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
