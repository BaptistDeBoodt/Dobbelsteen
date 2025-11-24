import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Interface from './components/Interface/Interface.jsx'
import { useState, useEffect } from 'react'

const App = () => {
  const [selectedPOI, setSelectedPOI] = useState(null)

  return (
    <>
      <Canvas>
        <Experience setSelectedPOI={setSelectedPOI} />
      </Canvas>

        <div
          className={`interface-wrapper ${selectedPOI ? 'visible' : ''}`}
          onClick={() => setSelectedPOI(null)}
        >
          <div
            className="interface"
            onClick={(e) => e.stopPropagation()}
          >
            <Interface selectedPOI={selectedPOI} setSelectedPOI={setSelectedPOI} />
          </div>
        </div>
    </>
  )
}


export default App