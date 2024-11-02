"use client";

import { motion } from "framer-motion";
import { useFormState } from "react-dom";
import { handleComment } from "./actions";
import SubmitButton from "./SubmitButton";
import Card from "@/components/Card";

export default function Contact() {
  const [state, formAction] = useFormState(handleComment, {
    msg: "rrr",
    open: false,
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex flex-col gap-4 w-full">
        <h1 className="text-3xl font-bold">Contact me</h1>
        <motion.form
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          action={formAction}
          method="post"
          className="flex flex-col gap-4 py-6 px-5 rounded-lg shadow-inner shadow-gray-300 dark:shadow-zinc-950 dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        >
          {/* Updated Label */}
          <label htmlFor="name" className="font-semibold text-lg">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            className="py-2 px-4 rounded-lg outline-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:border-gray-500 shadow-inner"
            required
          />

          {/* Updated Label */}
          <label htmlFor="email" className="font-semibold text-lg">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            className="py-2 px-4 rounded-lg outline-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:border-gray-500 shadow-inner"
          />

          {/* Updated Label */}
          <label htmlFor="feedback" className="font-semibold text-lg">
            Your Message
          </label>
          <textarea
            name="feedback"
            id="feedback"
            rows={5}
            minLength={5}
            autoComplete="off"
            required
            className="py-2 px-4 rounded-lg outline-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:border-gray-500 shadow-inner"
          />

          <SubmitButton open={state.open} />
        </motion.form>

        {/* Updated Thank You Message */}
        {state.open && (
          <div className="fixed p-4 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-teal-300">
            Thank you for reaching out, {state.msg}!
          </div>
        )}
        <Card
          title="Yes"
          description="wedebwicfwrfciwrnaecdfwa cwdcvwdcwecwd"
        />
      </main>
    </div>
  );
}
