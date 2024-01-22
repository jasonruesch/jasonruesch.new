export function App() {
  return (
    <div className="min-h-dvh flex flex-col p-8 gap-8">
      <main className="flex-1">
        <h1 className="text-center">Jason Ruesch</h1>
      </main>
      <footer>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Jason Ruesch. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
