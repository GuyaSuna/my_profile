"use client";
import React, { Suspense, useRef, Component, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  useAnimations,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

// Función para obtener la ruta correcta de assets
const getAssetPath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/my_profile' : '';
  return `${basePath}${path}`;
};

// Componente interactivo del barrio japonés
function InteractiveNeighborhood({ onSectionClick }) {
  const [hoveredSection, setHoveredSection] = React.useState(null);

  return (
    <group>
      {/* Piso base */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[12, 0.2, 12]} />
        <meshLambertMaterial color="#E6D3A3" />
      </mesh>

      {/* TIENDA DE SOFTWARE - Casa principal (clickeable) */}
      <group
        position={[0, 0, 0]}
        onPointerOver={() => setHoveredSection("store")}
        onPointerOut={() => setHoveredSection(null)}
        onClick={() => onSectionClick && onSectionClick("store")}
        style={{ cursor: "pointer" }}
      >
        <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.5, 1, 2]} />
          <meshLambertMaterial
            color={hoveredSection === "store" ? "#FFD700" : "#8B4513"}
          />
        </mesh>
        {/* Techo */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <coneGeometry args={[1.8, 0.8, 4]} />
          <meshLambertMaterial color="#DC143C" />
        </mesh>
        {/* Letrero de tienda */}
        <mesh position={[0, 0.8, 1.1]} castShadow>
          <boxGeometry args={[1.5, 0.3, 0.1]} />
          <meshLambertMaterial color="#000000" />
        </mesh>
        {/* Puerta */}
        <mesh position={[0, 0.3, 1.05]} castShadow>
          <boxGeometry args={[0.4, 0.6, 0.05]} />
          <meshLambertMaterial color="#654321" />
        </mesh>
      </group>

      {/* PORTAFOLIO - Casa de proyectos (clickeable) */}
      <group
        position={[3.5, 0, 1]}
        onPointerOver={() => setHoveredSection("projects")}
        onPointerOut={() => setHoveredSection(null)}
        onClick={() => onSectionClick && onSectionClick("projects")}
        style={{ cursor: "pointer" }}
      >
        <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.8, 1.2]} />
          <meshLambertMaterial
            color={hoveredSection === "projects" ? "#4A90E2" : "#654321"}
          />
        </mesh>
        <mesh position={[0, 1, 0]} castShadow>
          <coneGeometry args={[1.3, 0.6, 4]} />
          <meshLambertMaterial color="#B22222" />
        </mesh>
        {/* Ventanas */}
        <mesh position={[0, 0.5, 0.65]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.02]} />
          <meshLambertMaterial color="#87CEEB" />
        </mesh>
      </group>

      {/* HABILIDADES - Dojo/Casa de entrenamiento (clickeable) */}
      <group
        position={[-3.5, 0, 1]}
        onPointerOver={() => setHoveredSection("skills")}
        onPointerOut={() => setHoveredSection(null)}
        onClick={() => onSectionClick && onSectionClick("skills")}
        style={{ cursor: "pointer" }}
      >
        <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.8, 1.2]} />
          <meshLambertMaterial
            color={hoveredSection === "skills" ? "#9013FE" : "#556B2F"}
          />
        </mesh>
        <mesh position={[0, 1, 0]} castShadow>
          <coneGeometry args={[1.3, 0.6, 4]} />
          <meshLambertMaterial color="#8B0000" />
        </mesh>
      </group>

      {/* CONTACTO - Templo/Oficina (clickeable) */}
      <group
        position={[0, 0, -3]}
        onPointerOver={() => setHoveredSection("contact")}
        onPointerOut={() => setHoveredSection(null)}
        onClick={() => onSectionClick && onSectionClick("contact")}
        style={{ cursor: "pointer" }}
      >
        <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 1.2, 1.5]} />
          <meshLambertMaterial
            color={hoveredSection === "contact" ? "#FF4444" : "#2F4F4F"}
          />
        </mesh>
        <mesh position={[0, 1.5, 0]} castShadow>
          <coneGeometry args={[1.5, 0.8, 4]} />
          <meshLambertMaterial color="#8B0000" />
        </mesh>
        {/* Torii gate mini */}
        <mesh position={[0, 1.8, 0]} castShadow>
          <boxGeometry args={[2.5, 0.1, 0.1]} />
          <meshLambertMaterial color="#DC143C" />
        </mesh>
      </group>

      {/* JARDÍN ZEN - Área central decorativa */}
      <group position={[0, 0, 2]}>
        <mesh position={[0, 0.02, 0]} receiveShadow>
          <cylinderGeometry args={[1.2, 1.2, 0.1]} />
          <meshLambertMaterial color="#F5F5DC" />
        </mesh>
        {/* Rocas zen */}
        {[
          [-0.5, 0.3],
          [0.4, -0.2],
          [0, 0.5],
        ].map(([x, z], i) => (
          <mesh key={i} position={[x, 0.15, z]} castShadow>
            <sphereGeometry args={[0.1]} />
            <meshLambertMaterial color="#696969" />
          </mesh>
        ))}
        {/* Rastrilllo */}
        <mesh position={[0.8, 0.08, 0.2]} receiveShadow>
          <boxGeometry args={[0.02, 0.02, 0.3]} />
          <meshLambertMaterial color="#8B4513" />
        </mesh>
      </group>

      {/* ÁRBOLES DECORATIVOS */}
      {Array.from({ length: 8 }, (_, i) => (
        <group
          key={i}
          position={[
            Math.cos((i * Math.PI * 2) / 8) * 5,
            0,
            Math.sin((i * Math.PI * 2) / 8) * 5,
          ]}
        >
          <mesh position={[0, 0.5, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.12, 1]} />
            <meshLambertMaterial color="#8B4513" />
          </mesh>
          <mesh position={[0, 1.3, 0]} castShadow>
            <sphereGeometry args={[0.5]} />
            <meshLambertMaterial color="#228B22" />
          </mesh>
          {/* Flores de cerezo */}
          {Array.from({ length: 3 }, (_, j) => (
            <mesh
              key={j}
              position={[
                Math.random() * 0.6 - 0.3,
                1.1 + Math.random() * 0.4,
                Math.random() * 0.6 - 0.3,
              ]}
              castShadow
            >
              <sphereGeometry args={[0.05]} />
              <meshLambertMaterial color="#FFB6C1" />
            </mesh>
          ))}
        </group>
      ))}

      {/* CAMINOS */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[1, 0.05, 8]} />
        <meshLambertMaterial color="#696969" />
      </mesh>
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[8, 0.05, 1]} />
        <meshLambertMaterial color="#696969" />
      </mesh>

      {/* FAROLES JAPONESES */}
      {[
        [-4, -4],
        [4, -4],
        [-4, 4],
        [4, 4],
      ].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          {/* Poste */}
          <mesh position={[0, 1, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 2]} />
            <meshLambertMaterial color="#654321" />
          </mesh>
          {/* Linterna */}
          <mesh position={[0, 2.3, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.25, 0.4]} />
            <meshLambertMaterial color="#FF4444" transparent opacity={0.8} />
          </mesh>
          {/* Techo de linterna */}
          <mesh position={[0, 2.6, 0]} castShadow>
            <coneGeometry args={[0.3, 0.2, 6]} />
            <meshLambertMaterial color="#8B4513" />
          </mesh>
          {/* Luz */}
          <pointLight
            position={[0, 2.3, 0]}
            color="#FFDDAA"
            intensity={0.4}
            distance={4}
          />
        </group>
      ))}

      {/* PUENTE DECORATIVO */}
      <group position={[2, 0, -1]}>
        <mesh position={[0, 0.1, 0]} castShadow>
          <boxGeometry args={[0.8, 0.05, 2]} />
          <meshLambertMaterial color="#8B4513" />
        </mesh>
        {/* Arcos del puente */}
        <mesh position={[-0.3, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.3]} />
          <meshLambertMaterial color="#654321" />
        </mesh>
        <mesh position={[0.3, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.3]} />
          <meshLambertMaterial color="#654321" />
        </mesh>
      </group>

      {/* ESTATUA DE BUDA/DECORACIÓN */}
      <group position={[-2, 0, -1]}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <sphereGeometry args={[0.2]} />
          <meshLambertMaterial color="#B8860B" />
        </mesh>
        <mesh position={[0, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.2]} />
          <meshLambertMaterial color="#B8860B" />
        </mesh>
      </group>
    </group>
  );
}

