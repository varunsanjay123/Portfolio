import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

const Rocket = ({ position, rotation, scale = 1 }) => {
  const rocketRef = useRef();
  useFrame((state) => {
    if (rocketRef.current) {
      rocketRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.005;
      rocketRef.current.position.x += Math.cos(state.clock.elapsedTime * 1.5) * 0.005;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale} ref={rocketRef}>
      {/* Main Body (curved retro style) */}
      <mesh position={[0, 0, 0]} scale={[1, 2, 1]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Red Nose Cone */}
      <mesh position={[0, 1.2, 0]}>
        <coneGeometry args={[0.75, 1.2, 32]} />
        <meshStandardMaterial color="#dc2626" metalness={0.2} roughness={0.4} />
      </mesh>
      
      {/* Red Stripe / Base ring */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.6, 0.65, 0.4, 32]} />
        <meshStandardMaterial color="#dc2626" metalness={0.2} roughness={0.4} />
      </mesh>

      {/* Window Border */}
      <mesh position={[0, 0.2, 0.75]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
        <meshStandardMaterial color="#dc2626" metalness={0.2} roughness={0.4} />
      </mesh>

      {/* Window Glass */}
      <mesh position={[0, 0.2, 0.78]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#bae6fd" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Fins */}
      {/* Fin 1 */}
      <mesh position={[0.7, -0.8, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[1, 1.2, 0.1]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
      {/* Fin 2 */}
      <mesh position={[-0.7, -0.8, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[1, 1.2, 0.1]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
      {/* Fin 3 (Back) */}
      <mesh position={[0, -0.8, -0.7]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.1, 1.2, 1]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>

      {/* Engine Nozzle */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Flames */}
      <mesh position={[0, -2.2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.4, 1.5, 16]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      <mesh position={[0, -2.0, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.25, 1, 16]} />
        <meshBasicMaterial color="#f97316" />
      </mesh>

      {/* Glow Light */}
      <pointLight position={[0, -2.5, 0]} color="#fbbf24" intensity={3} distance={10} />
    </group>
  );
};

const Satellite = ({ position, rotation, scale = 1 }) => {
  const satRef = useRef();
  useFrame(() => {
    if (satRef.current) {
      satRef.current.rotation.y += 0.005;
      satRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale} ref={satRef}>
      {/* Main Body */}
      <mesh>
        <boxGeometry args={[1, 1, 1.5]} />
        <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Solar Panel 1 */}
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[2.5, 0.1, 1]} />
        <meshStandardMaterial color="#1122aa" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Solar Panel 2 */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[2.5, 0.1, 1]} />
        <meshStandardMaterial color="#1122aa" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Connector 1 */}
      <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
      {/* Connector 2 */}
      <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
      {/* Antenna Dish */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.6, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#dddddd" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    </group>
  );
};

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
      <Float speed={1}>
        <mesh position={[8, -4, -15]}>
          <sphereGeometry args={[2, 16, 16]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
      </Float>

      {/* Saturn-like Planet */}
      <Float speed={1.2} rotationIntensity={1.5}>
        <mesh position={[-9, -6, -20]}>
          <sphereGeometry args={[2.5, 16, 16]} />
          <meshStandardMaterial color="#44efe6" roughness={0.4} />

          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <torusGeometry args={[4.5, 0.05, 16, 32]} />
            <meshStandardMaterial color="#528294" opacity={0.8} transparent />
          </mesh>
        </mesh>
      </Float>

      {/* Additional Planets */}
      <Float speed={2}>
        <mesh position={[12, 8, -25]}>
          <sphereGeometry args={[3, 16, 16]} />
          <meshStandardMaterial color="#10b981" roughness={0.7} />
        </mesh>
      </Float>

      <Float speed={0.8}>
        <mesh position={[-15, 10, -30]}>
          <sphereGeometry args={[1.8, 16, 16]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.9} />
        </mesh>
      </Float>

      {/* Space Objects */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Rocket position={[8, 3, -10]} rotation={[0.5, -0.5, 0.5]} scale={0.7} />
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <Satellite position={[-8, -4, -12]} rotation={[0.4, 0.2, 0.1]} scale={0.6} />
      </Float>

      <Stars radius={100} depth={50} count={1500} factor={6} saturation={0.5} fade speed={1} />
    </group>
  );
};

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <SceneContent />
      </Canvas>
    </div>
  );
};

export default StarsBackground;