import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <h1>Landing Page Inventario</h1>
        <p>React 19 + Vite + TypeScript</p>
      </header>
      <main className="main">
        <button onClick={() => setCount(c => c + 1)}>
          Contador: {count}
        </button>
      </main>
    </div>
  )
}

export default App
