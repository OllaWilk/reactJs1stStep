import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js'
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
        <section className={styles.component}>
          <h2 className={styles.subtitle}>
            <Hero titleText={this.props.title} imgSpace={this.props.image} />
            <div className={styles.description}>
              {this.props.description}
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