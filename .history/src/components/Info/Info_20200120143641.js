import React from 'react';
import Container from '../Container/Container';
import {info} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero title.Text={info.title} backgroundImage={info.image} />
    <p>{info.text}</p>
  </Container>
);

export default Info;