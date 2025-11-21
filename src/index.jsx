import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
        // onCreated={ created }
    >
        <color attach={'background'} args={['white']}/> 
        {/* Makkelijke manier in fiber om kleur toe te voegen */}
        <Experience />
    </Canvas>
)