import { useState , Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import Scene from '../public/Scene.jsx'
import { Environment } from '@react-three/drei'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5}/>
          <OrbitControls />
          <Scene />

        </Suspense>
        <Environment preset ='sunset'/>
      </Canvas>
    </>
  )
}

export default App