// Componente para cargar el modelo original de Sketchfab
function NeighborhoodModel({ onSectionClick, onCameraMove }) {
  const groupRef = useRef();
  const modelPath = getAssetPath("/models/barrio_japones.glb");

  console.log("Cargando modelo original de Sketchfab:", modelPath);

  // Cargar el modelo GLTF original
  const { scene } = useGLTF(modelPath);

  // SIN rotación automática (como pediste)
  // useFrame removido para que no gire solo

  if (!scene) {
    return <InteractiveNeighborhood onSectionClick={onSectionClick} />; // Solo fallback si no carga
  }

  return (
    <group ref={groupRef}>
      {/* Modelo original de Sketchfab */}
      <primitive object={scene} scale={[0.3, 0.3, 0.3]} position={[0, -1, 0]} />

      {/* Marcadores visuales interactivos */}
      <VisualMarkers
        onCameraMove={onCameraMove}
        onSectionClick={onSectionClick}
      />
    </group>
  );
}

// Componente para el modelo de supermercado
function SupermarketModel({
  position = [8, -1.2, -2.4],
  scale = [0.7, 0.7, 0.7],
}) {
  const modelPath = getAssetPath("/models/multi_supermarket_assetpack_vol.2.glb");

  console.log("Cargando modelo de supermercado:", modelPath);

  // Cargar el modelo GLTF del supermercado
  const { scene } = useGLTF(modelPath);

  if (!scene) {
    console.log("❌ No se pudo cargar el modelo de supermercado");
    return null;
  }

  return <primitive object={scene} scale={scale} position={position} />;
}

