/*!
 * @preserve moduleStub - description
 * website.com
 * (c) author date | License
 */
(function (name, context, definition) {
    'use strict';
    /*eslint-disable */
    if (typeof define === 'function' && define.amd) {
        define([
            'jquery',
            'lodash',
            'utils/callback',
            'modernizr'
        ], definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        context[name] = definition();
    }
    /*eslint-enable */
})('form', this, function($, _, callback) {
    'use strict';
    console.log('%cfile: utils.js', 'color: #C2ECFF');

    var utils = {};
    utils.callback = callback;

    utils.webpTest = function() {
        var a = new Image();

        a.onerror = function() {
            Modernizr.addTest('webp', !1);
        };

        a.onload = function() {
            Modernizr.addTest('webp', function() {
                return a.width === 1;
            });
        };

        /* eslint-disable space-infix-ops */
        a.src='data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';
        /* eslint-enable space-infix-ops */
    };

    utils.locationOrigin = function() {
        if (!window.location.origin) {
            /* eslint-disable space-infix-ops */
            window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
            /* eslint-enable space-infix-ops */
        }

        return window.location.origin;
    };

    utils.shims = function() {
        console.log('%ctrace: utils.shims', 'color: #ccc');

        this.locationOrigin();
        this.webpTest();
    };

    utils.ajax = function(options) {
        console.log('%ctrace: utils.ajax', 'color: #ccc');

        var settings = _.extend({
            url: '/',
            data: {},
            type: 'post',
            dataType: 'json',
            doneCallback: function() {

            },
            failCallback: function() {

            }
        }, options);

        $.ajax({
            url: settings.url,
            cache: false,
            data: settings.data,
            type: settings.type,
            dataType: settings.dataType
        }).done(function(data, textStatus) {
            console.log('%cajax done textStatus: ' + textStatus, 'color: #9FE59F');
            settings.doneCallback(data);
        }).fail(function(data, textStatus) {
            console.warn('%cajax fail textStatus: ' + textStatus, 'color: #FF7000');
            settings.failCallback(data);
        });
    };

    return utils;
});
