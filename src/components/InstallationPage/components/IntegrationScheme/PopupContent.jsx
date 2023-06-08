import React, { Fragment } from 'react';
import { Typography } from 'antd';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';

import './IntegrationScheme.scss';
import '../../InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['scheme']);
const getGeneralBlocksWith = createBemBlockBuilder(['installation']);

export const PopupContent = ({ info }) => {
  const { Text } = Typography;

  const formatText = () => {
    if (info.scheme) {
      return (
        <div>
          {info.scheme.split('\n').map((str, i) => (
            <Fragment key={info.scheme + i}>
              {str} <br />
            </Fragment>
          ))}
        </div>
      );
    }
    return '';
  };

  return (
    <div>
      {info ? (
        <div>
          <p className={getBlocksWith('__popup-text')}>{info.url}</p>
          <Text
            className={cx(getGeneralBlocksWith('__code'), getGeneralBlocksWith('__popup'))}
            code
            copyable={{
              text: info.scheme,
              format: 'text/plain',
            }}
          >
            {formatText()}
          </Text>
        </div>
      ) : (
        <div>
          <p>No Data</p>
        </div>
      )}
    </div>
  );
};
