export function Home5() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="animate-bg-gradient bg-gradient-to-br from-primary-500 from-15% via-secondary-500 to-primary-500 to-85% bg-clip-text py-4 text-center text-4xl font-normal uppercase !leading-[calc(1cap-1px)] text-transparent sm:text-7xl lg:max-w-screen-lg lg:text-8xl dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400">
        <div className="flex items-center justify-center">
          <span className="text-xl !leading-[calc(1cap-1px)] sm:text-5xl lg:text-6xl">
            I'm&nbsp;
          </span>
          <span className="">Jason Ruesch</span>
          {/* <span className="text-xl !leading-[calc(1cap-1px)] sm:text-5xl lg:text-6xl">
            ,
          </span> */}
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xl !leading-[calc(1cap-1px)] sm:text-5xl lg:text-6xl">
            a&nbsp;
          </span>
          <span className="">Senior&nbsp;</span>
          <span className="text-xl !leading-[calc(1cap-1px)] sm:text-5xl lg:text-6xl">
            Frontend&nbsp;
          </span>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xl !leading-[calc(1cap-1px)] sm:text-5xl lg:text-6xl">
            Software&nbsp;
          </span>
          <span className="">Engineer</span>
        </div>
      </h1>
      <p className="max-w-lg text-center text-base text-neutral-500 sm:max-w-screen-sm sm:text-xl lg:max-w-screen-lg lg:text-2xl dark:text-neutral-400">
        This is where I share my passion for creating exceptional user
        experiences through web development. Whether you're here for code,
        collaboration, or just to connect, I'm thrilled to have you.
      </p>
    </div>
  );
}

export default Home5;
