import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQ} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQ.title} backgroundImage={faq.image} />
    <p>{faq.questions}</p>
  </Container>
);

export default FAQ;