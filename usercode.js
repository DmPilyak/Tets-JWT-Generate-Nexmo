const Nexmo = require('nexmo');

const jwt = Nexmo.generateJwt('private.key', {application_id: "5b48badd-aba5-47e9-95e0-c7bd94e8aea9"});