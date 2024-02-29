import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components';
import { ContentfulAsset, createBemBlockBuilder, isContentfulRecord } from '@app/utils';

interface SectionItemProps {
  sys: object;
  title: string;
  icon: ContentfulAsset | ReactElement | string;
  hoverIcon?: ContentfulAsset;
  iconClass: string;
  text: string;
  link?: string;
  className?: string;
  isDataFromContentful?: boolean;
}

export const SectionItem: FC<SectionItemProps> = props => {
  const { title, link = '#', icon, hoverIcon, iconClass, text, className = '' } = props;

  const getBlocksWith = createBemBlockBuilder(['section-item', className]);

  const renderIcon = () => {
    const isDataFromContentful = isContentfulRecord(props);
    const iconClassName = isDataFromContentful ? 'contentful' : iconClass;

    if (iconClassName) {
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <span
          className={classNames(getBlocksWith('-icon'), getBlocksWith(`-icon--${iconClassName}`))}
          {...(isDataFromContentful && {
            style: {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              '--icon': `url('${(icon as ContentfulAsset).url}')`,
              '--hover-icon': `url('${((hoverIcon ?? icon) as ContentfulAsset).url}')`,
            },
          })}
        />
      );
    }

    return <>{icon}</>;
  };

  return (
    <Link
      key={title}
      to={link}
      className={classNames(getBlocksWith(), { [getBlocksWith('--no-text')]: !text })}
    >
      {renderIcon()}
      <div>
        <p className={getBlocksWith('-title')}>{title}</p>
        {text && <p className={getBlocksWith('-text')}>{text}</p>}
      </div>
    </Link>
  );
};