// Componente para el mushroom merchant animado
function MushroomMerchant({
  position = [4, -2.3, -1],
  scale = [30, 30, 30],
  rotation = [0, Math.PI / 0.7, 0], // Rotación Y de 90 grados a la derecha
}) {
  const groupRef = useRef();
  const modelPath = getAssetPath("/models/mushroom_merchant_animated.glb");

  console.log("🍄 Cargando mushroom merchant:", modelPath);

  // Cargar el modelo GLTF con animaciones
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, groupRef);

  // Debug: verificar si el scene se carga
  useEffect(() => {
    if (scene) {
      // Inspeccionar los children del scene
      scene.children.forEach((child, index) => {
        console.log(
          `🍄 Child ${index}:`,
          child.type,
          child.name,
          child.visible,
        );
        if (child.children) {
          child.children.forEach((grandchild, gIndex) => {
            console.log(
              `  🍄 Grandchild ${gIndex}:`,
              grandchild.type,
              grandchild.name,
              grandchild.visible,
            );
          });
        }
      });

      // Verificar bounding box
      const box = new THREE.Box3().setFromObject(scene);
      console.log("🍄 Bounding box:", box);
      console.log("🍄 Tamaño del modelo - Min:", box.min);
      console.log("🍄 Tamaño del modelo - Max:", box.max);
      const size = box.getSize(new THREE.Vector3());
      console.log("🍄 Dimensiones del modelo:", size);
      console.log(`🍄 Ancho: ${size.x}, Alto: ${size.y}, Profundo: ${size.z}`);

      // Forzar visibilidad de todos los materiales
      scene.traverse((child) => {
        if (child.isMesh) {
          child.visible = true;
          if (child.material) {
            child.material.transparent = false;
            child.material.opacity = 1;
            child.material.side = THREE.DoubleSide;
            child.material.needsUpdate = true;
            console.log("🍄 Material forzado:", child.material.type);
          }
        }
      });
    } else {
      console.log("❌ Mushroom Merchant scene NO cargado");
    }
  }, [scene, position, scale]);

  // Activar animaciones si existen
  useEffect(() => {
    console.log(
      "🍄 Mushroom Merchant - Animaciones encontradas:",
      animations.length,
    );
    if (animations.length > 0) {
      console.log("📋 Animaciones del mushroom merchant:");
      animations.forEach((clip, index) => {
        console.log(
          `  ${index}: "${clip.name}" - Duración: ${clip.duration.toFixed(2)}s`,
        );
      });

      // Activar todas las animaciones automáticamente
      Object.keys(actions).forEach((actionName) => {
        console.log(`▶️ Reproduciendo animación: ${actionName}`);
        actions[actionName]?.play();
      });
    } else {
      console.log("❌ El mushroom merchant no tiene animaciones incluidas");
    }
  }, [actions, animations]);

  if (!scene) {
    console.log("❌ No se pudo cargar el mushroom merchant");
    return null;
  }

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* DEBUG: Esfera verde para ubicación exacta */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshBasicMaterial color="lime" />
      </mesh>

      {/* El modelo actual */}
      <primitive object={scene} />
    </group>
  );
}

