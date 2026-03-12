"use client";
import React, { useState } from "react";
import JapaneseNeighborhood from "../Components/JapaneseNeighborhood";

const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [is3DStoreOpen, setIs3DStoreOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const openModal = (type) => {
    setActiveModal(type);
    let content = "";

    switch (type) {
      case "about":
        content = `
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold mb-2 text-white">¡Hola a todos!</h3>
              <p class="text-slate-300">Soy Nahuel Pages, desarrollador Full Stack con más de 3 años de experiencia creando aplicaciones web. Mi formación en la Universidad Claeh me proporcionó una base sólida en JavaScript, C# y Java, que he complementado con experiencia práctica en proyectos reales.</p>
              <p class="text-slate-300 mt-3">Esta combinación de estudios formales y experiencia práctica me ha preparado para enfrentar desafíos complejos en tecnologías como React y SQL Server, así como en campos especializados como Ingeniería de Software y Ciberseguridad.</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-white">Mi enfoque profesional</h3>
              <p class="text-slate-300">Mi enfoque se centra en el aprendizaje continuo y la innovación. Actualmente explorando Python y profundizando en Next.js para crear soluciones más eficientes. Cada proyecto es una oportunidad para aplicar las mejores prácticas y tecnologías de vanguardia.</p>
            </div>
          </div>
        `;
        break;
      case "skills":
        content = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-semibold mb-3 text-white">Lenguajes de Programación</h3>
              <div class="space-y-2 text-slate-300">
                <div class="flex justify-between"><span>JavaScript</span><span class="text-primary">Avanzado</span></div>
                <div class="flex justify-between"><span>C#</span><span class="text-primary">Intermedio</span></div>
                <div class="flex justify-between"><span>Java</span><span class="text-primary">Intermedio</span></div>
              </div>
            </div>
            <div>
              <h3 class="font-semibold mb-3 text-white">Frameworks y Tecnologías</h3>
              <div class="space-y-2 text-slate-300">
                <div class="flex justify-between"><span>React</span><span class="text-primary">Avanzado</span></div>
                <div class="flex justify-between"><span>Next.js</span><span class="text-primary">Avanzado</span></div>
                <div class="flex justify-between"><span>SQL Server</span><span class="text-primary">Intermedio</span></div>
              </div>
            </div>
          </div>
        `;
        break;
      case "projects":
        content = `
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2 text-white">Portfolio de Proyectos</h3>
            <p class="text-slate-300 mb-4">Aquí podrás encontrar una selección de mis proyectos más destacados, desarrollados con diferentes tecnologías.</p>
            <p class="text-sm text-slate-400">¡Próximamente más contenido!</p>
          </div>
        `;
        break;
      case "showcase":
        setIs3DStoreOpen(true);
        return;
      case "instagram":
        content = `
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2 text-white">Instagram</h3>
            <p class="text-slate-300 mb-4">Sígueme en Instagram para ver mi trabajo y día a día como desarrollador.</p>
            <p class="text-sm text-slate-400">¡Próximamente disponible!</p>
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
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
      // Crear el contenido del email
      const emailBody = `
NUEVA SOLICITUD DE PROYECTO

Cliente: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || "No especificado"}

Tipo de Servicio: ${formData.serviceType}
Presupuesto: ${formData.budget || "No especificado"}
Tiempo: ${formData.timeline || "No especificado"}

Descripción del Proyecto:
${formData.description}

---
Enviado desde el portfolio web
      `;

      // Abrir cliente de email del usuario
      const subject = encodeURIComponent(
        `Nueva solicitud: ${formData.serviceType} - ${formData.name}`,
      );
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:Nahuel01pages@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoLink);

      // También mostrar los datos en consola para backup
      console.log("Datos del formulario:", formData);

      alert(
        "¡Solicitud enviada! Te contactaré pronto para discutir tu proyecto.",
      );
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
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Navigation */}
      <header className="flex items-center justify-between mb-12">
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
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
        >
          Descargar CV
        </button>
      </header>

      {/* Bento Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid-auto-rows-[160px]">
        {/* Hero Tile */}
        <div className="col-span-1 md:col-span-2 row-span-2 bg-white dark:bg-slate-900 rounded-xl p-10 flex flex-col justify-center border border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            DISPONIBLE PARA PROYECTOS
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Soy <span className="text-primary">Nahuel Pages</span>, Full Stack
            Developer.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-md">
            Especializado en desarrollo Full Stack con React, Next.js y
            tecnologías modernas. Transformo ideas en soluciones digitales
            escalables y funcionales.
          </p>
        </div>

        {/* About Tile */}
        <div
          onClick={() => openModal("about")}
          className="col-span-1 row-span-1 bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/20 transition-all"
        >
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-4 shadow-lg">
            <span className="material-symbols-outlined text-white text-2xl">
              code
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mb-2">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-xs text-slate-400">Clic para conocer más</p>
        </div>

        {/* Experience Tile */}
        <div className="col-span-1 row-span-1 bg-primary text-white rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute -right-4 -top-4 opacity-10">
            <span className="material-symbols-outlined text-8xl">work</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-3xl">bolt</span>
            <h3 className="text-2xl font-bold">3+ Años</h3>
          </div>
          <div>
            <p className="text-white/80 opacity-80">
              Más de 3 años de experiencia en desarrollo de software.
            </p>
          </div>
        </div>

        {/* GitHub Project */}
        <div
          onClick={openGitHub}
          className="col-span-1 md:col-span-2 row-span-2 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden group border border-slate-200 dark:border-slate-800 relative cursor-pointer"
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
                <span className="material-symbols-outlined text-8xl text-white/20 relative z-10">
                  code
                </span>
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <h3 className="text-white text-2xl font-bold">
              Mis Proyectos en GitHub
            </h3>
            <p className="text-slate-300 mb-4">
              Explora mi código y proyectos de desarrollo web.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold w-fit">
              Ver GitHub
            </button>
          </div>
        </div>

        {/* Skills Tile */}
        <div
          onClick={() => openModal("skills")}
          className="col-span-1 md:col-span-1 row-span-1 bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-primary/20 transition-all"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              category
            </span>
            Tecnologías
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
        <div className="col-span-1 md:col-span-1 row-span-1 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-center gap-3 overflow-hidden">
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
        <div className="col-span-1 md:col-span-2 row-span-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden group border border-slate-200 dark:border-slate-800 relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/psdxi9ljI9g"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>

        {/* Portfolio & Demos Tile */}
        <div
          onClick={() => openModal("showcase")}
          className="col-span-1 row-span-1 bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between cursor-pointer hover:border-primary/20 transition-all"
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
          className="col-span-1 md:col-span-1 row-span-1 bg-slate-900 dark:bg-primary rounded-xl p-8 text-white flex flex-col justify-center items-center text-center group cursor-pointer border border-transparent hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-4xl mb-2 group-hover:scale-110 transition-transform">
            send
          </span>
          <h3 className="text-xl font-bold">Iniciar Proyecto</h3>
          <p className="text-xs text-slate-300 dark:text-white/80 mt-1">
            Trabajemos juntos en algo increíble.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-500">
          © 2024 Nahuel Pages. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-sm font-medium text-slate-500">
          <button
            onClick={() => openModal("privacy")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Política de Privacidad
          </button>
          <button
            onClick={() => openModal("terms")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Términos de Servicio
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-slate-900 rounded-xl p-8 max-w-2xl max-h-[90vh] overflow-y-auto m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {activeModal === "showcase"
                  ? "Portfolio & Demos"
                  : activeModal === "contact"
                    ? "Iniciar Proyecto"
                    : "Información"}
              </h2>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-300"
              >
                <span className="material-symbols-outlined">close</span>
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
                    Selecciona el tipo de servicio que necesitas y cuéntame
                    sobre tu proyecto
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        serviceType: "Página Web",
                      }));
                      setActiveModal("contact");
                    }}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
                      language
                    </span>
                    <h3 className="text-white font-bold mb-2">Página Web</h3>
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
                        serviceType: "Aplicación Web",
                      }));
                      setActiveModal("contact");
                    }}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
                      web
                    </span>
                    <h3 className="text-white font-bold mb-2">
                      Aplicación Web
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
                        serviceType: "Aplicación de Escritorio",
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
                      Software para Windows, gestión, herramientas
                    </p>
                    <p className="text-primary text-xs mt-2">Desde $600</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => setActiveModal("contact")}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                  >
                    Solicitar Cotización Personalizada
                  </button>
                </div>
              </div>
            )}

            {/* Formulario de contacto */}
            {activeModal === "contact" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-slate-300">
                    Cuéntame sobre tu proyecto y te enviaré una propuesta
                    personalizada
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                      placeholder="+598 XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Tipo de Servicio *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                      required
                    >
                      <option value="">Seleccionar servicio</option>
                      <option value="Página Web">Página Web</option>
                      <option value="Aplicación Web">Aplicación Web</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Aplicación de Escritorio">
                        Aplicación de Escritorio
                      </option>
                      <option value="Consultoría">Consultoría</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Descripción del Proyecto *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                    placeholder="Describe tu proyecto, funcionalidades necesarias, objetivos, etc."
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Presupuesto Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                    >
                      <option value="">Seleccionar rango</option>
                      <option value="$200-500">$200 - $500</option>
                      <option value="$500-1000">$500 - $1,000</option>
                      <option value="$1000-2000">$1,000 - $2,000</option>
                      <option value="$2000-5000">$2,000 - $5,000</option>
                      <option value="$5000+">Más de $5,000</option>
                      <option value="Por definir">Por definir</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Tiempo Estimado
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                    >
                      <option value="">Seleccionar tiempo</option>
                      <option value="1-2 semanas">1-2 semanas</option>
                      <option value="1 mes">1 mes</option>
                      <option value="2-3 meses">2-3 meses</option>
                      <option value="3-6 meses">3-6 meses</option>
                      <option value="Más de 6 meses">Más de 6 meses</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveModal("store")}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    ← Volver
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </form>
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
          {/* Contenedor del modelo 3D - Pantalla completa sin márgenes */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <JapaneseNeighborhood
              onSectionClick={openModal}
              isFullscreen={true}
            />
          </div>

          {/* Botón cerrar - Solo X en esquina superior derecha con z-index muy alto */}
          <button
            onClick={close3DStore}
            className="fixed top-4 right-4 z-[9999] text-white hover:text-red-400 bg-black/80 rounded-full p-3 backdrop-blur-md border-2 border-white/30 transition-all shadow-2xl hover:scale-110"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
