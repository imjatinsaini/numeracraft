
import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei"; // Note: Text import is needed
import {
  Group,
  Mesh,
  Points,
  BufferAttribute,
  DoubleSide,
  AdditiveBlending, // for lens flare effect
} from "three";

interface ThreeDsolarsystemProps {
  children?: React.ReactNode;
}

const ThreeDsolarsystem: React.FC<ThreeDsolarsystemProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Solar System Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 20, 40], fov: 60 }}
          style={{ height: "100vh", backgroundColor: "black" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <SolarSystem />
          <Stars count={1000} radius={100} depth={50} factor={4} saturation={0} fade />
          <Meteors />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const SolarSystem = () => {
  const solarSystemRef = useRef<Group | null>(null);

  useFrame(() => {
    if (solarSystemRef.current) {
      solarSystemRef.current.rotation.y += 0.001; // Rotates the entire solar system
    }
  });

  // Planets data
  const planets = [
    { name: "Mercury", size: 0.4, color: "#b0b0b0", orbitRadius: 5 },
    { name: "Venus", size: 0.9, color: "#f5deb3", orbitRadius: 7 },
    { name: "Earth", size: 1, color: "#3498db", orbitRadius: 10 },
    { name: "Mars", size: 0.5, color: "#e74c3c", orbitRadius: 12 },
    { name: "Jupiter", size: 2, color: "#d2b48c", orbitRadius: 16 },
    {
      name: "Saturn",
      size: 1.8,
      color: "#f4a460",
      orbitRadius: 20,
      hasRings: true, // We'll add ring logic if hasRings is true
    },
    { name: "Uranus", size: 1.5, color: "#7fffd4", orbitRadius: 24 },
    { name: "Neptune", size: 1.4, color: "#4169e1", orbitRadius: 28 },
  ];

  return (
    <group ref={solarSystemRef}>
      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial emissive="#" emissiveIntensity={1} color="#FFD700" />
        {/* Sun Label */}
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Sun
        </Text>
      </mesh>

      {/* Simple lens flare plane always facing the camera */}
      <LensFlare />

      {/* Planets and Orbits */}
      {planets.map((planet, index) => (
        <PlanetWithOrbit key={index} planet={planet} />
      ))}

      {/* Asteroid Belt between Mars (12) and Jupiter (16) */}
      <AsteroidBelt innerRadius={13} outerRadius={15} count={300} />
    </group>
  );
};

// Lens Flare Component - A plane with additive blending that faces the camera
const LensFlare = () => {
  const planeRef = useRef<Mesh>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (planeRef.current) {
      // Make plane always face the camera
      planeRef.current.lookAt(camera.position);
    }
  });

  return (
    <mesh ref={planeRef} position={[0, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial
        color="#FFD700"
        blending={AdditiveBlending}
        transparent
        opacity={0}
      />
    </mesh>
  );
};

interface PlanetProps {
  planet: {
    name: string;
    size: number;
    color: string;
    orbitRadius: number;
    hasRings?: boolean;
  };
}

const PlanetWithOrbit: React.FC<PlanetProps> = ({ planet }) => {
  const planetRef = useRef<Mesh>(null);
  const angleRef = useRef<number>(Math.random() * Math.PI * 2);

  // Speed varies per planet for realism
  const speed = 0.01 + Math.random() * 0.005;

  // Hover state
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    angleRef.current += speed;
    if (planetRef.current) {
      planetRef.current.position.x = planet.orbitRadius * Math.cos(angleRef.current);
      planetRef.current.position.z = planet.orbitRadius * Math.sin(angleRef.current);
    }
  });

  return (
    <group>
      {/* Planet */}
      <mesh
        ref={planetRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "white" : planet.color} // Highlight on hover
        />
        {/* Planet Name (rotates with the planet since it's in the same group) */}
        <Text
          position={[0, planet.size + 0.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {planet.name}
        </Text>

        {/* If planet has known rings (e.g., Saturn), add more detailed ring geometry */}
        {planet.hasRings && <SaturnRings planetSize={planet.size} />}
        
        {/* Moons for Earth and Jupiter */}
        {planet.name === "Earth" && <Moons count={1} parentSize={planet.size} />}
        {planet.name === "Jupiter" && <Moons count={4} parentSize={planet.size} />}
      </mesh>

      {/* Orbit Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[planet.orbitRadius - 0.05, planet.orbitRadius + 0.05, 64]} />
        <meshBasicMaterial color="white" side={DoubleSide} transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

/**
 * More detailed ring structure for Saturn.
 * We create multiple ring segments to simulate complexities in the ring.
 */
interface SaturnRingsProps {
  planetSize: number;
}
const SaturnRings: React.FC<SaturnRingsProps> = ({ planetSize }) => {
  // We'll create multiple rings with slightly different radii and opacity
  const rings = [
    { inner: planetSize + 0.2, outer: planetSize + 0.4, opacity: 0.3 },
    { inner: planetSize + 0.41, outer: planetSize + 0.45, opacity: 0.2 },
    { inner: planetSize + 0.46, outer: planetSize + 0.6, opacity: 0.25 },
  ];

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {rings.map((ring, i) => (
        <mesh key={i}>
          <ringGeometry args={[ring.inner, ring.outer, 64]} />
          <meshBasicMaterial
            color="#f4a460"
            side={DoubleSide}
            transparent
            opacity={ring.opacity}
          />
        </mesh>
      ))}
    </group>
  );
};

/**
 * Moons that orbit around the parent planet (e.g., Earth's Moon or Jupiter's moons).
 */
interface MoonsProps {
  count: number;
  parentSize: number;
}
const Moons: React.FC<MoonsProps> = ({ count, parentSize }) => {
  const moonsRef = useRef<Group>(null);

  // Random angles for each moon
  const angles = useMemo(
    () => Array.from({ length: count }, () => Math.random() * Math.PI * 2),
    [count]
  );
  // Speeds for each moon
  const speeds = useMemo(
    () => Array.from({ length: count }, () => 0.01 + Math.random() * 0.01),
    [count]
  );
  // Distances from planet center
  const distances = useMemo(
    () => Array.from({ length: count }, () => parentSize + 0.5 + Math.random() * 1.5),
    [count, parentSize]
  );

  useFrame(() => {
    if (!moonsRef.current) return;
    // Rotate each moon around planet
    moonsRef.current.children.forEach((moon, idx) => {
      angles[idx] += speeds[idx];
      moon.position.x = distances[idx] * Math.cos(angles[idx]);
      moon.position.z = distances[idx] * Math.sin(angles[idx]);
    });
  });

  return (
    <group ref={moonsRef}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#bbb" />
        </mesh>
      ))}
    </group>
  );
};

/**
 * Asteroid Belt between Mars and Jupiter: random distribution of small asteroids
 * arranged in a ring and slowly rotating around the Sun.
 */
interface AsteroidBeltProps {
  innerRadius: number;
  outerRadius: number;
  count: number;
}
const AsteroidBelt: React.FC<AsteroidBeltProps> = ({
  innerRadius,
  outerRadius,
  count,
}) => {
  const beltRef = useRef<Group>(null);

  // We memoize the positions so they don't regenerate on each render
  const asteroids = useMemo(() => {
    // Randomly place asteroids in the ring between innerRadius and outerRadius
    const arr = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * (outerRadius - innerRadius) + innerRadius;
      const angle = Math.random() * Math.PI * 2;
      // Slight random vertical offset
      const yOffset = (Math.random() - 0.5) * 0.2;

      arr.push({
        x: radius * Math.cos(angle),
        y: yOffset,
        z: radius * Math.sin(angle),
      });
    }
    return arr;
  }, [innerRadius, outerRadius, count]);

  useFrame(() => {
    if (beltRef.current) {
      // Rotate the entire belt
      beltRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={beltRef}>
      {asteroids.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#888" />
        </mesh>
      ))}
    </group>
  );
};

const Meteors = () => {
  const meteorsRef = useRef<Points>(null);
  const meteorCount = 100;

  // Initialize positions and velocities using useMemo for performance
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(meteorCount * 3);
    const vel = new Float32Array(meteorCount * 3);
    for (let i = 0; i < meteorCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;

      vel[i * 3] = (Math.random() - 0.5) * 0.05;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.05;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
    }
    return { positions: pos, velocities: vel };
  }, [meteorCount]);

  useFrame(() => {
    for (let i = 0; i < meteorCount; i++) {
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];

      // Reset position if out of bounds
      if (
        positions[i * 3] > 50 ||
        positions[i * 3] < -50 ||
        positions[i * 3 + 1] > 50 ||
        positions[i * 3 + 1] < -50 ||
        positions[i * 3 + 2] > 50 ||
        positions[i * 3 + 2] < -50
      ) {
        positions[i * 3] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      }
    }

    if (meteorsRef.current) {
      meteorsRef.current.geometry.setAttribute(
        "position",
        new BufferAttribute(positions, 3)
      );
      meteorsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meteorsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={meteorCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="orange" size={0.2} />
    </points>
  );
};

export default ThreeDsolarsystem;
