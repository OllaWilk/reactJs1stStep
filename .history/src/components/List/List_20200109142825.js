import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }

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
            {ReactHtmlParser(this.props.description)}
            </div>
          </h2>
          <div className={styles.columns}>

          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}



            <Column title='Animals' />
            <Column title='Plants' />
            <Column title='Minerals' />
          </div>
        </section>
    )
  }
}

export default List;