// Marcadores visuales permanentes en el modelo
function VisualMarkers({ onCameraMove, onSectionClick }) {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [pendingSection, setPendingSection] = useState(null);

  const markers = [
    {
      id: "store",
      position: [4, -0.5, 1.9], // Mesa de enfrente (escalado apropiadamente)
      label: "Tienda",
      color: "#FFD700",
      cameraPosition: [4, 0, 7],
      cameraTarget: [4, -0.5, 1.9],
    },
    {
      id: "projects",
      position: [11.75, -1.2, 4.9], // Ubicación real del gato que me diste
      label: "Proyectos",
      color: "#4A90E2",
      cameraPosition: [13, 2, 8],
      cameraTarget: [12, -0.9, 4.8],
    },
    {
      id: "skills",
      position: [8.4, 0, 1.8], // Parte más alta del diorama
      label: "Skills",
      color: "#9013FE",
      cameraPosition: [8.4, -1, 2.5],
      cameraTarget: [8.4, 0, 1.8],
    },
    {
      id: "escaleras",
      position: [-3.3, 0, 0], // Lado derecho del diorama (más alejado)
      label: "Escaleras1",
      color: "#19c050",
      cameraPosition: [-3, 1, 5],
      cameraTarget: [-3, 1, 0],
    },
    {
      id: "escaleras",
      position: [7, 12, -12.7], // Lado derecho del diorama (más alejado)
      label: "Escaleras2",
      color: "#19c050",
      cameraPosition: [4, 13, -12.7],
      cameraTarget: [7, 12, -12.7],
    },
    {
      id: "escaleras",
      position: [-3.3, 6, -12.7], // Lado derecho del diorama (más alejado)
      label: "Escaleras3",
      color: "#19c050",
      cameraPosition: [-12, 6, -12],
      cameraTarget: [-3.3, 6, -10],
    },
    {
      id: "overview",
      position: [1.5, 4.5, 1], // Vista aérea muy alta
      label: "Vista General",
      color: "#00CED1",
      cameraPosition: [0, 7, 13],
      cameraTarget: [5, 0, 0],
    },
  ];

  return (
    <group>
      {markers.map((marker) => (
        <group key={marker.id}>
          {/* Marcador visual */}
          <mesh
            position={marker.position}
            onPointerOver={() => setHoveredMarker(marker.id)}
            onPointerOut={() => setHoveredMarker(null)}
            onClick={() => {
              const sectionId = marker.id;
              // Guardar qué sección queremos abrir después de la animación
              setPendingSection(sectionId);
              // Iniciar la animación de cámara
              onCameraMove(marker.cameraPosition, marker.cameraTarget, () => {
                // Este callback se ejecuta cuando termina la animación
                if (onSectionClick) {
                  onSectionClick(sectionId);
                }
                setPendingSection(null);
              });
            }}
          >
            <sphereGeometry args={[0.12]} />
            <meshBasicMaterial
              color={marker.color}
              transparent
              opacity={hoveredMarker === marker.id ? 1 : 0.7}
            />
          </mesh>

          {/* Anillo alrededor del marcador */}
          <mesh position={marker.position} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.15, 0.2]} />
            <meshBasicMaterial
              color={marker.color}
              transparent
              opacity={hoveredMarker === marker.id ? 0.8 : 0.3}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Pulso animado cuando hover */}
          {hoveredMarker === marker.id && (
            <PulsingRing position={marker.position} color={marker.color} />
          )}
        </group>
      ))}
    </group>
  );
}

