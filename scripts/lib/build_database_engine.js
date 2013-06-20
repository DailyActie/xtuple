/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true, latedef:true, newcap:true, noarg:true,
regexp:true, undef:true, strict:true, trailing:true, white:true */
/*global X:true, Backbone:true, _:true, XM:true, XT:true*/

var fs = require('fs'),
  exec = require('child_process').exec,
  _ = require('underscore'),
  pg = require('pg'),
  async = require('async');

(function () {
  "use strict";

  /**
    @param {Object} specs look like this:
      { dev:
       [ '/home/shackbarth/git/xtuple/scripts/../enyo-client',
         '/home/shackbarth/git/xtuple/scripts/../enyo-client/extensions/source/crm',
         '/home/shackbarth/git/xtuple/scripts/../enyo-client/extensions/source/sales',
         '/home/shackbarth/git/xtuple/scripts/../enyo-client/extensions/source/project',
         '/home/shackbarth/git/xtuple/scripts/../../xtuple-extensions/source/oauth2',
         '/home/shackbarth/git/xtuple/scripts/../../private-extensions/source/incident_plus' ],
      dev2:
       [ '/home/shackbarth/git/xtuple/scripts/../enyo-client',
         '/home/shackbarth/git/xtuple/scripts/../enyo-client/extensions/source/crm',
         '/home/shackbarth/git/xtuple/scripts/../enyo-client/extensions/source/sales',
         '/home/shackbarth/git/xtuple/scripts/../enyo-client/extensions/source/project',
         '/home/shackbarth/git/xtuple/scripts/../../xtuple-extensions/source/oauth2',
         '/home/shackbarth/git/xtuple/scripts/../../private-extensions/source/incident_plus',
         '/home/shackbarth/git/xtuple/scripts/../../xtuple-extensions/source/icecream' ] }
    @param {Object} creds look like this:
      { hostname: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'admin',
        host: 'localhost',
        database: 'dev2' }
  */
  exports.buildDatabase = function (specs, creds) {
    // TODO
    console.log(creds, specs);
  };

}());
