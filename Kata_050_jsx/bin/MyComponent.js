'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = {
    view: function view() {
        return [(0, _mithril2.default)(
            'h1',
            null,
            'JSX Sample'
        ), (0, _mithril2.default)(
            'p',
            null,
            'This is an example of using jsx'
        )];
    }
};

exports.default = MyComponent;
//# sourceMappingURL=MyComponent.js.map