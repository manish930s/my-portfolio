import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Photo3D } from './Photo3D';
import { Particles } from './Particles';

export function Scene() {
  return (
    <div className="h-full w-full flex flex-col md:grid md:grid-cols-2">
      {/* 3D Canvas */}
      <div className="relative h-[50vh] md:h-full w-full">
        <Canvas
          style={{ background: 'transparent' }} // Transparent canvas background
          gl={{ alpha: true }} // Enable alpha transparency
        >
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[-2, 0, 5]} />

          {/* Orbit Controls */}
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />

          {/* Lights */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[0, 5, 0]}
            intensity={0.8}
            angle={0.5}
            penumbra={1}
          />

          {/* 3D Elements */}
          <Photo3D position={[0, 0, 0]} /> {/* Display your image */}
          <Particles count={200} /> {/* Add particle effects */}

          {/* Fog for Depth Effect */}
          <fog attach="fog" args={['#202020', 5, 20]} />
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center items-start px-8">
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Manish Chauhan
          </h1>
          <p className="text-2xl text-gray-700 mb-6">Full Stack Developer</p>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Passionate about creating beautiful and functional web applications
            with modern technologies and best practices.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
}
