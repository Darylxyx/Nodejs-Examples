'use strict';

const Mongolass = require('mongolass');
const mongolass = new Mongolass();
mongolass.connect('mongodb://localhost:27017/FirstBlood');

const User = mongolass.model('User');

User
.find();