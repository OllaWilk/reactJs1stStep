import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent, settings } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContent.title} pictureSrc={settings.defaultHeroImage} />
    <p>{faqContent.description}</p>
  </Container>
);

export default Container;