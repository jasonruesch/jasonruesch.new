export function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="max-w-screen-md bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text pb-4 text-center text-6xl uppercase !leading-[1cap] text-transparent md:text-7xl dark:from-primary-400 dark:to-secondary-400">
        I'm Jason Ruesch, a Senior Frontend Software Engineer
      </h1>
      <p className="max-w-screen-md text-center text-xl text-neutral-500 md:text-2xl dark:text-neutral-400">
        This is where I share my passion for creating exceptional user
        experiences through web development. Whether you're here for code,
        collaboration, or just to connect, I'm thrilled to have you.
      </p>
    </div>
  );
}

export default Home;
