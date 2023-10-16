import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        console.log(target.name)
        console.log(target.value)
        const {name,value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
  return {
    ...formState,
    formState,
    onInputChange
  }
}
