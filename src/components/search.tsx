import React, { useState, FC, ChangeEvent } from 'react';

const Search: FC = () => {
  const [location, setLocation] = useState('Seattle, WA');

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">location</label>
        <input
          id="location"
          defaultValue={location}
          placeholder="location"
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
