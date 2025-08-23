// components/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        
        {/* Texte gauche */}
        <p className="text-sm center">
          © {new Date().getFullYear()} anis haciane— All rights reserved.
        </p>

        {/* Icônes réseaux sociaux */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://t.me/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href="https://wa.me/213XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};
