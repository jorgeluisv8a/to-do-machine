import React, { useContext } from "react"

import { CreateTodoButton } from '../CreateTodoButton'
import { TodosLoading } from '../TodosLoading'
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodosError } from "../TodosError"
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodoForm } from "../TodoForm"
import { EmptyTodos } from "../EmptyTodos"
import { Modal } from '../Modal'

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {error && <TodosError error={error} />}
      {loading && <TodosLoading />}
      {(!loading && !searchedTodos.length) && <EmptyTodos />}
      {
        !!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export { AppUI }