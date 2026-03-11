"use client";
import React, { Suspense, useRef, Component, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

// Marcadores 3D interactivos
function Interactive3DMarkers({ onMarkerClick, currentCameraTarget }) {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  // Function to check if camera is close to a marker
  const isMarkerActive = (marker) => {
    if (!currentCameraTarget) return true;
    const distance = Math.sqrt(
      Math.pow(currentCameraTarget[0] - marker.cameraTarget[0], 2) +
        Math.pow(currentCameraTarget[1] - marker.cameraTarget[1], 2) +
        Math.pow(currentCameraTarget[2] - marker.cameraTarget[2], 2),
    );
    return distance > 0.5; // Hide marker if camera is close to its target
  };

  const markers = [
    {
      id: "computadora",
      position: [5.5, -0.1, 4.12],
      cameraPosition: [5.4, 0, 4],
      cameraTarget: [5, -0.1, 4],
      label: "💻 Proyectos Web",
      color: "#3b82f6",
      description: "Aplicaciones y sitios web desarrollados",
    },
    {
      id: "archivos",
      position: [5.7, -0.1, 4.6],
      cameraPosition: [6, 0.1, 4.6],
      cameraTarget: [5.7, -0.1, 4.6],
      label: "📊 Sistemas & Apps",
      color: "#f59e0b",
      description: "Sistemas de gestión y aplicaciones",
    },
    {
      id: "telefono",
      position: [5.5, -0.1, 3.5],
      cameraPosition: [5.6, -0.03, 3.45],
      cameraTarget: [5.5, -0.1, 3.5],
      label: "🚀 Tecnologías",
      color: "#45da31",
      description: "Stack tecnológico y habilidades",
    },
  ];

  return (
    <group>
      {markers.map((marker) =>
        isMarkerActive(marker) ? (
          <group key={marker.id}>
            {/* Marcador principal */}
            <mesh
              position={marker.position}
              onPointerOver={() => setHoveredMarker(marker.id)}
              onPointerOut={() => setHoveredMarker(null)}
              onClick={() => onMarkerClick(marker)}
            >
              <sphereGeometry args={[0.05]} />
              <meshBasicMaterial
                color={marker.color}
                transparent
                opacity={hoveredMarker === marker.id ? 1 : 0.8}
              />
            </mesh>

            {/* Anillo alrededor del marcador */}
            <mesh
              position={marker.position}
              rotation={[Math.PI / 2, 0, 0]}
              onPointerOver={() => setHoveredMarker(marker.id)}
              onPointerOut={() => setHoveredMarker(null)}
              onClick={() => onMarkerClick(marker)}
            >
              <ringGeometry args={[0.06, 0.09]} />
              <meshBasicMaterial
                color={marker.color}
                transparent
                opacity={hoveredMarker === marker.id ? 0.6 : 0.3}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Efecto de pulso cuando hover */}
            {hoveredMarker === marker.id && (
              <PulsingRing position={marker.position} color={marker.color} />
            )}
          </group>
        ) : null,
      )}
    </group>
  );
}

