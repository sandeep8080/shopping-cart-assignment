import { useEffect, useState } from "react"

export default function useForm(initialState = {}) {
  const [inputData, setInputData] = useState(initialState);
  // const initialStateString = Object.values(inputData).join('');
  // console.log(initialStateString);

  // useEffect(() => {
  //   setInputData(initialState);
  // }, [initialStateString]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // TODO: Need to build clear form functionality
  const clearForm = () => {
    const blankArray = Object.entries(initialState);
  }

  return {
    inputData,
    handleInputChange,
    clearForm
  }
}