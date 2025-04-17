import { useState } from 'react'
import './App.css'

// Access environment variables
const apiUrl = import.meta.env.VITE_API_URL || '__VITE_API_URL__';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dubai Lion Platform</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-700">Welcome to Dubai Lion</h2>
                <p className="mt-2 text-gray-500">Running locally - API URL: {apiUrl}</p>
                
                <div className="mt-6">
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Count is {count}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App