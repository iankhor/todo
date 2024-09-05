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
  const todolist = isLoading ? [] : data?.map((todo) => <li key={todo.id}>{`Item ${todo.description}`}</li>)
  const status = isLoading ? [] : data?.map((todo) => <div role="hacker" key={todo.id} dangerouslySetInnerHTML={{__html: todo.sus}}/>)

  const mutation = useMutation({
    mutationFn: postTodo,
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  const submitTodo = () => mutation.mutate({ id: Date.now(), title: 'Do Laundry' })

  return (
    <div>
      <div>Title</div>
      <ul>{isLoading ? 'Loading ...' : todolist}</ul>
      {status}
      <button onClick={submitTodo}>Add Todo</button>
    </div>
  )
}