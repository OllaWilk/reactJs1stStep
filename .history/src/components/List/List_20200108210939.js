import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js'
import PropTypes from 'prop-types';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
        <section className={styles.component}>
          <h2 className={styles.subtitle}>
            <Hero
              titleText={this.props.title}
              imgSpace={this.props.image}
              />
              <div className={styles.description}>
                  {this.props.children}
              </div>
              <div className={styles.columns}>
                <Column title='meditation' />
                <Column title='reading' />
                <Column title='walking' />
              </div>
          </h2>
        </section>
    )
  }
}

export default List;