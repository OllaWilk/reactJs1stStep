import React from 'react';
import Container from '../Container/Container';
import {info, settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={info.title} imageInfo={info.defaultHeroImage} />
    <p>{info.textContent}</p>
  </Container>
);

export default Info;