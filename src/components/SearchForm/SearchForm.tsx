import { useEffect, useState } from "react";
import { URLSearchParamsInit } from "react-router-dom";

interface IProps {
  onSearch: (query: URLSearchParamsInit) => void;
  query: string | null;
}

export const SearchForm = ({ onSearch, query }: IProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value.trim());

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
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
