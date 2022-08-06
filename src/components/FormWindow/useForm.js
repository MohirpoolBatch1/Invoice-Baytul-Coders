import {useState} from 'react'

export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState)

  return [
    state,
    e => {
      setState({...state, [e.target.name]: e.target.value})
    },
  ]
}
