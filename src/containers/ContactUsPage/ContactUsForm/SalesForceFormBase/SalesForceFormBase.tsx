import React from 'react';

export const SalesForceFormBase = ({ additionalFields }) => (
  <>
    <input type="hidden" name="oid" value={process.env.SALESFORCE_OID} />
    <input type="hidden" name="retURL" value="http://" />
    <input type="hidden" name="lead_status" value="New" />
    {additionalFields}
  </>
);
