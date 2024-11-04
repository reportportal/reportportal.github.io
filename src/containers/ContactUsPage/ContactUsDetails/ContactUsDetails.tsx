import React, { FC, Fragment } from 'react';
import capitalize from 'lodash/capitalize';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import {
  ContactUsConfig,
  createBemBlockBuilder,
  formatNumberWithCommas,
  formatTextFromContentfulRichTextFieldWithLineBreaks,
} from '@app/utils';

import '../ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us']);

export const ContactUsDetails: FC<
  Pick<ContactUsConfig, 'planType' | 'price' | 'message' | 'messagePosition'>
> = ({ message, messagePosition, price, planType }) => {
  const priceInfo =
    planType && price && price[planType] ? (
      <p>
        <span>
          <strong>Price:</strong> {price.currency}
          {formatNumberWithCommas(price[planType] as number)}/{price.period}
        </span>
        <span>
          <strong>Billing period:</strong> {capitalize(planType)}
        </span>
      </p>
    ) : null;
  const messageInfo = renderRichText(message, {
    renderText: formatTextFromContentfulRichTextFieldWithLineBreaks,
  });
  const isMessageAtTop = messagePosition === 'top';
  const detailsInfo = isMessageAtTop ? [messageInfo, priceInfo] : [priceInfo, messageInfo];

  return (
    <div className={getBlocksWith('__details')}>
      {detailsInfo.map((info, index) => (
        <Fragment key={index}>{info}</Fragment>
      ))}
    </div>
  );
};
