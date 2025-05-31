const Hero = () => (
    <section
    id="hero"
    className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100 dark:bg-gray-950 text-black dark:text-white"
  >
    <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Adaeze 👋</h1>
    <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
      Frontend Engineer turning ideas into beautiful web experiences.
    </p>
    <a
      href="#projects"
      className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
    >
      View My Work
    </a>
  </section>
);

export default Hero;
