export function Home5() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="animate-bg-gradient max-w-screen-md bg-gradient-to-br from-primary-500 from-15% via-secondary-500 to-primary-500 to-85% bg-clip-text py-4 text-center text-6xl font-normal uppercase !leading-[calc(1cap-1px)] text-transparent lg:max-w-screen-lg lg:text-7xl dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400">
        I'm{' '}
        <span className="text-7xl !leading-[calc(1cap-1px)] lg:text-8xl">
          Jason Ruesch
        </span>
        ,
        <br />a{' '}
        <span className="text-7xl !leading-[calc(1cap-1px)] lg:text-8xl">
          Senior
        </span>{' '}
        <span className="align-top leading-[67px]">Frontend</span>{' '}
        <span className="align-top leading-[67px]">Software</span>{' '}
        <span className="align-top text-7xl !leading-[calc(1cap-1px)] lg:text-8xl">
          Engineer
        </span>
      </h1>
      <p className="max-w-screen-md text-center text-xl text-neutral-500 lg:text-2xl dark:text-neutral-400">
        This is where I share my passion for creating exceptional user
        experiences through web development. Whether you're here for code,
        collaboration, or just to connect, I'm thrilled to have you.
      </p>
    </div>
  );
}

export default Home5;
