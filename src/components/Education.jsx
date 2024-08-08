import { motion } from 'framer-motion';

export function Education() {
    return (
      <div id="education">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-[#45316E]">
          <div className="text-3xl font-bold m-2 text-[#F2D3A5] mt-5">
            Formação
          </div>
          <div className="flex flex-wrap justify-center text-white ">
            <img src="https://i.imgur.com/dbXu6Qy.png" alt="Education" />
          </div>
      </motion.div>
      </div>
    )
}