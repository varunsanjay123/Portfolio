import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sparkles } from '@react-three/drei';

const SceneContent = () => {
  const groupRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Subtle mouse parallax effect
      const targetX = mousePosition.current.x * 0.15;
      const targetY = mousePosition.current.y * 0.15;
      
      groupRef.current.rotation.y += 0.02 * (targetX - groupRef.current.rotation.y);
      groupRef.current.rotation.x += 0.02 * (targetY - groupRef.current.rotation.x);
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      
      {/* Simplified Planets for Stability */}
      <Float speed={1.5}>
        <mesh position={[-5, 2, -10]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      </Float>
      
      <Float speed={1}>
        <mesh position={[8, -4, -15]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
      </Float>

      {/* Saturn-like Planet */}
      <Float speed={1.2} rotationIntensity={1.5}>
        <mesh position={[-9, -6, -20]}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial color="#b818d4ff" roughness={0.4} />
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <torusGeometry args={[4.5, 0.05, 16, 100]} />
            <meshStandardMaterial color="#7219bbff" opacity={0.8} transparent />
          </mesh>
        </mesh>
      </Float>

      <Stars radius={100} depth={50} count={5000} factor={6} saturation={0.5} fade speed={1} />
    </group>
  );
};

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <SceneContent />
      </Canvas>
    </div>
  );
};

export default StarsBackground;