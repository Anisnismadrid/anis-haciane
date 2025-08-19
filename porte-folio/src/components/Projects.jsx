export const Projects = () => {
  const projects = [
    { 
      title: "Portfolio Website", 
      tech: "React, TailwindCSS", 
      desc: "Modern and responsive portfolio with animations.", 
      link: "https://ton-portfolio.com" 
    },
    { 
      title: "E-commerce Platform", 
      tech: "Node.js, Express, MongoDB", 
      desc: "Full-stack online shop with authentication and payments.", 
      link: "https://github.com/ton-user/ecommerce" 
    },
    { 
      title: "Chat Application", 
      tech: "React, Socket.io, Node.js", 
      desc: "Real-time chat app with rooms and private messaging.", 
      link: "https://github.com/ton-user/chat-app" 
    },
    { 
      title: "Blog CMS", 
      tech: "Next.js, PostgreSQL", 
      desc: "Content management system for blogs and articles.", 
      link: "https://ton-blog.com" 
    },
    { 
      title: "Weather App", 
      tech: "React, OpenWeather API", 
      desc: "Displays weather forecasts with geolocation support.", 
      link: "https://github.com/ton-user/weather-app" 
    },
    { 
      title: "Task Manager", 
      tech: "Vue.js, Firebase", 
      desc: "Productivity app to manage tasks with cloud sync.", 
      link: "https://github.com/ton-user/task-manager" 
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <h2 className="text-center text-4xl font-bold mb-10">🚀 Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400">{p.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{p.tech}</p>
            <p className="mt-4">{p.desc}</p>

            {/* Bouton vers projet */}
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