// Anillo con efecto de pulso
function PulsingRing({ position, color }) {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      ringRef.current.scale.setScalar(scale);
      ringRef.current.material.opacity =
        0.5 - Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
  });

  return (
    <mesh ref={ringRef} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.2, 0.35]} />
      <meshBasicMaterial color={color} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

// Controlador de cámara con animaciones suaves
function CameraController({
  targetPosition,
  targetLookAt,
  onAnimationComplete,
}) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (targetPosition && targetLookAt) {
      // Verificar si ya estamos en la posición objetivo (con tolerancia)
      const currentPosition = camera.position;
      const targetPos = new THREE.Vector3(...targetPosition);
      const currentTarget = controlsRef.current
        ? controlsRef.current.target
        : new THREE.Vector3(0, 0, 0);
      const targetLookAtPos = new THREE.Vector3(...targetLookAt);

      const positionDistance = currentPosition.distanceTo(targetPos);
      const targetDistance = currentTarget.distanceTo(targetLookAtPos);
      const tolerance = 0.5; // Tolerancia para considerar que ya estamos en posición

      // Si ya estamos cerca de la posición objetivo, no animar
      if (positionDistance < tolerance && targetDistance < tolerance) {
        console.log("📍 Ya estoy en posición, abriendo modal inmediatamente");
        if (onAnimationComplete) {
          onAnimationComplete();
        }
        return;
      }

      setIsAnimating(true);

      // Posiciones iniciales
      const startPosition = camera.position.clone();
      const startTarget = controlsRef.current
        ? controlsRef.current.target.clone()
        : new THREE.Vector3(0, 0, 0);

      let progress = 0;
      const duration = 1.5; // 1.5 segundos

      const animate = () => {
        progress += 0.016 / duration; // ~60fps

        if (progress <= 1) {
          // Interpolación suave (easeInOutCubic)
          const t =
            progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          // Interpolar posición de cámara
          camera.position.lerpVectors(
            startPosition,
            new THREE.Vector3(...targetPosition),
            t,
          );

          // Interpolar target de los controles si están disponibles
          if (controlsRef.current) {
            controlsRef.current.target.lerpVectors(
              startTarget,
              new THREE.Vector3(...targetLookAt),
              t,
            );
            controlsRef.current.update();
          } else {
            // Si no hay controles, usar lookAt directamente
            const currentLookAt = startTarget.lerp(
              new THREE.Vector3(...targetLookAt),
              t,
            );
            camera.lookAt(currentLookAt);
          }

          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
          // Llamar callback cuando termina la animación
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }
      };

      animate();
    }
  }, [targetPosition, targetLookAt, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={2}
      maxDistance={15}
      autoRotate={false}
      minPolarAngle={Math.PI / 8}
      maxPolarAngle={Math.PI / 2}
    />
  );
}

// Componente de carga mientras el modelo se descarga
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Cargando modelo 3D...</p>
      </div>
    </div>
  );
}

