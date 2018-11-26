/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';
const crypto = require('crypto');

const revisionHash = function (inputString) {
  return crypto
    .createHash('md5')
    .update(inputString)
    .digest('hex')
    .slice(0, 10);
}

module.exports = revisionHash;
