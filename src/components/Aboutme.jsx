import { motion } from 'framer-motion'
import { IoLogoWhatsapp } from 'react-icons/io'

const linkDaFoto = 'https://media.licdn.com/dms/image/D4D03AQGW8KPgNFTBSQ/profile-displayphoto-shrink_800_800/0/1716395382819?e=1726099200&v=beta&t=YW7KuSaMcaso1c6WEY06FcwCW5uCqk-_8y6zGRZ-e6U';

export function AboutMe() {
    return (
      <>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center max-h-[800px] bg-gradient-to-b from-[#FFFFFF] to-[#D1A3EE]"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex mt-[105px] items-center w-[400px] h-[400px] overflow-hidden rounded-lg"
          >
            <img
              src={linkDaFoto} alt="profile-pic" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-center items-center"
          >
          <div className="flex items-center justify-center text-center gap-10">
            <div className="flex flex-col gap-10 m-5 text-3xl playwrite-br text-[#423177]">
              <p
                className='font-bold text-4xl text-red-500'
              >
              Cuide-se,
              </p>
              <p>
              Converse comigo pelo Whatsapp!
              </p>
              <button
                className="bg-[#25D366] text-[#FFFFFF] p-2 rounded-[30px]"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5531972585701&text=Contato%20Pelo%20Site"
                  target="_blank"
                  rel="noreferrer"
                  className='flex items-center justify-center gap-2 text-xl'
                >
                <span>(31) 97258-5701</span>
                <IoLogoWhatsapp size={'2em'} />
                </a>
              </button>
            </div>
          </div>
          </motion.div>
        </motion.div>
      </>
      
    )
}