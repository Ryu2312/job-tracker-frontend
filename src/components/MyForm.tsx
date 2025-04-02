import Form, { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { FormSchema, UiSchema } from "../types/formTypes";

export default function MyForm({
  schema,
  uiSchema,
  handleSubmit,
}: {
  schema: FormSchema;
  uiSchema: UiSchema;
  handleSubmit: (event: IChangeEvent<FormSchema>) => void;
}) {
  return (
    <div className="form-container p-12  gap-6 rounded-lg max-w-sm mx-auto shadow-lg border border-gray-100 bg-white">
      <Form<FormSchema>
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
