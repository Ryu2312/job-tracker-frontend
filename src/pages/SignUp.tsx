import { IChangeEvent } from "@rjsf/core";
import MyForm from "../components/MyForm";
import singupSchema from "../types/singupSchema";
import { FormSchema } from "../types/formTypes";

function SignUp() {
  const handleSubmit = (event: IChangeEvent<FormSchema>) => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/usuario", {
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
        console.log(data);
      } catch (error) {
        console.error("Error en la solicitud POST:", error);
      }
    };
    fetchData();
  };

  return (
    <div className="container w-lvw mx-auto h-dvh flex justify-center items-center ">
      <MyForm
        schema={singupSchema.schema}
        uiSchema={singupSchema.uiSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default SignUp;
