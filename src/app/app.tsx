import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <div>
        <NxWelcome title="Jason Ruesch" />
      </div>
      <footer className="py-8">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Jason Ruesch. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
