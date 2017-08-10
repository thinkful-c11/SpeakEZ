'use strict';

require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL ||
                      global.DATABASE_URL ||
                      'mongodb://localhost/speakez';

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
                       global.TEST_DATABASE_URL 
                    //   'mongodb://localhost/test-frenchatize-app';
exports.PORT = process.env.PORT ||8080;
