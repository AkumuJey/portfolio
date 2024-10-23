import Image from "next/image";
import akumuImage from "../../public/akumu.png";
const About = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        About Akumu Jey
        <Image src={akumuImage} alt="Akumu" width={200} height={300} />
      </main>
      <footer className="row-start-3 flex gap-6 bg-red-400 flex-wrap items-center justify-center">
        Dr Akumu
      </footer>
    </div>
  );
};

export default About;
