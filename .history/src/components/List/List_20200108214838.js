import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js'
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node.isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
        <section className={styles.component}>
          <h2 className={styles.subtitle}>
            <Hero titleText={this.props.title} imgSpace={this.props.image} />
            <div className={styles.description}>
                {this.props.children}
            </div>
          </h2>
          <div className={styles.columns}>
            <Column title='Animals' />
            <Column title='Plants' />
            <Column title='Minerals' />
          </div>
        </section>
    )
  }
}

export default List;