// Controlador de cámara animada
function AnimatedCameraController({
  targetPosition,
  targetLookAt,
  onAnimationComplete,
}) {
  const { camera } = useThree();
  const controlsRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (targetPosition && targetLookAt) {
      setIsAnimating(true);

      // Posiciones iniciales
      const startPosition = camera.position.clone();
      const startTarget = controlsRef.current
        ? controlsRef.current.target.clone()
        : new THREE.Vector3(0, 0, 0);

      let progress = 0;
      const duration = 1; // 1 segundo

      const animate = () => {
        progress += 0.016 / duration; // ~60fps

        if (progress <= 1) {
          // Interpolación suave
          const t =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          // Interpolar posición de cámara
          camera.position.lerpVectors(
            startPosition,
            new THREE.Vector3(...targetPosition),
            t,
          );

          // Interpolar target de los controles
          if (controlsRef.current) {
            controlsRef.current.target.lerpVectors(
              startTarget,
              new THREE.Vector3(...targetLookAt),
              t,
            );
            controlsRef.current.update();
          }

          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
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
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      minDistance={1}
      maxDistance={10}
    />
  );
}

// Anillo con efecto de pulso
function PulsingRing({ position, color }) {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.3;
      ringRef.current.scale.setScalar(scale);
      ringRef.current.material.opacity =
        0.4 - Math.sin(state.clock.elapsedTime * 4) * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.08, 0.12]} />
      <meshBasicMaterial color={color} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

// Componente para el modelo de oficina retro de los 90s
function RetroOfficeModel({ position = [0, -1, 0], scale = [1, 1, 1] }) {
  const modelPath = "/models/90s_retro_office_pack.glb";

  console.log("🏢 Cargando oficina retro de los 90s:", modelPath);

  // Cargar el modelo GLTF
  const { scene } = useGLTF(modelPath);

  if (!scene) {
    console.log("❌ No se pudo cargar la oficina retro");
    return null;
  }

  return <primitive object={scene} scale={scale} position={position} />;
}

// Controlador de cámara con animaciones suaves
function CameraController({
  targetPosition,
  targetLookAt,
  onAnimationComplete,
}) {
  const { camera } = useThree();
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
              Archivo: 90s_retro_office_pack.glb
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

// Modal para información de marcadores
function MarkerModal({ isOpen, onClose, marker }) {
  // Estados para la calculadora de precios y formulario inteligente
  const [selectedService, setSelectedService] = useState("");
  const [projectFeatures, setProjectFeatures] = useState({
    responsive: false,
    database: false,
    authentication: false,
    payments: false,
    multiLanguage: false,
    seo: false,
    analytics: false,
    hosting: false,
  });
  const [urgency, setUrgency] = useState("normal");
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);

  // Precios base para cada servicio
  const basePrices = {
    landing: 299,
    website: 899,
    ecommerce: 1499,
    webapp: 2499,
    mobile: 3999,
  };

  // Precios adicionales por feature
  const featurePrices = {
    responsive: 100,
    database: 300,
    authentication: 200,
    payments: 400,
    multiLanguage: 250,
    seo: 150,
    analytics: 100,
    hosting: 50,
  };

  // Calcular precio automáticamente
  React.useEffect(() => {
    if (selectedService) {
      let price = basePrices[selectedService] || 0;

      // Agregar features
      Object.keys(projectFeatures).forEach((feature) => {
        if (projectFeatures[feature]) {
          price += featurePrices[feature] || 0;
        }
      });

      // Aplicar multiplicador por urgencia
      if (urgency === "urgent") price *= 1.5;
      else if (urgency === "relaxed") price *= 0.8;

      setCalculatedPrice(price);
    }
  }, [selectedService, projectFeatures, urgency]);

  const openWhatsApp = () => {
    const message = `¡Hola! Me interesa tu servicio de ${selectedService}. El presupuesto estimado es $${calculatedPrice}. ¿Podemos conversar?`;
    const whatsappURL = `https://wa.me/59892345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const openCalendly = () => {
    window.open(
      "https://calendly.com/nahuel-pages/consulta-gratuita",
      "_blank",
    );
  };

  if (!isOpen || !marker) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{marker.label}</h2>
            <p className="text-gray-800">{marker.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          {/* Contenido específico por marcador */}
          {marker.id === "escritorio" && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Área de Trabajo
              </h3>
              <p className="text-gray-800">
                Este es el escritorio principal donde se desarrollan todas las
                tareas de programación. Equipado con todo lo necesario para el
                trabajo diario.
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Espacio amplio para trabajar</li>
                <li>Buena iluminación natural</li>
                <li>Organización eficiente</li>
              </ul>
            </div>
          )}

          {marker.id === "computadora" && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                💻 Proyectos Web Destacados
              </h3>
              <p className="text-gray-800 mb-4">
                Sitios web y aplicaciones que he desarrollado utilizando tecnologías modernas.
              </p>

              <div className="space-y-4">
                {/* Portfolio Personal */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    🎨 Portfolio Personal 3D
                  </h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Portfolio interactivo con modelo 3D, diseño responsive y animaciones suaves.
                  </p>
                  <div className="text-xs text-blue-600 space-y-1">
                    <div><strong>Tecnologías:</strong> React, Next.js, Three.js, Tailwind CSS</div>
                    <div><strong>Características:</strong> Modelo 3D interactivo, Responsive Design, SEO optimizado</div>
                    <div><strong>Estado:</strong> ✅ En vivo</div>
                  </div>
                </div>

                {/* Proyecto Web Responsivo */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">
                    🌐 Aplicaciones Web SPA
                  </h4>
                  <p className="text-sm text-green-700 mb-2">
                    Single Page Applications con interfaz moderna y experiencia de usuario fluida.
                  </p>
                  <div className="text-xs text-green-600 space-y-1">
                    <div><strong>Tecnologías:</strong> React, JavaScript ES6+, CSS3</div>
                    <div><strong>Características:</strong> Componentes reutilizables, Estado global, API REST</div>
                    <div><strong>Estado:</strong> 🚧 En desarrollo</div>
                  </div>
                </div>

                {/* Proyecto Landing Pages */}
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    📄 Landing Pages Optimizadas
                  </h4>
                  <p className="text-sm text-purple-700 mb-2">
                    Páginas de aterrizaje enfocadas en conversión y velocidad de carga.
                  </p>
                  <div className="text-xs text-purple-600 space-y-1">
                    <div><strong>Tecnologías:</strong> HTML5, CSS3, JavaScript vanilla</div>
                    <div><strong>Características:</strong> Carga rápida, Mobile-first, Formularios funcionales</div>
                    <div><strong>Estado:</strong> ✅ Múltiples proyectos completados</div>
                  </div>
                </div>

                {/* Formación y aprendizaje */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    🎓 Formación Académica
                  </h4>
                  <div className="text-sm text-orange-700 space-y-1">
                    <div>• 2 años en Universidad Claeh - Ingeniería de Software</div>
                    <div>• Especialización en desarrollo Full Stack</div>
                    <div>• Certificaciones en React y JavaScript</div>
                    <div>• Aprendizaje continuo en nuevas tecnologías</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>💡 Mi enfoque:</strong> Desarrollo con las mejores prácticas,
                  código limpio y mantenible, diseño centrado en el usuario y optimización
                  para rendimiento y SEO.
                </p>
              </div>
            </div>
          )}

          {marker.id === "archivos" && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                📊 Sistemas y Aplicaciones
              </h3>
              <p className="text-gray-800 mb-4">
                Proyectos de sistemas de gestión y aplicaciones de escritorio desarrollados
                con diferentes tecnologías y enfoques.
              </p>

              <div className="space-y-4">
                {/* Aplicaciones de Escritorio */}
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    🖥️ Aplicaciones de Escritorio
                  </h4>
                  <div className="text-sm text-indigo-700 space-y-2">
                    <div>
                      <strong>Sistema de Gestión C#:</strong> Aplicación Windows Forms para
                      gestión de inventario con base de datos SQL Server
                    </div>
                    <div>
                      <strong>App de Escritorio Java:</strong> Herramienta de productividad
                      con interfaz Swing y persistencia de datos
                    </div>
                    <div>
                      <strong>Automatización Python:</strong> Scripts para automatización
                      de tareas y procesamiento de datos
                    </div>
                  </div>
                </div>

                {/* Bases de Datos y Backend */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">
                    🗄️ Bases de Datos y Backend
                  </h4>
                  <div className="text-sm text-green-700 space-y-2">
                    <div>
                      <strong>SQL Server:</strong> Diseño de bases de datos relacionales,
                      stored procedures y optimización de consultas
                    </div>
                    <div>
                      <strong>APIs RESTful:</strong> Desarrollo de servicios backend
                      con Node.js y autenticación JWT
                    </div>
                    <div>
                      <strong>Integración de Datos:</strong> Conectores y middleware
                      para sincronización de sistemas
                    </div>
                  </div>
                </div>

                {/* Metodologías y Herramientas */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    🛠️ Metodologías y Herramientas
                  </h4>
                  <div className="text-sm text-yellow-700 space-y-1">
                    <div>• <strong>Control de Versiones:</strong> Git, GitHub para manejo de código</div>
                    <div>• <strong>Metodologías:</strong> Desarrollo ágil, documentación técnica</div>
                    <div>• <strong>Testing:</strong> Pruebas unitarias y de integración</div>
                    <div>• <strong>Deployment:</strong> CI/CD, hosting y configuración de servidores</div>
                  </div>
                </div>

                {/* En Desarrollo */}
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    🚧 Proyectos en Desarrollo
                  </h4>
                  <div className="text-sm text-purple-700 space-y-2">
                    <div>
                      <strong>Sistema CRM:</strong> Aplicación completa para gestión
                      de clientes con React y Node.js
                    </div>
                    <div>
                      <strong>E-commerce Platform:</strong> Plataforma de comercio electrónico
                      con carrito de compras y pasarela de pagos
                    </div>
                    <div>
                      <strong>Dashboard Analytics:</strong> Panel de control con
                      gráficos interactivos y reportes en tiempo real
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {marker.id === "telefono" && (
            <div className="max-w-4xl w-full">
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                🚀 Stack Tecnológico & Habilidades
              </h3>
              <p className="text-gray-800 mb-6">
                Tecnologías, herramientas y metodologías que domino para el desarrollo
                de soluciones software modernas y eficientes.
              </p>

              {/* Experiencia y Nivel */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600 text-lg">🎓</span>
                  <h4 className="font-semibold text-green-800">
                    Experiencia Académica
                  </h4>
                </div>
                <p className="text-sm text-green-700">
                  2+ años estudiando en Universidad Claeh • Ingeniería de Software •
                  Aprendizaje continuo en tecnologías modernas
                </p>
              </div>

              {/* Stack Tecnológico */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Frontend */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      🎨 Frontend Development
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-blue-700">JavaScript</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Avanzado</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-blue-700">React</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Avanzado</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-blue-700">Next.js</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Intermedio</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{width: '70%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-blue-700">CSS3/Tailwind</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Avanzado</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      ⚙️ Backend & Databases
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-green-700">C#</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Intermedio</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-green-700">Java</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Intermedio</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '70%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-green-700">SQL Server</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Intermedio</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '72%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-green-700">Python</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Básico</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2">
                          <div className="bg-green-300 h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Herramientas */}
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                      🛠️ Herramientas & Otros
                    </h4>
                    <div className="text-sm text-purple-700 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span><strong>Control de Versiones:</strong> Git, GitHub</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span><strong>3D & Graphics:</strong> Three.js, GLTF</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span><strong>Responsive Design:</strong> Mobile-first approach</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span><strong>IDE/Editores:</strong> VS Code, Visual Studio</span>
                      </div>
                    </div>
                  </div>

                  {/* Aprendiendo */}
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                      📚 Actualmente Aprendiendo
                    </h4>
                    <div className="text-sm text-orange-700 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span><strong>Node.js:</strong> Backend con JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span><strong>TypeScript:</strong> JavaScript tipado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span><strong>Cloud Computing:</strong> AWS, servicios en la nube</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span><strong>DevOps:</strong> CI/CD, automatización</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metodología de trabajo */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    🔄 Mi Metodología de Trabajo
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Desarrollo</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Código limpio y documentado</li>
                        <li>• Componentes reutilizables</li>
                        <li>• Responsive design mobile-first</li>
                        <li>• Optimización de rendimiento</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Comunicación</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Actualizaciones constantes</li>
                        <li>• Entregas incrementales</li>
                        <li>• Documentación técnica</li>
                        <li>• Feedback continuo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {marker.id === "plantas" && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Plantas Decorativas
              </h3>
              <p className="text-gray-800">
                Elementos naturales que mejoran el ambiente de trabajo y la
                productividad en la oficina.
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Mejora la calidad del aire</li>
                <li>Reduce el estrés</li>
                <li>Ambiente más acogedor</li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-4 max-w-7xl max-h-[90vh] w-full mx-4">
        {/* Header del modal */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">
            🎨 Portfolio Interactivo & Demo 3D
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Contenedor del modelo 3D */}
        <div className="w-full h-[600px] rounded-xl overflow-hidden bg-gray-200 relative">
          <Canvas
            shadows
            camera={{ fov: 60, position: [0, 4, 6] }}
            style={{
              background: "#e5e7eb",
            }}
          >
            {/* Iluminación */}
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
            <Environment preset="studio" />

            {/* Controlador de cámara animado */}
            <CameraController
              targetPosition={cameraTarget}
              targetLookAt={cameraLookAt}
              onAnimationComplete={handleAnimationComplete}
            />

            {/* Modelo 3D */}
            <ErrorBoundary>
              <Suspense fallback={null}>
                <RetroOfficeModel />
              </Suspense>
            </ErrorBoundary>
          </Canvas>

          {/* Controles e información */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
            <p className="font-bold mb-1">🎨 Demo 3D Interactivo</p>
            <p>• Arrastra para rotar la cámara</p>
            <p>• Scroll para hacer zoom</p>
            <p>• Haz clic en los marcadores para ver mi trabajo</p>
          </div>

          {/* Botones de navegación rápida */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
            <p className="text-white text-xs font-bold mb-2">🎯 Navegación</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCameraMove([0, 5, 6], [0, 0, 0])}
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-xs px-2 py-1 rounded transition-colors"
                title="Vista General"
              >
                🌍 General
              </button>
              <button
                onClick={() => handleCameraMove([3, 1, 2], [0, 0, 0])}
                className="bg-green-500 hover:bg-green-400 text-white text-xs px-2 py-1 rounded transition-colors"
                title="Escritorio"
              >
                💻 Escritorio
              </button>
              <button
                onClick={() => handleCameraMove([-3, 1, 2], [0, 0, 0])}
                className="bg-blue-500 hover:bg-blue-400 text-white text-xs px-2 py-1 rounded transition-colors"
                title="Estanterías"
              >
                📚 Estantes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal
export default function JapaneseNeighborhood({
  onSectionClick,
  isFullscreen = false,
}) {
  const [showModal, setShowModal] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([8.5, 0.5, 3]);
  const [cameraTarget, setCameraTarget] = useState([0, 0, 4]);
  const [currentView, setCurrentView] = useState("lateral"); // Vista actual
  const [isAnimating, setIsAnimating] = useState(false);

  // Estado para modales de marcadores
  const [showMarkerModal, setShowMarkerModal] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Posiciones predefinidas de cámara
  const cameraPresets = {
    general: { position: [8, 4, 4], target: [0, 0, 0] },
    escritorio: { position: [3, 1, 2], target: [0, 0, 0] },
    estantes: { position: [-3, 1, 2], target: [0, 0, 0] },
    lateral: { position: [6, 1, 0], target: [0, 0, 0] },
    frontal: { position: [0, 1, 4], target: [0, 0, 0] },
  };

  const moveCameraTo = (presetName) => {
    const preset = cameraPresets[presetName];
    if (preset) {
      setCameraPosition(preset.position);
      setCameraTarget(preset.target);
      setCurrentView(presetName); // Actualizar vista actual
    }
  };

  // Nombres legibles para las vistas
  const viewNames = {
    general: "🌍 Vista General",
    escritorio: "💻 Escritorio",
    estantes: "📚 Estantes",
    lateral: "👁️ Vista Lateral",
    frontal: "🎯 Vista Frontal",
    custom: "🎯 Vista Personalizada",
  };

  // Manejar click en marcadores 3D
  const handleMarkerClick = (marker) => {
    setIsAnimating(true);
    setCurrentView("custom"); // Vista personalizada

    // Configurar posiciones objetivo para la animación
    setCameraPosition(marker.cameraPosition);
    setCameraTarget(marker.cameraTarget);

    // El modal se abre cuando termina la animación
    setTimeout(() => {
      setSelectedMarker(marker);
      setShowMarkerModal(true);
      setIsAnimating(false);
    }, 1200); // 1.2 segundos para que termine la animación
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
      {/* UI principal con modelo 3D siempre visible */}
      <div
        className={`w-full overflow-hidden bg-gray-200 ${isFullscreen ? "h-screen" : "h-[600px] rounded-xl"}`}
      >
        <Canvas
          shadows
          camera={{ fov: 60, position: cameraPosition }}
          style={{
            background: "#bbbcbe",
          }}
        >
          {/* Iluminación */}
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
          <Environment preset="studio" />

          {/* Controles animados */}
          <AnimatedCameraController
            targetPosition={cameraPosition}
            targetLookAt={cameraTarget}
          />

          {/* Modelo 3D */}
          <ErrorBoundary>
            <Suspense fallback={null}>
              <RetroOfficeModel />
              <Interactive3DMarkers
                onMarkerClick={handleMarkerClick}
                currentCameraTarget={cameraTarget}
              />
            </Suspense>
          </ErrorBoundary>
        </Canvas>
      </div>

      {/* Modal del modelo 3D */}
      <Model3DModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Modal de información de marcadores */}
      <MarkerModal
        isOpen={showMarkerModal}
        onClose={() => setShowMarkerModal(false)}
        marker={selectedMarker}
      />
    </>
  );
}

// Precargar el modelo para mejor rendimiento
useGLTF.preload("/models/90s_retro_office_pack.glb");
