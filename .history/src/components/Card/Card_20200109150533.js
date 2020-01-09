import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

    static PropTypes = {
        title: PropTypes.node.isRequired,
    }
}

export default Card;