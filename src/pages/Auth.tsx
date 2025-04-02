import { useState } from "react";
import MyForm from "../components/MyForm";
import loginSchema from "../types/loginSchema";
import { FormSchema } from "../types/formTypes";
import { IChangeEvent } from "@rjsf/core";

function Auth() {
  const [isAuthenticated, setisAuthenticated] = useState();

  const handleSubmit = (event: IChangeEvent<FormSchema>) => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event.formData),
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error en la solicitud POST:", error);
      }
    };
    fetchData();
  };

  return (
    <div className="container w-lvw mx-auto h-dvh flex justify-center items-center ">
      <MyForm
        schema={loginSchema.schema}
        uiSchema={loginSchema.uiSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Auth;
