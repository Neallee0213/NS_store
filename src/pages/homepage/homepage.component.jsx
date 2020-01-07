import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
import Hero from '../../components/hero/Hero'
const HomePage = () => (
  <>
    <Hero />
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  </>
);

export default HomePage;
