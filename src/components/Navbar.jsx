export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md text-white shadow-lg z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-blue-400">🚀 my Portfolio</h1>
      <ul className="hidden md:flex gap-6 ">
        <li><a href="Home" className="hover:text-blue-400">Accueil</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projets</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
      </ul>
    </div>
  </nav>
);
