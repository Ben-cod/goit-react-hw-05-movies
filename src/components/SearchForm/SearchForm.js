import React, { useState } from 'react';

import css from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');

  const handleSubmit = async e => {
    e.preventDefault();
    onSearch(query);
    setSearchParams({ query });
    setQuery('');
  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button type="submit" className={css.button}>
        <span className={css.buttonLabel}></span>
      </button>

      <input
        className={css.input}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus={true}
        placeholder="Search movies"
        value={query}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchForm;
