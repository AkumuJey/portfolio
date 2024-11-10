import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-0 md:mx-8 w-full sm:w-4/5 md:w-2/3 sm:mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
