import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-8 w-full sm:w-4/5 md:w-2/3 flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
        <Hero />
        <CallToAction />
        <Skills />
      </main>
    </div>
  );
}
