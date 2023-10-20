import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useToggle, useScroll } from 'ahooks';
import { Drawer, Collapse } from 'antd';
import upperFirst from 'lodash/upperFirst';
import axios from 'axios';
import classNames from 'classnames';

import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';
import { useScrollDirection } from '@app/hooks';

// eslint-disable-next-line import/no-unresolved
import githubStats from '../../../../static/github.json'; // Will be generated at build time
import {
  SolutionsMenu,
  ProductMenu,
  OfferingsMenu,
  LearnMenu,
  MenuContainer,
  CommunityMenu,
} from './NavMenu';
import {
  GithubIcon,
  NavLogoIcon,
  ArrowIconDesktop,
  BurgerIcon,
  CrossIcon,
  ArrowIconMobile,
} from './icons';
import { MENU_INITIAL_STATE, MENU_ORDER } from './constants';

import './Navigation.scss';

const { Panel } = Collapse;

const menuItems = {
  product: { Component: ProductMenu },
  solutions: { Component: SolutionsMenu },
  offerings: { Component: OfferingsMenu },
  learn: { Component: LearnMenu },
  community: { Component: CommunityMenu },
};

export const Navigation: React.FC = () => {
  const menuLinksRef = useRef(null);

  const scroll = useScroll();
  const [isMobileMenuOpen, { setRight: openMobileMenu, setLeft: closeMobileMenu }] = useToggle();
  const [githubCounter, setGithubCounter] = useState(githubStats.repos.reportportal);
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });
  const scrollY = scroll?.top ?? 0;
  const getBlocksWith = createBemBlockBuilder(['top-header']);

  const [menus, updateMenus] = useReducer(
    (prevState, newState) => ({
      ...MENU_INITIAL_STATE,
      ...(newState && {
        [newState]: !prevState[newState],
      }),
    }),
    MENU_INITIAL_STATE,
  );

  const isMenuOpen = Object.values(menus).some(Boolean);
  const scrollDirection = useScrollDirection({ callbackFn: null, isMenuOpen });

  useEffect(() => {
    const fetchGithubStars = () => {
      axios
        .get('https://status.reportportal.io/github/stars')
        .then(response => response.data)
        .then(data => setGithubCounter(data.repos.reportportal))
        .catch(console.error);
    };

    fetchGithubStars();
  }, []);

  useEffect(() => {
    const handleClick = event => {
      const shouldCloseMenu = ['a', 'button'].some(tagName => event.target.closest(tagName));

      if (shouldCloseMenu) {
        closeMobileMenu();
      }
    };

    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu?.addEventListener('click', handleClick);

    return () => mobileMenu?.removeEventListener('click', handleClick);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const logo = (
    <Link to="/" className={getBlocksWith('-navigation__logo-link')}>
      <NavLogoIcon />
    </Link>
  );

  const headerHeight = 76;
  const isSticky = scrollDirection !== 'down' || isMenuOpen;
  const isActive = isMenuOpen || scrollY > headerHeight;

  return (
    <header
      className={classNames(getBlocksWith(), {
        [getBlocksWith('--active')]: isActive,
      })}
      style={{
        position: isSticky ? 'sticky' : 'relative',
        top: scrollY > headerHeight && !isSticky ? `-${headerHeight}px` : 0,
      }}
    >
      <div className={getBlocksWith('__wrapper')}>
        <nav className={getBlocksWith('-navigation')} aria-label="Main Navigation">
          {logo}
          <ul
            id="navigation"
            ref={menuLinksRef}
            className={classNames(getBlocksWith('-navigation__list'), 'is-desktop')}
            role="list"
          >
            {MENU_ORDER.map(menuItem => {
              const { Component } = menuItems[menuItem];

              return (
                <li key={menuItem}>
                  <button
                    className={classNames(getBlocksWith('-navigation__link'), {
                      [getBlocksWith('-navigation__link--active')]: menus[menuItem],
                    })}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={menus[menuItem]}
                    aria-controls="#product-menu"
                    onClick={() => updateMenus(menuItem)}
                  >
                    {upperFirst(menuItem)}
                    <span className={getBlocksWith('-navigation__arrow')}>
                      <ArrowIconDesktop />
                    </span>
                  </button>
                  <MenuContainer
                    isOpen={menus[menuItem]}
                    menuLinksRef={menuLinksRef}
                    onClose={() => updateMenus()}
                  >
                    <Component />
                  </MenuContainer>
                </li>
              );
            })}
          </ul>
          <div className={getBlocksWith('-navigation__actions')} hidden={!githubCounter}>
            <div className={getBlocksWith('-navigation__actions-auth')}>
              <Link
                to="https://github.com/reportportal/reportportal"
                className={getBlocksWith('-navigation__github')}
              >
                <GithubIcon text={githubCounter} />
              </Link>
              <div className="navigation__auth">
                <div className="navigation__auth-button-group">
                  <Link
                    className={classNames(
                      getBlocksWith('-navigation__login-button'),
                      'temporary-hide',
                    )}
                    to="https://saas.reportportal.io/ui/#login"
                  >
                    Log in
                  </Link>
                  <Link
                    className={classNames(
                      getBlocksWith('-navigation__signup-button'),
                      'temporary-hide',
                    )}
                    to="https://saas.reportportal.io/ui/#login?registration=true"
                  >
                    Sign up
                  </Link>
                  <Link
                    data-gtm="get_a_quote_header"
                    className={getBlocksWith('-navigation__signup-button')}
                    to="/contact-us/general"
                  >
                    Get a quote
                  </Link>
                </div>
              </div>
            </div>
            <button
              className={getBlocksWith('-navigation__burger-button')}
              type="button"
              onClick={openMobileMenu}
            >
              <BurgerIcon />
            </button>
          </div>
        </nav>
      </div>
      <Drawer
        className="mobile-menu"
        width={360}
        title={
          <>
            {logo}
            <button type="button" className={getBlocksWith('-navigation__close-button')}>
              <CrossIcon />
            </button>
          </>
        }
        placement="right"
        closable={false}
        open={!isDesktop && isMobileMenuOpen}
        onClose={openMobileMenu}
      >
        <Collapse expandIconPosition="end" ghost accordion>
          {MENU_ORDER.map(menuItem => {
            const { Component } = menuItems[menuItem];

            return (
              <Panel
                key={menuItem}
                header={
                  <>
                    {upperFirst(menuItem)}
                    <span className={getBlocksWith('-navigation__arrow')}>
                      <ArrowIconMobile />
                    </span>
                  </>
                }
                showArrow={false}
              >
                <Component isDesktop={false} />
              </Panel>
            );
          })}
        </Collapse>
        <div className="mobile-menu__auth-buttons">
          <Link
            className="btn btn--outline full-width"
            to="/contact-us/general"
            data-gtm="get_a_quote_header"
          >
            Get a quote
          </Link>
          <Link
            key="signup"
            className="btn btn--outline full-width temporary-hide"
            to="https://saas.reportportal.io/ui/#login?registration=true"
          >
            Sign up
          </Link>
          <Link
            key="login"
            className="btn full-width temporary-hide"
            to="https://saas.reportportal.io/ui/#login"
          >
            Log in
          </Link>
        </div>
      </Drawer>
    </header>
  );
};
