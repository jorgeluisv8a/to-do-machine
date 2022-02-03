import React from "react";
import './TodoList.css'

function TodoList(props) {
  const renderFunct = props.children || props.render
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}
      {console.log(props.totalTodos, !props.searchedTodos.length)}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
      {props.searchedTodos.map(renderFunct)}
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export { TodoList }