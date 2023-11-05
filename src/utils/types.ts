interface CarouselSlideItem {
  id: string;
  logo: { url: string; title: string };
}

export interface CarouselSlide {
  id: string;
  items: CarouselSlideItem[];
}
