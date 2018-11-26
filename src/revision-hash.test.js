/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const revisionHash = require('./index');
const expect = require('chai').expect


describe('Revision Hash', () => {
  it('should export a function', () => {
    expect(revisionHash).to.be.a('function');
  });

  it('should return a consistent hash string', () => {
    const inputString = 'MyInputString';
    const exprected = '1601dcd354';
    expect(revisionHash(inputString)).to.equal(exprected);
  });

  it('should handle spaces and special characters', () => {
    const inputString = '#My spaced special string!!';
    const exprected = 'e5b74be005';
    expect(revisionHash(inputString)).to.equal(exprected);
  });

});
