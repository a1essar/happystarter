//jshint ignore: start
//jscs:disable
/*eslint-disable */
define(['exports', 'example-1'], function (exports, _example1) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var Bar = (function (_Foo) {
        function Bar() {
            _classCallCheck(this, Bar);

            _get(Object.getPrototypeOf(Bar.prototype), 'constructor', this).call(this);
            console.log('Bar');
        }

        _inherits(Bar, _Foo);

        return Bar;
    })(_example1.Foo);

    exports.Bar = Bar;
});
/*eslint-enable */
//jscs:enable
//jshint ignore: end
