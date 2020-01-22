import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faq.title} />
    <p>{faq.textContent}</p>
  </Container>
);

export default Faq;