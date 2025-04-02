import { useEffect, useState } from "react";
import TableMenu from "../components/TableMenu";
import TableRow from "../components/TableRow";
import ToggleSidebar from "../components/ToggleSidebar";
import { Data, Postulacion } from "../types/formTypes";
import ModalForm from "../components/ModalForm";

function Dashboard() {
  const [rows, setRows] = useState<Postulacion[]>([]);
  const [showModel, setShowModel] = useState<boolean>(true);

  const headerData: Data = {
    titulo_puesto: "Puesto",
    empresa: "Empresa",
    fecha_postulacion: "Fecha de postulacion",
    estado: "Estado",
    fuente: "Fuente",
    enlace_oferta: "Enlace",
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/postulacion", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }

        const { data } = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error en la solicitud POST:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="relative w-full max-w-7xl max-h-screen px-5">
      <div className="flex gap-2 py-2">
        <ToggleSidebar />
        <h1 className="text-2xl font-bold">JobTrack</h1>
      </div>
      <main className="h-full w-5xl mx-auto my-2 flex flex-col gap-2">
        <TableMenu setShowModel={setShowModel} />
        <TableRow data={headerData} />
        {rows.map((postulacion) => (
          <TableRow
            key={postulacion.id}
            data={postulacion}
            bgColor="gray-200"
          />
        ))}
      </main>
      <ModalForm setRows={setRows} show={showModel} setShow={setShowModel} />
    </div>
  );
}

export default Dashboard;
