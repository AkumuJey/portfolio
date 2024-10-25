"use client";

export default function Contact() {
  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const feedback = formData.get("feedback")?.toString().trim();
    const results = { name, email, feedback };
    console.log(results);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form
          action={handleSubmit}
          method="post"
          className="bg-zinc-200 flex flex-col gap-2 py-5 px-3"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            className="bg-white py-2 px-4 rounded-md"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            className="bg-white py-2 px-4 rounded-md"
          />
          <label htmlFor="feedback">Feedback</label>
          <textarea name="feedback" id="feedback" rows={5} autoComplete="off" />
          <button
            type="submit"
            className="bg-black py-2 px-4 rounded-md text-lg text-white"
          >
            Send
          </button>
        </form>
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
