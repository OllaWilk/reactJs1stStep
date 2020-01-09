import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js'
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {
  state = {
    columns: this.props.columns || [],
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
            {ReactHtmlParser(this.props.description)}
            </div>
          </h2>
          <div className={styles.columns}>
          render() { {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
          }
          </div>
        </section>
    )
  }
}

export default List;