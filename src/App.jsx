import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Interface from './components/Interface/Interface.jsx'
import { useState, useEffect } from 'react'

const App = () => {
  const [selectedPOI, setSelectedPOI] = useState(null)
  const [showInterface, setShowInterface] = useState(false)

  // When selectedPOI changes, toggle showInterface with a slight delay for fade-in
  useEffect(() => {
    if (selectedPOI) {
      setShowInterface(true)
    } else {
      // On close, wait for fade-out animation before hiding
      const timeout = setTimeout(() => setShowInterface(false), 400)
      return () => clearTimeout(timeout)
    }
  }, [selectedPOI])

  return (
    <>
      <Canvas>
        <Experience setSelectedPOI={setSelectedPOI} />
      </Canvas>

      {/* Render interface container only when showInterface true */}
      {showInterface && (
        <div
          className={`interface-wrapper ${selectedPOI ? 'visible' : ''}`}
          // Optional: prevent click propagation if needed
          onClick={() => setSelectedPOI(null)}
        >
          <div
            className="interface"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside interface
          >
            <Interface selectedPOI={selectedPOI} />
            <button onClick={() => setSelectedPOI(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}


export default App