// Error Boundary para capturar errores del modelo 3D
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error en el modelo 3D:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center p-8">
            <div className="text-red-400 text-4xl mb-4">⚠️</div>
            <p className="text-lg font-bold mb-2">
              Error al cargar el modelo 3D
            </p>
            <p className="text-sm text-slate-300">
              Archivo: barrio_japones.glb
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Revisa la consola para más detalles
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Modal del modelo 3D
function Model3DModal({ isOpen, onClose }) {
  const [cameraTarget, setCameraTarget] = useState(null);
  const [cameraLookAt, setCameraLookAt] = useState(null);
  const [animationCallback, setAnimationCallback] = useState(null);

  const handleCameraMove = (position, lookAt, onComplete) => {
    setCameraTarget(position);
    setCameraLookAt(lookAt);
    setAnimationCallback(() => onComplete);
  };

  const handleAnimationComplete = () => {
    if (animationCallback) {
      animationCallback();
      setAnimationCallback(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-fullscreen bg-black"
    >
      {/* Header del modal - posicionado absolutamente */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-black/50 backdrop-blur-sm">
        <h2 className="text-white text-2xl font-bold">
          🎨 Portfolio Interactivo & Demo 3D
        </h2>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 text-3xl font-bold bg-black/30 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/50 transition-colors"
        >
          X
        </button>
      </div>

      {/* Contenedor del modelo 3D - fullscreen */}
      <div
        className="modal-fullscreen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900"
      >
          <Canvas
            shadows
            camera={{ fov: 60, position: [0, 7, 13] }}
            className="canvas-fullscreen"
            style={{
              background:
                "linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)",
            }}
          >
            {/* Iluminación mejorada */}
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <directionalLight
              position={[-8, 8, -3]}
              intensity={0.8}
              color="#ffffff"
            />
            <pointLight
              position={[-10, 0, -20]}
              color="#ff4444"
              intensity={0.5}
            />
            <pointLight
              position={[10, 5, 10]}
              color="#ffffff"
              intensity={0.7}
            />
            <pointLight position={[0, 8, 0]} color="#ffeaa7" intensity={0.6} />

            {/* Ambiente y entorno */}
            <Environment preset="night" />

            {/* Controlador de cámara animado */}
            <CameraController
              targetPosition={cameraTarget}
              targetLookAt={cameraLookAt}
              onAnimationComplete={handleAnimationComplete}
            />

            {/* Modelos 3D con Suspense y ErrorBoundary */}
            <ErrorBoundary>
              <Suspense fallback={null}>
                <NeighborhoodModel
                  onSectionClick={onClose} // Cerrar modal al hacer click en secciones
                  onCameraMove={handleCameraMove}
                />
                <SupermarketModel />
              </Suspense>
            </ErrorBoundary>

            {/* Niebla para atmósfera */}
            <fog attach="fog" args={["#1a1a2e", 10, 50]} />
          </Canvas>

          {/* Botones de navegación rápida */}
          <div className="absolute top-20 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 z-10">
            <p className="text-white text-xs font-bold mb-2">
              🎯 Navegación Rápida
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCameraMove([0, 4, 6], [0, 0, 0])}
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-xs px-2 py-1 rounded transition-colors"
                title="Vista General"
              >
                🌍 General
              </button>
              <button
                onClick={() => handleCameraMove([4, 0, 7], [4, -0.5, 1.9])}
                className="bg-yellow-500 hover:bg-yellow-400 text-white text-xs px-2 py-1 rounded transition-colors"
                title="Tienda"
              >
                🏪 Tienda
              </button>
              <button
                onClick={() => handleCameraMove([13, 2, 8], [12, -0.9, 4.8])}
                className="bg-blue-500 hover:bg-blue-400 text-white text-xs px-2 py-1 rounded transition-colors"
                title="Proyectos"
              >
                🐱 Proyectos
              </button>
              <button
                onClick={() => handleCameraMove([8.4, -1, 2.5], [8.4, 0, 1.8])}
                className="bg-purple-500 hover:bg-purple-400 text-white text-xs px-2 py-1 rounded transition-colors"
                title="Skills"
              >
                🎯 Skills
              </button>
              <button
                onClick={() => handleCameraMove([4, 2, -1.5], [2.5, 0, -1.8])}
                className="bg-red-500 hover:bg-red-400 text-white text-xs px-2 py-1 rounded transition-colors"
                title="Contacto"
              >
                📧 Contacto
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

// Componente principal
export default function JapaneseNeighborhood({ onSectionClick }) {
  const [showModal, setShowModal] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 7, 13]);
  const [cameraTarget, setCameraTarget] = useState([3, 0, 0]);

  // Función para mover la cámara
  const handleCameraMove = (position, lookAt) => {
    setCameraPosition(position);
    setCameraTarget(lookAt);
  };

  const handleSectionClick = (section) => {
    if (section === "store") {
      // Solo abrir modal para la sección de tienda
      setShowModal(true);
    } else {
      // Para otras secciones, usar el callback original
      if (onSectionClick) {
        onSectionClick(section);
      }
    }
  };

  return (
    <>
      {/* UI original con modelo 3D ocupando toda la pantalla */}
      <div className="w-full h-full overflow-hidden bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900">
        <Canvas
          shadows
          camera={{ fov: 60, position: [0, 4, 6] }}
          style={{
            background: "linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)",
          }}
        >
          {/* Iluminación mejorada */}
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <directionalLight
            position={[-8, 8, -3]}
            intensity={0.8}
            color="#ffffff"
          />
          <pointLight
            position={[-10, 0, -20]}
            color="#ff4444"
            intensity={0.5}
          />
          <pointLight position={[10, 5, 10]} color="#ffffff" intensity={0.7} />
          <pointLight position={[0, 8, 0]} color="#ffeaa7" intensity={0.6} />

          {/* Ambiente y entorno */}
          <Environment preset="night" />

          {/* Controlador de cámara animado */}
          <CameraController
            targetPosition={cameraPosition}
            targetLookAt={cameraTarget}
          />

          {/* Modelo 3D con Suspense y ErrorBoundary */}
          <ErrorBoundary>
            <Suspense fallback={null}>
              <NeighborhoodModel
                onSectionClick={handleSectionClick}
                onCameraMove={handleCameraMove}
              />
              <SupermarketModel />
            </Suspense>
          </ErrorBoundary>

          {/* Niebla para atmósfera */}
          <fog attach="fog" args={["#1a1a2e", 10, 50]} />
        </Canvas>

        {/* Botones de navegación rápida */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 z-10">
          <p className="text-white text-xs font-bold mb-2">Navegación Rápida</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCameraMove([0, 4, 15], [7, 0, 0])}
              className="bg-cyan-500 hover:bg-cyan-400 text-white text-xs px-2 py-1 rounded transition-colors"
              title="Vista General"
            >
              General
            </button>
            <button
              onClick={() => handleCameraMove([4, 0, 7], [4, -0.5, 1.9])}
              className="bg-yellow-500 hover:bg-yellow-400 text-white text-xs px-2 py-1 rounded transition-colors"
              title="Tienda"
            >
              Tienda
            </button>
            <button
              onClick={() => handleCameraMove([13, 2, 8], [12, -0.9, 4.8])}
              className="bg-blue-500 hover:bg-blue-400 text-white text-xs px-2 py-1 rounded transition-colors"
              title="Proyectos"
            >
              Proyectos
            </button>
            <button
              onClick={() => handleCameraMove([8.4, -1, 2.5], [8.4, 0, 1.8])}
              className="bg-purple-500 hover:bg-purple-400 text-white text-xs px-2 py-1 rounded transition-colors"
              title="Skills"
            >
              Skills
            </button>
          </div>
        </div>
      </div>

      {/* Modal del modelo 3D - solo para la tienda */}
      <Model3DModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

// Precargar los modelos para mejor rendimiento
useGLTF.preload(getAssetPath("/models/barrio_japones.glb"));
useGLTF.preload(getAssetPath("/models/multi_supermarket_assetpack_vol.2.glb"));
