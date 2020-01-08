import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
import Hero from '../../components/hero/Hero'
import FreeShipping from '../../components/free-shipping/FreeShipping'
const HomePage = () => (
  <>
    <Hero />
    <HomePageContainer>
      <Directory />
      <FreeShipping />
    </HomePageContainer>
  </>
);

export default HomePage;
