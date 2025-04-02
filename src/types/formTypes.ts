export interface FormSchema {
  readonly title: string;
  readonly type: "object";
  readonly properties: {
    readonly name?: {
      readonly type: "string";
      readonly title: string;
      readonly minLength?: number;
    };
    readonly email?: {
      readonly type: "string";
      readonly format: "email";
      readonly title: string;
    };
    readonly password?: {
      readonly type: "string";
      readonly format?: "password";
      readonly title: string;
    };
    readonly titulo_puesto?: {
      readonly type: "string";
      readonly title: "Título del Puesto";
      readonly minLength: 1;
    };
    readonly empresa?: {
      readonly type: "string";
      readonly title: "Nombre de la Empresa";
      readonly minLength: 1;
    };
    readonly fecha_postulacion?: {
      readonly type: "string";
      readonly format: "date";
      readonly title: string;
    };
    readonly estado?: {
      readonly type: "string";
      readonly title: string;
      enum: ["pendiente", "en proceso", "aceptada", "rechazada"];
      readonly default: "pendiente";
    };
    readonly fuente?: {
      readonly type: "string";
      readonly title: string;
    };
    readonly enlace_oferta?: {
      readonly type: "string";
      readonly title: string;
    };
    readonly comentarios?: {
      readonly type: "string";
      readonly title: string;
    };
  };
  readonly required: string[];
}

export interface UiSchema {
  name?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  email?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  password?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  titulo_puesto?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  empresa?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  fecha_postulacion?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  estado?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  fuente?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  enlace_oferta?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
  comentarios?: {
    "ui:widget": string;
    "ui:options": {
      classNames: string;
    };
  };
}

export interface Data {
  name?: string;
  email?: string;
  password?: string;
  titulo_puesto?: string;
  empresa?: string;
  fecha_postulacion?: string;
  estado: "pendiente" | "en proceso" | "aceptada" | "rechazada" | "Estado";
  fuente?: string;
  enlace_oferta?: string;
  comentarios?: string;
}

export type Postulacion = Omit<Data, "name" | "email" | "password"> & {
  id: number;
};
