import { IChangeEvent } from "@rjsf/core";
import { FormSchema, Postulacion } from "../types/formTypes";
import { Dispatch } from "react";
import postulacionSchema from "../types/postulacionSchema";
import MyForm from "./MyForm";

function ModalForm({
  setRows,
  show,
  setShow,
}: {
  setRows: Dispatch<React.SetStateAction<Postulacion[]>>;
  show: boolean;
  setShow: Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSubmit = (event: IChangeEvent<FormSchema>) => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/postulacion", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(event.formData),
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }

        const { data } = await response.json();
        setRows((prev) => prev.map((row) => (row.id === data.id ? data : row)));
        setShow(true);
      } catch (error) {
        console.error("Error en la solicitud POST:", error);
      }
    };
    fetchData();
  };

  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 bg-amber-50"
      hidden={show}
    >
      <button
        onClick={() => setShow(true)}
        className="absolute top-8 left-[60%] px-3 py-1 bg-gray-600 rounded-lg"
      >
        X
      </button>
      <MyForm
        schema={postulacionSchema.schema}
        uiSchema={postulacionSchema.uiSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ModalForm;
