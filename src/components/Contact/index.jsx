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
          className="flex flex-col items-center"
        >
          <div className="text-3xl font-bold m-2 text-brand-1" id="contact">
            {content.contact}
          </div>    
          <ContactForm formId="xqkwzqzj" content={content}/>
          <div 
            className="text-xl m-2 text-white"
          >
            <p>{content.contactText}</p>
          </div> 
          <div className='text-white'>
          <SocialMedia />
          </div>
        </motion.div>
      </>
    )
}