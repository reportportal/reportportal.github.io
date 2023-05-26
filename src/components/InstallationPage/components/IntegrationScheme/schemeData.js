import { httpInfo } from './httpInfo';

export const schemeData = [
  {
    row: 1,
    cells: [
      { entity: 'node', text: 'Starts launch' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Launch info' },
      { entity: 'action', text: 'http request', info: httpInfo.startLaunchRq },
      { entity: 'node', text: 'Creates launch' },
    ],
  },
  {
    row: 2,
    cells: [
      { entity: 'node', text: 'Get Launch ID' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Launch ID' },
      { entity: 'action', text: 'http response', info: httpInfo.startLaunchRs },
      { entity: 'node', text: 'Launch ID' },
    ],
  },
  {
    row: 3,
    cells: [
      { entity: 'node', text: 'Starts Suite' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Suite info with Launch ID' },
      { entity: 'action', text: 'http request', info: httpInfo.startParentRq },
      { entity: 'node', text: 'Creates Suite in the Launch with appropriate ID ' },
    ],
  },
  {
    row: 4,
    cells: [
      { entity: 'node', text: 'Gets Suite ID' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Suite ID' },
      { entity: 'action', text: 'http response', info: httpInfo.startLaunchRs },
      { entity: 'node', text: 'Suite ID' },
    ],
  },

  {
    row: 5,
    cells: [
      { entity: 'node', text: 'Starts Test' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Test info with Launch ID & Suite ID' },
      { entity: 'action', text: 'http request', info: httpInfo.startChildRq },
      { entity: 'node', text: 'Creates Test in the Launch & the Suite with appropriate ID' },
    ],
  },
  {
    row: 6,
    cells: [
      { entity: 'node', text: 'Gets Test ID' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Test ID' },
      { entity: 'action', text: 'http response', info: httpInfo.startChildRs },
      { entity: 'node', text: 'Test ID' },
    ],
  },
  {
    row: 7,
    cells: [
      { entity: 'node', text: 'Posts Log' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Log info with Test ID' },
      { entity: 'action', text: 'http request', info: httpInfo.postLogRq },
      { entity: 'node', text: 'Creates Log in the Test with appropriate ID' },
    ],
  },
  {
    row: 8,
    cells: [
      { entity: 'node', text: 'Gets Log ID' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Log ID' },
      { entity: 'action', text: 'http response', info: httpInfo.postLogRs },
      { entity: 'node', text: 'Log ID' },
    ],
  },
  {
    row: 9,
    cells: [
      { entity: 'node', text: 'Finishes Test' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Info about Test finish with Test ID' },
      { entity: 'action', text: 'http request', info: httpInfo.finishChildRq },
      { entity: 'node', text: 'Finishes Test with appropriate ID' },
    ],
  },
  {
    row: 10,
    cells: [
      { entity: 'node', text: 'Test finished' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Test finished' },
      { entity: 'action', text: 'http response', info: httpInfo.finishChildRs },
      { entity: 'node', text: 'Test finished' },
    ],
  },
  {
    row: 11,
    cells: [
      { entity: 'node', text: 'Finishes suite' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Info about Suite finish with Suite ID' },
      { entity: 'action', text: 'http request', info: httpInfo.finishParentRq },
      { entity: 'node', text: 'Finishes Suite with appropriate ID' },
    ],
  },
  {
    row: 12,
    cells: [
      { entity: 'node', text: 'Suite finished' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Suite finished' },
      { entity: 'action', text: 'http response', info: httpInfo.finishParentRs },
      { entity: 'node', text: 'Suite finished' },
    ],
  },
  {
    row: 13,
    cells: [
      { entity: 'node', text: 'Finishes Launch' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Info about Launch finish with Launch ID' },
      { entity: 'action', text: 'http request', info: httpInfo.finishLaunchRq },
      { entity: 'node', text: 'Finishes Launch with appropriate ID' },
    ],
  },
  {
    row: 14,
    cells: [
      { entity: 'node', text: 'Launch finished' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Launch finished' },
      { entity: 'action', text: 'http response', info: httpInfo.finishLaunchRs },
      { entity: 'node', text: 'Launch finished' },
    ],
  },
];
