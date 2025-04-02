import { IChangeEvent } from "@rjsf/core";
import MyForm from "../components/MyForm";
import loginSchema from "../types/loginSchema";
import { FormSchema } from "../types/formTypes";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

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

        const { data } = await response.json();
        auth.login();
        navigate("/");
        localStorage.setItem("token", data);
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

export default Login;
