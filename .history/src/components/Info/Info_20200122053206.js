import React from 'react';
import Container from '../Container/Container';
import {info, pageContents} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={info.title} imageInfo={pageContents.image} />
    <p>{info.textContent}</p>
  </Container>
);

export default Info;