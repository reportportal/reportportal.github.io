export const MENU_INITIAL_STATE = {
  product: false,
  solutions: false,
  offerings: false,
  learn: false,
  community: false,
};

export interface MenuProps {
  isOpen: boolean;
  menuContainerRef: string;
  isDesktop?: boolean;
}

export const MENU_ORDER = ['product', 'solutions', 'offerings', 'learn', 'community'];
