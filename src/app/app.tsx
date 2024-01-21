// eslint-disable-next-line @typescript-eslint/no-unused-vars

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <div>
        <NxWelcome title="Jason Ruesch" />
      </div>
      <footer style={{ padding: '2rem 0' }}>
        <p style={{ textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Jason Ruesch. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
