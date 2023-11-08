import React, { FC } from 'react';
import { Typography } from 'antd';

import '../../../IntegrationScheme.scss';
import '../../../../../InstallationPage.scss';

interface PopupContentProps {
  info?: {
    scheme: string;
    type: string;
    url: string;
  };
}

export const PopupContent: FC<PopupContentProps> = ({ info }) => {
  const { Text } = Typography;

  return (
    <div>
      {info ? (
        <div>
          <p className="scheme__popup-text">{info.url}</p>
          <Text
            className="installation__code installation__popup"
            code
            copyable={{
              text: info.scheme,
              format: 'text/plain',
            }}
          >
            <div className="installation__code-content">{info.scheme}</div>
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
