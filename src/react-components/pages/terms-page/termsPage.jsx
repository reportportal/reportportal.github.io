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

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import reactWrapper from 'utils/reactWrapper';
import ReactMarkdown from 'react-markdown'
import BodyLayout from 'react-components/layouts/bodyLayout.jsx';
import Button from 'react-components/common/button/button.jsx';
import termsMarkdownData from './termsMarkdownData.md';
import styles from './termsPage.scss';

const cx = classNames.bind(styles);

const TermsPage = () => {
  const [termsMarkdownText, setTermsMarkdownText] = useState('');

  useEffect(()=> {
    fetch(termsMarkdownData)
      .then((res) => res.text())
      .then((md) => setTermsMarkdownText(md));
  }, []);

  return (
    <BodyLayout className={cx('terms-page-wrapper')}>
      <div className={cx('terms-page')}>
        <div className={cx('title')}>Terms and Conditions</div>
        <div className={cx('content')}>
          <div className={cx('description')}>The following Terms and Conditions (“Terms”) govern Customer’s use of the
            Report Portal Platform and any Services provided by Test IO, Inc (“Test IO”). The Report Portal Platform and
            any other software is licensed and not sold.
          </div>
          <a href='/downloads/ReportPortal%20Terms%20of%20Service.pdf' download>
            <Button className={cx('download-button')} variant={'light'}>Download Term and Conditions</Button>
          </a>
          <div className={cx('markdown')}>
            <ReactMarkdown>
              {termsMarkdownText}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default reactWrapper(TermsPage);
