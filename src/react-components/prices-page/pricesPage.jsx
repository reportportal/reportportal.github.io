/*
 * Copyright 2021 EPAM Systems
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
import reactWrapper from '../../views/pages/prices-page/reactWrapper';
import './pricesPage.scss';
import BodyLayout from '../layouts/bodyLayout.jsx';
import background from './img/background.svg';

const headerText = 'Flexible options for cloud\n or self hosted installation';

const Layout = () => <BodyLayout backgroundUrl={background}>
    <React.Fragment>
        <div className="prices-page-header">{headerText}</div>
        <div style={{ height: 700, textAlign: 'center' }}>Plans block</div>
        <div style={{ height: 200, textAlign: 'center' }}>Questions</div>
    </React.Fragment>
</BodyLayout>;

export default reactWrapper(Layout);
