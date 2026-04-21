"use client";
import React, { useState } from "react";
import JapaneseNeighborhood from "../Components/JapaneseNeighborhood";

const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [is3DStoreOpen, setIs3DStoreOpen] = useState(false);
  const [currentProjectPage, setCurrentProjectPage] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [enlargedImageSrc, setEnlargedImageSrc] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const getAboutContent = () => getAboutContentClean();

  const getAboutContentV2 = () => `
    <div class="relative overflow-hidden">
      <div class="pointer-events-none absolute -left-24 top-[-8rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div class="relative z-10">
        <header class="mb-10 md:mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div class="space-y-2">
            <span class="text-primary text-[0.62rem] sm:text-[0.6875rem] uppercase tracking-[0.16em] sm:tracking-[0.2em]">Curriculum &amp; Tech Stack</span>
            <h3 class="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white leading-none" style="font-family: Manrope, sans-serif;">Informaci&oacute;n.</h3>
          </div>
          <div class="max-w-md rounded-2xl border border-slate-700/40 bg-slate-800/30 px-4 py-4 sm:px-5 backdrop-blur-sm">
            <p class="text-sm leading-relaxed text-slate-300">Perfil t&eacute;cnico enfocado en interfaces robustas, rendimiento, escalabilidad y arquitectura limpia para productos web modernos.</p>
          </div>
        </header>

        <section class="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1.15fr)] md:gap-10">
          <div class="space-y-6 sm:space-y-8">
            <div class="flex items-center gap-3 sm:gap-4">
              <span class="h-px w-8 sm:w-12 bg-primary/40"></span>
              <h4 class="text-[0.72rem] sm:text-sm uppercase tracking-[0.18em] sm:tracking-widest text-slate-400">Lenguajes de Programaci&oacute;n</h4>
            </div>

            <div class="space-y-6 sm:space-y-8">
              <div>
                <div class="mb-3 flex items-end justify-between gap-4">
                  <h5 class="text-xl sm:text-2xl font-bold text-white" style="font-family: Manrope, sans-serif;">JavaScript</h5>
                  <span class="text-[0.6875rem] font-semibold uppercase tracking-tight text-primary">Avanzado</span>
                </div>
                <div class="h-[3px] w-full rounded-full bg-slate-700/30 overflow-hidden">
                  <div class="h-full w-[90%] bg-gradient-to-r from-primary to-blue-300"></div>
                </div>
              </div>

              <div>
                <div class="mb-3 flex items-end justify-between gap-4">
                  <h5 class="text-xl sm:text-2xl font-bold text-white" style="font-family: Manrope, sans-serif;">C#</h5>
                  <span class="text-[0.6875rem] font-semibold uppercase tracking-tight text-slate-400">Intermedio</span>
                </div>
                <div class="h-[3px] w-full rounded-full bg-slate-700/30 overflow-hidden">
                  <div class="h-full w-[65%] bg-slate-500"></div>
                </div>
              </div>

              <div>
                <div class="mb-3 flex items-end justify-between gap-4">
                  <h5 class="text-xl sm:text-2xl font-bold text-white" style="font-family: Manrope, sans-serif;">Java</h5>
                  <span class="text-[0.6875rem] font-semibold uppercase tracking-tight text-slate-400">Intermedio</span>
                </div>
                <div class="h-[3px] w-full rounded-full bg-slate-700/30 overflow-hidden">
                  <div class="h-full w-[60%] bg-slate-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden md:block bg-gradient-to-b from-transparent via-slate-700/30 to-transparent"></div>

          <div class="space-y-6 sm:space-y-8">
            <div class="flex items-center gap-3 sm:gap-4">
              <span class="h-px w-8 sm:w-12 bg-primary/40"></span>
              <h4 class="text-[0.72rem] sm:text-sm uppercase tracking-[0.18em] sm:tracking-widest text-slate-400">Frameworks y Tecnolog&iacute;as</h4>
            </div>

            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-700/30 bg-slate-800/30 p-5 sm:p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-slate-800/50">
                <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold uppercase tracking-[0.18em] text-primary">RE</div>
                <h5 class="text-2xl sm:text-3xl font-bold text-white mb-2" style="font-family: Manrope, sans-serif;">React</h5>
                <p class="text-sm leading-relaxed text-slate-400">Ecosistema moderno, hooks avanzados y manejo de estado escalable para UI complejas.</p>
                <div class="mt-6 sm:mt-8 flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span class="text-[0.6rem] font-bold uppercase tracking-widest text-primary">Nivel Experto</span>
                </div>
              </div>

              <div class="rounded-2xl border border-slate-700/30 bg-slate-800/30 p-5 sm:p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-slate-800/50">
                <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold uppercase tracking-[0.18em] text-primary">NX</div>
                <h5 class="text-2xl sm:text-3xl font-bold text-white mb-2" style="font-family: Manrope, sans-serif;">Next.js</h5>
                <p class="text-sm leading-relaxed text-slate-400">Arquitecturas SSR e ISR, optimizaci&oacute;n SEO y experiencias r&aacute;pidas orientadas a producto.</p>
                <div class="mt-6 sm:mt-8 flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span class="text-[0.6rem] font-bold uppercase tracking-widest text-primary">Nivel Experto</span>
                </div>
              </div>

              <div class="sm:col-span-2 rounded-2xl border border-slate-700/20 bg-slate-800/20 p-5 sm:p-6 transition-colors duration-300 hover:border-slate-600/40">
                <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div class="flex items-start sm:items-center gap-4 sm:gap-5">
                    <div class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 shrink-0">DB</div>
                    <div>
                      <h5 class="text-xl sm:text-2xl font-bold text-white" style="font-family: Manrope, sans-serif;">SQL Server</h5>
                      <p class="text-sm text-slate-400">Modelado relacional, consultas optimizadas y procedimientos complejos.</p>
                    </div>
                  </div>
                  <div class="w-fit rounded-full bg-slate-950 px-4 py-2 text-[0.6875rem] font-bold tracking-widest text-slate-400">INTERMEDIO</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="mt-10 sm:mt-14 border-t border-slate-700/20 pt-8 sm:pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div class="max-w-md">
            <p class="text-sm leading-relaxed text-slate-400">Enfoque especializado en el desarrollo de interfaces de usuario robustas y escalables, con una fuerte inclinaci&oacute;n hacia la arquitectura limpia y el rendimiento digital.</p>
          </div>
          <div class="flex items-center gap-3 sm:gap-4 self-start md:self-auto">
            <img
              class="h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-primary/20 p-1 object-cover grayscale transition-all duration-500 hover:grayscale-0"
              src="/ImagenPortfolio.jpeg"
              alt="Nahuel Pages"
            />
            <div class="flex flex-col justify-center">
              <span class="font-bold text-white" style="font-family: Manrope, sans-serif;">Nahuel Pages</span>
              <span class="text-[0.6875rem] uppercase tracking-widest text-primary">Digital Architect</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  `;

  const getAboutContentClean = () => `
    <div class="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
      <div class="space-y-6">
        <span class="block text-[0.68rem] uppercase tracking-[0.18em] text-primary">Acerca de</span>
        <h3 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-white" style="font-family: Manrope, sans-serif;">
          Hola, soy Nahuel Pages.
        </h3>
        <div class="space-y-4 max-w-3xl">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300">
            Soy desarrollador Full Stack con m&aacute;s de 3 a&ntilde;os de experiencia creando aplicaciones web y soluciones digitales orientadas a producto.
          </p>
          <p class="text-sm sm:text-base leading-relaxed text-slate-400">
            Mi formaci&oacute;n en la Universidad Claeh me dio una base fuerte en JavaScript, C# y Java. A eso le sum&eacute; experiencia pr&aacute;ctica en proyectos reales, trabajando con React, Next.js y SQL Server.
          </p>
          <p class="text-sm sm:text-base leading-relaxed text-slate-400">
            Me interesa construir interfaces claras, sistemas mantenibles y experiencias que no solo funcionen bien, sino que tambi&eacute;n comuniquen calidad en cada detalle.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div class="rounded-2xl border border-slate-700/40 bg-slate-800/30 p-5">
            <p class="text-3xl font-black text-primary mb-2" style="font-family: Manrope, sans-serif;">3+</p>
            <p class="text-xs uppercase tracking-[0.18em] text-slate-400">A&ntilde;os de experiencia</p>
          </div>
          <div class="rounded-2xl border border-slate-700/40 bg-slate-800/30 p-5">
            <p class="text-3xl font-black text-primary mb-2" style="font-family: Manrope, sans-serif;">Full</p>
            <p class="text-xs uppercase tracking-[0.18em] text-slate-400">Stack mindset</p>
          </div>
          <div class="rounded-2xl border border-slate-700/40 bg-slate-800/30 p-5">
            <p class="text-3xl font-black text-primary mb-2" style="font-family: Manrope, sans-serif;">UI</p>
            <p class="text-xs uppercase tracking-[0.18em] text-slate-400">Foco en producto</p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900">
          <img
            class="h-full w-full object-cover"
            src="/ImagenPortfolio.jpeg"
            alt="Nahuel Pages"
          />
        </div>
        <div class="rounded-2xl border border-slate-700/40 bg-slate-800/30 p-5 backdrop-blur-sm">
          <p class="text-[0.68rem] uppercase tracking-[0.18em] text-slate-400 mb-2">Perfil</p>
          <p class="text-sm leading-relaxed text-slate-300">Desarrollo de productos web con foco en claridad, rendimiento, mantenibilidad y experiencia de usuario.</p>
        </div>
      </div>
    </div>
  `;

  const openModal = (type) => {
    setActiveModal(type);
    let content = "";

    switch (type) {
      case "about":
        content = getAboutContentClean();
        break;
      case "skills":
        content = getAboutContentV2();
        break;
      case "projects":
        setCurrentProjectPage(0); // Reset page when opening
        return; // Don't set content, handle it separately
        break;
      case "showcase":
        setIs3DStoreOpen(true);
        return;
      case "instagram":
        content = `
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2 text-white">Instagram</h3>
            <p class="text-slate-300 mb-4">Sigueme en Instagram para ver mi trabajo y mi dia a dia como desarrollador.</p>
            <p class="text-sm text-slate-400">Proximamente disponible.</p>
          </div>
        `;
        break;
      case "contact":
        break;
    }

    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveModal("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      description: "",
      budget: "",
      timeline: "",
    });
  };

  const close3DStore = () => {
    setIs3DStoreOpen(false);
  };

  const nextProject = () => {
    setCurrentProjectPage((prev) => (prev + 1) % 5);
    setCurrentImageIndex(0); // Reset image index when changing project
  };

  const prevProject = () => {
    setCurrentProjectPage((prev) => (prev - 1 + 5) % 5);
    setCurrentImageIndex(0); // Reset image index when changing project
  };

  const nextImage = (project) => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (project) => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  const enlargeImage = (imageSrc) => {
    setEnlargedImageSrc(imageSrc);
    setIsImageEnlarged(true);
  };

  const closeEnlargedImage = () => {
    setIsImageEnlarged(false);
    setEnlargedImageSrc("");
  };

  const getProjectContent = (pageIndex) => {
    const projects = [
      {
        title: "Marketplace Segunda Mano",
        subtitle: "E-commerce & Sistema de Gestion",
        icon: "shopping_cart",
        colors: "from-blue-600/5 to-purple-600/5",
        borderColor: "border-blue-500/20",
        gradientColors: "from-blue-500 to-purple-600",
        iconGradient: "from-blue-500 to-purple-600",
        textColor: "text-blue-200",
        accentColor: "text-blue-400",
        images: [
          "/imagenesProyectos/PaginaComercioSegundaMano/image1.png",
          "/imagenesProyectos/PaginaComercioSegundaMano/image2.png",
          "/imagenesProyectos/PaginaComercioSegundaMano/image3.png",
          "/imagenesProyectos/PaginaComercioSegundaMano/image4.png",
          "/imagenesProyectos/PaginaComercioSegundaMano/image5.png",
        ],
        description:
          "E-commerce completo para productos de segunda mano con gestion de inventario, sistema de usuarios, carrito de compras y panel administrativo avanzado.",
        technologies: ["React", "Node.js", "SQL Server", "JavaScript"],
        features: [
          "Autenticacion segura",
          "Catalogo dinamico de productos",
          "Carrito de compras funcional",
          "Panel administrativo",
          "Gestion de inventario",
          "Pagos integrados",
        ],
      },
      {
        title: "Coopnet - Sistema Cooperativo",
        subtitle: "Gestion Empresarial & Administracion",
        icon: "business",
        colors: "from-cyan-600/5 to-blue-600/5",
        borderColor: "border-cyan-500/20",
        gradientColors: "from-cyan-500 to-blue-600",
        iconGradient: "from-cyan-500 to-blue-600",
        textColor: "text-cyan-200",
        accentColor: "text-cyan-400",
        images: [
          "/imagenesProyectos/Coopnet/image1.png",
          "/imagenesProyectos/Coopnet/image2.png",
          "/imagenesProyectos/Coopnet/image3.png",
          "/imagenesProyectos/Coopnet/image4.png",
          "/imagenesProyectos/Coopnet/image5.png",
          "/imagenesProyectos/Coopnet/image6.png",
        ],
        description:
          "Plataforma integral para gestion de cooperativas con modulos de administracion, reportes financieros, gestion de socios y herramientas de analisis avanzado.",
        technologies: ["C#", ".NET", "WPF", "SQL Server"],
        features: [
          "Dashboard ejecutivo",
          "Gestion de socios y usuarios",
          "Reportes financieros automaticos",
          "Sistema de configuracion",
          "Analytics y metricas",
          "Panel de control administrativo",
        ],
      },
      {
        title: "Portfolio Personal - Jeremias",
        subtitle: "Diseno Web & Experiencia de Usuario",
        icon: "work",
        colors: "from-orange-600/5 to-pink-600/5",
        borderColor: "border-orange-500/20",
        gradientColors: "from-orange-500 to-pink-600",
        iconGradient: "from-orange-500 to-pink-600",
        textColor: "text-orange-200",
        accentColor: "text-orange-400",
        images: [
          "/imagenesProyectos/PortfolioJeremias/image1.png",
          "/imagenesProyectos/PortfolioJeremias/image2.png",
          "/imagenesProyectos/PortfolioJeremias/image3.png",
          "/imagenesProyectos/PortfolioJeremias/image4.png",
          "/imagenesProyectos/PortfolioJeremias/image5.png",
          "/imagenesProyectos/PortfolioJeremias/image6.png",
        ],
        description:
          "Portfolio personal con diseno moderno, animaciones fluidas y secciones interactivas, optimizado para mostrar proyectos y habilidades profesionales.",
        technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
        features: [
          "Diseno responsivo moderno",
          "Animaciones suaves",
          "Secciones interactivas",
          "Galeria de proyectos",
          "Formulario de contacto",
          "Optimizacion movil",
        ],
      },
      {
        title: "Portfolio Creativo - Lucas Rosa",
        subtitle: "Arte Digital & Experiencia Visual",
        icon: "palette",
        colors: "from-pink-600/5 to-purple-600/5",
        borderColor: "border-pink-500/20",
        gradientColors: "from-pink-500 to-purple-600",
        iconGradient: "from-pink-500 to-purple-600",
        textColor: "text-pink-200",
        accentColor: "text-pink-400",
        images: [
          "/imagenesProyectos/PortfolioLucasRosa/image1.png",
          "/imagenesProyectos/PortfolioLucasRosa/image2.png",
          "/imagenesProyectos/PortfolioLucasRosa/image3.png",
          "/imagenesProyectos/PortfolioLucasRosa/image4.png",
          "/imagenesProyectos/PortfolioLucasRosa/image5.png",
        ],
        description:
          "Portfolio para artista visual con galeria interactiva, efectos unicos y un diseno minimalista que resalta el trabajo creativo.",
        technologies: ["React", "Framer Motion", "CSS3", "JavaScript"],
        features: [
          "Galeria interactiva",
          "Efectos visuales unicos",
          "Diseno minimalista",
          "Optimizacion de imagenes",
          "Experiencia inmersiva",
          "Navegacion intuitiva",
        ],
      },
      {
        title: "Ruta Positiva - Bienestar Mental",
        subtitle: "Salud Mental & Comunidad de Apoyo",
        icon: "psychology",
        colors: "from-teal-600/5 to-green-600/5",
        borderColor: "border-teal-500/20",
        gradientColors: "from-teal-500 to-green-600",
        iconGradient: "from-teal-500 to-green-600",
        textColor: "text-teal-200",
        accentColor: "text-teal-400",
        images: [
          "/imagenesProyectos/RutaPositiva/image1.png",
          "/imagenesProyectos/RutaPositiva/image2.png",
          "/imagenesProyectos/RutaPositiva/image3.png",
          "/imagenesProyectos/RutaPositiva/image4.png",
          "/imagenesProyectos/RutaPositiva/image5.png",
        ],
        description:
          "Plataforma web para bienestar mental y coaching con sistema de citas, recursos educativos y comunidad de apoyo integral.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        features: [
          "Sistema de citas online",
          "Recursos educativos",
          "Comunidad de apoyo",
          "Chat en tiempo real",
          "Seguimiento de progreso",
          "Panel de profesionales",
        ],
      },
    ];

    return projects[pageIndex];
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validacion basica
    if (
      !formData.name ||
      !formData.email ||
      !formData.serviceType ||
      !formData.description
    ) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    try {
      const emailBody = `
NUEVA SOLICITUD DE PROYECTO

Cliente: ${formData.name}
Email: ${formData.email}
Telefono: ${formData.phone || "No especificado"}

Tipo de Servicio: ${formData.serviceType}
Presupuesto: ${formData.budget || "No especificado"}
Tiempo: ${formData.timeline || "No especificado"}

Descripcion del Proyecto:
${formData.description}

---
Enviado desde el portfolio web
      `;

      const subject = encodeURIComponent(
        `Nueva solicitud: ${formData.serviceType} - ${formData.name}`,
      );
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:Nahuel01pages@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoLink);
      console.log("Datos del formulario:", formData);

      alert("Solicitud enviada. Te contactare pronto para discutir tu proyecto.");
      closeModal();
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error al enviar la solicitud. Por favor intenta nuevamente.");
    }
  };
  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/nahuel-pages-96915724b/",
      "_blank",
    );
  };

  const openGitHub = () => {
    window.open("https://github.com/GuyaSuna", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/nahu_pages/", "_blank");
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "CV Nahuel_Pages.pdf";
    link.download = "CV Nahuel_Pages.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-12">
      {/* Navigation */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-12">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-symbols-outlined text-white">code</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Portfolio</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8 bg-slate-200/50 dark:bg-slate-800/50 px-6 py-2 rounded-full border border-slate-300 dark:border-slate-700">
          <button
            onClick={() => openModal("projects")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Proyectos
          </button>
          <button
            onClick={() => openModal("about")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Acerca de
          </button>
          <button
            onClick={() => openModal("skills")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Habilidades
          </button>
          <button
            onClick={() => openModal("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>
        <button
          onClick={downloadCV}
          className="bg-primary hover:bg-primary/90 text-white w-full px-4 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-primary/20 self-start sm:self-auto sm:w-auto sm:px-6 sm:py-2.5 sm:text-sm"
        >
          Descargar CV
        </button>
      </header>

      <nav className="md:hidden mb-6">
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-300 bg-slate-200/50 p-2 dark:border-slate-700 dark:bg-slate-800/50">
          <button
            onClick={() => openModal("projects")}
            className="rounded-xl px-4 py-3 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-300/70 dark:text-slate-200 dark:hover:bg-slate-700/70"
          >
            Proyectos
          </button>
          <button
            onClick={() => openModal("about")}
            className="rounded-xl px-4 py-3 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-300/70 dark:text-slate-200 dark:hover:bg-slate-700/70"
          >
            Acerca de
          </button>
          <button
            onClick={() => openModal("skills")}
            className="rounded-xl px-4 py-3 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-300/70 dark:text-slate-200 dark:hover:bg-slate-700/70"
          >
            Habilidades
          </button>
          <button
            onClick={() => openModal("contact")}
            className="rounded-xl px-4 py-3 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-300/70 dark:text-slate-200 dark:hover:bg-slate-700/70"
          >
            Contacto
          </button>
        </div>
      </nav>

      {/* Bento Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 grid-auto-rows-[minmax(180px,auto)] sm:grid-auto-rows-[160px]">
        {/* Hero Tile */}
        <div className="col-span-1 md:col-span-2 row-span-2 min-h-[320px] sm:min-h-0 bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-10 flex flex-col justify-center border border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold mb-4 sm:mb-6 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            DISPONIBLE PARA PROYECTOS
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 sm:mb-6">
            Soy <span className="text-primary">Nahuel Pages</span>, Full Stack
            Developer.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-lg leading-relaxed max-w-md">
            Especializado en desarrollo Full Stack con React, Next.js y
            tecnologias modernas. Transformo ideas en soluciones digitales
            escalables y funcionales.
          </p>
        </div>

        {/* About Tile */}
        <div
          onClick={() => openModal("about")}
          className="col-span-1 row-span-1 min-h-[180px] sm:min-h-0 bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/20 transition-all"
        >
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-4 shadow-lg">
            <span className="material-symbols-outlined text-white text-2xl">
              code
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mb-2">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-xs text-slate-400">Clic para conocer mas</p>
        </div>

        {/* Experience Tile */}
        <div className="col-span-1 row-span-1 min-h-[180px] sm:min-h-0 bg-primary text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute -right-4 -top-4 opacity-10">
            <span className="material-symbols-outlined text-7xl sm:text-8xl">
              work
            </span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-3xl">bolt</span>
            <h3 className="text-2xl font-bold">3+ Anos</h3>
          </div>
          <div>
            <p className="text-white/80 opacity-80">
              Mas de 3 anos de experiencia en desarrollo de software.
            </p>
          </div>
        </div>

        {/* GitHub Project */}
        <div
          onClick={openGitHub}
          className="col-span-1 md:col-span-2 row-span-2 sm:row-span-2 min-h-[260px] sm:min-h-0 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden group border border-slate-200 dark:border-slate-800 relative cursor-pointer"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-blue-900/30 animate-gradient-shift">
            {/* Floating Code Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Code symbols floating animation */}
              <div className="absolute top-4 left-4 text-green-400/30 text-xl font-mono animate-float-slow">
                {"{ }"}
              </div>
              <div className="absolute top-16 right-8 text-blue-400/30 text-lg font-mono animate-float-medium">
                {"< />"}
              </div>
              <div className="absolute bottom-20 left-8 text-purple-400/30 text-2xl font-mono animate-float-fast">
                {"[ ]"}
              </div>
              <div className="absolute bottom-8 right-12 text-cyan-400/30 text-xl font-mono animate-float-slow">
                {"( )"}
              </div>
              <div className="absolute top-1/3 left-1/4 text-yellow-400/20 text-lg font-mono animate-float-medium">
                {"=>"}
              </div>
              <div className="absolute bottom-1/3 right-1/4 text-pink-400/20 text-xl font-mono animate-float-fast">
                {"&&"}
              </div>

              {/* Animated dots pattern */}
              <div className="absolute top-8 left-1/2 w-2 h-2 bg-green-500/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 left-1/3 w-1 h-1 bg-blue-500/40 rounded-full animate-ping"></div>
              <div className="absolute top-24 right-1/3 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse delay-300"></div>
            </div>

            {/* Central code icon with glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <span className="material-symbols-outlined text-6xl sm:text-8xl text-white/20 relative z-10">
                  code
                </span>
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-8">
            <h3 className="text-white text-xl sm:text-2xl font-bold">
              Mis Proyectos en GitHub
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Explora mi codigo y proyectos de desarrollo web.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold w-fit">
              Ver GitHub
            </button>
          </div>
        </div>

        {/* Skills Tile */}
        <div
          onClick={() => openModal("skills")}
          className="col-span-1 md:col-span-1 row-span-1 min-h-[180px] sm:min-h-0 bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-primary/20 transition-all"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              category
            </span>
            Tecnologias
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
              JavaScript
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
              React
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
              Next.js
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
              C#
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
              Java
            </span>
          </div>
        </div>

        {/* Social/Contact Tile */}
        <div className="col-span-1 md:col-span-1 row-span-1 min-h-[180px] sm:min-h-0 bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-center gap-2 sm:gap-3 overflow-hidden">
          <button
            onClick={openLinkedIn}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer min-w-0"
          >
            <span className="font-bold text-sm truncate">LinkedIn</span>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors flex-shrink-0 ml-2 text-lg">
              arrow_outward
            </span>
          </button>
          <button
            onClick={openGitHub}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer min-w-0"
          >
            <span className="font-bold text-sm truncate">GitHub</span>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors flex-shrink-0 ml-2 text-lg">
              arrow_outward
            </span>
          </button>
          <button
            onClick={openInstagram}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer min-w-0"
          >
            <span className="font-bold text-sm truncate">Instagram</span>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors flex-shrink-0 ml-2 text-lg">
              arrow_outward
            </span>
          </button>
        </div>

        {/* Video Tile */}
        <div className="col-span-1 md:col-span-2 row-span-1 min-h-[220px] sm:min-h-0 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden group border border-slate-200 dark:border-slate-800 relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/FQHFWNHU4Do"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>

        {/* Portfolio & Demos Tile */}
        <div
          onClick={() => openModal("showcase")}
          className="col-span-1 row-span-1 min-h-[180px] sm:min-h-0 bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between cursor-pointer hover:border-primary/20 transition-all"
        >
          <span className="material-symbols-outlined text-slate-400">
            view_in_ar
          </span>
          <div>
            <h4 className="font-bold">Demo 3D</h4>
            <p className="text-xs text-slate-500 mt-1">
              Proyecto interactivo 3D. (PC - Recomendado)
            </p>
          </div>
        </div>

        {/* CTA Tile */}
        <div
          onClick={() => openModal("contact")}
          className="col-span-1 md:col-span-1 row-span-1 min-h-[180px] sm:min-h-0 bg-slate-900 dark:bg-primary rounded-xl p-6 sm:p-8 text-white flex flex-col justify-center items-center text-center group cursor-pointer border border-transparent hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-4xl mb-2 group-hover:scale-110 transition-transform">
            send
          </span>
          <h3 className="text-xl font-bold">Iniciar Proyecto</h3>
          <p className="text-xs text-slate-300 dark:text-white/80 mt-1">
            Trabajemos juntos en algo increible.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 sm:mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
        <p className="text-sm text-slate-500">
          ? 2026 Nahuel Pages. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-slate-500">
          <button
            onClick={() => openModal("privacy")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Politica de Privacidad
          </button>
          <button
            onClick={() => openModal("terms")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Terminos de Servicio
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Sistema Operativo
          </p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 ${
            activeModal === "about" ||
            activeModal === "skills" ||
            activeModal === "contact"
              ? "bg-[#060e20] px-3 py-3 sm:px-4 sm:py-4 lg:px-6"
              : "bg-black/80 flex items-center justify-center"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-slate-900 rounded-xl ${
              activeModal === "about" ||
              activeModal === "skills" ||
              activeModal === "contact"
                ? "relative w-full h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] max-w-none rounded-2xl lg:rounded-3xl border border-slate-700/50 p-5 sm:p-8"
                : "max-w-2xl p-8"
            } ${
              activeModal === "about" ||
              activeModal === "skills" ||
              activeModal === "contact"
                ? "overflow-y-auto"
                : "max-h-[90vh] overflow-y-auto m-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {activeModal === "showcase"
                  ? "Portfolio & Demos"
                  : activeModal === "about"
                    ? "Acerca de"
                    : activeModal === "skills"
                      ? "Habilidades"
                      : activeModal === "contact"
                        ? "Iniciar Proyecto"
                        : "Informacion"}
              </h2>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-300 text-3xl leading-none"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* Contenido del modal del showcase */}
            {activeModal === "showcase" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <p className="text-slate-300 text-lg mb-4">
                    Desarrollo software personalizado para tu negocio
                  </p>
                  <p className="text-slate-400">
                    Selecciona el tipo de servicio que necesitas y cuentame
                    sobre tu proyecto
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        serviceType: "Pagina Web",
                      }));
                      setActiveModal("contact");
                    }}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
                      language
                    </span>
                    <h3 className="text-white font-bold mb-2">Pagina Web</h3>
                    <p className="text-slate-400 text-sm">
                      Sitios web responsivos, landing pages, portfolios
                    </p>
                    <p className="text-primary text-xs mt-2">Desde $300</p>
                  </div>

                  <div
                    className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        serviceType: "Aplicacion Web",
                      }));
                      setActiveModal("contact");
                    }}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
                      web
                    </span>
                    <h3 className="text-white font-bold mb-2">
                      Aplicacion Web
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Apps web interactivas, dashboards, sistemas
                    </p>
                    <p className="text-primary text-xs mt-2">Desde $800</p>
                  </div>

                  <div
                    className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        serviceType: "E-commerce",
                      }));
                      setActiveModal("contact");
                    }}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
                      shopping_cart
                    </span>
                    <h3 className="text-white font-bold mb-2">E-commerce</h3>
                    <p className="text-slate-400 text-sm">
                      Tiendas online, carritos de compra, pagos
                    </p>
                    <p className="text-primary text-xs mt-2">Desde $1200</p>
                  </div>

                  <div
                    className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        serviceType: "Aplicacion de Escritorio",
                      }));
                      setActiveModal("contact");
                    }}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
                      desktop_windows
                    </span>
                    <h3 className="text-white font-bold mb-2">
                      App de Escritorio
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Software para Windows, gestion, herramientas
                    </p>
                    <p className="text-primary text-xs mt-2">Desde $600</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => setActiveModal("contact")}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                  >
                    Solicitar Cotizacion Personalizada
                  </button>
                </div>
              </div>
            )}

            {/* Formulario de contacto */}
                        {activeModal === "contact" && (
              <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

                <div className="relative z-10 mx-auto w-full max-w-[1120px] px-1 sm:px-2 lg:px-4 xl:px-8">
                  <div className="mb-8 md:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                        Contacto Directo
                      </span>
                      <p className="max-w-md pt-1 text-base leading-relaxed text-slate-400">
                        Cuéntame sobre tu proyecto y te enviaré una propuesta personalizada
                      </p>
                    </div>
                    <div className="hidden lg:block h-16 w-1 rounded-full bg-gradient-to-b from-primary/40 to-transparent opacity-60" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
                      <div className="space-y-7">
                        <div className="group">
                          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-primary">
                            Name (Required)
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border-0 border-b border-slate-700/40 bg-transparent px-0 py-3 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-0"
                            placeholder="Tu nombre completo"
                            required
                          />
                        </div>

                        <div className="group">
                          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-primary">
                            Email (Required)
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border-0 border-b border-slate-700/40 bg-transparent px-0 py-3 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-0"
                            placeholder="email@ejemplo.com"
                            required
                          />
                        </div>

                        <div className="group">
                          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-primary">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border-0 border-b border-slate-700/40 bg-transparent px-0 py-3 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-0"
                            placeholder="+598 XX XXX XXX"
                          />
                        </div>

                        <div className="group">
                          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-primary">
                            Service Type
                          </label>
                          <div className="relative">
                            <select
                              name="serviceType"
                              value={formData.serviceType}
                              onChange={handleInputChange}
                              className="w-full appearance-none border-0 border-b border-slate-700/40 bg-slate-900/40 px-0 py-3 text-white focus:border-primary focus:outline-none focus:ring-0"
                              required
                            >
                              <option className="bg-slate-900 text-white" value="">Seleccionar servicio</option>
                              <option className="bg-slate-900 text-white" value="Página Web">Página Web</option>
                              <option className="bg-slate-900 text-white" value="Aplicación Web">Aplicación Web</option>
                              <option className="bg-slate-900 text-white" value="E-commerce">E-commerce</option>
                              <option className="bg-slate-900 text-white" value="Aplicación de Escritorio">Aplicación de Escritorio</option>
                              <option className="bg-slate-900 text-white" value="Consultoría">Consultoría</option>
                              <option className="bg-slate-900 text-white" value="Otro">Otro</option>
                            </select>
                            <span className="material-symbols-outlined pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-slate-500">expand_more</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-7 md:pl-8 lg:pl-12 xl:pl-16 md:pr-2 lg:pr-4 xl:pr-6">
                        <div className="group">
                          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-primary">
                            Project Description (Required)
                          </label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="5"
                            className="w-full resize-none rounded-2xl border border-slate-700/20 bg-slate-800/40 px-4 py-4 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                            placeholder="Cuéntame sobre los objetivos, funcionalidades y alcance del proyecto..."
                            required
                          ></textarea>
                        </div>

                        <div className="group">
                          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-primary">
                            Estimated Budget
                          </label>
                          <div className="relative">
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="w-full appearance-none border-0 border-b border-slate-700/40 bg-slate-900/40 px-0 py-3 text-white focus:border-primary focus:outline-none focus:ring-0"
                            >
                              <option className="bg-slate-900 text-white" value="">Seleccionar rango</option>
                              <option className="bg-slate-900 text-white" value="$200-500">$200 - $500</option>
                              <option className="bg-slate-900 text-white" value="$500-1000">$500 - $1,000</option>
                              <option className="bg-slate-900 text-white" value="$1000-2000">$1,000 - $2,000</option>
                              <option className="bg-slate-900 text-white" value="$2000-5000">$2,000 - $5,000</option>
                              <option className="bg-slate-900 text-white" value="$5000+">Más de $5,000</option>
                              <option className="bg-slate-900 text-white" value="Por definir">Por definir</option>
                            </select>
                            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                          </div>
                        </div>

                        <div className="group">
                          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-primary">
                            Estimated Time
                          </label>
                          <div className="relative">
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className="w-full appearance-none border-0 border-b border-slate-700/40 bg-slate-900/40 px-0 py-3 text-white focus:border-primary focus:outline-none focus:ring-0"
                            >
                              <option className="bg-slate-900 text-white" value="">Seleccionar tiempo</option>
                              <option className="bg-slate-900 text-white" value="1-2 semanas">1-2 semanas</option>
                              <option className="bg-slate-900 text-white" value="1 mes">1 mes</option>
                              <option className="bg-slate-900 text-white" value="2-3 meses">2-3 meses</option>
                              <option className="bg-slate-900 text-white" value="3-6 meses">3-6 meses</option>
                              <option className="bg-slate-900 text-white" value="Más de 6 meses">Más de 6 meses</option>
                              <option className="bg-slate-900 text-white" value="Flexible">Flexible</option>
                            </select>
                            <span className="material-symbols-outlined pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-slate-500">expand_more</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col-reverse items-stretch justify-between gap-4 border-t border-slate-700/20 pt-8 md:flex-row md:items-center md:pr-2 lg:pr-4 xl:pr-6">
                      <button
                        type="button"
                        onClick={() => setActiveModal("showcase")}
                        className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary/5 md:justify-start"
                      >
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        Volver
                      </button>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary-container px-10 py-4 font-bold text-slate-950 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] md:w-auto"
                      >
                        Enviar Solicitud
                        <span className="material-symbols-outlined">arrow_outward</span>
                      </button>
                    </div>
                  </form>

                  <div className="mt-8 border-t border-slate-700/20 pt-6 text-xs text-slate-500 md:pr-2 lg:pr-4 xl:pr-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span className="uppercase tracking-[0.2em]">
                        Nahuel Pages © 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contenido regular del modal */}
            {activeModal !== "store" &&
              activeModal !== "contact" &&
              modalContent && (
                <div dangerouslySetInnerHTML={{ __html: modalContent }} />
              )}
          </div>
        </div>
      )}

      {/* Modal 3D Store - Pantalla completa */}
      {is3DStoreOpen && (
        <div className="fixed inset-0 z-50 bg-gray-200">
          {/* Contenedor del modelo 3D - Pantalla completa sin margenes */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <JapaneseNeighborhood
              onSectionClick={openModal}
              isFullscreen={true}
            />
          </div>

          {/* Boton cerrar - Solo X en esquina superior derecha con z-index muy alto */}
          <button
            onClick={close3DStore}
            className="fixed top-4 right-4 z-[9999] text-white hover:text-red-400 bg-black/80 rounded-full p-3 backdrop-blur-md border-2 border-white/30 transition-all shadow-2xl hover:scale-110"
          >
            ?
          </button>
        </div>
      )}

      {/* Modal de Proyectos - Estilo Cinematografico */}
      {activeModal === "projects" && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          style={{ backgroundColor: "#060e20" }}
        >
          {/* Fondo con efectos */}
          <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8 opacity-10 blur-xl pointer-events-none">
            <div className="bg-primary h-full rounded-2xl"></div>
            <div className="bg-slate-700 h-full rounded-2xl"></div>
            <div className="bg-primary h-full rounded-2xl"></div>
            <div className="bg-slate-700 h-full rounded-2xl"></div>
          </div>

          {/* Contenedor principal con glass morphism */}
          <div className="relative w-full h-full flex items-center justify-center px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
            <div
              className="relative w-full max-w-[96rem] h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] lg:h-[85vh] rounded-2xl lg:rounded-3xl border shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-500"
              style={{
                background: "rgba(9, 19, 40, 0.95)",
                backdropFilter: "blur(32px)",
                borderColor: "rgba(64, 72, 93, 0.2)",
                boxShadow: "0 0 80px -20px rgba(151, 169, 255, 0.15)",
              }}
            >
              {/* Header cinematografico */}
              <div
                className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-6 border-b"
                style={{ borderColor: "rgba(64, 72, 93, 0.1)" }}
              >
                <div className="flex flex-1 flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 min-w-0">
                  <span className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.22em] sm:tracking-[0.3em] text-primary">
                    Project Showcase
                  </span>
                  <div className="hidden sm:block h-px w-12 bg-gray-600/30"></div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <button
                      onClick={prevProject}
                      className="h-9 w-9 sm:h-auto sm:w-auto text-gray-400 hover:text-primary transition-colors flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-base">
                        arrow_back_ios
                      </span>
                    </button>
                    <span className="text-[0.7rem] sm:text-xs font-bold text-gray-400 tabular-nums whitespace-nowrap">
                      {String(currentProjectPage + 1).padStart(2, "0")} / 05
                    </span>
                    <button
                      onClick={nextProject}
                      className="h-9 w-9 sm:h-auto sm:w-auto text-gray-400 hover:text-primary transition-colors flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-base">
                        arrow_forward_ios
                      </span>
                    </button>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 transition-all group shrink-0"
                >
                  <span className="material-symbols-outlined transition-transform group-hover:rotate-90">
                    close
                  </span>
                </button>
              </div>

              {/* Layout de 3 columnas cinematografico */}
              <div className="flex-1 overflow-y-auto lg:overflow-hidden">
                {(() => {
                  const project = getProjectContent(currentProjectPage);
                  return (
                    <div className="flex min-h-full flex-col lg:h-full lg:flex-row">
                      {/* Columna 1: Galeria principal con carousel - 45% */}
                      <div
                        className="w-full lg:w-[45%] relative group/gallery p-4 sm:p-6 lg:p-10 lg:border-r"
                        style={{ borderColor: "rgba(64, 72, 93, 0.1)" }}
                      >
                        <div className="w-full h-[16rem] sm:h-[22rem] lg:h-full rounded-2xl overflow-hidden relative shadow-2xl">
                          <img
                            alt="Project View"
                            className="w-full h-full object-cover grayscale-[20%] group-hover/gallery:grayscale-0 transition-all duration-1000 cursor-pointer hover:scale-105"
                            src={project.images[currentImageIndex]}
                            onClick={() =>
                              enlargeImage(project.images[currentImageIndex])
                            }
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                          {/* Controles del carousel */}
                          {project.images.length > 1 && (
                            <>
                              <button
                                onClick={() => prevImage(project)}
                                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-black/60 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all group/btn"
                              >
                                <span className="material-symbols-outlined text-lg group-hover/btn:scale-110 transition-transform">
                                  arrow_back_ios
                                </span>
                              </button>
                              <button
                                onClick={() => nextImage(project)}
                                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-black/60 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all group/btn"
                              >
                                <span className="material-symbols-outlined text-lg group-hover/btn:scale-110 transition-transform">
                                  arrow_forward_ios
                                </span>
                              </button>

                              {/* Indicadores de imagen */}
                              <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {project.images.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                      index === currentImageIndex
                                        ? "bg-primary"
                                        : "bg-white/40 hover:bg-white/60"
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}

                          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                            <div className="px-3 py-2 sm:px-4 bg-black/40 backdrop-blur-lg border border-white/5 rounded-lg inline-flex items-center justify-between gap-3 w-full">
                              <div className="flex min-w-0 items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.18em] sm:tracking-widest text-white truncate">
                                  Interactive Live Preview
                                </span>
                              </div>
                              {project.images.length > 1 && (
                                <span className="text-[0.55rem] sm:text-[0.6rem] font-bold text-white/60 shrink-0">
                                  {currentImageIndex + 1} /{" "}
                                  {project.images.length}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Columna 2: Informacion principal - 30% */}
                      <div
                        className="w-full lg:w-[30%] flex flex-col justify-between p-5 sm:p-8 lg:p-12 lg:border-r"
                        style={{
                          borderColor: "rgba(64, 72, 93, 0.1)",
                          backgroundColor: "rgba(25, 37, 64, 0.2)",
                        }}
                      >
                        <div className="space-y-5 sm:space-y-6">
                          <div className="space-y-2">
                            <h2
                              className="text-2xl sm:text-3xl lg:text-5xl font-black text-white leading-tight tracking-tighter"
                              style={{ fontFamily: "Manrope" }}
                            >
                              {project.title}
                            </h2>
                            <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
                              <span className="material-symbols-outlined text-sm">
                                {project.icon}
                              </span>
                              <span>{project.subtitle}</span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <p
                              className="text-gray-300 leading-relaxed text-sm lg:text-base border-l-2 border-primary/20 pl-4"
                              style={{ fontFamily: "Inter" }}
                            >
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Columna 3: Panel de detalles - 25% */}
                      <div
                        className="w-full lg:w-[25%] p-5 sm:p-8 lg:p-12 flex flex-col justify-start space-y-8 sm:space-y-10 lg:space-y-12"
                        style={{ backgroundColor: "rgba(9, 19, 40, 0.3)" }}
                      >
                        {/* Stack Tecnologico */}
                        <section>
                          <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400">
                              Stack Tecnologico
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                            {project.technologies.map((tech, index) => (
                              <div
                                key={index}
                                className="px-3 py-2 rounded-lg border text-[0.7rem] font-bold text-primary flex items-center gap-2"
                                style={{
                                  backgroundColor: "rgba(20, 31, 56, 1)",
                                  borderColor: "rgba(64, 72, 93, 0.1)",
                                }}
                              >
                                <span className="w-1 h-1 rounded-full bg-primary/40"></span>{" "}
                                {tech}
                              </div>
                            ))}
                          </div>
                        </section>

                        {/* Caracteristicas principales */}
                        <section>
                          <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400">
                              Core Features
                            </span>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {project.features
                              .slice(0, 4)
                              .map((feature, index) => {
                                const icons = [
                                  "bolt",
                                  "responsive_layout",
                                  "animation",
                                  "language",
                                ];
                                return (
                                  <li
                                    key={index}
                                    className="flex items-start gap-3 group"
                                  >
                                    <span className="material-symbols-outlined text-primary text-lg mt-0.5 group-hover:scale-110 transition-transform">
                                      {icons[index] || "star"}
                                    </span>
                                    <div className="space-y-0.5">
                                      <span className="block text-xs font-bold text-white">
                                        {feature}
                                      </span>
                                      <span className="block text-[0.65rem] text-gray-400">
                                        Optimizado y funcional
                                      </span>
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                        </section>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de imagen ampliada */}
      {isImageEnlarged && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60]"
          onClick={closeEnlargedImage}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            <img
              src={enlargedImageSrc}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all group"
            >
              <span className="material-symbols-outlined text-xl group-hover:rotate-90 transition-transform">
                close
              </span>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-lg border border-white/10 rounded-lg">
              <span className="text-white text-sm font-medium">
                Click para cerrar
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;

