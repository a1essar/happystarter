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
            'domReady',
            'jquery',
            'lodash',
            'utils',
            'spin'
        ], definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        context[name] = definition();
    }
    /*eslint-enable */
})('formSender', this, function(domReady, $, _, utils, Spinner) {
    'use strict';

    console.log('%cfile: form-sender.js', 'color: #C2ECFF');

    var el = '[data-ajax-form-sender]',
        defaults = {
            spinner: {
                lines: 13,
                length: 6,
                width: 2,
                radius: 3,
                corners: 1,
                rotate: 0,
                direction: 1,
                color: '#000',
                speed: 2,
                trail: 60,
                shadow: false,
                hwaccel: true,
                className: 'spinner',
                zIndex: 100500,
                top: '50%',
                left: '50%'
            }
        },
        submit;

    function formSender(options) {
        console.log('%ctrace: module formSender: formSender()', 'color: #ccc');

        defaults = _.extend(options, defaults);

        domReady(function () {
            console.log('%ctrace: module formSender: formSender() -> domReady', 'color: #ccc');

            $('body').off('click', el).on('click', el, function(e) {
                e.preventDefault();

                submit(e);
            });
        });
    }

    submit = function submit(e) {
        console.log('%ctrace: module formSender: submit()', 'color: #ccc');

        var $el = $(e.currentTarget),
            $form = $el.parents('form'),
            action = $el.attr('data-action') || $form.attr('action'),
            data = $form.serialize(),
            caption = $el.html(),
            spinner;

        $el.css('position', 'relative').css('width', $el.outerWidth()).css('height', $el.outerHeight()).html('&nbsp');

        spinner = new Spinner(defaults.spinner).spin($el[0]);

        $el.attr('disabled', 'disabled');

        utils.ajax({
            url: action,
            data: data,
            doneCallback: function(ajaxData) {
                spinner.stop();
                $el.css('position', '').css('width', '').css('height', '').html(caption);
                $el.removeAttr('disabled', 'disabled');

                if (!ajaxData.hasOwnProperty('parameters')) {
                    ajaxData.parameters = {};
                }

                ajaxData.parameters.$form = $form;

                utils.callback.done(ajaxData);
            },
            failCallback: function() {
                spinner.stop();
                $el.css('position', '').css('width', '').css('height', '').html(caption);
                $el.removeAttr('disabled', 'disabled');
            }
        });
    };

    return formSender;
});
