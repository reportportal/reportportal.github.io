import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'gatsby';
import { useAtom } from 'jotai';
import { useToggle, useScroll } from 'ahooks';
import { Drawer, Collapse } from 'antd';
import { upperFirst } from 'lodash';
import axios from 'axios';
import cx from 'classnames';

import githubStats from '../../../static/github.json';
import { createBemBlockBuilder } from '../../utils';
import { watchProductOverviewAtom } from '../Layout';
import {
  SolutionsMenu,
  ProductMenu,
  OfferingsMenu,
  LearnMenu,
  CommunityMenu,
  MenuContainer,
} from '../NavMenu';
import {
  GithubIcon,
  NavLogoIcon,
  ArrowIconDesktop,
  BurgerIcon,
  CrossIcon,
  ArrowIconMobile,
} from './icons';

import './Navigation.scss';

const { Panel } = Collapse;

const menusInitialState = {
  product: false,
  solutions: false,
  offerings: false,
  learn: false,
  community: false,
};

const menuOrder = ['product', 'solutions', 'offerings', 'learn', 'community'];

const menuItems = {
  product: { Component: ProductMenu },
  solutions: { Component: SolutionsMenu },
  offerings: { Component: OfferingsMenu },
  learn: { Component: LearnMenu },
  community: { Component: CommunityMenu },
};

export const Navigation = () => {
  const menuLinksRef = useRef(null);
  const [watchProductOverviewState] = useAtom(watchProductOverviewAtom);
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollYRef = useRef(0);
  const scroll = useScroll();
  const [isMobileMenuOpen, { toggle: toggleMobileMenu, setLeft: closeMobileMenu }] = useToggle();
  const [githubCounter, setGithubCounter] = useState(githubStats.repos.reportportal);
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  const scrollY = scroll?.top ?? 0;
  const getBlocksWith = createBemBlockBuilder(['top-header']);

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

  useLayoutEffect(() => {
    setScrollDirection(null);
  }, [isMenuOpen]);

  useLayoutEffect(() => {
    const direction = scrollY > lastScrollYRef.current ? 'down' : 'up';

    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollYRef.current > 10 || scrollY - lastScrollYRef.current < -10)
    ) {
      setScrollDirection(direction);
    }

    lastScrollYRef.current = Math.max(scrollY, 0);
  }, [scrollY]);

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

  useEffect(() => {
    if (watchProductOverviewState.isOpen) {
      updateMenus();
    }
  }, [watchProductOverviewState.isOpen]);

  const logo = (
    <Link to="/" onClick={closeMobileMenu} className={getBlocksWith('-navigation__logoLink')}>
      <NavLogoIcon />
    </Link>
  );

  const headerHeight = 76;
  const isSticky = scrollDirection !== 'down' || isMenuOpen;
  const isActive = isMenuOpen || scrollY > headerHeight;

  return (
    <header
      className={cx(getBlocksWith(), {
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
            className={cx(getBlocksWith('-navigation__list'), 'is-desktop')}
            role="list"
          >
            {menuOrder.map((menuItem) => {
              const { Component } = menuItems[menuItem];

              return (
                <li key={menuItem}>
                  <button
                    className={cx(getBlocksWith('-navigation__link'), {
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
            <div className={getBlocksWith('-navigation__actionsAuth')}>
              <a
                href="https://github.com/reportportal/reportportal"
                target="_blank"
                rel="noreferrer"
                className={getBlocksWith('-navigation__github')}
              >
                <GithubIcon text={githubCounter} />
              </a>
              <div className="navigation__auth">
                <div className="navigation__auth-button-group">
                  <a
                    className={getBlocksWith('-navigation__loginButton')}
                    href="https://saas.reportportal.io/ui/#login"
                  >
                    Log in
                  </a>
                  <a
                    className={getBlocksWith('-navigation__signupButton')}
                    href="https://saas.reportportal.io/ui/#login?registration=true"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
            <button
              className={getBlocksWith('-navigation__burgerButton')}
              type="button"
              onClick={toggleMobileMenu}
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
            <button
              className={getBlocksWith('-navigation__closeButton')}
              onClick={toggleMobileMenu}
            >
              <CrossIcon />
            </button>
          </>
        }
        placement="right"
        closable={false}
        open={!isDesktop && isMobileMenuOpen}
        onClose={toggleMobileMenu}
      >
        <Collapse expandIconPosition="end" ghost accordion>
          {menuOrder.map((menuItem) => {
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
          <a
            key="signup"
            className={cx('btn', 'btn--outline', 'full-width')}
            href="https://saas.reportportal.io/ui/#login?registration=true"
          >
            Sign up
          </a>
          <a
            key="login"
            className={cx('btn', 'full-width')}
            href="https://saas.reportportal.io/ui/#login"
          >
            Log in
          </a>
        </div>
      </Drawer>
    </header>
  );
};
