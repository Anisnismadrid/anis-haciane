export const Skills = () => {
  const skillData = [
    { name: "HTML", color: "text-red-500", percent: "98%", icon: "/html.png" },
    { name: "CSS", color: "text-blue-500", percent: "98%", icon: "/css3.svg" },
    { name: "JavaScript", color: "text-yellow-400", percent: "98%", icon: "/js.png" },
    { name: "Node.js", color: "text-green-400", percent: "98%", icon: "/node.png" },
    { name: "React", color: "text-cyan-400", percent: "98%", icon: "/react.png" },
  ];

  return (
    <section id="skills" className="text-center p-40 text-white bg-gray-700">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {skillData.map(skill => (
          <div key={skill.name} className="relative group">
            <img src={skill.icon} alt={skill.name} className="mx-auto w-20" />
            <p className="mt-2">{skill.name}</p>
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-80 opacity-0 group-hover:opacity-100 transition">
              <span className={`text-2xl font-bold ${skill.color}`}>{skill.percent}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
