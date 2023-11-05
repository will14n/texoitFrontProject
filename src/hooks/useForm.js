import { useContext, useState } from "react"
import { MovieContext } from "../routes/context/MovieContext"

export const useForm = (initialForm = {}) => {

  const {
    form, setForm,
  } = useContext(MovieContext)

  const onInputChange = (target) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value
    })
  }
  return {
    onInputChange
  }
}
