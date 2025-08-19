import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export const About = () => (
  <section id="about" className="flex flex-col md:flex-row items-center gap-8 p-8 text-white">
    <div>
   

      {/* Social buttons */}
      <div className="mt-6 flex flex-wrap gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/ton_github"
          target="_blank"
          className="flex items-center gap-20 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faGithub} />
          
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ton_linkedin"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/ton_telegram"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600 hover:bg-cyan-700"
        >
          <FontAwesomeIcon icon={faTelegram} />
          
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/213XXXXXXXXX"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          
        </a>
      </div>
    </div>
  </section>
);
