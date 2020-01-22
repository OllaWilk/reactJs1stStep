import React from 'react';
import Container from '../Container/Container';
import {info} from '../../data/dataStore';
import Hero from '../Hero/Hero'; 

const Info = () => (
  <Container>
    <Hero title={info.title}{info.image}</h2>
    <p>{info.text}</p>
  </Container>
);

export default Info;