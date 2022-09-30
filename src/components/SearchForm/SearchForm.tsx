import { useEffect, useState } from 'react';
import { IProps, THandleInputChange, THandleSubmit } from './types';

export const SearchForm = ({ onSearch, query }: IProps) => {
  const [input, setInput] = useState('');

  const handleInputChange: THandleInputChange = e => {
    const normalizedValue = e.target.value.trim();
    setInput(normalizedValue);
  };

  const handleSubmit: THandleSubmit = e => {
    e.preventDefault();
    onSearch({ query: input });
  };

  useEffect(() => {
    if (query) {
      setInput(query);
    }
  }, [query]);

  return (
    <form>
      <input
        name="search"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};
