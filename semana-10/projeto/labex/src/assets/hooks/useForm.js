import { useState } from "react";

export const useForm = initialState => {
  const [form, setForm] = useState(initialState);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };

    setForm(newForm);
  };

  // COM ESSA FORMA ALTERNATIVA, NÃO É PRECISO
  // USAR UMA FUNCAO INTERMEDIÄRIA (handleInputChange) NO COMPONENTE
  // const onChange = (event) => {
  // const {name, value} = event.target
  //   const newForm = {...form, [name]: value}

  //   setForm(newForm)
  // }

  const resetState = () => {
    setForm(initialState);
  };

  return { form, onChange, resetState };
};
