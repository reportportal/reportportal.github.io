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

const SalesForceFormBase = ({ additionalFields }) => (
  <>
    <input type='hidden' name='oid' value='00D7a000000AZdD'/>
    <input type='hidden' name='retURL' value='http://'/>
    <input type='hidden' name='debug' value='1'/>
    <input type='hidden' name='debugEmail' value='olga_korenko@epam.com'/>
    <input type='hidden' name='ReportPortalSource__c' value='Landing page' />
    <select className="hidden" id='lead_source' name='lead_source' style={{ display: 'none' }}>
      <option value='ReportPortal'>ReportPortal</option>
    </select>
    <select className="hidden" id='lead_status' name='lead_status' style={{ display: 'none' }}>
      <option value='New'>New</option>
    </select>
    {additionalFields}
  </>
);

SalesForceFormBase.propTypes = {
  additionalFields: PropTypes.arrayOf(PropTypes.node),
};
SalesForceFormBase.defaultProps = {
  additionalFields: [],
};

export default SalesForceFormBase;
