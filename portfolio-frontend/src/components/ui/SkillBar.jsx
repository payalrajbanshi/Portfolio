import { motion } from "framer-motion";

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-5">
      
  
      <div className="flex justify-between mb-1 text-sm text-gray-300">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
    
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;