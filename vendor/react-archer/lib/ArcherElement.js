'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArcherElement = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringifyRelations = function stringifyRelations(relations) {
  var relationsWithStringifiedLabels = (relations || []).map(function (r) {
    if (r.label && r.label.props) {
      return JSON.stringify(r.label.props);
    }
    return JSON.stringify(r.label);
  });

  return JSON.stringify(relationsWithStringifiedLabels);
};

var ArcherElement = exports.ArcherElement = function (_React$Component) {
  _inherits(ArcherElement, _React$Component);

  function ArcherElement() {
    _classCallCheck(this, ArcherElement);

    return _possibleConstructorReturn(this, (ArcherElement.__proto__ || Object.getPrototypeOf(ArcherElement)).apply(this, arguments));
  }

  _createClass(ArcherElement, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (stringifyRelations(this.props.relations) === stringifyRelations(nextProps.relations)) {
        return;
      }
      this.registerAllTransitions(nextProps.relations);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.relations) {
        return;
      }
      this.registerAllTransitions(this.props.relations);
    }
  }, {
    key: 'registerAllTransitions',
    value: function registerAllTransitions(relations) {
      var _this2 = this;

      relations.forEach(function (relation) {
        _this2.context.registerTransition(_this2.props.id, relation);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, this.props.style, { position: 'relative' }),
          className: this.props.className,
          ref: this.context.registerChild(this.props.id)
        },
        this.props.children
      );
    }
  }]);

  return ArcherElement;
}(_react2.default.Component);

ArcherElement.contextTypes = {
  registerChild: _propTypes2.default.func,
  registerTransition: _propTypes2.default.func,
  refresh: _propTypes2.default.func
};

var anchorType = _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']);

ArcherElement.propTypes = {
  id: _propTypes2.default.string,
  relations: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.node,
    from: _propTypes2.default.shape({
      anchor: anchorType
    }),
    to: _propTypes2.default.shape({
      anchor: anchorType,
      id: _propTypes2.default.string
    })
  })),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = ArcherElement;