cordova.define("cordova-plugin-metronomeplugin.MetronomePlugin", function(require, exports, module) {
/* global cordova:false */
/* globals window */

console.log("WORKS");
var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils');

var template = {
    echo: function(successCallback, errorCallback, message, forceAsync) {
        var action = 'echo';

        if (forceAsync) {
            action += 'Async';
        }

        exec(successCallback, errorCallback, 'Echo', action, [message]);
    }
};

module.exports = template;

module.exports = function setBeat(speed, callback) {
    exec(callback, callback, 'Echo', 'setBeatSpeed', [speed]);
};

});
