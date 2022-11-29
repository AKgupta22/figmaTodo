import { useState } from "react";

function useHandler(intial, data) {
  const [form, setForm] = useState(intial);
  const add = () => {
    const newtodo = [
      ...data,
      {
        task: intial,
        status: "pending",
      },
    ];
    setForm(newtodo);
    localStorage.setItem("todo", JSON.stringify(newtodo));
  };


  return { form, add };
}

export default useHandler;
