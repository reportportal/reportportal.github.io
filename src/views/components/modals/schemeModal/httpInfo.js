const httpInfo = {
  'start-launch-rq': {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/launch',
    scheme: '"description": "Launch description",\n"mode": "DEFAULT",\n"name": "Launch name",\n"start_time": "2018-02-01T13:24:33.954Z",\n"tags": ["tag"]',
  },
  'start-launch-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "launchid"',
  },
  'start-parent-rq': {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/item',
    scheme: '"description": "description",\n"launch_id": "launchId",\n"name": "name",\n"parameters": [\n{\n"key": "parameter key",\n"value": "parameter value"\n}\n],\n"start_time": "2018-02-01T13:24:35.954Z",\n"tags": ["tag"],\n"type": "SUITE",\n"uniqueId": "uniquedId"',
  },
  'start-parent-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "ParentItemId"',
  },
  'start-child-rq': {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/item/{parentItem}',
    scheme: '"description": "Test description",\n"launch_id": "launchId",\n"name": "Test name",\n"parameters": [\n{\n"key": "parameter key",\n"value": "parameter value"\n}\n],\n"start_time": "2018-02-01T13:24:35.954Z ",\n"tags": ["tag"],\n"type": "SUITE",\n"uniqueId": "unique id"',
  },
  'start-child-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "ChildTestItemId"',
  },
  'post-log-rq': {
    type: 'HTTP request',
    url: 'POSThttp://rphost:port/api/v1/{projectName}/log',
    scheme: '"file": {\n' +
    '"name": "photo",\n' +
    '"content" : "byte content",\n' +
    '"contentType" : "image/jpeg"\n' +
    '},\n' +
    '"item_id": "id of log\'s test item",\n' +
    '"level": "Log Level",\n' +
    '"message": "Log message",\n' +
    '"time": "2018-02-01T13:24:36.954Z "',
  },
  'post-log-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "logid"',
  },
  'finish-child-rq': {
    type: 'HTTP request',
    url: 'PUT http://rphost:port/api/v1/{projectName}/item/{testItemId}',
    scheme: '"description": "description",\n"end_time": "2018-02-01T13:24:37.954Z ",\n"issue": {\n"comment": "comment_text",\n"externalSystemIssues": [\n{\n"submitDate": 0,\n"submitter": "string",\n"systemId": "string",\n"ticketId": "string",\n"url": "string"\n}\n],\n"issue_type": "string"\n},\n"status": "PASSED",\n"tags": ["tags"]',
  },
  'finish-child-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"msg": "message"',
  },
  'finish-parent-rq': {
    type: 'HTTP request',
    url: 'PUT http://rphost:port/api/v1/{projectName}/item/{testItemId}',
    scheme: '"description": "description",\n' +
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
  'finish-parent-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"msg": "message"',
  },
  'finish-launch-rq': {
    type: 'HTTP request',
    url: 'PUT http://rphost:port/api/v1/{projectName}/launch/{launchId}/finish',
    scheme: '"description": "description on finish",\n' +
    '"end_time": "2018-02-01T13:24:38.954Z ",\n' +
    '"status": "PASSED",\n' +
    '"tags": ["tags"]',
  },
  'finish-launch-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"msg": "message"',
  },
};
export default httpInfo;
