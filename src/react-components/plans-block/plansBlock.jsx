import React from 'react';
import Switcher from 'react-components/switcher/switcher.jsx';
import './plansBlock.scss';

const data = [
  { id: '1', element: 'a' },
  { id: '2', element: 'b' },
  { id: '3', element: 'c' },
];
const data2 = [
  { id: '1', element: <><div className="icon cloud"/>We Host</>, isActive: true },
  { id: '2', element: <><div className="icon home"/>You host & We Manage</> },
];
const data3 = [
  { id: '1', element: 'hello' },
  { id: '2', element: ',' },
  { id: '3', element: 'WORLD', isActive: true },
  { id: '4', element: '!!!' },
];
const data4 = [
  { id: '1', element: 'Yearly save 5%' },
  { id: '2', element: 'Monthly', isActive: true },
];
const data5 = [
  { id: '1', element: 'a' },
  { id: '2', element: 'b', isActive: true },
  { id: '3', element: 'c' },
];

const handleSwitcherItemSelect = (id) => {
  console.log(id);
};

const PlansBlock = () => (
  <div style={{ height: 700, textAlign: 'center' }}>
    Plans block
    <Switcher className="plan-switcher" itemsData={data} handleSelect={handleSwitcherItemSelect} isItemsEqualWidth size='big' />
    <Switcher className="plan-switcher" itemsData={data2} handleSelect={handleSwitcherItemSelect} isItemsEqualWidth size='big' />
    <Switcher className="plan-switcher" itemsData={data3} handleSelect={handleSwitcherItemSelect} isItemsEqualWidth size='big' />
    <Switcher itemsData={data3} handleSelect={handleSwitcherItemSelect} size='big' />

    <Switcher className="period-switcher" itemsData={data4} handleSelect={handleSwitcherItemSelect} isSeparatorNeeded/>
    <Switcher className="period-switcher" itemsData={data5} handleSelect={handleSwitcherItemSelect} isSeparatorNeeded/>
  </div>
);

export default PlansBlock;
