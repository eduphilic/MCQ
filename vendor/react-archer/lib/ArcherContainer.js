'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArcherContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _Point = require('./Point');

var _Point2 = _interopRequireDefault(_Point);

var _SvgArrow = require('./SvgArrow');

var _SvgArrow2 = _interopRequireDefault(_SvgArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var svgContainerStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
};

function rectToPoint(rect) {
  return new _Point2.default(rect.left, rect.top);
}

function computeCoordinatesFromAnchorPosition(anchorPosition, rect) {
  switch (anchorPosition) {
    case 'top':
      return rectToPoint(rect).add(new _Point2.default(rect.width / 2, 0));
    case 'bottom':
      return rectToPoint(rect).add(new _Point2.default(rect.width / 2, rect.height));
    case 'left':
      return rectToPoint(rect).add(new _Point2.default(0, rect.height / 2));
    case 'right':
      return rectToPoint(rect).add(new _Point2.default(rect.width, rect.height / 2));
    default:
      return new _Point2.default(0, 0);
  }
}

var ArcherContainer = exports.ArcherContainer = function (_React$Component) {
  _inherits(ArcherContainer, _React$Component);

  function ArcherContainer(props) {
    _classCallCheck(this, ArcherContainer);

    var _this = _possibleConstructorReturn(this, (ArcherContainer.__proto__ || Object.getPrototypeOf(ArcherContainer)).call(this, props));

    _this.refreshScreen = function () {
      _this.setState(_extends({}, _this.state));
    };

    _this.getChildContext = function () {
      return {
        registerTransition: _this.registerTransition,
        registerChild: _this.registerChild
      };
    };

    _this.storeParent = function (ref) {
      if (_this.state.parent) {
        return;
      }
      _this.setState(function (currentState) {
        return _extends({}, currentState, { parent: ref });
      });
    };

    _this.getRectFromRef = function (ref) {
      if (!ref) {
        return new _Point2.default(0, 0);
      }
      return ref.getBoundingClientRect();
    };

    _this.getParentCoordinates = function () {
      var rectp = _this.getRectFromRef(_this.state.parent);
      return rectToPoint(rectp);
    };

    _this.getPointCoordinatesFromAnchorPosition = function (position, index, parentCoordinates) {
      var rect = _this.getRectFromRef(_this.state.refs[index]);
      var absolutePosition = computeCoordinatesFromAnchorPosition(position, rect);

      return absolutePosition.substract(parentCoordinates);
    };

    _this.registerTransition = function (fromElement, relation) {
      // TODO prevent duplicate registering
      // TODO improve the state merge... (should be shorter)
      var fromTo = [].concat(_toConsumableArray(_this.state.fromTo));
      var newFromTo = _extends({}, relation, {
        from: _extends({}, relation.from, { id: fromElement })
      });
      fromTo.push(newFromTo);
      _this.setState(function (currentState) {
        return _extends({}, _this.currentState, {
          fromTo: [].concat(_toConsumableArray(currentState.fromTo), _toConsumableArray(fromTo))
        });
      });
    };

    _this.registerChild = function (id) {
      return function (ref) {
        if (!_this.state.refs[id]) {
          _this.state.observer.observe(ref);
          _this.setState(function (currentState) {
            return _extends({}, _this.currentState, {
              refs: _extends({}, currentState.refs, _defineProperty({}, id, ref))
            });
          });
        }
      };
    };

    _this.computeArrows = function () {
      var parentCoordinates = _this.getParentCoordinates();
      return _this.state.fromTo.map(function (sd) {
        var from = sd.from,
            to = sd.to,
            label = sd.label;

        var startingAnchor = from.anchor;
        var startingPoint = _this.getPointCoordinatesFromAnchorPosition(from.anchor, from.id, parentCoordinates);
        var endingAnchor = to.anchor;
        var endingPoint = _this.getPointCoordinatesFromAnchorPosition(to.anchor, to.id, parentCoordinates);
        return _react2.default.createElement(_SvgArrow2.default, {
          key: JSON.stringify({ from: from, to: to }),
          startingPoint: startingPoint,
          startingAnchor: startingAnchor,
          endingPoint: endingPoint,
          endingAnchor: endingAnchor,
          strokeColor: _this.props.strokeColor,
          arrowLength: _this.props.arrowLength,
          strokeWidth: _this.props.strokeWidth,
          arrowLabel: label
        });
      });
    };

    var observer = new _resizeObserverPolyfill2.default(function () {
      _this.refreshScreen();
    });
    _this.state = {
      refs: {},
      fromTo: [],
      observer: observer
    };
    return _this;
  }

  _createClass(ArcherContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.refreshScreen);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      Object.keys(this.state.refs).map(function (elementKey) {
        var observer = _this2.state.observer;

        observer.unobserve(_this2.state.refs[elementKey]);
      });
      window.removeEventListener('resize', this.refreshScreen);
    }
  }, {
    key: 'render',
    value: function render() {
      var SvgArrows = this.computeArrows();
      var arrowPath = 'M0,0 L0,' + this.props.arrowThickness + ' L' + (this.props.arrowLength - 1) + ',' + this.props.arrowThickness / 2 + ' z';

      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, this.props.style, { position: 'relative' }),
          className: this.props.className
        },
        _react2.default.createElement(
          'svg',
          { style: svgContainerStyle },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'marker',
              {
                id: 'arrow',
                markerWidth: this.props.arrowLength,
                markerHeight: this.props.arrowThickness,
                refX: '0',
                refY: this.props.arrowThickness / 2,
                orient: 'auto',
                markerUnits: 'strokeWidth'
              },
              _react2.default.createElement('path', { d: arrowPath, fill: this.props.strokeColor })
            )
          ),
          SvgArrows
        ),
        _react2.default.createElement(
          'div',
          { ref: this.storeParent },
          this.props.children
        )
      );
    }
  }]);

  return ArcherContainer;
}(_react2.default.Component);

ArcherContainer.propTypes = {
  arrowLength: _propTypes2.default.number,
  arrowThickness: _propTypes2.default.number,
  strokeColor: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};

ArcherContainer.defaultProps = {
  arrowLength: 10,
  arrowThickness: 6,
  strokeColor: '#f00',
  strokeWidth: 2
};

ArcherContainer.childContextTypes = {
  registerChild: _propTypes2.default.func,
  registerTransition: _propTypes2.default.func
};

exports.default = ArcherContainer;