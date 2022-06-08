/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AskForServiceButton from 'react-components/buttons/ask-for-service-button/askForServiseButton.jsx';
import Button from 'react-components/common/button/button.jsx';
import reactWrapper from 'utils/reactWrapper';
import styles from './headerButtons.scss';

const cx = classNames.bind(styles);

const HeaderButtons = ({ onOpen }) => (
    <>
      <a href='https://saas.reportportal.io/ui/' target="_blank" rel="noreferrer">
        <Button
          className={cx('button')}
          variant='light'
        >
          Sign In
        </Button>
      </a>
      <AskForServiceButton
        onOpen={onOpen}
        className={cx('button')}
        options={[{ name: 'ReportPortalSource__c', value: 'Landing page/ Ask service' }]}
      />
    </>
  );
HeaderButtons.propTypes = {
  onOpen: PropTypes.func,
};
HeaderButtons.defaultProps = {
  onOpen: () => null,
}

export default reactWrapper(HeaderButtons);
