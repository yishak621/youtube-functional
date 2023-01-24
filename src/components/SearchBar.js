import React, { useState } from 'react';
//in a functional components a useEffect hook helps to act as a lifecycle method as we use in a class comp.

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  //for form callback-overriding the default behavior of form which is submitting form
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  //for input
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
