import React from 'react';
import { Typography } from 'antd';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';

import '../../IntegrationScheme.scss';
import '../../../../InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['scheme']);
const getGeneralBlocksWith = createBemBlockBuilder(['installation']);

export const PopupContent = ({ info }) => {
  const { Text } = Typography;

  return (
    <div>
      {info ? (
        <div>
          <p className={getBlocksWith('__popup-text')}>{info.url}</p>
          <Text
            className={classNames(getGeneralBlocksWith('__code'), getGeneralBlocksWith('__popup'))}
            code
            copyable={{
              text: info.scheme,
              format: 'text/plain',
            }}
          >
            <div className={getGeneralBlocksWith('__code-content')}>{info.scheme}</div>
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
