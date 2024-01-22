import { Logo, LogoNeutral } from '@/components';

export function App() {
  return (
    <div className="min-h-dvh flex flex-col gap-8">
      <header className="flex items-center shadow-sm bg-neutral-100 dark:bg-neutral-950 h-14 p-4 dark:shadow-black">
        <Logo className="h-8 w-8" />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="mb-4 text-primary-500 dark:text-primary-400">
          Jason Ruesch
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Hi, I'm a software engineer with focus on web development and design.
        </p>
      </main>

      <footer className="flex flex-col items-center justify-center gap-4 p-4">
        <LogoNeutral className="h-8 w-8" />
        <p className="text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Jason Ruesch. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
