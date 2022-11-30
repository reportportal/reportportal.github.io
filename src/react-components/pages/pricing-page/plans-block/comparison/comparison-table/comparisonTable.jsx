import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Table from 'react-components/common/table/table';
import InfoIcon from 'react-components/common/info-icon/infoIcon';
import InfoWithTooltip from 'react-components/common/info-with-tooltip/infoWithTooltip.jsx';
import Terms from '../terms/terms';
import styles from './comparisonTable.scss';

const cx = classNames.bind(styles);

const ComparisonTable = ({ plansData, planType, isOpen }) => {
  const headers = ['', ...plansData.map(({ name }) => name)];
  const titles = planType.planCompareTableTitles;

  const rows = titles.map(({ id, name, info }) => {
    const options = plansData.map((plan) => plan.options[id]);
    const modifiedOptions = options.map(option =>
      option === true ? <div className={cx('true-icon')} /> : option,
    );
    return [
      <div key={name} className={cx('inline-title')}>
        {name}
        {info &&
          <InfoWithTooltip tooltip={info}>
            {(isActive) => <InfoIcon isActive={isActive} />}
          </InfoWithTooltip>
        }
      </div>,
      ...modifiedOptions,
    ];
  });

  const footer = (
    <td colSpan={headers.length + 2}>
      <div className={cx('footer-row')}>
        <Terms />
        <div className={cx('note')}>{planType.footerDescription}</div>
      </div>
    </td>
  );

  return (
    <Table
      className={cx('comparison-table', { opened: isOpen })}
      data={{ headers, rows, footer }}
    />
  );
}
ComparisonTable.propTypes = {
  plansData: PropTypes.array.isRequired,
  planType: PropTypes.shape({
    planCompareTableTitles: PropTypes.array.isRequired,
    footerDescription: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ComparisonTable;
