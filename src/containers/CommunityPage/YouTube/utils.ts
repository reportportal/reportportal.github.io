import isUndefined from 'lodash/isUndefined';

const stringifyPeriods = ['year', 'month', 'day', 'hour', 'minute'];

type Thumbnail = {
  [key in 'maxres' | 'medium']: {
    url: string;
  };
};

interface PrepareYoutubeVideosParams {
  id: string;
  title: string;
  duration: string;
  published_at: string;
  statistics: {
    view_count: number;
  };
  thumbnail: Partial<Thumbnail>;
}

interface PrepareYoutubeVideosReturn {
  id: string;
  title: string;
  duration: string;
  publishedAt: string;
  viewCount: number;
  imageSrc?: string;
}

export const prepareYoutubeVideos = (
  videos: PrepareYoutubeVideosParams[],
): PrepareYoutubeVideosReturn[] =>
  videos.map(({ id, title, duration, published_at: publishedAt, statistics, thumbnail }) => ({
    id,
    title,
    duration,
    publishedAt,
    viewCount: statistics.view_count,
    imageSrc: thumbnail.maxres?.url || thumbnail.medium?.url,
  }));

export const timeSince = (dateString: string) => {
  const creationTime = new Date(dateString);
  const currentTime = new Date();

  const seconds = Math.floor((currentTime.valueOf() - creationTime.valueOf()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const periods = [years, months, days, hours, minutes];
  const currentPeriod = periods.find(period => period > 0);

  if (isUndefined(currentPeriod)) {
    return 'just now';
  }

  const currentIndex = periods.findIndex(period => period === currentPeriod);

  return `${currentPeriod} ${stringifyPeriods[currentIndex]}${currentPeriod > 1 ? 's' : ''} ago`;
};

const getViewDigit = (count: number) => {
  const truncDigit = Math.trunc(count);
  const floatDigit = count.toFixed(1);
  const fractionalDigit = floatDigit.split('.')[1];

  return fractionalDigit === '0' ? truncDigit : floatDigit;
};

export const formatYoutubeViews = (viewCount: number) => {
  if (viewCount < 1000) {
    return `${viewCount} views`;
  }

  if (viewCount < 1000000) {
    return `${getViewDigit(viewCount / 1000)}K views`;
  }

  return `${getViewDigit(viewCount / 1000000)}M views`;
};

const getStringifyValue = (value: string) => {
  const numericValue = parseInt(value || '0', 10);

  return numericValue.toString().padStart(2, '0');
};

export const convertDuration = (durationStr: string) => {
  const match = durationStr.match(/PT(?:(\d+)H)?((\d+)M)?((\d+)S)?/);

  if (match) {
    const hours = getStringifyValue(match[1]);
    const minutes = getStringifyValue(match[3]);
    const seconds = getStringifyValue(match[5]);

    return `${hours === '00' ? '' : `${hours}:`}${minutes}:${seconds}`;
  }

  return '00:00';
};
