import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ open }: { open: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`${
        pending ? "opacity-80" : "opacity-100"
      } bg-black dark:bg-white dark:text-black py-2 px-4 rounded-md text-lg text-white disabled:cursor-none`}
      aria-disabled={pending || open}
    >
      Send
    </button>
  );
};

export default SubmitButton;
