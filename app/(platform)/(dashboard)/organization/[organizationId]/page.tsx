"use client";

import { createBoard } from "@/actions/createBoard";
import FormInput from "@/components/form/FormInput";
import FormSubmit from "@/components/form/FormSubmit";
import { useAction } from "@/hooks/use-action";

const OrganizationIdPage = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <div className="flex flex-col space-y-4">
      <form action={onSubmit}>
        <FormInput id="title" errors={fieldErrors} />
        <FormSubmit>Save</FormSubmit>
      </form>
    </div>
  );
};

export default OrganizationIdPage;
