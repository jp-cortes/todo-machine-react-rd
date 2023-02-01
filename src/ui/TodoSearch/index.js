import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchValueChange = (event) => {
    const value = event.target.value;
    // console.log(event.target.value);
    setSearchValue(value)
    //this will modify the url 
    setSearchParams({ search: value});
  };
  
    const search = searchParams.get("search") ?? searchValue;


  //  console.log(search, ' search params');


  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={search}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
