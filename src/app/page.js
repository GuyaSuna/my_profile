"use client";
import React, { useState } from "react";

const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (type) => {
    let content = '';

    switch(type) {
      case 'about':
        content = `
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold mb-2 text-white">¡Hola a todos!</h3>
              <p class="text-slate-300">Mi nombre es Nahuel Pages y me considero un apasionado programador Full Stack. Durante dos años, tuve el privilegio de estudiar en la Universidad Claeh, donde profundicé mis conocimientos en diversos lenguajes de programación como JavaScript, C# y Java.</p>
              <p class="text-slate-300 mt-3">Estos estudios no solo me brindaron una sólida base técnica, sino que también me prepararon para enfrentar desafíos en tecnologías como React y SQL Server, así como en campos especializados como Ingeniería de Software y Ciberseguridad.</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-white">Mi pasión por la programación</h3>
              <p class="text-slate-300">Personalmente, mi dedicación diaria se centra en la adquisición de nuevos conocimientos y habilidades. Me entusiasma especialmente explorar tecnologías emergentes como Python y Next.js. Soy un ferviente creyente en el poder transformador de la programación y estoy comprometido a dar siempre lo mejor de mí para seguir creciendo y mejorando en este campo que tanto me apasiona.</p>
            </div>
          </div>
        `;
        break;
      case 'skills':
        content = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-semibold mb-3 text-white">Lenguajes de Programación</h3>
              <div class="space-y-2 text-slate-300">
                <div class="flex justify-between"><span>JavaScript</span><span class="text-primary">Avanzado</span></div>
                <div class="flex justify-between"><span>C#</span><span class="text-primary">Intermedio</span></div>
                <div class="flex justify-between"><span>Java</span><span class="text-primary">Intermedio</span></div>
                <div class="flex justify-between"><span>Python</span><span class="text-primary">Básico</span></div>
              </div>
            </div>
            <div>
              <h3 class="font-semibold mb-3 text-white">Frameworks y Tecnologías</h3>
              <div class="space-y-2 text-slate-300">
                <div class="flex justify-between"><span>React</span><span class="text-primary">Avanzado</span></div>
                <div class="flex justify-between"><span>Next.js</span><span class="text-primary">Intermedio</span></div>
                <div class="flex justify-between"><span>SQL Server</span><span class="text-primary">Intermedio</span></div>
                <div class="flex justify-between"><span>Node.js</span><span class="text-primary">Básico</span></div>
              </div>
            </div>
          </div>
        `;
        break;
      case 'projects':
        content = `
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2 text-white">Portfolio de Proyectos</h3>
            <p class="text-slate-300 mb-4">Aquí podrás encontrar una selección de mis proyectos más destacados, desarrollados con diferentes tecnologías.</p>
            <p class="text-sm text-slate-400">¡Próximamente más contenido!</p>
          </div>
        `;
        break;
      case 'store':
        content = `
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2 text-white">Tienda de Software</h3>
            <p class="text-slate-300 mb-4">Aquí podrás encontrar mis proyectos y aplicaciones desarrolladas.</p>
            <p class="text-sm text-slate-400">¡Próximamente más contenido!</p>
          </div>
        `;
        break;
      case 'discord':
        content = `
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2 text-white">Canal de Discord</h3>
            <p class="text-slate-300 mb-4">Únete a mi canal de Discord para conversar sobre programación y tecnología.</p>
            <p class="text-sm text-slate-400">¡Próximamente disponible!</p>
          </div>
        `;
        break;
      case 'contact':
        content = `
          <div class="space-y-4">
            <p class="text-slate-300">¿Tienes una idea increíble? ¡Me encantaría trabajar contigo!</p>
            <div class="space-y-3">
              <p class="text-white"><strong>Email:</strong> <a href="mailto:nahuel.pages@ejemplo.com" class="text-primary hover:underline">nahuel.pages@ejemplo.com</a></p>
              <p class="text-white"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nahuel-pages-96915724b/" class="text-primary hover:underline" target="_blank">Nahuel Pages</a></p>
              <p class="text-white"><strong>GitHub:</strong> <a href="https://github.com/GuyaSuna" class="text-primary hover:underline" target="_blank">GuyaSuna</a></p>
            </div>
          </div>
        `;
        break;
    }

    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nahuel-pages-96915724b/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/GuyaSuna', '_blank');
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'CV Nahuel_Pages.pdf';
    link.download = 'CV Nahuel_Pages.pdf';
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
          <button onClick={() => openModal('projects')} className="text-sm font-medium hover:text-primary transition-colors">Proyectos</button>
          <button onClick={() => openModal('about')} className="text-sm font-medium hover:text-primary transition-colors">Acerca de</button>
          <button onClick={() => openModal('skills')} className="text-sm font-medium hover:text-primary transition-colors">Habilidades</button>
          <button onClick={() => openModal('contact')} className="text-sm font-medium hover:text-primary transition-colors">Contacto</button>
        </nav>
        <button onClick={downloadCV} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20">
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
            Soy <span className="text-primary">Nahuel Pages</span>, Full Stack Developer.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-md">
            Construyendo experiencias digitales modernas con tecnologías como React, Next.js y más. Apasionado por la programación y el aprendizaje continuo.
          </p>
        </div>

        {/* About Tile */}
        <div onClick={() => openModal('about')} className="col-span-1 row-span-1 bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/20 transition-all">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary/20 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-4xl">person</span>
          </div>
          <p className="text-sm font-medium text-slate-500 mb-2">Desarrollador Full Stack</p>
          <p className="text-xs text-slate-400">Clic para conocer más</p>
        </div>

        {/* Experience Tile */}
        <div className="col-span-1 row-span-1 bg-primary text-white rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute -right-4 -top-4 opacity-10">
            <span className="material-symbols-outlined text-8xl">work</span>
          </div>
          <span className="material-symbols-outlined text-3xl">bolt</span>
          <div>
            <h3 className="text-2xl font-bold">2+ Años</h3>
            <p className="text-white/80 opacity-80">Estudiando y desarrollando en tecnologías web modernas.</p>
          </div>
        </div>

        {/* GitHub Project */}
        <div onClick={openGitHub} className="col-span-1 md:col-span-2 row-span-2 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden group border border-slate-200 dark:border-slate-800 relative cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <h3 className="text-white text-2xl font-bold">Mis Proyectos en GitHub</h3>
            <p className="text-slate-300 mb-4">Explora mi código y proyectos de desarrollo web.</p>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold w-fit">Ver GitHub</button>
          </div>
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
            <span className="material-symbols-outlined text-8xl text-white/20">code</span>
          </div>
        </div>

        {/* Skills Tile */}
        <div onClick={() => openModal('skills')} className="col-span-1 md:col-span-1 row-span-1 bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-primary/20 transition-all">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">category</span>
            Tecnologías
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">JavaScript</span>
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">React</span>
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">Next.js</span>
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">C#</span>
            <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold">Java</span>
          </div>
        </div>

        {/* Social/Contact Tile */}
        <div className="col-span-1 md:col-span-1 row-span-1 bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-center gap-4">
          <button onClick={openLinkedIn} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
            <span className="font-bold text-sm">LinkedIn</span>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
          </button>
          <button onClick={openGitHub} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
            <span className="font-bold text-sm">GitHub</span>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
          </button>
          <button onClick={() => openModal('discord')} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
            <span className="font-bold text-sm">Discord</span>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
          </button>
        </div>

        {/* Video Tile */}
        <div className="col-span-1 md:col-span-2 row-span-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden group border border-slate-200 dark:border-slate-800 relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-KH6ZSavJ6Y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl">
          </iframe>
        </div>

        {/* Software Store Tile */}
        <div onClick={() => openModal('store')} className="col-span-1 row-span-1 bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between cursor-pointer hover:border-primary/20 transition-all">
          <span className="material-symbols-outlined text-slate-400">storefront</span>
          <div>
            <h4 className="font-bold">Tienda de Software</h4>
            <p className="text-xs text-slate-500 mt-1">Proyectos y aplicaciones desarrolladas.</p>
          </div>
        </div>

        {/* CTA Tile */}
        <div onClick={() => openModal('contact')} className="col-span-1 md:col-span-1 row-span-1 bg-slate-900 dark:bg-primary rounded-xl p-8 text-white flex flex-col justify-center items-center text-center group cursor-pointer border border-transparent hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-4xl mb-2 group-hover:scale-110 transition-transform">send</span>
          <h3 className="text-xl font-bold">Iniciar Proyecto</h3>
          <p className="text-xs text-slate-300 dark:text-white/80 mt-1">Trabajemos juntos en algo increíble.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-500">© 2024 Nahuel Pages. Todos los derechos reservados.</p>
        <div className="flex gap-6 text-sm font-medium text-slate-500">
          <button onClick={() => openModal('privacy')} className="hover:text-primary transition-colors cursor-pointer">Política de Privacidad</button>
          <button onClick={() => openModal('terms')} className="hover:text-primary transition-colors cursor-pointer">Términos de Servicio</button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Sistema Operativo</p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-slate-900 rounded-xl p-8 max-w-2xl max-h-[90vh] overflow-y-auto m-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Información</h2>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-300">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
