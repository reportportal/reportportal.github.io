export const prepareYoutubeVideos = videos =>
  videos.map(({ id, title, duration, published_at: publishedAt, statistics, thumbnail }) => ({
    id,
    title,
    duration,
    publishedAt,
    viewCount: statistics.view_count,
    imageSrc: thumbnail.maxres?.url || thumbnail.medium?.url,
  }));

export const timeSince = dateString => {
  const creationTime = new Date(dateString);
  const currentTime = new Date();

  const seconds = Math.floor((currentTime - creationTime) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }

  if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  return 'just now';
};

export const formatYoutubeViews = viewCount => {
  if (viewCount < 1000) {
    return `${viewCount} views`;
  }

  if (viewCount < 1000000) {
    return `${Math.round(viewCount / 1000)}K views`;
  }

  return `${Math.round(viewCount / 1000000)}M views`;
};

export const convertDuration = durationStr => {
  const match = durationStr.match(/PT(?:(\d+)H)?((\d+)M)?((\d+)S)?/);

  if (match) {
    const hours = parseInt(match[1] || 0, 10);
    const minutes = parseInt(match[3] || 0, 10);
    const seconds = parseInt(match[5] || 0, 10);

    const hoursStr = hours === 0 ? '' : hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');

    return `${hoursStr ? `${hoursStr}:` : ''}${minutesStr}:${secondsStr}`;
  }

  return '00:00';
};
