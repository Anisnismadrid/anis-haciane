import { motion } from "framer-motion";


export const Home = () => {
  return (
    <div  className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white">
      {/* Photo avec orbite */}
      <div className="relative w-60 h-60">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full border-4 border-blue-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Orbites animées */}
        <motion.div
          className="absolute inset-0 rounded-full border border-blue-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-purple-400 scale-125"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />
      </div>

      {/* Texte */}
      <div className="text-center mt-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          👋 Hi I am  <span className="text-blue-400">Anis Haciane</span>
        </h1>
        <p className="text-lg md:text-xl mt-2">
         Développeur Web Full Stack 💻
        </p>
 
      </div>

   
    </div>
  );
};
