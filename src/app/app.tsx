import { Logo } from '@/components';

export function App() {
  return (
    <div className="min-h-dvh flex flex-col p-8 gap-8">
      <header className="flex items-center justify-center">
        <Logo className="h-8 w-8" />
      </header>

      <main className="flex-1 flex items-center justify-center">
        <h1>Jason Ruesch</h1>
      </main>

      <footer className="flex items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} Jason Ruesch. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
