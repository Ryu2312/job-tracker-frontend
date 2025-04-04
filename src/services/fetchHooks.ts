import { FormSchema } from "../types/formTypes";

export default async function fetchHooks(url: string, body: FormSchema) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
  }
}
