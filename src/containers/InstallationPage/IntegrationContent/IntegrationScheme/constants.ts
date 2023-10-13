export const HTTP_INFO = {
  startLaunchRq: {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/\nlaunch',
    scheme:
      '"description": "Launch description",\n"mode": "DEFAULT",\n"name": "Launch name",\n"start_time": "2018-02-01T13:24:33.954Z",\n"tags": ["tag"]',
  },
  startLaunchRs: {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "launchid"',
  },
  startParentRq: {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/\nitem',
    scheme:
      '"description": "description",\n"launch_id": "launchId",\n"name": "name",\n"parameters": [\n{\n"key": "parameter key",\n"value": "parameter value"\n}\n],\n"start_time": "2018-02-01T13:24:35.954Z",\n"tags": ["tag"],\n"type": "SUITE",\n"uniqueId": "uniquedId"',
  },
  startParentRs: {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "ParentItemId"',
  },
  startChildRq: {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/\nitem/{parentItem}',
    scheme:
      '"description": "Test description",\n"launch_id": "launchId",\n"name": "Test name",\n"parameters": [\n{\n"key": "parameter key",\n"value": "parameter value"\n}\n],\n"start_time": "2018-02-01T13:24:35.954Z ",\n"tags": ["tag"],\n"type": "SUITE",\n"uniqueId": "unique id"',
  },
  startChildRs: {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "ChildTestItemId"',
  },
  postLogRq: {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/log',
    scheme:
      '"file": {\n' +
      '"name": "photo",\n' +
      '"content" : "byte content",\n' +
      '"contentType" : "image/jpeg"\n' +
      '},\n' +
      '"item_id": "id of log\'s test item",\n' +
      '"level": "Log Level",\n' +
      '"message": "Log message",\n' +
      '"time": "2018-02-01T13:24:36.954Z "',
  },
  postLogRs: {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "logid"',
  },
  finishChildRq: {
    type: 'HTTP request',
    url: 'PUT http://rphost:port/api/v1/{projectName}/\nitem/{testItemId}',
    scheme:
      '"description": "description",\n"end_time": "2018-02-01T13:24:37.954Z ",\n"issue": {\n"comment": "comment_text",\n"externalSystemIssues": [\n{\n"submitDate": 0,\n"submitter": "string",\n"systemId": "string",\n"ticketId": "string",\n"url": "string"\n}\n],\n"issue_type": "string"\n},\n"status": "PASSED",\n"tags": ["tags"]',
  },
  finishChildRs: {
    type: 'HTTP response',
    url: '',
    scheme: '"msg": "message"',
  },
  finishParentRq: {
    type: 'HTTP request',
    url: 'PUT http://rphost:port/api/v1/{projectName}/\nitem/{testItemId}',
    scheme:
      '"description": "description",\n' +
      '"end_time": "2018-02-01T13:24:37.954Z ",\n' +
      'optional\n' +
      '"issue": {\n' +
      '"comment": "string",\n' +
      '"externalSystemIssues": [\n' +
      '{\n' +
      '"submitDate": 0,\n' +
      '"submitter": "string",\n' +
      '"systemId": "string",\n' +
      '"ticketId": "string",\n' +
      '"url": "string"\n' +
      '}\n' +
      '],\n' +
      '"issue_type": "string"\n' +
      '},\n' +
      '"status": "PASSED",\n' +
      '"tags": ["tags"]',
  },
  finishParentRs: {
    type: 'HTTP response',
    url: '',
    scheme: '"msg": "message"',
  },
  finishLaunchRq: {
    type: 'HTTP request',
    url: 'PUT http://rphost:port/api/v1/{projectName}/\nlaunch/{launchId}/finish',
    scheme:
      '"description": "description on finish",\n' +
      '"end_time": "2018-02-01T13:24:38.954Z ",\n' +
      '"status": "PASSED",\n' +
      '"tags": ["tags"]',
  },
  finishLaunchRs: {
    type: 'HTTP response',
    url: '',
    scheme: '"msg": "message"',
  },
};

