const About = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">About</h1>
        <div>
          <div className="flex flex-col gap-4">
            <p>
              I am Dr. Akumu J. Owino. I am a Software Developer & a Medical
              Doctor. I believe in teamwork, hardwork, planning, creativity,
              entrapreneurship, and good time management. I am a selft-taught
              software developer who keeps exploring the internet for the latest
              technology I can learn.
            </p>
            <p>
              I have learnt web development, mobile development, data science,
              and machine learning. I love software development because it
              enables me to bring great ideas to life.
            </p>
            <p>
              Data is the new oil they say! I enjoy applying data science and
              machine learning in medicine. I also use the concepts in
              understanding health economics and other spheres of business.
            </p>
          </div>
        </div>
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
};

export default About;
