import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ModalContext from 'react-components/layouts/modal-layout/modalContext';
import InfoIcon from 'react-components/common/info-icon/infoIcon.jsx';
import InfoWithTooltip from 'react-components/common/info-with-tooltip/infoWithTooltip.jsx';
import PlanSummary from 'react-components/common/plan-summary/planSummary.jsx';
import NotificationModal from 'react-components/layouts/modal-layout/notification-modal/notificationModal.jsx';
import Terms from '../terms/terms';
import styles from './comparisonList.scss';

const cx = classNames.bind(styles);

const ComparisonList = ({ plansData, planType, isOpen }) => {
  const { showModal } = useContext(ModalContext);
  const titles = planType.planCompareTableTitles;

  const onInfoClick = (title, tooltip) => {
    showModal(<NotificationModal title={title} description={tooltip} />);
  };

  const plans = plansData.map(({ name: planName, options }) => {
    const rows = titles.map(({ id, name, info }, index) => {
      let option = options[id];
      let currentName = name;
      let preposition = ' of ';
      switch (id) {
        case 'support':
          if (!option) {
            option = '';
            currentName = 'Technical support';
            break;
          }

          if (typeof option === 'object') {
            option = option.value;
            currentName = '';
          } else {
            option = `${option} hours`;
            currentName = 'Technical support';
          }
          break;
        case 'additionalSupport':
          preposition = ' for ';
          break;
        case 'professionalSupport':
          if (option) {
            option = `${option} hours`;
          }
          currentName = 'Professional service';
          break;
        case 'storage':
        case 'retention':
          if (option === 'Unlimited') {
            preposition = ' ';
          }
          break;
        default:
          break;
      }

      return (
        <div key={index} className={cx('plan-row', { disable: !option })}>
          <div className={cx('row-status')}>
            <i />
          </div>
          <div className={cx('row-text')}>
            {option && option !== true && (
              <>
                <span className={cx('option')}>{option}</span>
                {currentName && preposition}
              </>
            )}
            {currentName}
          </div>
          {!!option && info && (
            <InfoWithTooltip
              className={cx('info-with-tooltip')}
              tooltip={info}
              onClick={() => onInfoClick(currentName, info)}
            >
              {() => <InfoIcon />}
            </InfoWithTooltip>
          )}
        </div>
      );
    });

    return (
      <PlanSummary key={planName} className={cx('plan-summary')} name={planName}>
        {rows}
      </PlanSummary>
    );
  });

  return (
    <div className={cx('comparison-list-wrapper', { opened: isOpen })}>
      <div className={cx('comparison-list')}>
        {plans}
        <div className={cx('note')}>Payment is made quarterly</div>
        <Terms className={cx('terms')} />
      </div>
    </div>
  );
};
ComparisonList.propTypes = {
  plansData: PropTypes.array.isRequired,
  planType: PropTypes.shape({
    planCompareTableTitles: PropTypes.array.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ComparisonList;
