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
import reactWrapper from 'pages/pricing-page/reactWrapper';
import './pricingPage.scss';
import BodyLayout from 'react-components/layouts/bodyLayout.jsx';

const headerText = 'Flexible options for cloud\n or self hosted installation';
const className = 'pricing-page';

const Layout = () => <BodyLayout className={className}>
    <>
        <div className="pricing-page-header">{headerText}</div>
        <div style={{ height: 700, textAlign: 'center' }}>Plans block</div>
        <div style={{ height: 200, textAlign: 'center' }}>Questions</div>
    </>
</BodyLayout>;

export default reactWrapper(Layout);
