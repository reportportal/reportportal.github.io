export const PRODUCT = 'product';
export const SOLUTIONS = 'solutions';
export const OFFERINGS = 'pricing';
export const LEARN = 'learn';
export const COMMUNITY = 'community';

export const MENU_INITIAL_STATE = {
  [PRODUCT]: false,
  [SOLUTIONS]: false,
  [OFFERINGS]: false,
  [LEARN]: false,
  [COMMUNITY]: false,
};

export interface MenuProps {
  isOpen: boolean;
  menuContainerRef: string;
  isDesktop?: boolean;
}

export const MENU_ORDER = [PRODUCT, SOLUTIONS, OFFERINGS, LEARN, COMMUNITY];
