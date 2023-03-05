import React, { useState } from "react";

type InitialState = {
  name: string;
  email: string;
};

const useForm = (initialState: InitialState) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValue((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return { value, handleChange };
};

export default useForm;
