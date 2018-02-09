const httpInfo = {
  'start-launch-rq': {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/launch',
    scheme: '"description": "Launch description",\n"mode": "DEFAULT",\n"name": "Launch name",\n"start_time": "1505483177000",\n"tags": ["build: tag:3.0.1.10"]',
  },
  'start-launch-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "launchid"',
  },
  'start-parent-rq': {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/item',
    scheme: '"description": "description",\n"launch_id": "launchId",\n"name": "name",\n"parameters": [\n{\n"key": "parameter key",\n"value": "parameter value"\n}\n],\n"start_time": "1505483244000",\n"tags": [\n"tag"\n],\n"type": "SUITE",\n"uniqueId": "uniquedId"',
  },
  'start-parent-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "ParentItemId"',
  },
  'start-child-rq': {
    type: 'HTTP request',
    url: 'POST http://rphost:port/api/v1/{projectName}/item/{parentItem}',
    scheme: '"description": "Test description",\n"launch_id": "launchId",\n"name": "Test name",\n"parameters": [\n{\n"key": "key",\n"value": "value"\n}\n],\n"start_time": "1505483244022",\n"tags": [\n"tag"\n],\n"type": "[\'SUITE\', \'STORY\', \'TEST\', \'SCENARIO\', \'STEP\', \'BEFORE_CLASS\',\n\'BEFORE_GROUPS\', \'BEFORE_METHOD\',\n  \'BEFORE_SUITE\', \'BEFORE_TEST\', \'AFTER_CLASS\', \'AFTER_GROUPS\',\n  \'AFTER_METHOD\', \'AFTER_SUITE\',\n  \'AFTER_TEST\']",\n"uniqueId": "unique id"',
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
    '"time": "1505483244022"',
  },
  'post-log-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"id": "logid"',
  },
  'finish-child-rq': {
    type: 'HTTP request',
    url: 'PUT http://rphost:port/api/v1/{projectName}/item/{testItemId}',
    scheme: '"description": "description",\n"end_time": "1505483244022",\noptional\n"issue": {\n"comment": "string",\n"externalSystemIssues": [\n{\n"submitDate": 0,\n"submitter": "string",\n"systemId": "string","ticketId": "string",\n"url": "string"\n}\n],\n"issue_type": "string"\n},\n"status": "PASSED",\n"tags": [\n"tags",\n"on",\n"finish"\n]',
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
    '"end_time": "1505483244022",\n' +
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
    '"tags": [\n' +
    '"tags",\n' +
    '"on",\n' +
    '"finish"\n' +
    ']',
  },
  'finish-parent-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"msg": "message"',
  },
  'finish-launch-rq': {
    type: 'HTTP request',
    url: 'PUT http://rphost:port/api/v1/{projectName}/launch/{launchId}/finish',
    scheme: '"description": "description",\n' +
    '"end_time": "1505483244022",\n' +
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
    '"tags": [\n' +
    '"tags",\n' +
    '"on",\n' +
    '"finish"\n' +
    ']',
  },
  'finish-launch-rs': {
    type: 'HTTP response',
    url: '',
    scheme: '"msg": "message"',
  },
};
export default httpInfo;
