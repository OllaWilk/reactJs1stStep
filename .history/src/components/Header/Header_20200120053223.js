import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';

class Header extends React.Component {

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <header className={styles.component}>
        <container>
          <div className={styles.wrapper}>
            <a href="#" className={styles.logo}/>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
            </nav>
          </div>
        </container>
      </header>
    );
  }
}

export default Header
;