import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { Mesh, DoubleSide } from 'three'; // Import necessary types

interface Photo3DProps {
  position: [number, number, number];
}

export function Photo3D({ position }: Photo3DProps) {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture('/myimage.png'); // Ensure this is a PNG with transparency

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[2.8, 4.9]} /> {/* Set size of the plane */}
      <meshStandardMaterial
        map={texture} // Apply the texture with transparency
        color="white" // Color set to white for transparency regions
        metalness={4} // Non-metallic effect
        roughness={150.5} // Semi-matte finish
        transparent={true} // Enable transparency
        opacity={5} // Full opacity (adjust if you want to see some transparency)
        side={DoubleSide} // Use DoubleSide to render both sides of the plane
      />
    </mesh>
  );
}
