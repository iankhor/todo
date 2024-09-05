import React from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'
import { getTodos, postTodo } from './api'

export default function Todos() {
  const queryClient = useQueryClient()

  const {data, isLoading} = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const todolist = isLoading ? [] : data?.map((todo) => <li key={todo.id}>{`FIRST ${todo.description}`}</li>)

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const submitTodo = () => mutation.mutate({ id: Date.now(), title: 'Do Laundry' })

  return (
    <div>
      <div>Title</div>
      <ul>{isLoading ? 'Loading ...' : todolist}</ul>

      <button onClick={submitTodo}>Add Todo</button>
    </div>
  )
}