export const SCHEME_DATA = [
  {
    row: 1,
    cells: [
      { entity: 'node', text: 'Starts launch' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Launch info' },
      { entity: 'action', text: 'http request', info: HTTP_INFO.startLaunchRq },
      { entity: 'node', text: 'Creates launch' },
    ],
  },
  {
    row: 2,
    cells: [
      { entity: 'node', text: 'Get Launch ID' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Launch ID' },
      { entity: 'action', text: 'http response', info: HTTP_INFO.startLaunchRs },
      { entity: 'node', text: 'Launch ID' },
    ],
  },
  {
    row: 3,
    cells: [
      { entity: 'node', text: 'Starts Suite' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Suite info with Launch ID' },
      { entity: 'action', text: 'http request', info: HTTP_INFO.startParentRq },
      { entity: 'node', text: 'Creates Suite in the Launch with appropriate ID ' },
    ],
  },
  {
    row: 4,
    cells: [
      { entity: 'node', text: 'Gets Suite ID' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Suite ID' },
      { entity: 'action', text: 'http response', info: HTTP_INFO.startLaunchRs },
      { entity: 'node', text: 'Suite ID' },
    ],
  },

  {
    row: 5,
    cells: [
      { entity: 'node', text: 'Starts Test' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Test info with Launch ID & Suite ID' },
      { entity: 'action', text: 'http request', info: HTTP_INFO.startChildRq },
      { entity: 'node', text: 'Creates Test in the Launch & the Suite with appropriate ID' },
    ],
  },
  {
    row: 6,
    cells: [
      { entity: 'node', text: 'Gets Test ID' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Test ID' },
      { entity: 'action', text: 'http response', info: HTTP_INFO.startChildRs },
      { entity: 'node', text: 'Test ID' },
    ],
  },
  {
    row: 7,
    cells: [
      { entity: 'node', text: 'Posts Log' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Log info with Test ID' },
      { entity: 'action', text: 'http request', info: HTTP_INFO.postLogRq },
      { entity: 'node', text: 'Creates Log in the Test with appropriate ID' },
    ],
  },
  {
    row: 8,
    cells: [
      { entity: 'node', text: 'Gets Log ID' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Log ID' },
      { entity: 'action', text: 'http response', info: HTTP_INFO.postLogRs },
      { entity: 'node', text: 'Log ID' },
    ],
  },
  {
    row: 9,
    cells: [
      { entity: 'node', text: 'Finishes Test' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Info about Test finish with Test ID' },
      { entity: 'action', text: 'http request', info: HTTP_INFO.finishChildRq },
      { entity: 'node', text: 'Finishes Test with appropriate ID' },
    ],
  },
  {
    row: 10,
    cells: [
      { entity: 'node', text: 'Test finished' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Test finished' },
      { entity: 'action', text: 'http response', info: HTTP_INFO.finishChildRs },
      { entity: 'node', text: 'Test finished' },
    ],
  },
  {
    row: 11,
    cells: [
      { entity: 'node', text: 'Finishes suite' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Info about Suite finish with Suite ID' },
      { entity: 'action', text: 'http request', info: HTTP_INFO.finishParentRq },
      { entity: 'node', text: 'Finishes Suite with appropriate ID' },
    ],
  },
  {
    row: 12,
    cells: [
      { entity: 'node', text: 'Suite finished' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Suite finished' },
      { entity: 'action', text: 'http response', info: HTTP_INFO.finishParentRs },
      { entity: 'node', text: 'Suite finished' },
    ],
  },
  {
    row: 13,
    cells: [
      { entity: 'node', text: 'Finishes Launch' },
      { entity: 'event', text: 'event' },
      { entity: 'node', text: 'Info about Launch finish with Launch ID' },
      { entity: 'action', text: 'http request', info: HTTP_INFO.finishLaunchRq },
      { entity: 'node', text: 'Finishes Launch with appropriate ID' },
    ],
  },
  {
    row: 14,
    cells: [
      { entity: 'node', text: 'Launch finished' },
      { entity: 'event', text: 'response' },
      { entity: 'node', text: 'Launch finished' },
      { entity: 'action', text: 'http response', info: HTTP_INFO.finishLaunchRs },
      { entity: 'node', text: 'Launch finished' },
    ],
  },
];
