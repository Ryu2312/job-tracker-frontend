const schema = {
  title: "Login User",
  type: "object",
  properties: {
    name: { type: "string", title: "First Name" },
    email: { type: "string", title: "Email", format: "email" },
    password: { type: "string", title: "Password", format: "password" },
  },
  required: ["name", "email", "password"] as string[],
} as const;

const uiSchema = {
  name: {
    "ui:widget": "text",
    "ui:options": {
      classNames: "form-container",
    },
  },
  email: {
    "ui:widget": "email",
    "ui:options": {
      classNames: "form-container",
    },
  },
  password: {
    "ui:widget": "password",
    "ui:options": {
      classNames: "form-container",
    },
  },
};

export default {
  schema,
  uiSchema,
};
