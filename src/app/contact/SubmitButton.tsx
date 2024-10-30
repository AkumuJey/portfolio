import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`${
        pending ? "opacity-80" : "opacity-100"
      } bg-black dark:bg-white dark:text-black py-2 px-4 rounded-md text-lg text-white`}
      aria-disabled={pending}
    >
      Send
    </button>
  );
};

export default SubmitButton;
