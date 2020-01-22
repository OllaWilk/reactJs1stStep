import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQ} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQ.title} backgroundImage={FAQ.image} />
    <p>{FAQ.questions}</p>
  </Container>
);

export default FAQ;