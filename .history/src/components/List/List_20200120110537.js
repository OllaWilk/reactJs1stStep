import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    image: settings.defaultHeroImage,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Container>
          <h2 className={styles.subtitle}>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
          </h2>

          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>

          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default List;