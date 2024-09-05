import React from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'
  import { getTodos, postTodo } from './api'

  export default function Todos() {
    const queryClient = useQueryClient()
  
    const {data} = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  
    const mutation = useMutation({
      mutationFn: postTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    })

    const submitTodo = () => mutation.mutate({ id: Date.now(), title: 'Do Laundry' })
  
    return (
      <div>
        <ul>{data?.data.data.map((todo) => <li key={todo.id}>{todo.description}</li>)}</ul>
  
        <button onClick={submitTodo}>Add Todo</button>
      </div>
    )
  }