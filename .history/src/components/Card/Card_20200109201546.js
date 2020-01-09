import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

    static PropTypes = {
        title: PropTypes.node.isRequired,
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

              <div className={styles.creator}>
                <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
              </div>

              <div className={styles.columns}>
              {this.state.columns.map(({key, ...columnProps}) => (
                <Column key={key} {...columnProps} />
              ))}
              </div>
            </section>
        )
      }
}

export default Card;