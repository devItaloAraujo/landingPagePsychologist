import React from 'react'; // Add the missing import statement for React

import { AboutMe } from './components/Aboutme'
import Header from './components/Header'
import Provider from './context/provider'
import { Skills } from './components/Skills'
import { HorizontalDivider } from './components/Horizontal'
import { Contact } from './components/Contact'
import PortugueseContent from './helpers/content.js'
import SocialMedia from './components/SocialMedia/index.jsx';


function App() {


  return (
    <Provider>
      <Header />
      <AboutMe />
      <Skills />
      <HorizontalDivider />
      <Contact content={PortugueseContent} />
    </Provider>
  )
}

export default App
