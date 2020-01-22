import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq, settings } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} backgroundImage={faq.image} />
    <p>{faq.questions}</p>
  </Container>
);

export default FAQ;