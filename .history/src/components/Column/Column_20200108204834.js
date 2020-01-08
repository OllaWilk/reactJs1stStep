import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
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
          </h2>
        </section>
    )
  }
}

export default Column;