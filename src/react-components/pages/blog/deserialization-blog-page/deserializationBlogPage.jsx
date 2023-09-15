/*
 * Copyright 2023 EPAM Systems
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
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';
import Notice from 'react-components/pages/blog/common/notice/notice';
import Notes from 'react-components/pages/blog/common/notes/notes';
import DeserializationBackgroundImage from './img/deserializationBackground.svg';
import dockerComposeImg from './img/dockerCompose.png';
import classNames from 'classnames/bind';
import styles from './deserializationBlogPage.scss';

const cx = classNames.bind(styles);

const DeserializationBlogPage = () => (
  <>
    <BlogPageHeader
      tags={['DeserializationIssue', 'JavaErrorFix']}
      date={'September 15, 2023'}
      background={DeserializationBackgroundImage}
    />
    <BlogPageContent title={'Deserialization issue workaround'}>
      <p>
        We would like to highlight that in version 5.7.5 of API Service and Authorization Service we have updated the dependencies.
      </p>
      <p>
        Unfortunately, the same dependency found its way into different versions, causing a Java error that looks like this: <b><i>"AuthUtils$SerialUidReplacingInputStream: Potentially Fatal Deserialization Operation"</i></b> when serializing/deserializing a user class or token.
      </p>
      <br />
      <br />
      <p>
        Example of a stack trace from logs:
      </p>
      <Notice contentClassName={cx('logs')}>
        <p>
          AuthUtils$SerialUidReplacingInputStream : Potentially Fatal Deserialization Operation.
        </p>
        <p>
          java.io.InvalidClassException: Overriding serialized class version mismatch: local serialVersionUID = 550 stream serialVersionUID = 520
          at com.epam.ta.reportportal.auth.util.AuthUtils$SerialUidReplacingInputStream.readClassDescriptor(AuthUtils.java:105)
          at java.base/java.io.ObjectInputStream.readNonProxyDesc(ObjectInputStream.java:1992)
          at java.base/java.io.ObjectInputStream.readClassDesc(ObjectInputStream.java:1870)
          at java.base/java.io.ObjectInputStream.readOrdinaryObject(ObjectInputStream.java:2201)
          at java.base/java.io.ObjectInputStream.readObject0(ObjectInputStream.java:1687)
          at java.base/java.io.ObjectInputStream.readObject(ObjectInputStream.java:489)
          at java.base/java.io.ObjectInputStream.readObject(ObjectInputStream.java:447)
          at java.base/java.util.TreeSet.readObject(TreeSet.java:524)
          at java.basejdk.internal.reflect.GeneratedMethodAccessor226.invoke(Unknown Source)
          at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        </p>
      </Notice>
      <br />
      <p>
        Everything is functioning well; however, since users are verified for all requests, including reporting, many errors are filling up the Service API log. To prevent this log from excessively cluttering the Docker, additional logging rules need to be configured in Docker's configuration.
      </p>
      <p>
        We recommend using the following settings in the Docker compose file for the ReportPortal services containers:
      </p>
      <img src={dockerComposeImg} alt="docker compose" />
      <br />
      <Notes
        notes={[
          <>
            <p>
              This is a default recommendation from Docker, and you may need to adjust it to fit your project's specific requirements.
            </p>
            <p>
              If your installation is via Kubernetes, you don't need to worry about log rotation because Kubernetes already has it configured by default. However, Docker doesn't have log rotation enabled by default, and its JSON log format can quickly consume all available space.
            </p>
            <p>
              We plan to update Docker compose in the future, so these log settings will be included in the compose file automatically. Until then, if you are using version 5.7.5 or 23.1 with Docker installed, please check how much space the logs are occupying and update the Docker compose file accordingly.
            </p>
            <p>
              Default paths for checking logs:
            </p>
            <p>
              <b>Linux:</b> /var/lib/docker/containers/
            </p>
            <p>
              <b>Windows:</b> path depends on the way you’ve installed Docker. Please, check <a target="_blank" href='https://docs.docker.com/desktop/troubleshoot/overview/#check-the-logs' rel="noreferrer">Docker documentation</a>.
            </p>
          </>,
        ]}
      />
    </BlogPageContent>
  </>
);

export default DeserializationBlogPage;
