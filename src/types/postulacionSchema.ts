import { FormSchema } from "./formTypes";

const schema: FormSchema = {
  title: "Postulación",
  type: "object",
  properties: {
    titulo_puesto: {
      type: "string",
      title: "Título del Puesto",
      minLength: 1,
    },
    empresa: {
      type: "string",
      title: "Nombre de la Empresa",
      minLength: 1,
    },
    fecha_postulacion: {
      type: "string",
      title: "Fecha de Postulación",
      format: "date",
    },
    estado: {
      type: "string",
      title: "Estado de la Postulación",
      enum: ["pendiente", "en proceso", "aceptada", "rechazada"], // Array mutable
      default: "pendiente",
    },
    fuente: {
      type: "string",
      title: "Fuente de la Postulación",
    },
    enlace_oferta: {
      type: "string",
      title: "Enlace a la Oferta",
    },
    comentarios: {
      type: "string",
      title: "Comentarios Adicionales",
    },
  },
  required: ["titulo_puesto", "empresa"], // Array de strings
};

const uiSchema = {
  titulo_puesto: {
    "ui:widget": "text",
    "ui:options": {
      classNames: "input-container",
    },
  },
  empresa: {
    "ui:widget": "text",
    "ui:options": {
      classNames: "input-container",
    },
  },
  fecha_postulacion: {
    "ui:widget": "date",
    "ui:options": {
      classNames: "input-container",
    },
  },
  estado: {
    "ui:widget": "select",
    "ui:options": {
      classNames: "input-container",
    },
  },
  fuente: {
    "ui:widget": "text",
    "ui:options": {
      classNames: "input-container",
    },
  },
  enlace_oferta: {
    "ui:widget": "text",
    "ui:options": {
      classNames: "input-container",
    },
  },
  comentarios: {
    "ui:widget": "textarea",
    "ui:options": {
      classNames: "input-container",
    },
  },
};

export default {
  schema,
  uiSchema,
};
