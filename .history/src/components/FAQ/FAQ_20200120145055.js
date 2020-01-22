import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq, settings } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} pictureSrc={settings.defaultHeroImage} />
    <p>{faq.questions}</p>
  </Container>
);

export default FAQ;