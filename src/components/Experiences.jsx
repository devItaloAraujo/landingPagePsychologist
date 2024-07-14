import { motion } from 'framer-motion';

export function Experiences() {
    return (
      <>
        <motion.div
          id="experiences" 
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center max-h-[800px] h-[200px]  bg-[#45316E]">
          <div className="text-3xl font-bold mt-5 m-2 text-[#F2D3A5]">
            Abordagem
          </div>
          <div className="flex flex-wrap justify-center text-white text-xl">
            Terapia Cognitivo Comportamental
          </div>
      </motion.div>
      </>
    )
}