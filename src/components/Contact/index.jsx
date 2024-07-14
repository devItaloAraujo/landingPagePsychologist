import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { ContactForm } from './ContactForm'
import SocialMedia from '../SocialMedia'

Contact.propTypes = {
    content: PropTypes.object.isRequired
}

export function Contact({content}) {
    return (
      <>      
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-gradient-to-b from-[#FFFFFF] to-[#D1A3EE]"
        >
          <div className="text-3xl font-bold m-2 text-[#45316E]" id="contact">
            {content.contact}
          </div>    
          <ContactForm formId="xqkwzqzj" content={content}/>
          <div 
            className="text-xl m-2 text-[#45316E]"
          >
            <p>{content.contactText}</p>
          </div> 
          <div className='text-[#45316E]'>
          <SocialMedia />
          </div>
        </motion.div>
      </>
    )
}