import React from 'react';
import Container from '../Container/Container';
import {info} from '../../data/dataStore';
//import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    {/*<Hero titleText={info.title} imageInfo={info.image} />
    <p>{info.textContent}</p>*/}
    <h2>{info.title}</h2>
    <p>{info.textContent}</p>
  </Container>
);

export default Info;