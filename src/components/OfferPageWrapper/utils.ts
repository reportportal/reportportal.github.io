import { START_NOW_LINKS } from './constants';

export const getOfferLinks = page => [
  START_NOW_LINKS[page],
  `/contact-us/${page}/package-25`,
  `/contact-us/${page}/package-60`,
  `/contact-us/${page}/package-160`,
];
