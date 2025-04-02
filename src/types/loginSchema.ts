const schema = {
  title: "Login User",
  type: "object",
  properties: {
    email: { type: "string", title: "Email", format: "email" },
    password: { type: "string", title: "Password", format: "password" },
  },
  required: ["email", "password"] as string[],
} as const;

const uiSchema = {
  email: {
    "ui:widget": "email",
    "ui:options": {
      classNames: "input-container",
    },
  },
  password: {
    "ui:widget": "password",
    "ui:options": {
      classNames: "input-container",
    },
  },
};

export default {
  schema,
  uiSchema,
};
