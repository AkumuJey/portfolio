"use client";

import { useFormState } from "react-dom";
import { motion } from "framer-motion";

import { handleComment } from "./actions";
import SubmitButton from "./SubmitButton";

export default function Contact() {
  const [state, formAction] = useFormState(handleComment, { msg: "rrr" });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex flex-col gap-4">
        <motion.form
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, bounce: 1 }}
          action={formAction}
          method="post"
          className="flex flex-col gap-2 py-5 px-3 shadow-md shadow-black rounded-md"
        >
          <label htmlFor="name" className="font-bold text-lg">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            className="py-2 px-4 rounded-md outline-none border-slate-300 focus:border-black border-2"
            required
          />
          <label htmlFor="email" className="font-bold text-lg">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            className="py-2 px-4 rounded-md border-slate-300 focus:border-black border-2"
          />
          <label htmlFor="feedback" className="font-bold text-lg">
            Feedback:
          </label>
          <textarea
            name="feedback"
            id="feedback"
            rows={5}
            minLength={5}
            autoComplete="off"
            required
            className="py-2 px-4 rounded-md border-slate-300 focus:border-black border-2"
          />
          <SubmitButton />
        </motion.form>
        <address>Naivasha</address>
        <div className="flex flex-col md:flex-row justify-evenly w-full">
          <a href="#" target="_blank">
            Facebook
          </a>
          <a href="#" target="_blank">
            Linkedin
          </a>
          <a href="#" target="_blank">
            Instagram
          </a>
          <a href="#" target="_blank">
            X (Formerly Twitter)
          </a>
          <a href="#" target="_blank">
            Email
          </a>
          <a href="#" target="_blank">
            Whatsapp
          </a>
        </div>
      </main>
    </div>
  );
}
