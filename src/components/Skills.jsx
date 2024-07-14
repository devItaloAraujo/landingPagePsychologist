import { motion } from 'framer-motion';
import { HorizontalDivider } from './Horizontal';

export function Skills() {
    return (
      <>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center">
          <div className="text-3xl font-bold m-2 text-brand-1" id="habilities">
            Habilidades
          </div>
          <div className="flex flex-wrap justify-center text-white ">
            VARIAS
            VARIAS 
            VArias
            VARIAS
            VARIAS 
            VArias
          </div>
      </motion.div>
        <HorizontalDivider />
      </>
    )
}