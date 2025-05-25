import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import Scene from '../public/Scene.jsx'

function App() {
  return (
    <div>
      {/* 3D Canvas */}
      <div style={{ flex: 1 }}>
        <Canvas shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[5, 3, 8]} fov={40} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2.2} />
            <Scene position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} scale={0.6} className="scene" />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>

      <div className="container">
        <h1>Hospital</h1>
        <h2>Right click to drag around and Left click to rotate</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed enim necessitatibus aliquam nemo, ipsum odio? Atque optio quidem, veniam nesciunt perferendis eligendi dicta odio sint voluptates dolorem consectetur cupiditate sapiente laudantium unde! Fuga saepe atque cupiditate esse, obcaecati, aliquid et molestiae aspernatur alias voluptates in voluptatem dolores quae earum illo ex officiis! Aliquam laborum nisi nulla, doloribus consequatur eligendi ad deserunt incidunt sit voluptates culpa sunt quibusdam quidem, commodi itaque, ullam quasi error fugiat beatae repellendus facere eum unde aspernatur. Pariatur enim reprehenderit asperiores. Dolorem, illum eum odit voluptates reprehenderit voluptas quod aut ipsum unde eveniet sit? Sequi, possimus?

        </p>
      </div>

      
    </div>
  )
}

export default App
