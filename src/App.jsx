import React from 'react'; // Add the missing import statement for React

import { AboutMe } from './components/Aboutme'
import Header from './components/Header'
import Provider from './context/provider'
import { Experiences } from './components/Experiences.jsx'
import { Contact } from './components/Contact'
import PortugueseContent from './helpers/content.js'
import { Education } from './components/Education.jsx';



function App() {


  return (
    <Provider>
      <Header />
      <AboutMe />
      <Education />
      <Experiences />
      <Contact content={PortugueseContent} />
    </Provider>
  )
}

export default App
