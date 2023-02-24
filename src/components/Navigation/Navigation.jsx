import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import cx from 'classnames';

import githubStats from '../../../static/github.json';
import {
  SolutionsMenu,
  ProductMenu,
  OfferingsMenu,
  LearnMenu,
  CommunityMenu,
  MenuContainer,
} from '../NavMenu';
import { GithubIcon, NavLogoIcon, ArrowIcon } from './icons';

import * as styles from './Navigation.module.scss';

const menusInitialState = {
  product: false,
  solutions: false,
  offerings: false,
  learn: false,
  community: false,
};

export const Navigation = () => {
  const menuLinksRef = useRef(null);
  const [githubCounter, setGithubCounter] = useState(githubStats.repos.reportportal);

  const [menus, updateMenus] = useReducer(
    (prevState, newState) => ({
      ...menusInitialState,
      ...(newState && {
        [newState]: !prevState[newState],
      }),
    }),
    menusInitialState,
  );

  const isMenuOpen = Object.values(menus).some(Boolean);

  useEffect(() => {
    const fetchGithubStars = () => {
      axios
        .get('https://status.reportportal.io/github/stars')
        .then((response) => response.data)
        .then((data) => setGithubCounter(data.repos.reportportal))
        .catch(console.error);
    };

    fetchGithubStars();
  }, []);

  return (
    <div className="sticky-wrapper">
      <header
        id="header"
        className={cx(styles.header, {
          [`${styles.header__active}`]: isMenuOpen,
        })}
      >
        <div className={styles.header__wrapper}>
          <nav className={styles.navigation} aria-label="Main Navigation">
            <Link to="/" className={styles.navigation__logoLink}>
              <NavLogoIcon />
            </Link>
            <ul id="navigation" ref={menuLinksRef} className={styles.navigation__list} role="list">
              <li>
                <button
                  className={cx(styles.navigation__link, {
                    [`${styles.navigation__linkActive}`]: menus.product,
                  })}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.product}
                  aria-controls="#product-menu"
                  onClick={() => updateMenus('product')}
                >
                  <span className="navigation__link-child">Product</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.product}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <ProductMenu />
                </MenuContainer>
              </li>
              <li>
                <button
                  className={cx(styles.navigation__link, {
                    [`${styles.navigation__linkActive}`]: menus.solutions,
                  })}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.solutions}
                  aria-controls="#solutions-menu"
                  onClick={() => updateMenus('solutions')}
                >
                  <span className="navigation__link-child">Solutions</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.solutions}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <SolutionsMenu />
                </MenuContainer>
              </li>
              <li>
                <button
                  className={cx(styles.navigation__link, {
                    [`${styles.navigation__linkActive}`]: menus.offerings,
                  })}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.offerings}
                  aria-controls="#offerings-menu"
                  onClick={() => updateMenus('offerings')}
                >
                  <span className="navigation__link-child">Offerings</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.offerings}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <OfferingsMenu />
                </MenuContainer>
              </li>
              <li>
                <button
                  className={cx(styles.navigation__link, {
                    [`${styles.navigation__linkActive}`]: menus.learn,
                  })}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.learn}
                  aria-controls="#learn-menu"
                  onClick={() => updateMenus('learn')}
                >
                  <span className="navigation__link-child">Learn</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.learn}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <LearnMenu />
                </MenuContainer>
              </li>
              <li>
                <button
                  className={cx(styles.navigation__link, {
                    [`${styles.navigation__linkActive}`]: menus.community,
                  })}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.community}
                  aria-controls="#community-menu"
                  onClick={() => updateMenus('community')}
                >
                  <span className="navigation__link-child">Community</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.community}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <CommunityMenu />
                </MenuContainer>
              </li>
            </ul>
            <div className={styles.navigation__actions} hidden={!githubCounter}>
              <a
                href="https://github.com/reportportal/reportportal"
                className={styles.navigation__github}
              >
                <GithubIcon text={githubCounter} />
              </a>
              <div className="navigation__auth">
                <div className="navigation__auth-button-group">
                  <a className={styles.loginButton} href="https://saas.reportportal.io/ui/#login">
                    Log in
                  </a>
                  <a
                    className={styles.signupButton}
                    href="https://saas.reportportal.io/ui/#login?registration=true"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
