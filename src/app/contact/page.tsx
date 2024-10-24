export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
