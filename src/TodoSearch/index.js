import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchVlueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
  return (
    <input
      className="TodoSearch"
      placeholder="Buscar..."
      value={searchValue}
      onChange={onSearchVlueChange}
    />
  )
}

export { TodoSearch }