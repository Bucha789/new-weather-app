import { useState } from "react"


export const useForm = (state) => {

  const [formValues, setFormValues] = useState(state)

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const resetValues = (newState = state) => {
    setFormValues(newState)
  }

  return [formValues, handleInputChange, resetValues]

}