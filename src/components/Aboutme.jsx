import { motion } from 'framer-motion'
import { HorizontalDivider } from './Horizontal'

const linkDaFoto = 'https://media.licdn.com/dms/image/D4D03AQGW8KPgNFTBSQ/profile-displayphoto-shrink_800_800/0/1716395382819?e=1726099200&v=beta&t=YW7KuSaMcaso1c6WEY06FcwCW5uCqk-_8y6zGRZ-e6U';

export function AboutMe() {
    return (
      <>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex mt-20 items-center w-[300px] h-[300px] overflow-hidden rounded-lg"
          >
            <img src={linkDaFoto} alt="profile-pic" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-center items-center"
          >
            <div
              className="text-xl mx-20 text-white text-opacity-75">
                SEU TEXTO VAI AQUI SEU TEXTO VAI AQUI SEU TEXTO VAI AQUI SEU TEXTO VAI AQUI
                SEU TEXTO VAI AQUI SEU TEXTO VAI AQUI SEU TEXTO VAI AQUI
            </div>
          </motion.div>
        </motion.div>
        <HorizontalDivider />
      </>
      
    )
}