'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeEndingPointAccordingToArrow = computeEndingPointAccordingToArrow;
exports.computeStartingAnchorPosition = computeStartingAnchorPosition;
exports.computeEndingAnchorPosition = computeEndingAnchorPosition;
exports.computeLabelDimensions = computeLabelDimensions;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeEndingArrowDirectionVector(endingAnchor) {
  switch (endingAnchor) {
    case 'left':
      return { arrowX: -1, arrowY: 0 };
    case 'right':
      return { arrowX: 1, arrowY: 0 };
    case 'top':
      return { arrowX: 0, arrowY: -1 };
    case 'bottom':
      return { arrowX: 0, arrowY: 1 };
    default:
      return { arrowX: 0, arrowY: 0 };
  }
}

function computeEndingPointAccordingToArrow(xEnd, yEnd, arrowLength, strokeWidth, endingAnchor) {
  var _computeEndingArrowDi = computeEndingArrowDirectionVector(endingAnchor),
      arrowX = _computeEndingArrowDi.arrowX,
      arrowY = _computeEndingArrowDi.arrowY;

  var xe = xEnd + arrowX * arrowLength * strokeWidth / 2;
  var ye = yEnd + arrowY * arrowLength * strokeWidth / 2;

  return { xe: xe, ye: ye };
}

function computeStartingAnchorPosition(xs, ys, xe, ye, startingAnchor) {
  if (startingAnchor === 'top' || startingAnchor === 'bottom') {
    return {
      xa1: xs,
      ya1: ys + (ye - ys) / 2
    };
  }
  if (startingAnchor === 'left' || startingAnchor === 'right') {
    return {
      xa1: xs + (xe - xs) / 2,
      ya1: ys
    };
  }

  return { xa1: xs, ya1: ys };
}

function computeEndingAnchorPosition(xs, ys, xe, ye, endingAnchor) {
  if (endingAnchor === 'top' || endingAnchor === 'bottom') {
    return {
      xa2: xe,
      ya2: ye - (ye - ys) / 2
    };
  }
  if (endingAnchor === 'left' || endingAnchor === 'right') {
    return {
      xa2: xe - (xe - xs) / 2,
      ya2: ye
    };
  }

  return { xa2: xe, ya2: ye };
}

function computeLabelDimensions(xs, ys, xe, ye) {
  var wl = Math.abs(xe - xs);
  var hl = Math.abs(ye - ys);

  var xl = xe > xs ? xs : xe;
  var yl = ye > ys ? ys : ye;

  return {
    xl: xl,
    yl: yl,
    wl: wl,
    hl: hl
  };
}

var SvgArrow = function SvgArrow(_ref) {
  var startingPoint = _ref.startingPoint,
      startingAnchor = _ref.startingAnchor,
      endingPoint = _ref.endingPoint,
      endingAnchor = _ref.endingAnchor,
      strokeColor = _ref.strokeColor,
      arrowLength = _ref.arrowLength,
      strokeWidth = _ref.strokeWidth,
      arrowLabel = _ref.arrowLabel;

  var actualArrowLength = arrowLength * 2;

  var xs = startingPoint.x;
  var ys = startingPoint.y;

  var _computeEndingPointAc = computeEndingPointAccordingToArrow(endingPoint.x, endingPoint.y, actualArrowLength, strokeWidth, endingAnchor),
      xe = _computeEndingPointAc.xe,
      ye = _computeEndingPointAc.ye;

  var _computeStartingAncho = computeStartingAnchorPosition(xs, ys, xe, ye, startingAnchor),
      xa1 = _computeStartingAncho.xa1,
      ya1 = _computeStartingAncho.ya1;

  var _computeEndingAnchorP = computeEndingAnchorPosition(xs, ys, xe, ye, endingAnchor),
      xa2 = _computeEndingAnchorP.xa2,
      ya2 = _computeEndingAnchorP.ya2;

  var pathString = 'M' + xs + ',' + ys + ' ' + ('C' + xa1 + ',' + ya1 + ' ' + xa2 + ',' + ya2 + ' ') + (xe + ',' + ye);

  var _computeLabelDimensio = computeLabelDimensions(xs, ys, xe, ye),
      xl = _computeLabelDimensio.xl,
      yl = _computeLabelDimensio.yl,
      wl = _computeLabelDimensio.wl,
      hl = _computeLabelDimensio.hl;

  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', {
      d: pathString,
      style: { fill: 'none', stroke: strokeColor, strokeWidth: strokeWidth },
      markerEnd: 'url(' + location.href + '#arrow)'
    }),
    _react2.default.createElement(
      'foreignObject',
      { x: xl, y: yl, width: wl, height: hl },
      _react2.default.createElement(
        'div',
        {
          style: {
            width: wl,
            height: hl,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        },
        _react2.default.createElement(
          'div',
          null,
          arrowLabel
        )
      )
    )
  );
};

var pointPropType = _propTypes2.default.shape({
  x: _propTypes2.default.number,
  y: _propTypes2.default.number
});

var anchorType = _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']);

SvgArrow.propTypes = {
  startingPoint: pointPropType,
  startingAnchor: anchorType,
  endingPoint: pointPropType,
  endingAnchor: anchorType,
  strokeColor: _propTypes2.default.string,
  arrowLength: _propTypes2.default.number,
  strokeWidth: _propTypes2.default.number,
  arrowLabel: _propTypes2.default.node
};

exports.default = SvgArrow;