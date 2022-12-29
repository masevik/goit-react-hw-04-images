import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormIcon,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const reset = () => {
    setQuery('');
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    reset();
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onHandleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            <SearchFormIcon />
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={query}
          onChange={onChange}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
