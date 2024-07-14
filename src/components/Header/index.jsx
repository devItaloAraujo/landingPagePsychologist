import React, { useState } from 'react';
import { HeaderContainer } from './style';
import NavBar from './Navbar';
import SocialMedia from '../SocialMedia';
import useViewport from '../../hooks/useViewport';
import HamburguerMenu from './HamburguerMenu';
import Modal from '../Modal';
import noScroll from 'no-scroll';
import Logo from './Logo';

const Header = () => {
  const { width } = useViewport();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    noScroll.on();
    setIsOpen(true);
  };

  const closeModal = () => {
    noScroll.off();
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      {(width >= 900) ? <Logo />: ''}
      {(width >= 900) ? <SocialMedia/> : ''}
      {(width >= 900) ? <NavBar /> : ''}
      {(width < 900) ? (
        <div className="container">
          <Logo />
          <HamburguerMenu onClick={() => openModal()} />
          <Modal
            display={isOpen ? 'flex' : 'none'}
            onClick={() => closeModal()}
          />
        </div>
      ) : (
        ''
      )}
    </HeaderContainer>
  );
};

export default Header;
