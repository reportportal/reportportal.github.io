import React from 'react';
import Switcher from 'react-components/switcher/switcher.jsx';
import './plansBlock.scss';

const BIG_SWITCHER_CLASSNAME = 'big-switcher';
const SMALL_SWITCHER_CLASSNAME = 'small-switcher';
const BIG_SWITCHER_WIDTH = 618;
const SMALL_SWITCHER_WIDTH = 188;

const data = [
  { id: '1', element: 'a' },
  { id: '2', element: 'b' },
  { id: '3', element: 'c' },
];
const data2 = [
  { id: '1', element: <><div className="icon cloud"/>We Host</> },
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
  { id: '2', element: 'Monthly' },
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
    <Switcher className={BIG_SWITCHER_CLASSNAME} itemsData={data} handleSelect={handleSwitcherItemSelect} switcherWidth={BIG_SWITCHER_WIDTH} isItemsEqualWidth />
    <Switcher className={BIG_SWITCHER_CLASSNAME} itemsData={data2} handleSelect={handleSwitcherItemSelect} switcherWidth={BIG_SWITCHER_WIDTH} isItemsEqualWidth />
    <Switcher className={BIG_SWITCHER_CLASSNAME} itemsData={data3} handleSelect={handleSwitcherItemSelect} switcherWidth={BIG_SWITCHER_WIDTH} isItemsEqualWidth />

    <Switcher className={SMALL_SWITCHER_CLASSNAME} itemsData={data4} handleSelect={handleSwitcherItemSelect} switcherWidth={SMALL_SWITCHER_WIDTH} isSeparatorNeeded/>
    <Switcher className={SMALL_SWITCHER_CLASSNAME} itemsData={data5} handleSelect={handleSwitcherItemSelect} switcherWidth={SMALL_SWITCHER_WIDTH} isSeparatorNeeded/>
  </div>
);

export default PlansBlock;
